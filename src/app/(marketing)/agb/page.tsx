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

        <h1 className="mb-2 text-3xl font-bold text-slate-900">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>
        <p className="mb-8 text-sm text-slate-500">Stand: Dezember 2025</p>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 1 Geltungsbereich
            </h2>
            <p>
              (1) Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung 
              der Plattform Struktora (struktora.com), betrieben von BG Online Media 
              (haftungsbeschränkt), Grünwiesenstraße 33, 74321 Bietigheim-Bissingen.
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
              (1) Struktora ist eine Software-as-a-Service (SaaS) Plattform für 
              KI-gestützte Workflows zur Texterstellung und -bearbeitung.
            </p>
            <p className="mt-4">
              (2) Der Funktionsumfang richtet sich nach dem jeweils gewählten 
              Tarif (Starter, Team, Business).
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 3 Vertragsschluss und Registrierung
            </h2>
            <p>
              (1) Die Registrierung setzt die Vollendung des 18. Lebensjahres voraus.
            </p>
            <p className="mt-4">
              (2) Mit der Registrierung gibst du ein Angebot zum Vertragsschluss ab. 
              Der Vertrag kommt mit unserer Bestätigung zustande.
            </p>
            <p className="mt-4">
              (3) Du bist verpflichtet, wahrheitsgemäße Angaben zu machen und deine 
              Zugangsdaten geheim zu halten.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 4 Testphase
            </h2>
            <p>
              (1) Wir bieten eine kostenlose Testphase von 14 Tagen an.
            </p>
            <p className="mt-4">
              (2) Die Testphase endet automatisch. Eine automatische Umwandlung 
              in ein kostenpflichtiges Abonnement erfolgt nicht.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 5 Preise und Zahlung
            </h2>
            <p>
              (1) Die aktuellen Preise sind auf unserer Website einsehbar. Alle 
              Preise verstehen sich zzgl. der gesetzlichen Mehrwertsteuer.
            </p>
            <p className="mt-4">
              (2) Die Zahlung erfolgt über unseren Zahlungsdienstleister LemonSqueezy. 
              Es gelten zusätzlich dessen Nutzungsbedingungen.
            </p>
            <p className="mt-4">
              (3) Abonnements verlängern sich automatisch um den jeweiligen 
              Abrechnungszeitraum, sofern nicht gekündigt wird.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 6 Nutzungsrechte
            </h2>
            <p>
              (1) Mit Vertragsschluss erhältst du ein einfaches, nicht übertragbares 
              Recht zur Nutzung der Plattform.
            </p>
            <p className="mt-4">
              (2) Eine Unterlizenzierung oder Weitergabe des Accounts ist nicht gestattet.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 7 Pflichten des Nutzers
            </h2>
            <p>
              (1) Du verpflichtest dich, die Plattform nicht für rechtswidrige 
              Zwecke zu nutzen.
            </p>
            <p className="mt-4">(2) Insbesondere ist untersagt:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Die Generierung rechtswidriger, beleidigender oder diskriminierender Inhalte</li>
              <li>Die systematische Umgehung von Nutzungslimits</li>
              <li>Die Weitergabe von Zugangsdaten an Dritte</li>
            </ul>
            <p className="mt-4">
              (3) Bei Verstößen behalten wir uns die sofortige Sperrung des Accounts vor.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 8 KI-generierte Inhalte
            </h2>
            <p>
              (1) Die Plattform nutzt KI-Modelle zur Texterstellung. Die Ergebnisse 
              können fehlerhaft oder unvollständig sein.
            </p>
            <p className="mt-4">
              (2) Du bist für die Prüfung und Verwendung der generierten Inhalte 
              selbst verantwortlich.
            </p>
            <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
              <p className="font-medium text-amber-900">
                (3) Wir übernehmen keine Haftung für die Richtigkeit, Vollständigkeit 
                oder Eignung der KI-generierten Inhalte.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 9 Kündigung
            </h2>
            <p>
              (1) Du kannst dein Abonnement jederzeit zum Ende des aktuellen 
              Abrechnungszeitraums kündigen.
            </p>
            <p className="mt-4">
              (2) Die Kündigung ist über die Account-Einstellungen oder per E-Mail möglich.
            </p>
            <p className="mt-4">
              (3) Bereits gezahlte Beträge für den laufenden Abrechnungszeitraum 
              werden nicht erstattet.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 10 Haftung
            </h2>
            <p>
              (1) Wir haften unbeschränkt für Schäden aus der Verletzung des Lebens, 
              des Körpers oder der Gesundheit sowie für Vorsatz und grobe Fahrlässigkeit.
            </p>
            <p className="mt-4">
              (2) Für leichte Fahrlässigkeit haften wir nur bei Verletzung wesentlicher 
              Vertragspflichten. In diesem Fall ist die Haftung auf den vorhersehbaren, 
              vertragstypischen Schaden begrenzt.
            </p>
            <p className="mt-4">
              (3) Die Haftung ist in jedem Fall begrenzt auf die von dir in den 
              letzten 12 Monaten gezahlten Beträge.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 11 Verfügbarkeit
            </h2>
            <p>
              (1) Wir bemühen uns um eine hohe Verfügbarkeit der Plattform, können 
              diese jedoch nicht garantieren.
            </p>
            <p className="mt-4">
              (2) Wartungsarbeiten werden nach Möglichkeit angekündigt.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 12 Änderungen der AGB
            </h2>
            <p>
              (1) Wir behalten uns vor, diese AGB mit einer Ankündigungsfrist von 
              30 Tagen zu ändern.
            </p>
            <p className="mt-4">
              (2) Du wirst über Änderungen per E-Mail informiert. Widersprichst du 
              nicht innerhalb von 30 Tagen, gelten die geänderten AGB als akzeptiert.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 13 Schlussbestimmungen
            </h2>
            <p>
              (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss 
              des UN-Kaufrechts.
            </p>
            <p className="mt-4">
              (2) Gerichtsstand ist, soweit gesetzlich zulässig, Stuttgart.
            </p>
            <p className="mt-4">
              (3) Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit 
              der übrigen Bestimmungen unberührt.
            </p>
          </section>
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
