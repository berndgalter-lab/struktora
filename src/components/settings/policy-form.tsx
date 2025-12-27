"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Loader2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { CompanyPolicy } from "@/types/database";

interface PolicyFormProps {
  initialData: Partial<CompanyPolicy> | null;
}

export const PolicyForm = ({ initialData }: PolicyFormProps) => {
  const t = useTranslations("settings.policy");
  const tCommon = useTranslations("common");

  const [anrede, setAnrede] = useState<"Sie" | "Du">(initialData?.anrede || "Sie");
  const [tonality, setTonality] = useState<"formell" | "sachlich" | "locker">(
    initialData?.tonality || "sachlich"
  );
  const [nogoWords, setNogoWords] = useState(
    initialData?.nogo_words?.join(", ") || ""
  );
  const [greeting, setGreeting] = useState(
    initialData?.greeting || "Mit freundlichen Grüßen"
  );

  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSaved(false);
    setIsLoading(true);

    try {
      const response = await fetch("/api/settings/policy", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          anrede,
          tonality,
          nogo_words: nogoWords
            .split(",")
            .map((w) => w.trim())
            .filter(Boolean),
          greeting,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Fehler beim Speichern");
      }

      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ein Fehler ist aufgetreten");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 text-red-600 text-sm p-3 rounded-md">
              {error}
            </div>
          )}

          {isSaved && (
            <div className="bg-green-50 text-green-600 text-sm p-3 rounded-md flex items-center gap-2">
              <Check className="h-4 w-4" />
              {t("saved")}
            </div>
          )}

          {/* Anrede */}
          <div className="space-y-3">
            <Label>{t("anrede")}</Label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="anrede"
                  value="Sie"
                  checked={anrede === "Sie"}
                  onChange={() => setAnrede("Sie")}
                  disabled={isLoading}
                  className="h-4 w-4 text-blue-600"
                />
                <span className="text-sm">{t("anredeSie")}</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="anrede"
                  value="Du"
                  checked={anrede === "Du"}
                  onChange={() => setAnrede("Du")}
                  disabled={isLoading}
                  className="h-4 w-4 text-blue-600"
                />
                <span className="text-sm">{t("anredeDu")}</span>
              </label>
            </div>
          </div>

          {/* Tonality */}
          <div className="space-y-3">
            <Label>{t("tonality")}</Label>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="tonality"
                  value="formell"
                  checked={tonality === "formell"}
                  onChange={() => setTonality("formell")}
                  disabled={isLoading}
                  className="h-4 w-4 text-blue-600"
                />
                <span className="text-sm">{t("tonalityFormell")}</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="tonality"
                  value="sachlich"
                  checked={tonality === "sachlich"}
                  onChange={() => setTonality("sachlich")}
                  disabled={isLoading}
                  className="h-4 w-4 text-blue-600"
                />
                <span className="text-sm">{t("tonalitySachlich")}</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="tonality"
                  value="locker"
                  checked={tonality === "locker"}
                  onChange={() => setTonality("locker")}
                  disabled={isLoading}
                  className="h-4 w-4 text-blue-600"
                />
                <span className="text-sm">{t("tonalityLocker")}</span>
              </label>
            </div>
          </div>

          {/* No-Go Words */}
          <div className="space-y-2">
            <Label htmlFor="nogoWords">{t("nogoWords")}</Label>
            <Textarea
              id="nogoWords"
              value={nogoWords}
              onChange={(e) => setNogoWords(e.target.value)}
              placeholder="z.B. super, mega, geil, hammer"
              rows={2}
              disabled={isLoading}
            />
            <p className="text-xs text-slate-500">{t("nogoWordsHint")}</p>
          </div>

          {/* Greeting */}
          <div className="space-y-2">
            <Label htmlFor="greeting">{t("greeting")}</Label>
            <Input
              id="greeting"
              value={greeting}
              onChange={(e) => setGreeting(e.target.value)}
              placeholder="Mit freundlichen Grüßen"
              disabled={isLoading}
            />
          </div>

          <Button type="submit" disabled={isLoading} className="gap-2">
            {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
            {tCommon("save")}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
