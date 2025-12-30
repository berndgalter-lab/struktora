import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="bg-background py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center">
        {/* Headline */}
        <h1 className="text-4xl font-bold tracking-tight leading-[1.1] text-foreground md:text-5xl lg:text-6xl">
          Standardisierte KI-Arbeit
          <br className="hidden md:block" />
          statt individueller Prompts
        </h1>

        {/* Sub-Headline */}
        <p className="mx-auto mt-8 max-w-2xl text-base text-muted-foreground md:mt-10 md:text-lg">
          Struktora macht KI im Unternehmen beherrschbar, indem wiederkehrende
          Aufgaben als feste Arbeitsstandards ausgeführt werden – mit klaren
          Abläufen, reproduzierbaren Ergebnissen und klarer Verantwortung.
        </p>

        {/* Kontextzeile */}
        <p className="mt-6 text-sm text-muted-foreground/60 md:mt-8 md:text-base">
          Für Organisationen, die KI nicht ausprobieren, sondern verlässlich
          einsetzen wollen.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center md:mt-12">
          <Button size="lg" className="px-8" asChild>
            <a href="#demo">Arbeitsstandards verstehen</a>
          </Button>
          <Button
            variant="link"
            className="mt-3 text-sm text-muted-foreground hover:text-foreground"
            asChild
          >
            <a href="#demo">Beispiel im Arbeitsalltag ansehen</a>
          </Button>
        </div>

        {/* Vertrauens- & Realitätsanker */}
        <div className="mt-16 border-t border-border/40 pt-8 md:mt-20 md:pt-12 lg:mt-24">
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-xs text-muted-foreground/70 md:flex md:flex-wrap md:items-center md:justify-center md:gap-x-10 md:text-sm">
            <span>Keine Schulung erforderlich</span>
            <span>Keine Anpassung bestehender Systeme</span>
            <span>Einheitliche Ergebnisse – unabhängig vom Mitarbeiter</span>
            <span>Datenverarbeitung ausschließlich in der EU</span>
          </div>
        </div>
      </div>
    </section>
  );
};
