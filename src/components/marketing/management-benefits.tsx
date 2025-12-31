export const ManagementBenefits = () => {
  return (
    <section className="bg-muted/20 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4">
        {/* Überschrift */}
        <h2 className="text-xl font-semibold text-foreground md:text-2xl">
          Was Unternehmen durch Arbeitsstandards gewinnen
        </h2>

        {/* Einleitung */}
        <div className="mt-6 max-w-2xl">
          <p className="text-base text-muted-foreground md:text-lg">
            Arbeitsstandards verändern nicht, was gearbeitet wird. Sie
            verändern, wie verlässlich Arbeit im Alltag funktioniert.
          </p>
          <p className="mt-3 text-base text-muted-foreground md:text-lg">
            Statt individueller Entscheidungen entsteht ein steuerbarer Ablauf –
            unabhängig von Person, Erfahrung oder Tagesform.
          </p>
        </div>

        {/* Nutzenpunkte – 2-Spalten-Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-2 md:gap-10">
          {/* Punkt 1 */}
          <div>
            <h3 className="text-base font-semibold text-foreground">
              Weniger Abstimmung
            </h3>
            <p className="mt-2 text-muted-foreground">
              Klare Vorgaben ersetzen Rückfragen, Korrekturschleifen und
              nachträgliche Klärung.
            </p>
            <p className="mt-1 text-sm text-muted-foreground/80">
              Was erwartet wird, ist definiert – nicht verhandelbar.
            </p>
          </div>

          {/* Punkt 2 */}
          <div>
            <h3 className="text-base font-semibold text-foreground">
              Geringere Abhängigkeit von Einzelpersonen
            </h3>
            <p className="mt-2 text-muted-foreground">
              Ergebnisse hängen nicht mehr vom Wissen oder Stil einzelner
              Mitarbeiter ab.
            </p>
            <p className="mt-1 text-sm text-muted-foreground/80">
              Arbeit bleibt reproduzierbar – auch bei Wechseln oder Wachstum.
            </p>
          </div>

          {/* Punkt 3 */}
          <div>
            <h3 className="text-base font-semibold text-foreground">
              Klare Verantwortlichkeiten
            </h3>
            <p className="mt-2 text-muted-foreground">
              Jeder Schritt folgt einem definierten Prozess.
            </p>
            <p className="mt-1 text-sm text-muted-foreground/80">
              Entscheidungen, Freigaben und Ergebnisse sind eindeutig
              zuordenbar.
            </p>
          </div>

          {/* Punkt 4 */}
          <div>
            <h3 className="text-base font-semibold text-foreground">
              Planbare Qualität
            </h3>
            <p className="mt-2 text-muted-foreground">
              Gleiche Aufgabe. Gleicher Ablauf. Gleiche Qualität.
            </p>
            <p className="mt-1 text-sm text-muted-foreground/80">
              Nicht als Zielbild – sondern als Standard.
            </p>
          </div>

          {/* Punkt 5 */}
          <div>
            <h3 className="text-base font-semibold text-foreground">
              Skalierbarkeit ohne Kontrollverlust
            </h3>
            <p className="mt-2 text-muted-foreground">
              Neue Mitarbeiter arbeiten vom ersten Tag im gleichen Rahmen.
            </p>
            <p className="mt-1 text-sm text-muted-foreground/80">
              Wachstum erhöht nicht die Komplexität, sondern nutzt bestehende
              Standards.
            </p>
          </div>
        </div>

        {/* Abschlusssatz */}
        <div className="mt-10 max-w-2xl md:mt-12">
          <p className="text-base font-medium leading-relaxed text-foreground md:text-lg">
            Arbeitsstandards machen Arbeit nicht schneller um jeden Preis.
          </p>
          <p className="mt-1 text-base font-medium text-foreground md:text-lg">
            Sie machen sie steuerbar, überprüfbar und im Alltag belastbar.
          </p>
        </div>
      </div>
    </section>
  );
};

