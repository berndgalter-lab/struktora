export const UseCaseExample = () => {
  return (
    <section className="bg-muted/20 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4">
        {/* Überschrift */}
        <h2 className="text-xl font-semibold text-foreground md:text-2xl">
          Ein Arbeitsstandard im Einsatz: Kundenanfragen beantworten
        </h2>

        {/* Einordnung */}
        <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
          Ein typischer Anwendungsfall aus dem Arbeitsalltag: Eine eingehende
          Kundenanfrage per E-Mail soll beantwortet werden – sachlich, korrekt
          und im Ton des Unternehmens.
        </p>

        {/* Drei Blöcke */}
        <div className="mt-10 space-y-8 md:mt-12 md:space-y-10">
          {/* Block A – Ausgangssituation */}
          <div className="border-l-2 border-border/50 pl-5">
            <h3 className="mb-3 text-base font-medium text-foreground">
              Ausgangssituation
            </h3>
            <p className="text-muted-foreground">
              Eine Kundenanfrage wird vom einzelnen Mitarbeiter interpretiert,
              formuliert und geprüft. Ergebnis und Ton sind nicht systemisch
              abgesichert.
            </p>
          </div>

          {/* Block B – Standardisierter Ablauf */}
          <div className="border-l-2 border-border/50 pl-5">
            <h3 className="mb-3 text-base font-medium text-foreground">
              Standardisierter Ablauf mit Struktora
            </h3>
            <p className="mb-3 text-muted-foreground">
              Mit einem festen Arbeitsstandard ist der Ablauf klar vorgegeben:
            </p>
            <ul className="space-y-1.5 text-muted-foreground">
              <li>
                – Die eingehende Anfrage wird in den vorgesehenen Kontext
                eingefügt
              </li>
              <li>– Relevante Punkte werden über definierte Felder erfasst</li>
              <li>– Tonalität und interne Vorgaben sind fest hinterlegt</li>
              <li>– Der Ablauf folgt einer klaren Reihenfolge</li>
              <li>– Die Antwort wird auf Basis dieses Standards erzeugt</li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              Der Mitarbeiter führt den Standard aus – nicht eine individuelle
              Formulierung.
            </p>
          </div>

          {/* Block C – Ergebnis */}
          <div className="border-l-2 border-border/50 pl-5">
            <h3 className="mb-3 text-base font-medium text-foreground">
              Ergebnis
            </h3>
            <ul className="space-y-1.5 text-muted-foreground">
              <li>– Einheitlicher Ton über alle Antworten hinweg</li>
              <li>– Nachvollziehbare Entscheidungen</li>
              <li>– Reduzierter Klärungs- und Korrekturaufwand</li>
              <li>– Klare Verantwortlichkeit</li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              Unabhängig davon, wer die Anfrage bearbeitet.
            </p>
          </div>
        </div>

        {/* Abschließender Satz */}
        <p className="mt-12 text-lg font-semibold text-foreground md:mt-14 md:text-xl">
          So wird aus einer einzelnen E-Mail ein reproduzierbarer
          Arbeitsablauf.
        </p>
      </div>
    </section>
  );
};

