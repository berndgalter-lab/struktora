"use client";

import { useTranslations } from "next-intl";
import { AlertCircle, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  const t = useTranslations("dashboard");

  // TODO: Replace with real user data from useUser hook
  const hasProfile = false; // Placeholder

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">{t("welcome")}</h1>
        <p className="mt-1 text-slate-500">
          Starte einen AI-gestützten Workflow oder verwalte deine Einstellungen.
        </p>
      </div>

      {/* Profile Warning */}
      {!hasProfile && (
        <div className="flex items-center gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
          <AlertCircle className="h-5 w-5 flex-shrink-0 text-amber-600" />
          <div className="flex-1">
            <p className="text-sm text-amber-800">
              Fülle dein Firmenprofil aus, damit die KI-Antworten zu deinem
              Unternehmen passen.
            </p>
          </div>
          <Link href="/dashboard/settings/profile">
            <Button size="sm" variant="outline" className="border-amber-300">
              Profil ausfüllen
            </Button>
          </Link>
        </div>
      )}

      {/* Quick Actions */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Standards Card */}
        <Card className="group hover:border-blue-200 hover:shadow-md transition-all">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-lg">Standards</CardTitle>
                <CardDescription>AI-gestützte Workflows</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-slate-600">
              Wähle aus vorgefertigten Standards für E-Mails, Texte, Meetings und mehr.
            </p>
            <Button asChild className="w-full group-hover:bg-blue-600">
              <Link href="/dashboard/standards">
                Standards öffnen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
