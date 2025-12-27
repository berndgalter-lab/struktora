import { NextResponse } from "next/server";
import { createClient, createServiceClient } from "@/lib/supabase/server";

export async function GET() {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    console.log("[Profile GET] Auth user:", user?.id, "Error:", authError?.message);

    if (!user) {
      return NextResponse.json({ error: "Nicht authentifiziert" }, { status: 401 });
    }

    // Use service client to bypass RLS for reading user data
    const serviceClient = createServiceClient();

    // Get user's team ID
    const { data: userData, error: userError } = await serviceClient
      .from("users")
      .select("team_id")
      .eq("id", user.id)
      .single();

    console.log("[Profile GET] User data:", userData, "Error:", userError?.message);

    if (!userData?.team_id) {
      return NextResponse.json({ profile: null });
    }

    // Get company profile
    const { data: profile, error: profileError } = await serviceClient
      .from("company_profiles")
      .select("*")
      .eq("team_id", userData.team_id)
      .single();

    console.log("[Profile GET] Profile:", profile?.company_name, "Error:", profileError?.message);

    return NextResponse.json({ profile });
  } catch (error) {
    console.error("Profile GET Error:", error);
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

    console.log("[Profile PUT] Auth user:", user?.id, "Error:", authError?.message);

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

    console.log("[Profile PUT] User data:", userData, "Error:", userError?.message);

    if (!userData?.team_id) {
      return NextResponse.json(
        { error: "Kein Team zugeordnet" },
        { status: 400 }
      );
    }

    // Only admins can update profile
    if (userData.role !== "admin") {
      return NextResponse.json(
        { error: "Keine Berechtigung" },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { company_name, industry, description, products } = body;

    if (!company_name?.trim()) {
      return NextResponse.json(
        { error: "Firmenname ist erforderlich" },
        { status: 400 }
      );
    }

    // Check if profile exists
    const { data: existingProfile } = await serviceClient
      .from("company_profiles")
      .select("id")
      .eq("team_id", userData.team_id)
      .single();

    if (existingProfile) {
      // Update existing profile
      const { error } = await serviceClient
        .from("company_profiles")
        .update({
          company_name,
          industry,
          description,
          products,
          updated_at: new Date().toISOString(),
        })
        .eq("team_id", userData.team_id);

      if (error) throw error;
    } else {
      // Create new profile
      const { error } = await serviceClient.from("company_profiles").insert({
        team_id: userData.team_id,
        company_name,
        industry,
        description,
        products,
      });

      if (error) throw error;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Profile PUT Error:", error);
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten" },
      { status: 500 }
    );
  }
}

