import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Startseite
        </Link>

        <h1 className="mb-8 text-3xl font-bold text-slate-900">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 1 Geltungsbereich
            </h2>
            <p>
              (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die
              Nutzung der SaaS-Plattform „Struktora" (erreichbar unter
              struktora.com), betrieben von:
            </p>
            <p className="mt-4">
              BG Online Media (haftungsbeschränkt)
              <br />
              Grünwiesenstraße 33
              <br />
              74321 Bietigheim-Bissingen
              <br />
              Deutschland
            </p>
            <p className="mt-4">
              (2) Abweichende Bedingungen des Nutzers werden nicht anerkannt, es
              sei denn, wir stimmen ihrer Geltung ausdrücklich schriftlich zu.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 2 Vertragsgegenstand
            </h2>
            <p>
              (1) Struktora ist eine SaaS-Plattform, die KI-gestützte Workflows
              („Recipes") für die Erstellung von Geschäftstexten bereitstellt.
            </p>
            <p className="mt-4">(2) Der Leistungsumfang umfasst:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Zugang zu strukturierten KI-Workflows</li>
              <li>Generierung von Texten mittels künstlicher Intelligenz</li>
              <li>Team-Funktionen zur gemeinsamen Nutzung</li>
              <li>Firmenprofil und Kommunikations-Policy-Einstellungen</li>
            </ul>
            <p className="mt-4">
              (3) Wir bieten verschiedene Tarife an (Starter, Team, Business), die
              sich im Funktionsumfang und in den enthaltenen Generierungen
              unterscheiden.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 3 Registrierung und Nutzerkonto
            </h2>
            <p>
              (1) Für die Nutzung von Struktora ist eine Registrierung
              erforderlich.
            </p>
            <p className="mt-4">(2) Bei der Registrierung verpflichtet sich der Nutzer:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Wahrheitsgemäße und vollständige Angaben zu machen</li>
              <li>Das Mindestalter von 18 Jahren erreicht zu haben</li>
              <li>Pro Person oder Unternehmen nur einen Account anzulegen</li>
              <li>Die Zugangsdaten geheim zu halten und vor Dritten zu schützen</li>
            </ul>
            <p className="mt-4">
              (3) Der Nutzer haftet für alle Aktivitäten, die unter seinem Account
              erfolgen.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 4 Leistungsbeschreibung
            </h2>
            <p>
              (1) Neue Nutzer erhalten einen kostenlosen Testzeitraum von 14
              Tagen.
            </p>
            <p className="mt-4">
              (2) Die Anzahl der verfügbaren Generierungen richtet sich nach dem
              gewählten Tarif.
            </p>
            <p className="mt-4">
              (3) Wir bemühen uns um eine hohe Verfügbarkeit des Dienstes, können
              jedoch keine Garantie für eine unterbrechungsfreie Nutzung geben.
              Angestrebt wird eine Verfügbarkeit von 99%.
            </p>
            <p className="mt-4">
              (4) Wartungsarbeiten werden nach Möglichkeit vorab angekündigt und
              in nutzungsarmen Zeiten durchgeführt.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 5 Preise und Zahlung
            </h2>
            <p>
              (1) Die aktuellen Preise sind auf unserer Website einsehbar. Alle
              Preise verstehen sich in Euro zuzüglich der gesetzlichen
              Mehrwertsteuer.
            </p>
            <p className="mt-4">(2) Die Abrechnung erfolgt monatlich im Voraus.</p>
            <p className="mt-4">
              (3) Die Zahlung erfolgt über unseren Zahlungsdienstleister
              LemonSqueezy. Es gelten dessen Zahlungsbedingungen.
            </p>
            <p className="mt-4">
              (4) Das Abonnement verlängert sich automatisch um den jeweiligen
              Abrechnungszeitraum, sofern es nicht gekündigt wird.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 6 Kündigung
            </h2>
            <p>
              (1) Das Abonnement kann jederzeit zum Ende des aktuellen
              Abrechnungszeitraums gekündigt werden.
            </p>
            <p className="mt-4">
              (2) Die Kündigung erfolgt über die Account-Einstellungen oder per
              E-Mail an support@struktora.com.
            </p>
            <p className="mt-4">
              (3) Bereits gezahlte Beträge für den laufenden Abrechnungszeitraum
              werden nicht anteilig erstattet.
            </p>
            <p className="mt-4">
              (4) Nach der Kündigung bleibt der Zugang bis zum Ende des bezahlten
              Zeitraums aktiv.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 7 Nutzungsrechte
            </h2>
            <p>
              (1) Mit Abschluss des Vertrags erhält der Nutzer ein einfaches,
              nicht übertragbares Recht zur Nutzung von Struktora für die Dauer
              des Vertragsverhältnisses.
            </p>
            <p className="mt-4">
              (2) Die generierten Inhalte darf der Nutzer frei für geschäftliche
              und private Zwecke verwenden.
            </p>
            <p className="mt-4">(3) Nicht gestattet ist:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Die Weitergabe des Accounts an Dritte</li>
              <li>
                Das Reverse Engineering, Dekompilieren oder Disassemblieren der
                Software
              </li>
              <li>Die Nutzung für automatisierte Massenverarbeitung</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 8 Verbotene Nutzung
            </h2>
            <p>Folgende Nutzungen sind untersagt:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-4">
              <li>
                Erstellung illegaler, beleidigender, diskriminierender oder
                anderweitig rechtswidriger Inhalte
              </li>
              <li>Spam oder Massenversand von generierten Inhalten</li>
              <li>Umgehung von Nutzungslimits oder technischen Schutzmaßnahmen</li>
              <li>Weitergabe von API-Zugängen oder Integrations-Tokens</li>
              <li>Nutzung, die den Dienst oder andere Nutzer beeinträchtigt</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 9 Haftung
            </h2>
            <p>
              (1) Wir haften unbeschränkt bei Vorsatz und grober Fahrlässigkeit.
            </p>
            <p className="mt-4">
              (2) Bei leichter Fahrlässigkeit haften wir nur bei Verletzung
              wesentlicher Vertragspflichten (Kardinalpflichten). Die Haftung ist
              in diesen Fällen auf den vorhersehbaren, vertragstypischen Schaden
              begrenzt.
            </p>
            <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
              <p className="font-medium text-amber-900">
                (3) Wir übernehmen keine Haftung für die Richtigkeit, Vollständigkeit
                oder Eignung der KI-generierten Inhalte. Der Nutzer ist selbst für
                die Prüfung und Verwendung der Outputs verantwortlich.
              </p>
            </div>
            <p className="mt-4">
              (4) Die maximale Haftungssumme ist auf den Betrag begrenzt, den der
              Nutzer in den letzten 12 Monaten an uns gezahlt hat.
            </p>
            <p className="mt-4">
              (5) Die vorstehenden Haftungsbeschränkungen gelten nicht bei
              Verletzung von Leben, Körper oder Gesundheit.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 10 Datenschutz
            </h2>
            <p>
              Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer{" "}
              <Link href="/datenschutz" className="text-blue-600 hover:underline">
                Datenschutzerklärung
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 11 Änderungen der AGB
            </h2>
            <p>
              (1) Wir behalten uns vor, diese AGB mit Wirkung für die Zukunft zu
              ändern.
            </p>
            <p className="mt-4">
              (2) Änderungen werden dem Nutzer mindestens 30 Tage vor Inkrafttreten
              per E-Mail mitgeteilt.
            </p>
            <p className="mt-4">
              (3) Widerspricht der Nutzer den Änderungen nicht innerhalb von 30
              Tagen nach Zugang der Mitteilung, gelten die Änderungen als
              akzeptiert. Auf diese Rechtsfolge wird in der
              Änderungsmitteilung hingewiesen.
            </p>
            <p className="mt-4">
              (4) Bei Widerspruch haben beide Parteien das Recht, den Vertrag zum
              Änderungszeitpunkt zu kündigen.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 12 Schlussbestimmungen
            </h2>
            <p>
              (1) Es gilt das Recht der Bundesrepublik Deutschland unter
              Ausschluss des UN-Kaufrechts.
            </p>
            <p className="mt-4">
              (2) Sofern der Nutzer Kaufmann, juristische Person des öffentlichen
              Rechts oder öffentlich-rechtliches Sondervermögen ist, ist
              ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem
              Vertrag Stuttgart.
            </p>
            <p className="mt-4">
              (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
              werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
              Anstelle der unwirksamen Bestimmung gilt eine wirksame Bestimmung
              als vereinbart, die dem wirtschaftlichen Zweck der unwirksamen
              Bestimmung am nächsten kommt.
            </p>
          </section>

          <p className="text-sm text-slate-500 pt-4">
            Stand: Dezember 2025
          </p>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}
