"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Loader2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PLANS, type PlanTier } from "@/lib/lemonsqueezy";

interface PricingCardsProps {
  currentTier: PlanTier;
  subscriptionStatus: "trial" | "active" | "cancelled" | "past_due";
  onManageSubscription?: () => void;
}

export const PricingCards = ({
  currentTier,
  subscriptionStatus,
  onManageSubscription,
}: PricingCardsProps) => {
  const t = useTranslations("settings.billing");
  const [loadingTier, setLoadingTier] = useState<PlanTier | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async (tier: PlanTier) => {
    setError(null);
    setLoadingTier(tier);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Checkout fehlgeschlagen");
      }

      // Redirect to LemonSqueezy checkout
      window.location.href = data.checkoutUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ein Fehler ist aufgetreten");
      setLoadingTier(null);
    }
  };

  const plans: { tier: PlanTier; plan: typeof PLANS[PlanTier] }[] = [
    { tier: "starter", plan: PLANS.starter },
    { tier: "team", plan: PLANS.team },
    { tier: "business", plan: PLANS.business },
  ];

  const isCurrentPlan = (tier: PlanTier) => {
    return subscriptionStatus === "active" && currentTier === tier;
  };

  const canSelectPlan = (tier: PlanTier) => {
    // Can always select if in trial or cancelled
    if (subscriptionStatus === "trial" || subscriptionStatus === "cancelled") {
      return true;
    }
    // If active, can only upgrade (not implemented yet - would use LemonSqueezy portal)
    if (subscriptionStatus === "active") {
      return false; // For now, redirect to portal instead
    }
    // If past_due, can still select
    if (subscriptionStatus === "past_due") {
      return true;
    }
    return false;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("choosePlan")}</CardTitle>
        <CardDescription>
          {subscriptionStatus === "active"
            ? t("manageViaPortal")
            : t("selectPlanDescription")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-3">
          {plans.map(({ tier, plan }) => (
            <div
              key={tier}
              className={`relative rounded-lg border-2 p-5 transition-all ${
                isCurrentPlan(tier)
                  ? "border-green-500 bg-green-50/50"
                  : "popular" in plan && plan.popular
                  ? "border-blue-600"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              {/* Popular badge */}
              {"popular" in plan && plan.popular && !isCurrentPlan(tier) && (
                <Badge className="absolute -top-2.5 right-3">
                  Beliebt
                </Badge>
              )}

              {/* Current plan badge */}
              {isCurrentPlan(tier) && (
                <Badge variant="secondary" className="absolute -top-2.5 right-3 bg-green-100 text-green-700">
                  <Check className="mr-1 h-3 w-3" />
                  Aktuell
                </Badge>
              )}

              <div className="mb-4">
                <h4 className="font-semibold text-slate-900">{plan.name}</h4>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold">€{plan.price}</span>
                  <span className="text-sm text-slate-500">/Monat</span>
                </div>
                <p className="mt-1 text-sm text-slate-500">
                  {plan.maxUsers === -1
                    ? "Unbegrenzte Nutzer"
                    : `Bis ${plan.maxUsers} Nutzer`}
                </p>
              </div>

              {/* Features */}
              <ul className="mb-4 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action button */}
              {isCurrentPlan(tier) ? (
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={onManageSubscription}
                >
                  {t("manage")}
                </Button>
              ) : subscriptionStatus === "active" ? (
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={onManageSubscription}
                >
                  Plan ändern
                </Button>
              ) : (
                <Button
                  className={`w-full ${
                    "popular" in plan && plan.popular
                      ? "bg-blue-600 hover:bg-blue-700"
                      : ""
                  }`}
                  disabled={!canSelectPlan(tier) || loadingTier !== null}
                  onClick={() => handleCheckout(tier)}
                >
                  {loadingTier === tier ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Wird geladen...
                    </>
                  ) : (
                    t("selectPlan")
                  )}
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Manage subscription button for active subscribers */}
        {subscriptionStatus === "active" && onManageSubscription && (
          <div className="mt-6 pt-4 border-t">
            <Button
              variant="outline"
              className="w-full"
              onClick={onManageSubscription}
            >
              {t("manageSubscription")}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

