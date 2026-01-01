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

        {/* Abschließender Ordnungssatz */}
        <p className="mt-10 text-base font-medium text-foreground md:mt-12 md:text-lg">
          Wo Arbeit regelmäßig anfällt, brauchen Sie Standards – sonst zahlen
          Sie Nacharbeit.
        </p>
      </div>
    </section>
  );
};
