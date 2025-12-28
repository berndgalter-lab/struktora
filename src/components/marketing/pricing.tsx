import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "49",
    description: "Für kleine Teams",
    features: [
      "Zugriff auf alle Kern-Workflows",
      "Begrenztes Generierungskontingent",
      "Unbegrenzte Teammitglieder",
      "EU-Datenhaltung",
      "E-Mail-Support",
    ],
    popular: false,
  },
  {
    name: "Team",
    price: "149",
    description: "Für Abteilungen und wachsende Teams",
    features: [
      "Höheres Generierungskontingent",
      "Gemeinsame Unternehmens-Policy",
      "Priorisierter Support",
      "Alle Starter-Features inklusive",
    ],
    popular: true,
  },
  {
    name: "Business",
    price: "399",
    description: "Für mehrere Teams",
    features: [
      "Sehr hohes Generierungskontingent",
      "Geeignet für breiten Roll-out",
      "Alle Team-Features inklusive",
    ],
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        {/* Überschrift */}
        <h2 className="text-center text-2xl font-semibold text-slate-900 md:text-3xl">
          Klare Preise. Ohne Überraschungen.
        </h2>

        {/* Pricing Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-xl border bg-white p-6 md:p-8",
                plan.popular
                  ? "border-blue-600 shadow-lg"
                  : "border-slate-200"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-medium text-white">
                  Beliebt
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-xl font-semibold text-slate-900">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mt-3">
                <span className="text-3xl font-bold text-slate-900 md:text-4xl">
                  {plan.price} €
                </span>
                <span className="text-base font-normal text-slate-500">
                  {" "}
                  / Monat
                </span>
              </div>

              {/* Description */}
              <p className="mt-3 text-sm text-slate-500">{plan.description}</p>

              {/* Features */}
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <span className="mt-0.5 text-green-600">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Link href="/signup" className="mt-6 block">
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  Kostenlos testen
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Enterprise-Hinweis */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-slate-900">Enterprise</h3>
          <p className="mt-2 text-slate-500">
            Individuelle Anforderungen wie SSO, Audit-Vorgaben oder spezielle
            Setups besprechen wir gerne persönlich.
          </p>
          <a
            href="mailto:support@struktora.com"
            className="mt-3 inline-block text-blue-600 hover:underline"
          >
            Kontakt aufnehmen →
          </a>
        </div>

        {/* Pflicht-Hinweise */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-600 md:text-base">
          <span className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            Unbegrenzte Teammitglieder in allen Plänen
          </span>
          <span className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            Keine Schulung nötig
          </span>
          <span className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            Daten bleiben in der EU
          </span>
          <span className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            14 Tage kostenlos testen
          </span>
        </div>
      </div>
    </section>
  );
};
