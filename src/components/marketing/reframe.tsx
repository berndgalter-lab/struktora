export const Reframe = () => {
  return (
    <section className="bg-background py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-2xl px-4">
        {/* Überschrift */}
        <h2 className="text-xl font-semibold text-foreground md:text-2xl">
          Warum individuelle KI-Nutzung im Unternehmen nicht funktioniert
        </h2>

        {/* Einleitungssatz */}
        <p className="mt-6 text-base text-muted-foreground md:text-lg">
          Individuelle Prompts erzeugen im Unternehmen zwangsläufig Streuung.
        </p>

        {/* Beobachtbare Realität */}
        <ul className="mt-6 space-y-3 text-base text-muted-foreground">
          <li>• Gleiche Aufgaben führen zu unterschiedlichen Ergebnissen</li>
          <li>
            • Qualität hängt vom einzelnen Mitarbeiter ab, nicht vom Prozess
          </li>
          <li>• Ergebnisse sind nicht reproduzierbar oder überprüfbar</li>
          <li>
            • Verantwortung ist schwer zuzuordnen, sobald KI im Spiel ist
          </li>
        </ul>

        {/* Fixierender Schlusssatz */}
        <p className="mt-8 text-base font-medium text-foreground md:mt-10 md:text-lg">
          Solange KI individuell genutzt wird, bleibt sie im Unternehmenskontext
          ein Experiment.
        </p>
      </div>
    </section>
  );
};

