import { NextResponse } from "next/server";
import { createClient, createServiceClient } from "@/lib/supabase/server";

export async function GET() {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    console.log("[Team GET] Auth user:", user?.id, "Error:", authError?.message);

    if (!user) {
      return NextResponse.json({ error: "Nicht authentifiziert" }, { status: 401 });
    }

    // Use service client to bypass RLS
    const serviceClient = createServiceClient();

    // Get user's team ID and role
    const { data: userData, error: userError } = await serviceClient
      .from("users")
      .select("team_id, role")
      .eq("id", user.id)
      .single();

    console.log("[Team GET] User data:", userData, "Error:", userError?.message);

    if (!userData?.team_id) {
      return NextResponse.json({ members: [], isAdmin: false });
    }

    // Get all team members
    const { data: members, error: membersError } = await serviceClient
      .from("users")
      .select("*")
      .eq("team_id", userData.team_id)
      .order("created_at", { ascending: true });

    console.log("[Team GET] Members count:", members?.length, "Error:", membersError?.message);

    return NextResponse.json({
      members: members || [],
      isAdmin: userData.role === "admin",
    });
  } catch (error) {
    console.error("Team GET Error:", error);
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten" },
      { status: 500 }
    );
  }
}
