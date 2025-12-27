"use client";

import { useTranslations } from "next-intl";
import { CreditCard, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BillingSettingsPage() {
  const t = useTranslations("settings.billing");

  return (
    <div className="space-y-6">
      {/* Current Plan */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            {t("currentPlan")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                <Sparkles className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Trial</h3>
                <p className="text-sm text-slate-500">Kostenloser Testzeitraum</p>
              </div>
            </div>
            <Badge variant="secondary" className="gap-1">
              <Clock className="h-3 w-3" />
              14 Tage
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Trial Info */}
      <Card className="border-blue-200 bg-blue-50/50">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <Sparkles className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                14 Tage kostenlos testen
              </h3>
              <p className="mt-1 text-slate-600">
                Voller Zugang zu allen Features. Keine Kreditkarte erforderlich.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upgrade Section */}
      <Card>
        <CardHeader>
          <CardTitle>{t("upgrade")}</CardTitle>
          <CardDescription>
            Nach der Testphase kannst du ein Abo wählen.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-3">
            {/* Starter */}
            <div className="rounded-lg border border-slate-200 p-4">
              <h4 className="font-semibold">Starter</h4>
              <p className="text-2xl font-bold mt-2">
                €49<span className="text-sm font-normal text-slate-500">/Monat</span>
              </p>
              <p className="text-sm text-slate-500 mt-1">5 Nutzer</p>
            </div>

            {/* Team */}
            <div className="rounded-lg border-2 border-blue-600 p-4 relative">
              <Badge className="absolute -top-2 right-2">Beliebt</Badge>
              <h4 className="font-semibold">Team</h4>
              <p className="text-2xl font-bold mt-2">
                €149<span className="text-sm font-normal text-slate-500">/Monat</span>
              </p>
              <p className="text-sm text-slate-500 mt-1">15 Nutzer</p>
            </div>

            {/* Business */}
            <div className="rounded-lg border border-slate-200 p-4">
              <h4 className="font-semibold">Business</h4>
              <p className="text-2xl font-bold mt-2">
                €399<span className="text-sm font-normal text-slate-500">/Monat</span>
              </p>
              <p className="text-sm text-slate-500 mt-1">Unbegrenzt</p>
            </div>
          </div>

          <Button className="w-full mt-6" disabled>
            {t("manage")} (bald verfügbar)
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
