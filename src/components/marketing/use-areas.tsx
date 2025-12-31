export const UseAreas = () => {
  return (
    <section className="bg-background py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-2xl px-4">
        {/* Überschrift */}
        <h2 className="text-xl font-semibold text-foreground md:text-2xl">
          Wo Arbeitsstandards für KI-Arbeit notwendig sind
        </h2>

        {/* Einordnung */}
        <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
          Arbeitsstandards sind überall dort notwendig, wo Aufgaben regelmäßig
          auftreten und nach ähnlichen Mustern bearbeitet werden.
        </p>
        <p className="mt-3 text-base text-muted-foreground md:text-lg">
          Nicht für Ausnahmen. Sondern für Arbeit, die im Alltag zuverlässig
          funktionieren muss.
        </p>
        <p className="mt-3 text-sm text-muted-foreground/70 md:text-base">
          Ohne diese Standards bleibt jede einzelne Ausführung ein Einzelfall –
          mit entsprechendem Abstimmungs- und Korrekturaufwand.
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
            <p className="mt-1 text-sm text-muted-foreground/70">
              Ohne Standard entscheidet der einzelne Bearbeiter über Tonfall,
              Verbindlichkeit und Außenwirkung.
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
            <p className="mt-1 text-sm text-muted-foreground/70">
              Ohne Standard entstehen Abweichungen, die im Nachgang geklärt,
              korrigiert oder verantwortet werden müssen.
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
            <p className="mt-1 text-sm text-muted-foreground/70">
              Ohne Standard bleibt jede Vorlage subjektiv – und erzeugt im
              nächsten Schritt erneuten Prüfaufwand.
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
            <p className="mt-1 text-sm text-muted-foreground/70">
              Ohne Standard entstehen zwangsläufig widersprüchliche Antworten –
              intern wie extern.
            </p>
          </div>
        </div>

        {/* Abschließender Ordnungssatz */}
        <p className="mt-10 text-base font-medium text-foreground md:mt-12 md:text-lg">
          Überall dort, wo Arbeit regelmäßig anfällt, müssen Standards definiert
          werden – oder die Organisation trägt die Folgekosten.
        </p>
      </div>
    </section>
  );
};
