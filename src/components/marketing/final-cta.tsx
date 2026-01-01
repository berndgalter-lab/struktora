export const FinalCTA = () => {
  return (
    <section className="bg-muted/20 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-2xl px-4 text-center">
        {/* Überschrift */}
        <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
          Der nächste Schritt ist kein Commitment
        </h2>

        {/* Einleitung */}
        <p className="mt-6 text-base text-muted-foreground md:mt-8 md:text-lg">
          Der Einstieg in Struktora beginnt nicht mit einer Entscheidung für ein
          System oder eine Plattform. Er beginnt mit einer konkreten Aufgabe aus
          dem Arbeitsalltag.
        </p>
        <p className="mt-3 text-base text-muted-foreground md:text-lg">
          Ohne Verpflichtung. Ohne Rollout. Ohne Veränderung bestehender
          Strukturen.
        </p>

        {/* Kernaussage mit Denkfragen */}
        <div className="mt-8 md:mt-10">
          <p className="text-base font-medium text-foreground md:text-lg">
            Im ersten Schritt geht es nicht um Einführung, sondern um
            Verständnis:
          </p>
          <ul className="mt-4 space-y-2 text-base text-muted-foreground">
            <li>– Wo entstehen heute unnötige Abstimmungen?</li>
            <li>– Wo schwankt Qualität, obwohl die Aufgabe gleich ist?</li>
            <li>– Wo kostet Nacharbeit mehr als die eigentliche Ausführung?</li>
          </ul>
        </div>

        {/* Erwartungshaltung */}
        <p className="mt-8 text-base text-muted-foreground md:text-lg">
          Ein erster Austausch dient dazu, genau eine wiederkehrende Aufgabe zu
          identifizieren und zu prüfen, ob ein Arbeitsstandard sinnvoll ist.
        </p>
        <p className="mt-2 text-base text-foreground md:text-lg">
          Nicht mehr. Nicht weniger.
        </p>

        {/* Abschlusssatz */}
        <p className="mt-8 text-base font-medium text-foreground md:mt-10 md:text-lg">
          Wenn Arbeit zuverlässig funktionieren muss, lohnt es sich, sie klar zu
          definieren.
        </p>

        {/* CTA */}
        <div className="mt-10 md:mt-12">
          <a
            href="mailto:hallo@struktora.com"
            className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted/50"
          >
            Anwendungsfall besprechen
          </a>
        </div>
      </div>
    </section>
  );
};

