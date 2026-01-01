export const StruktoraImplementation = () => {
  return (
    <section className="bg-background py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-2xl px-4">
        {/* Überschrift */}
        <h2 className="text-xl font-semibold text-foreground md:text-2xl">
          Wie Struktora Arbeitsstandards für KI-Arbeit umsetzt
        </h2>

        {/* Einordnung */}
        <p className="mt-6 text-base text-muted-foreground md:text-lg">
          Struktora übersetzt wiederkehrende Aufgaben aus dem Arbeitsalltag in
          feste, ausführbare Arbeitsstandards für KI-gestützte Arbeit.
        </p>

        {/* Kernbeschreibung */}
        <p className="mt-8 text-base font-medium text-foreground md:mt-10 md:text-lg">
          Jeder Arbeitsstandard in Struktora folgt einer klaren Struktur:
        </p>
        <ul className="mt-4 list-none space-y-2 text-base text-muted-foreground">
          <li>– Der Zweck der Aufgabe ist eindeutig definiert</li>
          <li>– Relevanter Kontext wird systematisch vorgegeben</li>
          <li>– Eingaben erfolgen über feste Felder statt freier Prompts</li>
          <li>– Der Ablauf ist vorgegeben und für alle identisch</li>
          <li>– Das Ergebnis ist klar definiert und überprüfbar</li>
        </ul>

        {/* Erklärende Absätze */}
        <p className="mb-4 mt-6 text-base text-muted-foreground md:mb-8">
          So entsteht eine einheitliche Arbeitsweise – unabhängig von Erfahrung,
          Schreibstil oder persönlicher Prompt-Kompetenz.
        </p>
      </div>
    </section>
  );
};

