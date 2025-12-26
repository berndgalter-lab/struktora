import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const t = useTranslations("landing.hero");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pb-20 pt-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          {t("title")}
          <span className="mt-2 block text-blue-600">{t("subtitle")}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          {t("description")}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/signup">
            <Button size="lg" className="gap-2">
              {t("cta")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="gap-2">
            <Play className="h-4 w-4" />
            {t("ctaSecondary")}
          </Button>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
          <span className="flex items-center gap-2">
            ✓ 14 Tage kostenlos
          </span>
          <span className="flex items-center gap-2">
            ✓ Keine Kreditkarte
          </span>
          <span className="flex items-center gap-2">
            ✓ DSGVO-konform
          </span>
        </div>
      </div>
    </section>
  );
};
