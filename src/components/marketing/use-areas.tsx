export const UseAreas = () => {
  return (
    <section className="bg-background py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-2xl px-4">
        {/* Überschrift */}
        <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
          Wo Arbeitsstandards für KI-Arbeit notwendig werden
        </h2>

        {/* Einordnung */}
        <p className="mt-6 max-w-2xl text-base text-muted-foreground md:mt-8 md:text-lg">
          Arbeitsstandards sind überall dort notwendig, wo Aufgaben regelmäßig
          auftreten und nach ähnlichen Mustern bearbeitet werden.
        </p>

        {/* Fünf Einsatzbereiche */}
        <div className="mt-10 space-y-6 md:mt-12">
          {/* Bereich 1 */}
          <div>
            <h3 className="text-base font-medium text-foreground">
              Kundenkommunikation
            </h3>
            <p className="mt-1 text-muted-foreground">
              Wiederkehrende Anfragen, Angebotsrückfragen oder Reklamationen
              folgen festen Abläufen.
            </p>
          </div>

          {/* Bereich 2 */}
          <div>
            <h3 className="text-base font-medium text-foreground">
              Angebots- und Follow-up-Prozesse
            </h3>
            <p className="mt-1 text-muted-foreground">
              Standardisierte Kommunikation sorgt für klare Aussagen und
              einheitlichen Ton.
            </p>
          </div>

          {/* Bereich 3 */}
          <div>
            <h3 className="text-base font-medium text-foreground">
              Interne Texte und Vorarbeit
            </h3>
            <p className="mt-1 text-muted-foreground">
              Regelmäßig benötigte Inhalte, Entwürfe und Vorlagen entstehen nach
              festen Regeln und sind konsistent sowie nachvollziehbar aufgebaut.
            </p>
          </div>

          {/* Bereich 4 */}
          <div>
            <h3 className="text-base font-medium text-foreground">
              Wissensaufbereitung und FAQs
            </h3>
            <p className="mt-1 text-muted-foreground">
              Häufig wiederkehrende Inhalte werden systematisch erfasst und
              gepflegt.
            </p>
          </div>
        </div>

        {/* Beispiel aus dem Maschinenbau */}
        <div className="mt-12 rounded-lg bg-muted/30 p-6 md:mt-16 md:p-8">
          <h3 className="text-lg font-semibold text-foreground md:text-xl">
            Beispiel aus dem Maschinenbau
          </h3>

          <p className="mt-4 text-base text-muted-foreground">
            Ein typischer Anwendungsfall: Technische Rückfragen zu Lieferzeiten,
            Ersatzteilen oder Angebotsdetails.
          </p>
          <p className="mt-2 text-base text-muted-foreground">
            Im Vertrieb beantworten mehrere Mitarbeiter täglich ähnliche
            Anfragen – heute oft mit unterschiedlichem Detailgrad, Ton und
            technischer Genauigkeit.
          </p>

          {/* Ohne Arbeitsstandard */}
          <div className="mt-6">
            <p className="text-sm font-medium text-foreground">
              Ohne Arbeitsstandard
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              <li>– 10–15 Minuten pro Anfrage</li>
              <li>– Unterschiedliche Aussagen bei gleichen Fragen</li>
              <li>– Rückfragen durch Technik oder Vertrieb</li>
              <li>
                – Korrekturschleifen, weil Formulierungen nicht einheitlich sind
              </li>
            </ul>
          </div>

          {/* Mit Arbeitsstandard */}
          <div className="mt-6">
            <p className="text-sm font-medium text-foreground">
              Mit einem vordefinierten Arbeitsstandard in Struktora, der genau
              für diesen Anfragetyp vorgesehen ist
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              <li>
                – Klare Eingabefelder: Maschinentyp, Anfrageart, Lieferstatus,
                interne Vorgaben
              </li>
              <li>– Feste Tonalität und definierte technische Tiefe</li>
              <li>– Einheitlicher Ablauf für jede Anfrage</li>
            </ul>
          </div>

          {/* Ergebnis */}
          <div className="mt-6">
            <p className="text-sm font-medium text-foreground">Ergebnis</p>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              <li>– 2–4 Minuten pro Anfrage</li>
              <li>– Einheitliche Aussagen gegenüber Kunden</li>
              <li>– Weniger Rückfragen und weniger Korrekturen</li>
              <li>– Verantwortung ist im Prozess klar zuordenbar</li>
            </ul>
          </div>
        </div>

        {/* Abschließender Ordnungssatz */}
        <p className="mt-10 text-base font-medium text-foreground md:mt-12 md:text-lg">
          Wo Arbeit regelmäßig anfällt, brauchen Sie Standards – sonst zahlen
          Sie Nacharbeit.
        </p>
      </div>
    </section>
  );
};
