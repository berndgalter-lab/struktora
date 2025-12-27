import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-4">
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

        <div className="space-y-10 text-slate-700 leading-relaxed">
          {/* § 1 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 1 Geltungsbereich
            </h2>
            <p>
              (1) Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung 
              der Plattform Struktora (struktora.com), betrieben von:
            </p>
            <div className="mt-4">
              <p className="font-semibold">BG Online Media (haftungsbeschränkt)</p>
              <p className="mt-1">
                Grünwiesenstraße 33
                <br />
                74321 Bietigheim-Bissingen
                <br />
                Deutschland
              </p>
            </div>
            <p className="mt-4">
              (2) Diese AGB gelten sowohl für Verbraucher als auch für Unternehmer, 
              sofern nicht ausdrücklich unterschieden wird.
            </p>
            <p className="mt-4">
              (3) Verbraucher im Sinne dieser AGB ist jede natürliche Person, die ein 
              Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen 
              noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können (§ 13 BGB).
            </p>
            <p className="mt-4">
              (4) Unternehmer im Sinne dieser AGB ist jede natürliche oder juristische Person 
              oder rechtsfähige Personengesellschaft, die bei Abschluss des Rechtsgeschäfts 
              in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit 
              handelt (§ 14 BGB).
            </p>
            <p className="mt-4">
              (5) Abweichende Bedingungen des Nutzers werden nicht anerkannt, es sei denn, 
              wir stimmen ihrer Geltung ausdrücklich schriftlich zu.
            </p>
          </section>

          {/* § 2 */}
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
              Tarif (Starter, Team, Business). Die aktuellen Leistungsmerkmale 
              sind auf unserer Website einsehbar.
            </p>
            <p className="mt-4">
              (3) Wir behalten uns vor, die Plattform weiterzuentwickeln und zu verbessern, 
              soweit dies für den Nutzer zumutbar ist und den Vertragszweck nicht 
              wesentlich beeinträchtigt.
            </p>
          </section>

          {/* § 3 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 3 Vertragsschluss und Registrierung
            </h2>
            <p>
              (1) Die Registrierung setzt die Vollendung des 18. Lebensjahres voraus.
            </p>
            <p className="mt-4">
              (2) Die Darstellung unserer Leistungen auf der Website stellt kein rechtlich 
              bindendes Angebot dar. Mit der Registrierung gibst du ein Angebot zum 
              Vertragsschluss ab. Der Vertrag kommt mit unserer Bestätigungsmail zustande.
            </p>
            <p className="mt-4">
              (3) Du bist verpflichtet, wahrheitsgemäße Angaben zu machen und deine 
              Zugangsdaten geheim zu halten. Für die unbefugte Nutzung durch Dritte 
              haftest du nur, wenn du diese zu vertreten hast.
            </p>
          </section>

          {/* § 4 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 4 Kostenlose Testphase
            </h2>
            <p>
              (1) Wir bieten eine kostenlose Testphase von 14 Tagen an.
            </p>
            <p className="mt-4">
              (2) Die Testphase endet automatisch nach 14 Tagen.{" "}
              <strong>
                Es erfolgt keine automatische Umwandlung in ein kostenpflichtiges Abonnement.
              </strong>
            </p>
            <p className="mt-4">
              (3) Um nach der Testphase ein kostenpflichtiges Abonnement abzuschließen, 
              musst du aktiv einen Tarif auswählen und den Bestellvorgang abschließen.
            </p>
            <p className="mt-4">
              (4) Nach Ablauf der Testphase ohne aktives Upgrade wird dein Zugang zu 
              den Premium-Funktionen eingeschränkt.
            </p>
          </section>

          {/* § 5 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 5 Preise und Zahlung
            </h2>
            <p>
              (1) Die aktuellen Preise sind auf unserer Website einsehbar.{" "}
              <strong>Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer.</strong>
            </p>
            <p className="mt-4">
              (2) Die Zahlung erfolgt über unseren Zahlungsdienstleister LemonSqueezy. 
              Es gelten zusätzlich dessen Nutzungsbedingungen.
            </p>
            <p className="mt-4">
              (3) <strong>Kostenpflichtige Abonnements</strong> beginnen erst nach aktivem 
              Abschluss durch den Nutzer. Mit dem Abschluss eines kostenpflichtigen 
              Abonnements autorisierst du uns, die Zahlung über den gewählten 
              Zahlungsweg einzuziehen.
            </p>
            <p className="mt-4">
              (4) Abonnements verlängern sich automatisch um den jeweiligen 
              Abrechnungszeitraum (Monat), sofern nicht gemäß § 9 gekündigt wird.
            </p>
            <p className="mt-4">
              (5) Die Zahlungsabwicklung und Abonnementverwaltung erfolgen über 
              Lemon Squeezy, LLC. LemonSqueezy kann im Rahmen des Bestellvorgangs 
              als Wiederverkäufer (Merchant of Record) auftreten und stellt in diesem 
              Fall die Rechnung aus sowie führt anfallende Steuern ab. Unabhängig 
              davon ist Vertragspartner für die Nutzung der Plattform Struktora die 
              BG Online Media (haftungsbeschränkt).
            </p>
          </section>

          {/* § 6 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 6 Widerrufsrecht für Verbraucher
            </h2>
            <p>
              (1) Wenn du Verbraucher bist, steht dir ein gesetzliches Widerrufsrecht zu. 
              Die vollständige Widerrufsbelehrung und das Muster-Widerrufsformular findest du unter:{" "}
              <Link href="/widerruf" className="text-blue-600 hover:underline">
                struktora.com/widerruf
              </Link>
            </p>
            <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
              <p className="font-medium text-amber-900">
                (2) Besonderer Hinweis bei digitalen Inhalten:
              </p>
              <p className="mt-2 text-amber-800">
                Das Widerrufsrecht erlischt vorzeitig, wenn wir mit der Ausführung des 
                Vertrags begonnen haben, nachdem du:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2 text-amber-800">
                <li>
                  ausdrücklich zugestimmt hast, dass wir mit der Ausführung vor 
                  Ablauf der Widerrufsfrist beginnen, und
                </li>
                <li>
                  deine Kenntnis davon bestätigt hast, dass du durch diese Zustimmung 
                  dein Widerrufsrecht verlierst.
                </li>
              </ul>
            </div>
            <p className="mt-4">
              (3) Diese Zustimmung wird im Rahmen des Bestellvorgangs eingeholt.
            </p>
            <p className="mt-4">
              (4) Sofern der Vertrag über LemonSqueezy abgewickelt wird, erfolgt die 
              technische Abwicklung des Widerrufs und etwaiger Rückerstattungen über 
              LemonSqueezy. Deine gesetzlichen Rechte bleiben hiervon unberührt.
            </p>
          </section>

          {/* § 7 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 7 Nutzungsrechte
            </h2>
            <p>
              (1) Mit Vertragsschluss erhältst du ein einfaches, nicht übertragbares, 
              nicht unterlizenzierbares Recht zur Nutzung der Plattform für die 
              Dauer des Vertragsverhältnisses.
            </p>
            <p className="mt-4">
              (2) Eine Weitergabe des Accounts an Dritte ist nicht gestattet.
            </p>
            <p className="mt-4">
              (3) Die im Rahmen der Nutzung generierten Inhalte darfst du für 
              eigene Zwecke frei verwenden.
            </p>
          </section>

          {/* § 8 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 8 Pflichten des Nutzers
            </h2>
            <p>
              (1) Du verpflichtest dich, die Plattform nicht für rechtswidrige Zwecke zu nutzen.
            </p>
            <p className="mt-4">(2) Insbesondere ist untersagt:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>
                Die Generierung rechtswidriger, beleidigender, diskriminierender 
                oder gewaltverherrlichender Inhalte
              </li>
              <li>Die systematische Umgehung von Nutzungslimits</li>
              <li>Die Weitergabe von Zugangsdaten an Dritte</li>
              <li>Automatisierte Massenabfragen ohne unsere Zustimmung</li>
            </ul>
            <p className="mt-4">
              (3) Bei schwerwiegenden oder wiederholten Verstößen behalten wir uns 
              die Sperrung des Accounts nach vorheriger Abmahnung vor. Bei besonders 
              schweren Verstößen (z.B. Straftaten) ist eine sofortige Sperrung möglich.
            </p>
          </section>

          {/* § 9 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 9 Kündigung
            </h2>
            <p>
              (1) Du kannst dein kostenpflichtiges Abonnement jederzeit zum Ende 
              des aktuellen Abrechnungszeitraums kündigen.
            </p>
            <p className="mt-4">(2) Die Kündigung ist möglich:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>über die Account-Einstellungen</li>
              <li>per E-Mail an support@struktora.com</li>
            </ul>
            <p className="mt-4">
              (3) Nach der Kündigung kannst du die Plattform bis zum Ende des 
              bezahlten Zeitraums weiter nutzen.
            </p>
            <p className="mt-4">
              (4) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund 
              bleibt unberührt.
            </p>
          </section>

          {/* § 10 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 10 KI-generierte Inhalte
            </h2>
            <p>
              (1) Die Plattform nutzt KI-Modelle zur Texterstellung. Die Ergebnisse 
              werden automatisiert generiert und können fehlerhaft, unvollständig 
              oder ungeeignet sein.
            </p>
            <div className="mt-4 rounded-lg border border-slate-300 bg-slate-50 p-4">
              <p className="font-medium text-slate-900">
                (2) Du bist für die Prüfung und Verwendung der generierten Inhalte 
                selbst verantwortlich.
              </p>
              <p className="mt-2 text-slate-700">
                Insbesondere solltest du die Inhalte vor der Verwendung auf Richtigkeit, 
                Angemessenheit und rechtliche Zulässigkeit prüfen.
              </p>
            </div>
            <p className="mt-4">
              (3) Die generierten Inhalte stellen keine Rechts-, Steuer- oder 
              sonstige fachliche Beratung dar.
            </p>
          </section>

          {/* § 11 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 11 Haftung
            </h2>
            <p>
              (1) Wir haften unbeschränkt für Schäden aus der Verletzung des Lebens, 
              des Körpers oder der Gesundheit, die auf einer Pflichtverletzung von 
              uns oder unserer gesetzlichen Vertreter oder Erfüllungsgehilfen beruhen.
            </p>
            <p className="mt-4">
              (2) Wir haften unbeschränkt für Schäden, die auf Vorsatz oder grober 
              Fahrlässigkeit von uns oder unserer gesetzlichen Vertreter oder 
              Erfüllungsgehilfen beruhen.
            </p>
            <p className="mt-4">
              (3) Bei leichter Fahrlässigkeit haften wir nur bei Verletzung wesentlicher 
              Vertragspflichten (Kardinalpflichten). Wesentliche Vertragspflichten sind 
              solche, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags 
              überhaupt erst ermöglicht und auf deren Einhaltung du regelmäßig vertrauen 
              darfst. In diesem Fall ist die Haftung auf den vorhersehbaren, 
              vertragstypischen Schaden begrenzt.
            </p>
            <p className="mt-4">
              (4) Die Haftung nach dem Produkthaftungsgesetz bleibt unberührt.
            </p>
            <p className="mt-4">
              (5) <strong>Für die Inhalte der KI-generierten Texte übernehmen wir keine 
              Haftung</strong>, da diese automatisiert erstellt werden und wir keinen 
              Einfluss auf das konkrete Ergebnis haben. Die Nutzung erfolgt auf 
              eigene Verantwortung.
            </p>
          </section>

          {/* § 12 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 12 Verfügbarkeit
            </h2>
            <p>
              (1) Wir bemühen uns um eine hohe Verfügbarkeit der Plattform. 
              Eine bestimmte Verfügbarkeit wird jedoch nicht garantiert.
            </p>
            <p className="mt-4">
              (2) Wartungsarbeiten werden nach Möglichkeit angekündigt und in 
              nutzungsarme Zeiten gelegt.
            </p>
            <p className="mt-4">
              (3) Wir haften nicht für Ausfälle, die auf höherer Gewalt, Störungen 
              bei Dritten (z.B. Hosting-Anbieter, KI-Dienstleister) oder vom Nutzer 
              zu vertretenden Umständen beruhen.
            </p>
          </section>

          {/* § 13 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 13 Änderungen dieser AGB
            </h2>
            <p>
              (1) Wir behalten uns vor, diese AGB zu ändern, soweit dies erforderlich ist, um:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>geänderten gesetzlichen Anforderungen zu entsprechen</li>
              <li>höchstrichterlicher Rechtsprechung Rechnung zu tragen</li>
              <li>neue Funktionen oder Dienste einzuführen</li>
            </ul>
            <p className="mt-4">
              (2) Über Änderungen informieren wir dich mindestens 30 Tage vor 
              Inkrafttreten per E-Mail. Die Änderungen werden im Detail dargestellt.
            </p>
            <p className="mt-4">
              (3) <strong>Du hast das Recht, den Änderungen innerhalb von 30 Tagen 
              zu widersprechen.</strong> Im Falle eines Widerspruchs steht dir ein 
              Sonderkündigungsrecht zum Zeitpunkt des Inkrafttretens der Änderungen zu.
            </p>
            <p className="mt-4">
              (4) Erfolgt innerhalb der Frist kein Widerspruch, gelten die Änderungen 
              als akzeptiert. Auf diese Rechtsfolge weisen wir dich in der 
              Änderungsmitteilung gesondert hin.
            </p>
            <p className="mt-4">
              (5) Wesentliche Änderungen, die das Vertragsverhältnis erheblich zu 
              deinem Nachteil verändern, bedürfen deiner ausdrücklichen Zustimmung.
            </p>
          </section>

          {/* § 14 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 14 Schlussbestimmungen
            </h2>
            <p>
              (1) Es gilt das Recht der Bundesrepublik Deutschland unter 
              Ausschluss des UN-Kaufrechts.
            </p>
            <p className="mt-4">
              (2) Für Verbraucher gilt: Die Rechtswahl führt nicht dazu, dass dir 
              der Schutz entzogen wird, der dir durch zwingende Bestimmungen des 
              Rechts deines gewöhnlichen Aufenthaltsorts gewährt wird.
            </p>
            <p className="mt-4">
              (3) <strong>Gerichtsstand:</strong> Für Streitigkeiten mit Unternehmern 
              ist Gerichtsstand Stuttgart, soweit gesetzlich zulässig. Für Verbraucher 
              gelten die gesetzlichen Gerichtsstände.
            </p>
            <p className="mt-4">
              (4) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, 
              bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
            </p>
            <p className="mt-4">
              (5) Die Vertragssprache ist Deutsch.
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
