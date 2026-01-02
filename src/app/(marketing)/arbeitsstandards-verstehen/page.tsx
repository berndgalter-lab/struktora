export default function ArbeitsstandardsVerstehenPage() {
  return (
    <main>
      {/* 1. HERO */}
      <section className="bg-background py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
            Was wir unter Arbeitsstandards für KI-Arbeit verstehen
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Arbeitsstandards machen KI-Arbeit im Unternehmen reproduzierbar,
            überprüfbar und unabhängig vom einzelnen Mitarbeiter.
          </p>
        </div>
      </section>

      {/* 2. DEFINITION */}
      <section className="bg-muted/20 py-16 md:py-20">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-xl font-semibold text-foreground md:text-2xl">
            Was ein Arbeitsstandard ist – und was nicht
          </h2>
          <p className="mt-6 text-base text-muted-foreground md:text-lg">
            Ein Arbeitsstandard ist kein Prompt, kein Textbaustein und kein
            KI-Trick.
          </p>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Er beschreibt einen klar definierten Ablauf für eine konkrete,
            wiederkehrende Aufgabe – mit festen Eingaben, klaren Regeln und
            einem überprüfbaren Ergebnis.
          </p>
          <p className="mt-4 text-base font-medium text-foreground md:text-lg">
            Ziel eines Arbeitsstandards ist nicht Kreativität, sondern
            Verlässlichkeit.
          </p>
        </div>
      </section>

      {/* 3. ABGRENZUNG */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-xl font-semibold text-foreground md:text-2xl">
            Individuelle KI-Nutzung vs. Arbeitsstandard
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            {/* Links */}
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Individuelle KI-Nutzung
              </h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>– Freie Prompts</li>
                <li>– Unterschiedliche Ergebnisse</li>
                <li>– Abhängigkeit vom Mitarbeiter</li>
                <li>– Implizite Entscheidungen</li>
                <li>– Hoher Abstimmungsaufwand</li>
              </ul>
            </div>

            {/* Rechts */}
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Arbeitsstandard
              </h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>– Feste Eingabefelder</li>
                <li>– Reproduzierbare Ergebnisse</li>
                <li>– Unabhängig vom Mitarbeiter</li>
                <li>– Explizite Regeln</li>
                <li>– Klarer Ablauf</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ANATOMIE */}
      <section className="bg-muted/20 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-xl font-semibold text-foreground md:text-2xl">
            Aus welchen Bausteinen ein Arbeitsstandard besteht
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-5">
            <div>
              <h3 className="text-base font-medium text-foreground">
                Zweck der Aufgabe
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Was soll erreicht werden – klar und eindeutig.
              </p>
            </div>

            <div>
              <h3 className="text-base font-medium text-foreground">
                Eingang & Kontext
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Welche Informationen sind zwingend notwendig.
              </p>
            </div>

            <div>
              <h3 className="text-base font-medium text-foreground">
                Entscheidungslogik
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Welche Aspekte werden berücksichtigt – und welche bewusst nicht.
              </p>
            </div>

            <div>
              <h3 className="text-base font-medium text-foreground">
                Ablauf & Reihenfolge
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                In welchen festen Schritten die Aufgabe bearbeitet wird.
              </p>
            </div>

            <div>
              <h3 className="text-base font-medium text-foreground">
                Ergebnis & Verantwortung
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Was gilt als korrektes Ergebnis – und wer dafür verantwortlich
                ist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MINI-BEISPIEL */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-xl font-semibold text-foreground md:text-2xl">
            Ein Arbeitsstandard – vereinfacht dargestellt
          </h2>
          <p className="mt-6 text-base text-muted-foreground">
            Beispiel: Kundenanfrage beantworten
          </p>

          <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Ohne Arbeitsstandard
              </h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>– Mitarbeiter interpretiert selbst</li>
                <li>– Ton und Inhalt variieren</li>
                <li>– Qualität schwer vergleichbar</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-foreground">
                Mit Arbeitsstandard
              </h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>– Eingaben sind definiert</li>
                <li>– Tonalität ist festgelegt</li>
                <li>– Ablauf ist vorgegeben</li>
                <li>– Ergebnis ist überprüfbar</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ABSCHLUSS */}
      <section className="bg-muted/20 py-16 md:py-20">
        <div className="mx-auto max-w-2xl px-4">
          <p className="text-base text-muted-foreground md:text-lg">
            Arbeitsstandards sind kein neues Tool und kein zusätzliches System.
          </p>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Sie ersetzen keine Mitarbeiter und keine bestehende Software.
          </p>
          <p className="mt-4 text-base font-medium text-foreground md:text-lg">
            Sie ersetzen individuelle Entscheidungen durch einen klar
            definierten Rahmen – für wiederkehrende Aufgaben, die im Alltag
            verlässlich funktionieren müssen.
          </p>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <a
            href="/beispiel"
            className="inline-flex items-center justify-center rounded-md bg-foreground px-6 py-3 text-base font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Beispiel aus dem Arbeitsalltag ansehen
          </a>
        </div>
      </section>
    </main>
  );
}

