export const HowItWorks = () => {
  return (
    <section className="bg-muted/20 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-2xl px-4">
        {/* Überschrift */}
        <h2 className="text-xl font-semibold text-foreground md:text-2xl">
          Wie Struktora im Arbeitsalltag genutzt wird
        </h2>

        {/* Intro */}
        <p className="mt-6 text-base font-medium text-foreground md:text-lg">
          Struktora wird nicht „bedient". Es wird ausgeführt.
        </p>
        <p className="mt-3 text-base text-muted-foreground md:text-lg">
          Ein Arbeitsstandard ist im System definiert. Der Mitarbeiter folgt
          diesem Standard Schritt für Schritt – unabhängig von Erfahrung, Stil
          oder persönlicher Vorliebe.
        </p>

        {/* Einleitung Prozess */}
        <p className="mt-8 text-base font-medium text-foreground md:mt-10 md:text-lg">
          Der Ablauf ist immer gleich:
        </p>

        {/* 4 Schritte */}
        <div className="mt-6 max-w-2xl space-y-6">
          {/* Schritt 1 */}
          <div className="flex gap-4">
            <span className="w-8 shrink-0 font-mono text-sm text-muted-foreground/50">
              01
            </span>
            <div>
              <h3 className="text-base font-medium text-foreground">
                Aufgabe auswählen
              </h3>
              <p className="mt-1 text-muted-foreground">
                Der Mitarbeiter wählt den passenden Arbeitsstandard für seine
                Aufgabe.
              </p>
            </div>
          </div>

          {/* Schritt 2 */}
          <div className="flex gap-4">
            <span className="w-8 shrink-0 font-mono text-sm text-muted-foreground/50">
              02
            </span>
            <div>
              <h3 className="text-base font-medium text-foreground">
                Kontext erfassen
              </h3>
              <p className="mt-1 text-muted-foreground">
                Alle erforderlichen Informationen werden in klar definierten
                Feldern erfasst. Nicht mehr. Nicht weniger.
              </p>
            </div>
          </div>

          {/* Schritt 3 */}
          <div className="flex gap-4">
            <span className="w-8 shrink-0 font-mono text-sm text-muted-foreground/50">
              03
            </span>
            <div>
              <h3 className="text-base font-medium text-foreground">
                Standard ausführen
              </h3>
              <p className="mt-1 text-muted-foreground">
                Struktora führt den definierten Prozess aus – basierend auf
                Vorgaben, Regeln und Reihenfolge.
              </p>
            </div>
          </div>

          {/* Schritt 4 */}
          <div className="flex gap-4">
            <span className="w-8 shrink-0 font-mono text-sm text-muted-foreground/50">
              04
            </span>
            <div>
              <h3 className="text-base font-medium text-foreground">
                Ergebnis prüfen und verwenden
              </h3>
              <p className="mt-1 text-muted-foreground">
                Das Ergebnis entspricht dem festgelegten Rahmen und kann direkt
                verwendet oder freigegeben werden.
              </p>
            </div>
          </div>
        </div>

        {/* Satz nach Schritten */}
        <p className="mt-8 text-base text-muted-foreground md:mt-10 md:text-lg">
          Der Mitarbeiter entscheidet nicht wie gearbeitet wird. Er stellt
          sicher, dass korrekt gearbeitet wird.
        </p>

        {/* Abschlusssatz */}
        <div className="mt-10 md:mt-12">
          <p className="text-base font-medium leading-relaxed text-foreground md:text-lg">
            Das Ergebnis: Gleiche Aufgabe. Gleicher Ablauf. Gleiche Qualität.
          </p>
          <p className="mt-1 text-base font-medium text-foreground md:text-lg">
            Unabhängig davon, wer sie ausführt.
          </p>
        </div>
      </div>
    </section>
  );
};

