import { NextResponse } from "next/server";
import { createClient, createServiceClient } from "@/lib/supabase/server";
import { getCustomerPortalUrl } from "@/lib/lemonsqueezy";

export async function POST() {
  try {
    // Authenticate user
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    console.log("[Portal] Auth user:", user?.id, "Error:", authError?.message);

    if (!user) {
      return NextResponse.json(
        { error: "Nicht authentifiziert" },
        { status: 401 }
      );
    }

    // Get user's team ID using service client
    const serviceClient = createServiceClient();
    const { data: userData, error: userError } = await serviceClient
      .from("users")
      .select("team_id")
      .eq("id", user.id)
      .single();

    console.log("[Portal] User data:", userData, "Error:", userError?.message);

    if (!userData?.team_id) {
      return NextResponse.json(
        { error: "Kein Team zugeordnet" },
        { status: 400 }
      );
    }

    // Get team's LemonSqueezy customer ID
    const { data: team, error: teamError } = await serviceClient
      .from("teams")
      .select("lemon_squeezy_customer_id")
      .eq("id", userData.team_id)
      .single();

    console.log("[Portal] Team data:", team, "Error:", teamError?.message);

    if (!team?.lemon_squeezy_customer_id) {
      return NextResponse.json(
        { error: "Kein Kundenportal verfügbar" },
        { status: 400 }
      );
    }

    // Get customer portal URL
    const portalUrl = await getCustomerPortalUrl(team.lemon_squeezy_customer_id);

    if (!portalUrl) {
      return NextResponse.json(
        { error: "Kundenportal nicht verfügbar" },
        { status: 400 }
      );
    }

    return NextResponse.json({ portalUrl });
  } catch (error) {
    console.error("[Portal] Error:", error);
    return NextResponse.json(
      { error: "Fehler beim Abrufen des Kundenportals" },
      { status: 500 }
    );
  }
}

