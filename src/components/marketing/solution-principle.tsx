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
          Wenn KI ein verlässlicher Bestandteil der täglichen Arbeit sein soll,
          muss sie genauso behandelt werden wie andere wiederkehrende Aufgaben
          im Unternehmen.
        </p>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          Nicht individuell. Nicht situationsabhängig. Sondern als klar
          definierter Standard.
        </p>

        {/* Die vier Prinzipien */}
        <p className="mt-8 text-base font-medium text-foreground md:mt-10 md:text-lg">
          Ein Arbeitsstandard für KI-Arbeit bedeutet:
        </p>
        <ul className="mt-4 list-none space-y-2 text-base text-muted-foreground">
          <li>– Aufgaben werden eindeutig beschrieben und abgegrenzt</li>
          <li>– Eingaben folgen festen Feldern statt freier Formulierungen</li>
          <li>– Abläufe sind vorgegeben und für alle gleich</li>
          <li>– Ergebnisse sind reproduzierbar, überprüfbar und zuordenbar</li>
        </ul>

        {/* Verstärkender Satz */}
        <p className="mt-6 text-sm text-muted-foreground/80 md:text-base">
          So entsteht Vergleichbarkeit – unabhängig davon, welcher Mitarbeiter
          eine Aufgabe ausführt oder welches KI-Modell im Hintergrund eingesetzt
          wird.
        </p>

        {/* Fixierender Schlusssatz */}
        <p className="mb-4 mt-10 text-base font-medium text-foreground md:mb-8 md:mt-12 md:text-lg">
          Erst wenn KI-Arbeit standardisiert ist, kann sie skaliert,
          verantwortet und dauerhaft in Organisationen verankert werden.
        </p>
      </div>
    </section>
  );
};

