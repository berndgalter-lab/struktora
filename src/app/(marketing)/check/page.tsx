import CalendlyInlineClickToLoad from "@/components/CalendlyInlineClickToLoad";

export default function CheckPage() {
  return (
    <main className="px-6 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-2xl">
        {/* H1 */}
        <h1 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Arbeitsstandard prüfen lassen
        </h1>

        {/* Subline (GEÄNDERT) */}
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          Wir prüfen eine konkrete, wiederkehrende Aufgabe aus Ihrem
          Arbeitsalltag und zeigen, ob sie durch einen bestehenden
          Arbeitsstandard in Struktora abgedeckt werden kann. Dauer: 15 Minuten.
        </p>

        {/* Block: Worum es geht (GEÄNDERT) */}
        <div className="mt-8">
          <h2 className="text-base font-medium text-foreground">
            Worum es geht
          </h2>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>– Eine konkrete, wiederkehrende Aufgabe benennen</li>
            <li>
              – Kurz klären, in welchem Rahmen diese Aufgabe heute bearbeitet
              wird
            </li>
            <li>
              – Ergebnis: Sie sehen, ob ein bestehender Arbeitsstandard diese
              Aufgabe abdecken kann – oder nicht
            </li>
          </ul>
        </div>

        {/* Block: Für wen das passt (GEÄNDERT) */}
        <div className="mt-6">
          <h2 className="text-base font-medium text-foreground">
            Für wen das passt
          </h2>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>– Technische B2B-Teams mit wiederkehrenden Aufgaben</li>
            <li>
              – Wenn einheitliche Aussagen, klare Abläufe und reproduzierbare
              Ergebnisse wichtig sind
            </li>
          </ul>
        </div>

        {/* Block: Nicht passend (GEÄNDERT) */}
        <div className="mt-6">
          <p className="text-sm text-muted-foreground/80">
            Nicht passend, wenn es um:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground/80">
            <li>– kreative Einzeltexte</li>
            <li>– einmalige Sonderfälle</li>
            <li>– oder individuell ausgearbeitete Lösungen geht.</li>
          </ul>
        </div>

        {/* Trenner + Calendly */}
        <div className="mt-10 border-t border-border/30 pt-8">
          <h2 className="text-lg font-medium text-foreground">
            Termin auswählen
          </h2>

          {/* Subline unter Headline (NEU) */}
          <p className="mt-2 text-sm text-muted-foreground">
            Prüfung, ob ein bestehender Arbeitsstandard zu Ihrer Aufgabe passt.
          </p>

          <div className="mt-6">
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
      </div>
    </main>
  );
}
