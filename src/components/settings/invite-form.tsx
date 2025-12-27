"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Loader2, Check, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const InviteForm = () => {
  const t = useTranslations("settings.team");

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSent(false);
    setIsLoading(true);

    try {
      const response = await fetch("/api/team/invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Fehler beim Senden der Einladung");
      }

      setIsSent(true);
      setEmail("");
      setTimeout(() => setIsSent(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ein Fehler ist aufgetreten");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          Mitarbeiter einladen
        </CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 text-red-600 text-sm p-3 rounded-md">
              {error}
            </div>
          )}

          {isSent && (
            <div className="bg-green-50 text-green-600 text-sm p-3 rounded-md flex items-center gap-2">
              <Check className="h-4 w-4" />
              {t("inviteSent")}
            </div>
          )}

          <div className="flex gap-3">
            <div className="flex-1">
              <Label htmlFor="inviteEmail" className="sr-only">
                {t("inviteEmail")}
              </Label>
              <Input
                id="inviteEmail"
                type="email"
                placeholder="kollege@firma.de"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <Button type="submit" disabled={isLoading || !email} className="gap-2">
              {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
              {t("inviteButton")}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

