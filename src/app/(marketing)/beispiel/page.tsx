export default function BeispielMaschinenbauPage() {
  return (
    <main>
      {/* SECTION 1 – EINSTIEG */}
      <section className="bg-background py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
            Beispiel aus dem Arbeitsalltag: Kundenanfragen im Maschinenbau
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            In technischen Unternehmen gehen täglich ähnliche Kundenanfragen
            ein: Lieferzeiten, Ersatzteile, Angebotsdetails oder technische
            Rückfragen. Oft werden diese Anfragen von mehreren Mitarbeitern
            parallel bearbeitet – mit unterschiedlichen Ergebnissen.
          </p>
        </div>
      </section>

      {/* SECTION 2 – AUSGANGSSITUATION */}
      <section className="bg-muted/20 py-16 md:py-20">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-xl font-semibold text-foreground md:text-2xl">
            Ausgangssituation ohne Arbeitsstandard
          </h2>
          <p className="mt-6 text-base text-muted-foreground md:text-lg">
            Jede eingehende Anfrage wird vom jeweiligen Mitarbeiter individuell
            interpretiert, formuliert und beantwortet. Ton, Detailtiefe und
            technische Genauigkeit hängen von Erfahrung, Tagesform und
            persönlichem Stil ab.
          </p>
          <ul className="mt-6 space-y-3 text-base text-muted-foreground">
            <li>– 10–15 Minuten Bearbeitungszeit pro Anfrage</li>
            <li>– Unterschiedliche Aussagen bei gleichen Fragen</li>
            <li>– Rückfragen zwischen Vertrieb und Technik</li>
            <li>– Korrekturschleifen wegen uneinheitlicher Formulierungen</li>
            <li>– Verantwortung liegt implizit beim Mitarbeiter</li>
          </ul>
        </div>
      </section>

      {/* SECTION 3 – DER ARBEITSSTANDARD */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-xl font-semibold text-foreground md:text-2xl">
            Der Arbeitsstandard für Kundenanfragen
          </h2>
          <p className="mt-6 text-base text-muted-foreground md:text-lg">
            Statt individueller Formulierungen wird ein fester Arbeitsstandard
            verwendet.
          </p>

          <div className="mt-8 rounded-lg bg-muted/30 p-6 md:p-8">
            <p className="text-base font-medium text-foreground">
              Der Arbeitsstandard definiert:
            </p>
            <ul className="mt-4 space-y-2 text-base text-muted-foreground">
              <li>
                – Eingabefelder: Maschinentyp, Anfrageart, Lieferstatus, interne
                Vorgaben
              </li>
              <li>
                – Regeln: Tonalität, technische Tiefe, Freigaben,
                Formulierungsrahmen
              </li>
              <li>
                – Ablauf: Feste Reihenfolge von Prüfung, Antwortaufbau und
                Freigabe
              </li>
              <li>
                – Ergebnis: Einheitliche, überprüfbare Antwort im
                Unternehmensstil
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 4 – ABLAUF */}
      <section className="bg-muted/20 py-16 md:py-20">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-xl font-semibold text-foreground md:text-2xl">
            So läuft die Bearbeitung mit Arbeitsstandard ab
          </h2>

          <div className="mt-10 space-y-8">
            <div className="flex items-start gap-5">
              <span className="w-12 shrink-0 font-mono text-2xl leading-none text-muted-foreground/30 md:text-3xl">
                01
              </span>
              <div>
                <h3 className="text-base font-medium text-foreground">
                  Anfrage erfassen
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Relevante Informationen werden in die vorgesehenen Felder
                  übernommen.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <span className="w-12 shrink-0 font-mono text-2xl leading-none text-muted-foreground/30 md:text-3xl">
                02
              </span>
              <div>
                <h3 className="text-base font-medium text-foreground">
                  Kontext prüfen
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Maschinentyp, Lieferstatus und interne Vorgaben sind klar
                  definiert.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <span className="w-12 shrink-0 font-mono text-2xl leading-none text-muted-foreground/30 md:text-3xl">
                03
              </span>
              <div>
                <h3 className="text-base font-medium text-foreground">
                  Standard ausführen
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Die Antwort entsteht entlang des festgelegten Ablaufs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <span className="w-12 shrink-0 font-mono text-2xl leading-none text-muted-foreground/30 md:text-3xl">
                04
              </span>
              <div>
                <h3 className="text-base font-medium text-foreground">
                  Ergebnis verwenden
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Die Antwort ist konsistent, nachvollziehbar und sofort
                  nutzbar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 – ERGEBNIS */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-xl font-semibold text-foreground md:text-2xl">
            Ergebnis im Arbeitsalltag
          </h2>
          <ul className="mt-6 space-y-3 text-base text-muted-foreground">
            <li>– 2–4 Minuten Bearbeitungszeit pro Anfrage</li>
            <li>– Einheitliche Aussagen gegenüber Kunden</li>
            <li>– Weniger Rückfragen zwischen Vertrieb und Technik</li>
            <li>– Klar zuordenbare Verantwortung im Prozess</li>
          </ul>
          <p className="mt-8 text-base font-medium text-foreground md:text-lg">
            Der Mitarbeiter entscheidet nicht mehr, wie formuliert wird –
            sondern stellt sicher, dass der Standard korrekt ausgeführt wird.
          </p>
        </div>
      </section>

      {/* SECTION 6 – EINORDNUNG */}
      <section className="bg-muted/20 py-16 md:py-20">
        <div className="mx-auto max-w-2xl px-4">
          <p className="text-base text-muted-foreground md:text-lg">
            Dieses Beispiel steht stellvertretend für viele wiederkehrende
            Aufgaben im technischen Arbeitsalltag. Überall dort, wo ähnliche
            Anfragen regelmäßig auftreten, kann ein Arbeitsstandard individuelle
            Entscheidungen ersetzen.
          </p>
        </div>
      </section>

      {/* SECTION 7 – CTA */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-xl font-semibold text-foreground md:text-2xl">
            Passt ein Arbeitsstandard zu Ihrer Aufgabe?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
            Im nächsten Schritt schauen wir gemeinsam auf eine konkrete Aufgabe
            aus Ihrem Arbeitsalltag und prüfen, ob ein Arbeitsstandard sinnvoll
            ist.
          </p>
          <a
            href="mailto:hallo@struktora.com"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-foreground px-6 py-3 text-base font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Arbeitsstandard prüfen lassen
          </a>
        </div>
      </section>
    </main>
  );
}

