"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Loader2, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SubscriptionStatus } from "@/components/settings/subscription-status";
import { PricingCards } from "@/components/settings/pricing-cards";
import type { PlanTier } from "@/lib/lemonsqueezy";

interface SubscriptionData {
  status: "trial" | "active" | "cancelled" | "past_due";
  tier: PlanTier;
  trialEndsAt: string | null;
  hasCustomerId: boolean;
}

// Inner component that uses useSearchParams
function BillingContent() {
  const t = useTranslations("settings.billing");
  const searchParams = useSearchParams();
  const success = searchParams.get("success");

  const [subscription, setSubscription] = useState<SubscriptionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLoadingPortal, setIsLoadingPortal] = useState(false);

  useEffect(() => {
    const fetchBillingData = async () => {
      try {
        const response = await fetch("/api/billing");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Fehler beim Laden");
        }

        setSubscription(data.subscription || {
          status: "trial",
          tier: "starter",
          trialEndsAt: null,
          hasCustomerId: false,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Ein Fehler ist aufgetreten");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBillingData();
  }, []);

  const handleManageSubscription = async () => {
    setIsLoadingPortal(true);

    try {
      const response = await fetch("/api/billing/portal", {
        method: "POST",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Portal nicht verfügbar");
      }

      // Open portal in new tab
      window.open(data.portalUrl, "_blank");
    } catch (err) {
      alert(err instanceof Error ? err.message : "Ein Fehler ist aufgetreten");
    } finally {
      setIsLoadingPortal(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 text-red-600 p-4 rounded-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Success message after checkout */}
      {success === "true" && (
        <Card className="border-green-200 bg-green-50">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-900">
                  {t("checkoutSuccess")}
                </h3>
                <p className="text-sm text-green-700">
                  {t("checkoutSuccessDescription")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Subscription Status */}
      {subscription && (
        <SubscriptionStatus
          status={subscription.status}
          tier={subscription.tier}
          trialEndsAt={subscription.trialEndsAt}
        />
      )}

      {/* Pricing Cards */}
      {subscription && (
        <PricingCards
          currentTier={subscription.tier}
          subscriptionStatus={subscription.status}
          onManageSubscription={
            subscription.hasCustomerId ? handleManageSubscription : undefined
          }
        />
      )}

      {/* Customer Portal Button (for active subscriptions) */}
      {subscription?.hasCustomerId && (
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-slate-900">
                  {t("customerPortal")}
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  {t("customerPortalDescription")}
                </p>
              </div>
              <Button
                variant="outline"
                onClick={handleManageSubscription}
                disabled={isLoadingPortal}
                className="gap-2 flex-shrink-0"
              >
                {isLoadingPortal ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <ExternalLink className="h-4 w-4" />
                )}
                {t("openPortal")}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

// Wrapper component with Suspense boundary
export default function BillingSettingsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
        </div>
      }
    >
      <BillingContent />
    </Suspense>
  );
}
