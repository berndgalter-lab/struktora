export const WhatStruktoraIsNot = () => {
  return (
    <section className="bg-background py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-2xl px-4">
        {/* Überschrift */}
        <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
          Was Struktora bewusst nicht ist
        </h2>

        {/* Einleitung */}
        <p className="mt-6 text-base text-muted-foreground md:mt-8 md:text-lg">
          Struktora ist kein weiteres KI-Tool für individuelle Nutzung. Es ist
          ein Arbeitssystem für standardisierte Abläufe in Organisationen –
          dort, wo Verlässlichkeit wichtiger ist als individuelle Freiheit.
        </p>

        {/* Vier Abgrenzungspunkte */}
        <div className="mt-10 max-w-2xl space-y-6 md:mt-12">
          {/* Punkt 1 */}
          <div>
            <h3 className="text-base font-medium text-foreground">
              Kein freier KI-Chat
            </h3>
            <p className="mt-1 text-muted-foreground">
              Struktora ist nicht dafür gedacht, spontane oder kreative
              Einzelanfragen zu beantworten.
            </p>
          </div>

          {/* Punkt 2 */}
          <div>
            <h3 className="text-base font-medium text-foreground">
              Keine individuelle Prompt-Nutzung
            </h3>
            <p className="mt-1 text-muted-foreground">
              Mitarbeiter formulieren keine eigenen Prompts, sondern führen
              definierte Arbeitsstandards aus.
            </p>
          </div>

          {/* Punkt 3 */}
          <div>
            <h3 className="text-base font-medium text-foreground">
              Keine Experimentierumgebung
            </h3>
            <p className="mt-1 text-muted-foreground">
              Struktora ist nicht für Ausprobieren oder variierende Ergebnisse
              konzipiert, sondern für reproduzierbare Abläufe.
            </p>
          </div>

          {/* Punkt 4 */}
          <div>
            <h3 className="text-base font-medium text-foreground">
              Kein Kreativwerkzeug für freie Textproduktion
            </h3>
            <p className="mt-1 text-muted-foreground">
              Der Fokus liegt auf Verlässlichkeit, Nachvollziehbarkeit und
              Konsistenz – nicht auf Originalität oder stilistische Variation.
            </p>
          </div>
        </div>

        {/* Abschlusssatz */}
        <p className="mt-10 text-base font-medium text-foreground md:mt-12 md:text-lg">
          Struktora ist dort sinnvoll, wo Arbeit wiederkehrend anfällt und
          verlässlich funktionieren muss.
        </p>
      </div>
    </section>
  );
};

