export const HowItWorks = () => {
  return (
    <section className="bg-muted/20 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-2xl px-4">
        {/* Überschrift */}
        <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
          Wie Struktora im Arbeitsalltag genutzt wird
        </h2>

        {/* Intro */}
        <p className="mt-6 text-base font-medium text-foreground md:mt-8 md:text-lg">
          Struktora wird nicht „bedient". Es wird ausgeführt.
        </p>
        <p className="mt-3 text-base text-muted-foreground md:text-lg">
          Ein Arbeitsstandard ist im System definiert. Der Mitarbeiter folgt
          ihm Schritt für Schritt – unabhängig von Erfahrung, Stil oder
          persönlicher Vorliebe.
        </p>

        {/* Einleitung Prozess */}
        <p className="mt-8 text-base font-medium text-foreground md:mt-10 md:text-lg">
          Der Ablauf ist immer gleich:
        </p>

        {/* 4 Schritte */}
        <div className="mt-6 max-w-2xl space-y-8">
          {/* Schritt 1 */}
          <div className="flex items-start gap-5">
            <span className="w-12 shrink-0 font-mono text-2xl leading-none text-muted-foreground/30 md:text-3xl">
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
          <div className="flex items-start gap-5">
            <span className="w-12 shrink-0 font-mono text-2xl leading-none text-muted-foreground/30 md:text-3xl">
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
          <div className="flex items-start gap-5">
            <span className="w-12 shrink-0 font-mono text-2xl leading-none text-muted-foreground/30 md:text-3xl">
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
          <div className="flex items-start gap-5">
            <span className="w-12 shrink-0 font-mono text-2xl leading-none text-muted-foreground/30 md:text-3xl">
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
          Ihre Mitarbeiter müssen nicht mehr überlegen, wie sie formulieren
          sollen. Sie folgen dem Ablauf und wissen, dass das Ergebnis im Rahmen
          stimmt.
        </p>
        <p className="mt-4 text-base font-medium text-foreground md:text-lg">
          Für die Organisation bedeutet das: Der Ablauf ist unabhängig von
          einzelnen Personen steuerbar, überprüfbar und skalierbar.
        </p>

        {/* Abschlusssatz */}
        <div className="mt-10 md:mt-12">
          <p className="text-base font-medium leading-relaxed text-foreground md:text-lg">
            Das Ergebnis: Gleiche Aufgabe. Gleicher Ablauf. Gleiche Qualität.
          </p>
          <p className="mt-1 text-base font-medium text-foreground md:text-lg">
            Unabhängig von Person, Erfahrung oder Tagesform.
          </p>
        </div>
      </div>
    </section>
  );
};

