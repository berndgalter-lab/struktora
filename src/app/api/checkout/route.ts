import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient, createServiceClient } from "@/lib/supabase/server";
import { createCheckout, getVariantIdForTier } from "@/lib/lemonsqueezy";

const requestSchema = z.object({
  tier: z.enum(["starter", "team", "business"]),
});

export async function POST(request: Request) {
  try {
    // Authenticate user
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    console.log("[Checkout] Auth user:", user?.id, "Error:", authError?.message);

    if (!user) {
      return NextResponse.json(
        { error: "Nicht authentifiziert" },
        { status: 401 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { tier } = requestSchema.parse(body);

    // Get variant ID for tier
    const variantId = getVariantIdForTier(tier);
    if (!variantId) {
      return NextResponse.json(
        { error: "Plan nicht verfügbar" },
        { status: 400 }
      );
    }

    // Get user's team ID using service client
    const serviceClient = createServiceClient();
    const { data: userData, error: userError } = await serviceClient
      .from("users")
      .select("team_id, email")
      .eq("id", user.id)
      .single();

    console.log("[Checkout] User data:", userData, "Error:", userError?.message);

    if (!userData?.team_id) {
      return NextResponse.json(
        { error: "Kein Team zugeordnet" },
        { status: 400 }
      );
    }

    // Check if team already has an active subscription
    const { data: team } = await serviceClient
      .from("teams")
      .select("subscription_status, subscription_id")
      .eq("id", userData.team_id)
      .single();

    if (team?.subscription_status === "active" && team?.subscription_id) {
      return NextResponse.json(
        { error: "Du hast bereits ein aktives Abo. Nutze das Kundenportal zum Ändern." },
        { status: 400 }
      );
    }

    // Create checkout session
    const checkoutUrl = await createCheckout({
      variantId,
      userEmail: userData.email || user.email || "",
      userId: user.id,
      teamId: userData.team_id,
    });

    console.log("[Checkout] Created checkout URL for tier:", tier);

    return NextResponse.json({ checkoutUrl });
  } catch (error) {
    console.error("[Checkout] Error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Ungültiger Plan ausgewählt" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Fehler beim Erstellen des Checkouts" },
      { status: 500 }
    );
  }
}

