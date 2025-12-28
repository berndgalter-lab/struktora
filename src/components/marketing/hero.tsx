import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center">
        {/* Headline */}
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
          KI im Unternehmen.
          <br />
          Endlich zuverlässig nutzbar.
        </h1>

        {/* Sub-Headline */}
        <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-600 md:text-xl">
          Struktora macht KI im Arbeitsalltag verlässlich –
          <br className="hidden sm:block" />
          mit klaren Abläufen, konsistenten Ergebnissen und EU-Datenhaltung.
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <Link href="/signup">
            <Button size="lg" className="px-8 py-6 text-base">
              14 Tage kostenlos testen
            </Button>
          </Link>
        </div>

        {/* Trust Checkmarks */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
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
            Für den deutschen Mittelstand gebaut
          </span>
        </div>
      </div>
    </section>
  );
};
