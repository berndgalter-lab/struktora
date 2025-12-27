"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Loader2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { CompanyProfile } from "@/types/database";

const industries = [
  { value: "maschinenbau", label: "Maschinenbau" },
  { value: "automotive", label: "Automotive" },
  { value: "elektrotechnik", label: "Elektrotechnik" },
  { value: "it-software", label: "IT / Software" },
  { value: "beratung", label: "Beratung" },
  { value: "handel", label: "Handel" },
  { value: "sonstiges", label: "Sonstiges" },
];

interface ProfileFormProps {
  initialData: Partial<CompanyProfile> | null;
}

export const ProfileForm = ({ initialData }: ProfileFormProps) => {
  const t = useTranslations("settings.profile");
  const tCommon = useTranslations("common");

  const [companyName, setCompanyName] = useState(initialData?.company_name || "");
  const [industry, setIndustry] = useState(initialData?.industry || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [products, setProducts] = useState(initialData?.products || "");

  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSaved(false);
    setIsLoading(true);

    try {
      const response = await fetch("/api/settings/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company_name: companyName,
          industry,
          description,
          products,
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
        <form onSubmit={handleSubmit} className="space-y-5">
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

          <div className="space-y-2">
            <Label htmlFor="companyName">
              {t("companyName")} <span className="text-red-500">*</span>
            </Label>
            <Input
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="industry">{t("industry")}</Label>
            <Select value={industry} onValueChange={setIndustry} disabled={isLoading}>
              <SelectTrigger id="industry">
                <SelectValue placeholder="Branche wählen..." />
              </SelectTrigger>
              <SelectContent>
                {industries.map((ind) => (
                  <SelectItem key={ind.value} value={ind.value}>
                    {ind.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">{t("companyDescription")}</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={t("companyDescriptionHint")}
              rows={3}
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="products">{t("products")}</Label>
            <Textarea
              id="products"
              value={products}
              onChange={(e) => setProducts(e.target.value)}
              placeholder="z.B. CNC-Maschinen, Werkzeuge, Beratungsdienstleistungen..."
              rows={3}
              disabled={isLoading}
            />
          </div>

          <Button type="submit" disabled={isLoading || !companyName} className="gap-2">
            {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
            {tCommon("save")}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
