import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  const t = useTranslations("landing");

  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-bold text-white">
          Bereit für KI-Workflows?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
          Starte jetzt mit 14 Tagen kostenlosem Test. Keine Kreditkarte
          erforderlich.
        </p>
        <div className="mt-8">
          <Link href="/signup">
            <Button size="lg" className="gap-2">
              {t("pricing.cta")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

