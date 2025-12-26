import Link from "next/link";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "49",
    features: ["5 Nutzer", "Alle 12 Workflows", "E-Mail Support", "EU-Hosting"],
    popular: false,
  },
  {
    name: "Team",
    price: "149",
    features: [
      "15 Nutzer",
      "Alle 12 Workflows",
      "Prioritäts-Support",
      "EU-Hosting",
      "Team-Verwaltung",
    ],
    popular: true,
  },
  {
    name: "Business",
    price: "399",
    features: [
      "Unbegrenzte Nutzer",
      "Alle 12 Workflows",
      "Dedicated Support",
      "EU-Hosting",
      "SSO (bald)",
      "Custom Workflows",
    ],
    popular: false,
  },
];

export const Pricing = () => {
  const t = useTranslations("landing.pricing");

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">{t("title")}</h2>
          <p className="mt-2 text-slate-600">{t("subtitle")}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "relative",
                plan.popular && "border-blue-600 shadow-lg"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-medium text-white">
                  Beliebt
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-slate-900">
                    €{plan.price}
                  </span>
                  <span className="text-slate-600"> / {t("monthly")}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-green-600" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/signup" className="block mt-6">
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {t("cta")}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

