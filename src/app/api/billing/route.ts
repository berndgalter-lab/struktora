import { NextResponse } from "next/server";
import { createClient, createServiceClient } from "@/lib/supabase/server";

export async function GET() {
  try {
    // Authenticate user
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    console.log("[Billing GET] Auth user:", user?.id, "Error:", authError?.message);

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

    console.log("[Billing GET] User data:", userData, "Error:", userError?.message);

    if (!userData?.team_id) {
      return NextResponse.json({
        subscription: null,
      });
    }

    // Get team subscription data
    const { data: team, error: teamError } = await serviceClient
      .from("teams")
      .select("subscription_status, subscription_tier, subscription_id, trial_ends_at, lemon_squeezy_customer_id")
      .eq("id", userData.team_id)
      .single();

    console.log("[Billing GET] Team data:", team, "Error:", teamError?.message);

    return NextResponse.json({
      subscription: team
        ? {
            status: team.subscription_status,
            tier: team.subscription_tier,
            trialEndsAt: team.trial_ends_at,
            hasCustomerId: !!team.lemon_squeezy_customer_id,
          }
        : null,
    });
  } catch (error) {
    console.error("[Billing GET] Error:", error);
    return NextResponse.json(
      { error: "Fehler beim Laden der Billing-Daten" },
      { status: 500 }
    );
  }
}

