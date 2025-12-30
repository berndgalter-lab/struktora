import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="bg-background py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center">
        {/* Headline */}
        <h1 className="text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
          Standardisierte KI-Arbeit
          <br className="hidden md:block" />
          statt individueller Prompts
        </h1>

        {/* Sub-Headline */}
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
          Struktora macht KI im Unternehmen beherrschbar, indem wiederkehrende
          Aufgaben als feste Arbeitsstandards ausgeführt werden – mit klaren
          Abläufen, reproduzierbaren Ergebnissen und klarer Verantwortung.
        </p>

        {/* Kontextzeile */}
        <p className="mt-4 text-base text-muted-foreground/80">
          Für Organisationen, die KI nicht ausprobieren, sondern verlässlich
          einsetzen wollen.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <a href="#demo">Arbeitsstandards verstehen</a>
          </Button>
          <Button variant="ghost" className="text-muted-foreground" asChild>
            <a href="#demo">Beispiel im Arbeitsalltag ansehen</a>
          </Button>
        </div>

        {/* Vertrauens- & Realitätsanker */}
        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-muted-foreground md:mt-16 md:flex md:flex-wrap md:items-center md:justify-center">
          <span>Keine Schulung erforderlich</span>
          <span>Keine Anpassung bestehender Systeme</span>
          <span>Einheitliche Ergebnisse – unabhängig vom Mitarbeiter</span>
          <span>Datenverarbeitung ausschließlich in der EU</span>
        </div>
      </div>
    </section>
  );
};
