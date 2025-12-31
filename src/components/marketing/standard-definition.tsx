export const StandardDefinition = () => {
  return (
    <section className="bg-muted/20 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4">
        {/* Überschrift + Einleitung */}
        <div className="mx-auto max-w-2xl md:mx-0">
          <h2 className="text-xl font-semibold text-foreground md:text-2xl">
            Was ein Arbeitsstandard für KI-Arbeit festlegt
          </h2>
          <p className="mt-6 text-base text-muted-foreground md:text-lg">
            Ein Arbeitsstandard legt nicht die konkrete Antwort fest. Er
            definiert den Rahmen, in dem Ergebnisse entstehen – nachvollziehbar,
            reproduzierbar und unabhängig vom einzelnen Mitarbeiter.
          </p>
        </div>

        {/* 5 Bausteine */}
        <div className="mt-10 md:mt-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-4">
            {/* Baustein 1 */}
            <div className="text-center md:text-left">
              <h3 className="text-sm font-semibold text-foreground">
                Eingang und Kontext
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Welche Informationen gehören zwingend dazu, damit die Aufgabe
                korrekt bearbeitet werden kann.
              </p>
            </div>

            {/* Baustein 2 */}
            <div className="text-center md:text-left">
              <h3 className="text-sm font-semibold text-foreground">
                Entscheidungslogik
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Welche Aspekte relevant sind – und welche bewusst nicht
                berücksichtigt werden.
              </p>
            </div>

            {/* Baustein 3 */}
            <div className="text-center md:text-left">
              <h3 className="text-sm font-semibold text-foreground">
                Vorgaben und Regeln
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Tonalität, Freigaben, Formulierungsrahmen und inhaltliche
                Grenzen.
              </p>
            </div>

            {/* Baustein 4 */}
            <div className="text-center md:text-left">
              <h3 className="text-sm font-semibold text-foreground">
                Ablauf und Reihenfolge
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                In welchen klar definierten Schritten die Aufgabe ausgeführt
                wird.
              </p>
            </div>

            {/* Baustein 5 */}
            <div className="text-center md:text-left">
              <h3 className="text-sm font-semibold text-foreground">
                Verantwortung und Nachvollziehbarkeit
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Wer den Standard ausführt – und auf welcher Grundlage das
                Ergebnis entsteht.
              </p>
            </div>
          </div>
        </div>

        {/* Abschlusssatz */}
        <div className="mx-auto mt-10 max-w-2xl md:mx-0 md:mt-12">
          <p className="text-base font-medium text-foreground md:text-lg">
            Der Arbeitsstandard ersetzt individuelle Entscheidungen durch einen
            verlässlichen Prozess.
          </p>
        </div>
      </div>
    </section>
  );
};

