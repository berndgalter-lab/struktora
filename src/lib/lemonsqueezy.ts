// LemonSqueezy Payment Helpers

const LEMONSQUEEZY_API_URL = "https://api.lemonsqueezy.com/v1";

interface CheckoutOptions {
  variantId: string;
  userEmail: string;
  userId: string;
  teamId: string;
  customData?: Record<string, string>;
}

interface CheckoutResponse {
  data: {
    id: string;
    type: string;
    attributes: {
      url: string;
      expires_at: string;
    };
  };
}

interface SubscriptionResponse {
  data: {
    id: string;
    type: string;
    attributes: {
      status: string;
      status_formatted: string;
      product_id: number;
      variant_id: number;
      customer_id: number;
      product_name: string;
      variant_name: string;
      renews_at: string | null;
      ends_at: string | null;
      trial_ends_at: string | null;
      urls: {
        update_payment_method: string;
        customer_portal: string;
      };
    };
  };
}

interface CustomerResponse {
  data: {
    id: string;
    type: string;
    attributes: {
      name: string;
      email: string;
      urls: {
        customer_portal: string;
      };
    };
  };
}

/**
 * Create a checkout session for a subscription
 */
export async function createCheckout(options: CheckoutOptions): Promise<string> {
  const apiKey = process.env.LEMONSQUEEZY_API_KEY;
  const storeId = process.env.LEMONSQUEEZY_STORE_ID;

  if (!apiKey || !storeId) {
    throw new Error("LemonSqueezy credentials not configured");
  }

  const response = await fetch(`${LEMONSQUEEZY_API_URL}/checkouts`, {
    method: "POST",
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      data: {
        type: "checkouts",
        attributes: {
          checkout_data: {
            email: options.userEmail,
            custom: {
              user_id: options.userId,
              team_id: options.teamId,
              ...options.customData,
            },
          },
          product_options: {
            redirect_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/settings/billing?success=true`,
          },
        },
        relationships: {
          store: {
            data: {
              type: "stores",
              id: storeId,
            },
          },
          variant: {
            data: {
              type: "variants",
              id: options.variantId,
            },
          },
        },
      },
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error("LemonSqueezy checkout error:", errorData);
    throw new Error(`Failed to create checkout: ${response.status}`);
  }

  const data: CheckoutResponse = await response.json();
  return data.data.attributes.url;
}

/**
 * Get subscription details by subscription ID
 */
export async function getSubscription(subscriptionId: string): Promise<SubscriptionResponse["data"] | null> {
  const apiKey = process.env.LEMONSQUEEZY_API_KEY;

  if (!apiKey) {
    throw new Error("LemonSqueezy API key not configured");
  }

  const response = await fetch(`${LEMONSQUEEZY_API_URL}/subscriptions/${subscriptionId}`, {
    headers: {
      Accept: "application/vnd.api+json",
      Authorization: `Bearer ${apiKey}`,
    },
  });

  if (!response.ok) {
    if (response.status === 404) {
      return null;
    }
    throw new Error(`Failed to get subscription: ${response.status}`);
  }

  const data: SubscriptionResponse = await response.json();
  return data.data;
}

/**
 * Get customer portal URL for managing subscription
 */
export async function getCustomerPortalUrl(customerId: string): Promise<string | null> {
  const apiKey = process.env.LEMONSQUEEZY_API_KEY;

  if (!apiKey) {
    throw new Error("LemonSqueezy API key not configured");
  }

  const response = await fetch(`${LEMONSQUEEZY_API_URL}/customers/${customerId}`, {
    headers: {
      Accept: "application/vnd.api+json",
      Authorization: `Bearer ${apiKey}`,
    },
  });

  if (!response.ok) {
    if (response.status === 404) {
      return null;
    }
    throw new Error(`Failed to get customer: ${response.status}`);
  }

  const data: CustomerResponse = await response.json();
  return data.data.attributes.urls.customer_portal;
}

/**
 * Map variant ID to subscription tier
 */
export function getSubscriptionTierFromVariantId(variantId: string): "starter" | "team" | "business" | null {
  const starterVariantId = process.env.LEMONSQUEEZY_STARTER_VARIANT_ID;
  const teamVariantId = process.env.LEMONSQUEEZY_TEAM_VARIANT_ID;
  const businessVariantId = process.env.LEMONSQUEEZY_BUSINESS_VARIANT_ID;

  if (variantId === starterVariantId) return "starter";
  if (variantId === teamVariantId) return "team";
  if (variantId === businessVariantId) return "business";

  return null;
}

/**
 * Get variant ID for a subscription tier
 */
export function getVariantIdForTier(tier: "starter" | "team" | "business"): string | null {
  switch (tier) {
    case "starter":
      return process.env.LEMONSQUEEZY_STARTER_VARIANT_ID || null;
    case "team":
      return process.env.LEMONSQUEEZY_TEAM_VARIANT_ID || null;
    case "business":
      return process.env.LEMONSQUEEZY_BUSINESS_VARIANT_ID || null;
    default:
      return null;
  }
}

/**
 * Verify LemonSqueezy webhook signature
 */
export function verifyWebhookSignature(
  payload: string,
  signature: string,
  secret: string
): boolean {
  const crypto = require("crypto");
  const hmac = crypto.createHmac("sha256", secret);
  const digest = hmac.update(payload).digest("hex");
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(digest));
}

// Export plan configuration
export const PLANS = {
  starter: {
    name: "Starter",
    price: 49,
    maxUsers: 5,
    features: [
      "5 Team-Mitglieder",
      "Alle 12 AI-Recipes",
      "Firmenprofil & Policy",
      "Email Support",
    ],
  },
  team: {
    name: "Team",
    price: 149,
    maxUsers: 15,
    features: [
      "15 Team-Mitglieder",
      "Alle 12 AI-Recipes",
      "Firmenprofil & Policy",
      "Prioritäts-Support",
      "Nutzungsstatistiken",
    ],
    popular: true,
  },
  business: {
    name: "Business",
    price: 399,
    maxUsers: -1, // Unlimited
    features: [
      "Unbegrenzte Team-Mitglieder",
      "Alle 12 AI-Recipes",
      "Firmenprofil & Policy",
      "Dedicated Support",
      "Erweiterte Statistiken",
      "API-Zugang (bald)",
    ],
  },
} as const;

export type PlanTier = keyof typeof PLANS;
