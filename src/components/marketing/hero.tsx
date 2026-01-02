import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="bg-background py-14 md:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        {/* Hero Text Container - enger geführt */}
        <div className="mx-auto max-w-3xl">
          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight leading-[1.1] text-foreground md:text-5xl lg:text-6xl">
            KI-Arbeit braucht Standards.
            <br />
            Nicht mehr Prompts.
          </h1>

          {/* Sub-Headline */}
          <p className="mx-auto mt-8 max-w-2xl text-base text-muted-foreground md:mt-10 md:text-lg">
            Struktora macht KI im Unternehmen steuerbar, überprüfbar und
            zuordenbar, indem wiederkehrende Aufgaben als feste
            Arbeitsstandards ausgeführt werden.
          </p>

          {/* Kontextzeile */}
          <p className="mt-6 text-sm text-muted-foreground/60 md:mt-8 md:text-base">
            Für Organisationen, die KI als festen Bestandteil ihres Arbeitsalltags
            einsetzen wollen.
          </p>
        </div>

        {/* CTAs - mehr Abstand nach oben */}
        <div className="mt-12 flex flex-col items-center gap-4 md:mt-14">
          <Button size="lg" className="px-8" asChild>
            <a href="/arbeitsstandards-verstehen">Arbeitsstandard prüfen</a>
          </Button>
          <a
            href="/beispiel"
            className="text-sm text-muted-foreground/70 underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Beispiel aus dem Maschinenbau ansehen
          </a>
        </div>

        {/* Vertrauens- & Realitätsanker - stärker abgekoppelt */}
        <div className="mt-16 border-t border-border/20 pt-8 md:mt-20 md:pt-10">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-muted-foreground/60 md:gap-x-10 md:text-sm">
            <span>Keine Schulung erforderlich</span>
            <span>Keine Anpassung bestehender Systeme</span>
            <span>Einheitliche Ergebnisse</span>
            <span>EU-Datenverarbeitung</span>
          </div>
        </div>

        {/* Kurz gesagt */}
        <p className="mx-auto mt-8 mb-8 max-w-2xl text-center text-base text-muted-foreground md:mt-10 md:mb-10 md:text-lg">
          Kurz gesagt: Struktora macht KI-Ergebnisse im Unternehmen
          reproduzierbar, überprüfbar und unabhängig vom einzelnen Mitarbeiter –
          durch feste Arbeitsstandards statt individueller Prompts.
        </p>
      </div>
    </section>
  );
};
