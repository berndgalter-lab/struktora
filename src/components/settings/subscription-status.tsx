"use client";

import { useTranslations } from "next-intl";
import { Clock, Sparkles, CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PLANS, type PlanTier } from "@/lib/lemonsqueezy";

interface SubscriptionStatusProps {
  status: "trial" | "active" | "cancelled" | "past_due";
  tier: PlanTier;
  trialEndsAt: string | null;
}

export const SubscriptionStatus = ({ status, tier, trialEndsAt }: SubscriptionStatusProps) => {
  const t = useTranslations("settings.billing");

  // Calculate days remaining in trial
  const getDaysRemaining = (): number => {
    if (!trialEndsAt) return 0;
    const now = new Date();
    const endsAt = new Date(trialEndsAt);
    const diffTime = endsAt.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(0, diffDays);
  };

  const daysRemaining = getDaysRemaining();
  const plan = PLANS[tier];

  // Status configuration
  const statusConfig = {
    trial: {
      label: "Trial",
      description: t("trialDescription"),
      icon: Sparkles,
      badgeVariant: "secondary" as const,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    active: {
      label: t("active"),
      description: t("activeDescription"),
      icon: CheckCircle,
      badgeVariant: "default" as const,
      iconColor: "text-green-600",
      bgColor: "bg-green-50",
    },
    cancelled: {
      label: t("cancelled"),
      description: t("cancelledDescription"),
      icon: XCircle,
      badgeVariant: "destructive" as const,
      iconColor: "text-red-600",
      bgColor: "bg-red-50",
    },
    past_due: {
      label: t("pastDue"),
      description: t("pastDueDescription"),
      icon: AlertTriangle,
      badgeVariant: "destructive" as const,
      iconColor: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  };

  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          {t("currentPlan")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${config.bgColor}`}>
              <StatusIcon className={`h-6 w-6 ${config.iconColor}`} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                {status === "trial" ? "Trial" : plan.name}
              </h3>
              <p className="text-sm text-slate-500">
                {status === "trial" ? (
                  <>
                    {plan.name} Plan • {config.description}
                  </>
                ) : (
                  <>€{plan.price}/Monat</>
                )}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1">
            <Badge variant={config.badgeVariant}>
              {config.label}
            </Badge>
            {status === "trial" && daysRemaining > 0 && (
              <span className="flex items-center gap-1 text-xs text-slate-500">
                <Clock className="h-3 w-3" />
                {daysRemaining} {daysRemaining === 1 ? "Tag" : "Tage"} übrig
              </span>
            )}
          </div>
        </div>

        {/* Trial warning when less than 3 days remaining */}
        {status === "trial" && daysRemaining <= 3 && daysRemaining > 0 && (
          <div className="mt-4 rounded-lg bg-orange-50 border border-orange-200 p-3">
            <div className="flex items-center gap-2 text-orange-700">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm font-medium">
                {daysRemaining === 1
                  ? "Dein Trial endet morgen!"
                  : `Noch ${daysRemaining} Tage – dann endet dein Trial`}
              </span>
            </div>
            <p className="mt-1 text-sm text-orange-600">
              Wähl jetzt einen Plan, damit es nahtlos weitergeht.
            </p>
          </div>
        )}

        {/* Trial expired */}
        {status === "trial" && daysRemaining === 0 && (
          <div className="mt-4 rounded-lg bg-red-50 border border-red-200 p-3">
            <div className="flex items-center gap-2 text-red-700">
              <XCircle className="h-4 w-4" />
              <span className="text-sm font-medium">
                Dein Trial ist vorbei
              </span>
            </div>
            <p className="mt-1 text-sm text-red-600">
              Wähl einen Plan, um weiterzumachen.
            </p>
          </div>
        )}

        {/* Past due warning */}
        {status === "past_due" && (
          <div className="mt-4 rounded-lg bg-orange-50 border border-orange-200 p-3">
            <div className="flex items-center gap-2 text-orange-700">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm font-medium">
                Zahlung nicht geklappt
              </span>
            </div>
            <p className="mt-1 text-sm text-orange-600">
              Check deine Zahlungsmethode im Kundenportal.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

