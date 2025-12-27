import { NextResponse } from "next/server";
import { createClient, createServiceClient } from "@/lib/supabase/server";

export async function GET() {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    console.log("[Policy GET] Auth user:", user?.id, "Error:", authError?.message);

    if (!user) {
      return NextResponse.json({ error: "Nicht authentifiziert" }, { status: 401 });
    }

    // Use service client to bypass RLS
    const serviceClient = createServiceClient();

    // Get user's team ID
    const { data: userData, error: userError } = await serviceClient
      .from("users")
      .select("team_id")
      .eq("id", user.id)
      .single();

    console.log("[Policy GET] User data:", userData, "Error:", userError?.message);

    if (!userData?.team_id) {
      return NextResponse.json({ policy: null });
    }

    // Get company policy
    const { data: policy, error: policyError } = await serviceClient
      .from("company_policies")
      .select("*")
      .eq("team_id", userData.team_id)
      .single();

    console.log("[Policy GET] Policy:", policy?.anrede, "Error:", policyError?.message);

    return NextResponse.json({ policy });
  } catch (error) {
    console.error("Policy GET Error:", error);
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    console.log("[Policy PUT] Auth user:", user?.id, "Error:", authError?.message);

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

    console.log("[Policy PUT] User data:", userData, "Error:", userError?.message);

    if (!userData?.team_id) {
      return NextResponse.json(
        { error: "Kein Team zugeordnet" },
        { status: 400 }
      );
    }

    // Only admins can update policy
    if (userData.role !== "admin") {
      return NextResponse.json(
        { error: "Keine Berechtigung" },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { anrede, tonality, nogo_words, greeting } = body;

    // Check if policy exists
    const { data: existingPolicy } = await serviceClient
      .from("company_policies")
      .select("id")
      .eq("team_id", userData.team_id)
      .single();

    if (existingPolicy) {
      // Update existing policy
      const { error } = await serviceClient
        .from("company_policies")
        .update({
          anrede,
          tonality,
          nogo_words,
          greeting,
          updated_at: new Date().toISOString(),
        })
        .eq("team_id", userData.team_id);

      if (error) throw error;
    } else {
      // Create new policy
      const { error } = await serviceClient.from("company_policies").insert({
        team_id: userData.team_id,
        anrede,
        tonality,
        nogo_words,
        greeting,
      });

      if (error) throw error;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Policy PUT Error:", error);
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten" },
      { status: 500 }
    );
  }
}
