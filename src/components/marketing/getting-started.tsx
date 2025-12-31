export const GettingStarted = () => {
  return (
    <section className="bg-background py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-2xl px-4">
        {/* Überschrift */}
        <h2 className="text-xl font-semibold text-foreground md:text-2xl">
          Der Einstieg beginnt nicht mit einem Rollout
        </h2>

        {/* Einleitender Gedanke */}
        <p className="mt-6 text-base text-muted-foreground md:text-lg">
          Der Einstieg in Struktora erfolgt nicht unternehmensweit. Er erfordert
          keine strategische Großentscheidung und kein Change-Projekt.
        </p>
        <p className="mt-3 text-base font-medium text-foreground md:text-lg">
          Er beginnt mit einem einzigen, konkreten Arbeitsstandard.
        </p>

        {/* Klarstellung */}
        <p className="mt-6 text-base text-muted-foreground md:mt-8 md:text-lg">
          Kein Rollout. Keine Tool-Migration. Keine neue Organisation.
        </p>

        {/* Einordnung */}
        <p className="mt-6 text-base text-muted-foreground md:text-lg">
          Ein Arbeitsstandard ersetzt keine Menschen und keine bestehenden
          Systeme.
        </p>
        <p className="mt-3 text-base text-muted-foreground md:text-lg">
          Er ersetzt individuelle Entscheidungen durch einen definierten Rahmen
          – für eine konkrete, wiederkehrende Aufgabe.
        </p>

        {/* Beobachtbarer Effekt */}
        <div className="mt-6 md:mt-8">
          <p className="text-base font-medium text-foreground">
            Was sich verändert, wird sichtbar:
          </p>
          <ul className="mt-3 space-y-2 text-base text-muted-foreground">
            <li>– Zuverlässigkeit wird messbar</li>
            <li>– Nacharbeit wird sichtbar reduziert</li>
            <li>– Qualität wird reproduzierbar</li>
          </ul>
        </div>

        {/* Abschlusssatz */}
        <p className="mt-8 text-base font-medium text-foreground md:mt-10 md:text-lg">
          Der Nutzen entsteht nicht durch Breite. Sondern durch konsequente
          Anwendung im Kleinen.
        </p>
      </div>
    </section>
  );
};

