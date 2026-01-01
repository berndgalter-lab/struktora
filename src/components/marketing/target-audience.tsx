export const TargetAudience = () => {
  return (
    <section className="bg-background py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4">
        {/* Überschrift */}
        <h2 className="text-xl font-semibold text-foreground md:text-2xl">
          Für wen Struktora geeignet ist
        </h2>

        {/* Einleitung */}
        <div className="mt-6 max-w-2xl">
          <p className="text-base text-muted-foreground md:text-lg">
            Struktora richtet sich an Organisationen, die KI nicht ausprobieren,
            sondern als verlässlichen Bestandteil ihres Arbeitsalltags einsetzen
            wollen.
          </p>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Nicht für Einzelfälle.
            <br />
            Nicht für individuelle Experimente.
            <br />
            Sondern für wiederkehrende Arbeit im Alltag.
          </p>
        </div>

        {/* Zwei Spalten */}
        <div className="mt-10 grid gap-10 md:mt-12 md:grid-cols-2 md:gap-12">
          {/* Block A – Geeignet für */}
          <div>
            <h3 className="text-base font-semibold text-foreground">
              Geeignet für Organisationen, die:
            </h3>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li>• wiederkehrende Aufgaben standardisieren wollen</li>
              <li>
                • gleichbleibende Qualität unabhängig vom Mitarbeiter benötigen
              </li>
              <li>
                • Verantwortung, Freigaben und Abläufe klar definieren müssen
              </li>
              <li>
                • KI-Ergebnisse nachvollziehbar und überprüfbar einsetzen wollen
              </li>
              <li>
                • neue Mitarbeiter schnell und konsistent einarbeiten möchten
              </li>
              <li>
                • Nacharbeit, Abstimmung und Korrekturschleifen reduzieren
                wollen
              </li>
            </ul>
          </div>

          {/* Block B – Nicht geeignet für */}
          <div>
            <h3 className="text-base font-semibold text-foreground">
              Nicht geeignet für Teams, die:
            </h3>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li>
                • KI als kreativen Spielraum oder Ideenquelle nutzen möchten
              </li>
              <li>
                • individuelle Prompts und persönliche Arbeitsweisen bevorzugen
              </li>
              <li>• spontane Einzelanfragen ohne festen Rahmen bearbeiten</li>
              <li>
                • keine klaren Prozesse oder Verantwortlichkeiten etablieren
                wollen
              </li>
            </ul>
          </div>
        </div>

        {/* Abschließender Satz */}
        <p className="mt-10 text-base font-medium text-foreground md:mt-12 md:text-lg">
          Struktora entfaltet seinen Nutzen dort, wo Verlässlichkeit wichtiger
          ist als individuelle Freiheit.
        </p>
      </div>
    </section>
  );
};

