export const Reframe = () => {
  return (
    <section className="bg-muted/30 pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24">
      <div className="mx-auto max-w-2xl px-4">
        {/* Überschrift - typografisch stärker */}
        <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Warum individuelle KI-Nutzung im Unternehmen nicht funktioniert
        </h2>

        {/* Einleitungssatz - hervorgehoben als Scharnierpunkt */}
        <p className="mt-10 text-lg text-foreground/80 md:mt-12 md:text-xl">
          Individuelle Prompts erzeugen im Unternehmen zwangsläufig Streuung.
        </p>

        {/* Beobachtbare Realität - mehr Zeilenabstand */}
        <ul className="mt-6 space-y-4 text-base text-muted-foreground">
          <li>– Gleiche Aufgaben führen zu unterschiedlichen Ergebnissen</li>
          <li>– Qualität hängt vom einzelnen Mitarbeiter ab, nicht vom Prozess</li>
          <li>– Ergebnisse sind nicht reproduzierbar oder überprüfbar</li>
          <li>– Verantwortung ist schwer zuzuordnen, sobald KI im Spiel ist</li>
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

