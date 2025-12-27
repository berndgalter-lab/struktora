import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";
import { verifyWebhookSignature, getSubscriptionTierFromVariantId } from "@/lib/lemonsqueezy";

// LemonSqueezy Webhook Event Types
interface WebhookEventMeta {
  event_name: string;
  custom_data?: {
    user_id?: string;
    team_id?: string;
  };
}

interface WebhookEventData {
  id: string;
  type: string;
  attributes: {
    status: string;
    variant_id: number;
    customer_id: number;
    product_id: number;
    order_id: number;
    renews_at: string | null;
    ends_at: string | null;
    trial_ends_at: string | null;
    first_subscription_item?: {
      id: number;
      subscription_id: number;
      price_id: number;
      quantity: number;
    };
  };
}

interface WebhookEvent {
  meta: WebhookEventMeta;
  data: WebhookEventData;
}

export async function POST(request: Request) {
  try {
    // Get raw body for signature verification
    const rawBody = await request.text();
    const signature = request.headers.get("x-signature");
    const webhookSecret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;

    if (!webhookSecret) {
      console.error("[Webhook] Missing LEMONSQUEEZY_WEBHOOK_SECRET");
      return NextResponse.json(
        { error: "Webhook secret not configured" },
        { status: 500 }
      );
    }

    // Verify signature
    if (!signature || !verifyWebhookSignature(rawBody, signature, webhookSecret)) {
      console.error("[Webhook] Invalid signature");
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 401 }
      );
    }

    // Parse event
    const event: WebhookEvent = JSON.parse(rawBody);
    const eventName = event.meta.event_name;
    const customData = event.meta.custom_data;
    const subscriptionData = event.data.attributes;

    console.log(`[Webhook] Received event: ${eventName}`, {
      subscriptionId: event.data.id,
      status: subscriptionData.status,
      teamId: customData?.team_id,
    });

    // Get service client to bypass RLS
    const supabase = createServiceClient();

    // Get team ID from custom data or subscription
    const teamId = customData?.team_id;

    if (!teamId) {
      console.error("[Webhook] No team_id in custom data");
      // Try to find team by subscription ID
      const { data: team } = await supabase
        .from("teams")
        .select("id")
        .eq("subscription_id", event.data.id)
        .single();

      if (!team) {
        console.error("[Webhook] Could not find team for subscription:", event.data.id);
        return NextResponse.json(
          { error: "Team not found" },
          { status: 400 }
        );
      }
    }

    // Handle different event types
    switch (eventName) {
      case "subscription_created": {
        // New subscription created
        const tier = getSubscriptionTierFromVariantId(String(subscriptionData.variant_id));

        console.log(`[Webhook] Subscription created for team ${teamId}, tier: ${tier}`);

        const { error } = await supabase
          .from("teams")
          .update({
            subscription_id: event.data.id,
            subscription_status: "active",
            subscription_tier: tier || "starter",
            lemon_squeezy_customer_id: String(subscriptionData.customer_id),
          })
          .eq("id", teamId);

        if (error) {
          console.error("[Webhook] Failed to update team:", error);
          throw error;
        }

        break;
      }

      case "subscription_updated": {
        // Subscription was updated (plan change, etc.)
        const tier = getSubscriptionTierFromVariantId(String(subscriptionData.variant_id));

        console.log(`[Webhook] Subscription updated for team ${teamId}, status: ${subscriptionData.status}, tier: ${tier}`);

        // Map LemonSqueezy status to our status
        let status: "active" | "cancelled" | "past_due" = "active";
        if (subscriptionData.status === "cancelled") status = "cancelled";
        if (subscriptionData.status === "past_due") status = "past_due";
        if (subscriptionData.status === "paused") status = "cancelled";

        const { error } = await supabase
          .from("teams")
          .update({
            subscription_status: status,
            subscription_tier: tier || undefined,
          })
          .eq("id", teamId);

        if (error) {
          console.error("[Webhook] Failed to update team:", error);
          throw error;
        }

        break;
      }

      case "subscription_cancelled": {
        // Subscription was cancelled
        console.log(`[Webhook] Subscription cancelled for team ${teamId}`);

        const { error } = await supabase
          .from("teams")
          .update({
            subscription_status: "cancelled",
          })
          .eq("id", teamId);

        if (error) {
          console.error("[Webhook] Failed to update team:", error);
          throw error;
        }

        break;
      }

      case "subscription_payment_failed": {
        // Payment failed
        console.log(`[Webhook] Payment failed for team ${teamId}`);

        const { error } = await supabase
          .from("teams")
          .update({
            subscription_status: "past_due",
          })
          .eq("id", teamId);

        if (error) {
          console.error("[Webhook] Failed to update team:", error);
          throw error;
        }

        break;
      }

      case "subscription_resumed": {
        // Subscription was resumed
        console.log(`[Webhook] Subscription resumed for team ${teamId}`);

        const { error } = await supabase
          .from("teams")
          .update({
            subscription_status: "active",
          })
          .eq("id", teamId);

        if (error) {
          console.error("[Webhook] Failed to update team:", error);
          throw error;
        }

        break;
      }

      case "subscription_expired": {
        // Subscription expired (after cancelled period ends)
        console.log(`[Webhook] Subscription expired for team ${teamId}`);

        const { error } = await supabase
          .from("teams")
          .update({
            subscription_status: "cancelled",
            subscription_id: null,
          })
          .eq("id", teamId);

        if (error) {
          console.error("[Webhook] Failed to update team:", error);
          throw error;
        }

        break;
      }

      default:
        console.log(`[Webhook] Unhandled event type: ${eventName}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("[Webhook] Error processing webhook:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
