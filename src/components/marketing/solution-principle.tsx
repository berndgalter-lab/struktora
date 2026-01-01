export const SolutionPrinciple = () => {
  return (
    <section className="bg-muted/30 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-2xl px-4">
        {/* Überschrift */}
        <h2 className="text-xl font-semibold text-foreground md:text-2xl">
          Was stattdessen nötig ist: feste Arbeitsstandards für KI-Arbeit
        </h2>

        {/* Einordnung */}
        <p className="mt-6 text-base text-muted-foreground md:text-lg">
          Wenn KI verlässlich funktionieren soll, braucht sie feste Standards.
        </p>

        {/* Die vier Prinzipien */}
        <p className="mt-8 text-base font-medium text-foreground md:mt-10 md:text-lg">
          Ein Arbeitsstandard für KI-Arbeit bedeutet:
        </p>
        <ul className="mb-4 mt-4 list-none space-y-2 text-base text-muted-foreground md:mb-8">
          <li>– Aufgaben sind eindeutig abgegrenzt und nicht interpretierbar</li>
          <li>– Eingaben folgen festen Feldern statt freier Formulierungen</li>
          <li>– Abläufe sind vorgegeben und für alle gleich</li>
          <li>– Ergebnisse sind reproduzierbar, überprüfbar und zuordenbar</li>
        </ul>
      </div>
    </section>
  );
};

