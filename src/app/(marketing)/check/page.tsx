import CalendlyInlineClickToLoad from "@/components/CalendlyInlineClickToLoad";

export default function CheckPage() {
  return (
    <main className="px-6 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-2xl">
        {/* H1 */}
        <h1 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Arbeitsstandard prüfen lassen
        </h1>

        {/* Subline */}
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          Wir prüfen eine konkrete, wiederkehrende Aufgabe aus Ihrem
          Arbeitsalltag und zeigen, wie daraus ein Arbeitsstandard wird. Dauer:
          15 Minuten.
        </p>

        {/* Block: Worum es geht */}
        <div className="mt-8">
          <h2 className="text-base font-medium text-foreground">
            Worum es geht
          </h2>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>
              – 1 Aufgabe auswählen (z. B. Kundenanfragen, technische
              Rückfragen, Follow-ups)
            </li>
            <li>– 2–3 Minuten Kontext klären (Inputs, Regeln, Ton)</li>
            <li>
              – Ergebnis: Sie sehen, ob ein Arbeitsstandard sinnvoll ist und wie
              er aufgebaut wäre
            </li>
          </ul>
        </div>

        {/* Block: Für wen das passt */}
        <div className="mt-6">
          <h2 className="text-base font-medium text-foreground">
            Für wen das passt
          </h2>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>– Technische B2B-Teams mit wiederkehrenden Textaufgaben</li>
            <li>– Wenn einheitliche Aussagen und klarer Ablauf wichtig sind</li>
          </ul>
        </div>

        {/* Block: Nicht passend */}
        <p className="mt-6 text-sm text-muted-foreground/80">
          Nicht passend, wenn es um kreative Einzeltexte oder einmalige
          Sonderfälle geht.
        </p>

        {/* Trenner + Calendly */}
        <div className="mt-10 border-t border-border/30 pt-8">
          <h2 className="mb-6 text-lg font-medium text-foreground">
            Termin auswählen
          </h2>

          <CalendlyInlineClickToLoad
            url="https://calendly.com/bernd-galter-struktora"
            buttonLabel="Termin anzeigen"
            privacyHint="Hinweis: Beim Klick wird Calendly als externer Dienst geladen. Dabei können Daten übertragen werden."
            height={820}
            utm={{
              utmSource: "website",
              utmMedium: "cta",
              utmCampaign: "arbeitsstandard-check",
            }}
          />
        </div>
      </div>
    </main>
  );
}
