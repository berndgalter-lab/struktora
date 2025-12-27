import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DatenschutzPage() {
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
          Datenschutzerklärung
        </h1>
        <p className="mb-8 text-sm text-slate-500">Stand: Dezember 2025</p>

        <div className="space-y-10 text-slate-700 leading-relaxed">
          {/* 1. Verantwortlicher */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              1. Verantwortlicher
            </h2>
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <div className="mt-4">
              <p className="font-semibold">BG Online Media (haftungsbeschränkt)</p>
              <p className="mt-2">
                Grünwiesenstraße 33
                <br />
                74321 Bietigheim-Bissingen
                <br />
                Deutschland
              </p>
              <p className="mt-4">
                E-Mail: support@struktora.com
                <br />
                Telefon: +49 176 22372958
              </p>
            </div>
          </section>

          {/* 2. Übersicht der Verarbeitungen */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              2. Übersicht der Verarbeitungen
            </h2>
            <p>
              Wir verarbeiten personenbezogene Daten nur, soweit dies zur 
              Bereitstellung unserer Plattform erforderlich ist.
            </p>
            
            <h3 className="mt-6 mb-3 text-lg font-medium text-slate-900">
              Verarbeitete Datenkategorien:
            </h3>
            
            <div className="space-y-4">
              <div>
                <p className="font-medium">Bestandsdaten:</p>
                <p className="text-slate-600">Name, E-Mail-Adresse (bei Registrierung)</p>
              </div>
              
              <div>
                <p className="font-medium">Zahlungsdaten:</p>
                <p className="text-slate-600">
                  Werden ausschließlich durch unseren Zahlungsdienstleister verarbeitet
                </p>
              </div>
              
              <div>
                <p className="font-medium">Nutzungsdaten:</p>
                <p className="text-slate-600">
                  Zeitpunkt des Zugriffs, genutzte Funktionen, Anzahl der Generierungen
                </p>
              </div>
              
              <div>
                <p className="font-medium">Technische Daten:</p>
                <p className="text-slate-600">
                  IP-Adresse (anonymisiert), Browsertyp, Betriebssystem, Gerätetyp
                </p>
              </div>
            </div>
            
            <h3 className="mt-6 mb-3 text-lg font-medium text-slate-900">
              Verarbeitung von KI-Anfragen:
            </h3>
            <p>
              Inhalte deiner KI-Anfragen werden ausschließlich zur unmittelbaren 
              Verarbeitung der Anfrage an unseren KI-Dienstleister übermittelt. 
              Die Daten werden:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Nicht dauerhaft bei uns gespeichert</li>
              <li>Nicht für das Training von KI-Modellen verwendet</li>
              <li>Nicht an Dritte weitergegeben</li>
            </ul>
          </section>

          {/* 3. Rechtsgrundlagen und Zwecke */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              3. Rechtsgrundlagen und Zwecke
            </h2>
            <p>Wir verarbeiten deine Daten auf folgenden Rechtsgrundlagen:</p>
            
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-medium text-slate-900">
                  Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO):
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Erstellung und Verwaltung deines Accounts</li>
                  <li>Bereitstellung der KI-Workflows</li>
                  <li>Abwicklung von Zahlungen</li>
                  <li>Kommunikation zu deinem Vertrag</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-slate-900">
                  Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO):
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Gewährleistung der IT-Sicherheit</li>
                  <li>Erkennung und Verhinderung von Missbrauch</li>
                  <li>Analyse der Systemstabilität und Performance</li>
                  <li>Verbesserung unserer Dienste</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-slate-900">
                  Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO):
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Aufbewahrung von Rechnungsdaten (steuerrechtliche Pflichten)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. Empfänger und Auftragsverarbeiter */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              4. Empfänger und Auftragsverarbeiter
            </h2>
            <p>
              Wir arbeiten mit folgenden Dienstleistern zusammen, mit denen 
              Auftragsverarbeitungsverträge (AVV) bzw. EU-Standardvertragsklauseln 
              (SCC) nach Art. 46 Abs. 2 lit. c DSGVO geschlossen wurden:
            </p>
            
            <div className="mt-6 space-y-8">
              {/* Vercel */}
              <div className="rounded-lg border border-slate-200 p-5">
                <h3 className="text-lg font-medium text-slate-900">
                  Hosting und Analytics
                </h3>
                <p className="mt-2 font-semibold">Vercel Inc. (USA)</p>
                <p className="text-sm text-slate-500">
                  340 S Lemon Ave #4133, Walnut, CA 91789, USA
                </p>
                <ul className="mt-3 space-y-1 text-sm">
                  <li><span className="font-medium">Zweck:</span> Hosting der Website, Performance-Analyse</li>
                  <li><span className="font-medium">Datenstandort:</span> Europäische Union</li>
                  <li><span className="font-medium">Übermittlungsgrundlage:</span> EU-Standardvertragsklauseln (SCC)</li>
                  <li><span className="font-medium">Verarbeitete Daten:</span> IP-Adresse (anonymisiert), Gerätedaten, Seitenaufrufe</li>
                </ul>
                <p className="mt-3 text-sm text-slate-600">
                  Vercel Analytics erfasst anonymisierte Nutzungsdaten zur Performance-Optimierung. 
                  Es werden keine Cookies gesetzt und keine personenbezogenen Daten gespeichert.
                </p>
              </div>

              {/* Supabase */}
              <div className="rounded-lg border border-slate-200 p-5">
                <h3 className="text-lg font-medium text-slate-900">
                  Authentifizierung und Datenbank
                </h3>
                <p className="mt-2 font-semibold">Supabase Inc. (USA)</p>
                <p className="text-sm text-slate-500">
                  970 Toa Payoh North #07-04, Singapore 318992
                </p>
                <ul className="mt-3 space-y-1 text-sm">
                  <li><span className="font-medium">Zweck:</span> Nutzerauthentifizierung, Speicherung von Account-Daten</li>
                  <li><span className="font-medium">Datenstandort:</span> Frankfurt, Deutschland (EU)</li>
                  <li><span className="font-medium">Übermittlungsgrundlage:</span> EU-Standardvertragsklauseln (SCC)</li>
                  <li><span className="font-medium">Verarbeitete Daten:</span> E-Mail-Adresse, verschlüsseltes Passwort, Account-Einstellungen</li>
                </ul>
              </div>

              {/* Microsoft Azure */}
              <div className="rounded-lg border border-slate-200 p-5">
                <h3 className="text-lg font-medium text-slate-900">
                  KI-Verarbeitung
                </h3>
                <p className="mt-2 font-semibold">Microsoft Ireland Operations Limited</p>
                <p className="text-sm text-slate-500">
                  One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Ireland
                </p>
                <ul className="mt-3 space-y-1 text-sm">
                  <li><span className="font-medium">Zweck:</span> Verarbeitung von KI-Anfragen</li>
                  <li><span className="font-medium">Datenstandort:</span> Sweden Central (EU)</li>
                  <li><span className="font-medium">Übermittlungsgrundlage:</span> Auftragsverarbeitungsvertrag (DPA), Verarbeitung innerhalb der EU</li>
                  <li><span className="font-medium">Verarbeitete Daten:</span> Inhalte der KI-Anfragen (temporär)</li>
                </ul>
                <div className="mt-3 rounded-lg border border-blue-200 bg-blue-50 p-3">
                  <p className="text-sm font-medium text-blue-900">Wichtig:</p>
                  <p className="mt-1 text-sm text-blue-800">
                    Deine Eingaben werden ausschließlich zur Generierung der Antwort verwendet. 
                    Microsoft speichert diese Daten nicht dauerhaft und verwendet sie nicht für 
                    das Training von KI-Modellen. Es erfolgt kein Zugriff durch Microsoft-Mitarbeiter.
                  </p>
                </div>
              </div>

              {/* LemonSqueezy */}
              <div className="rounded-lg border border-slate-200 p-5">
                <h3 className="text-lg font-medium text-slate-900">
                  Zahlungsabwicklung
                </h3>
                <p className="mt-2 font-semibold">Lemon Squeezy, LLC (USA)</p>
                <p className="text-sm text-slate-500">
                  222 South Main Street, Suite 500, Salt Lake City, UT 84101, USA
                </p>
                <ul className="mt-3 space-y-1 text-sm">
                  <li><span className="font-medium">Zweck:</span> Abonnementverwaltung, Zahlungsabwicklung</li>
                  <li><span className="font-medium">Übermittlungsgrundlage:</span> EU-Standardvertragsklauseln (SCC)</li>
                  <li><span className="font-medium">Verarbeitete Daten:</span> Name, E-Mail-Adresse, Zahlungsinformationen</li>
                </ul>
                <p className="mt-3 text-sm text-slate-600">
                  Die Verarbeitung von Zahlungsdaten erfolgt ausschließlich durch LemonSqueezy. 
                  Wir haben keinen Zugriff auf vollständige Zahlungsdaten wie Kreditkartennummern.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Übermittlung in Drittländer */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              5. Übermittlung in Drittländer
            </h2>
            <p>
              Einige unserer Dienstleister haben ihren Sitz in den USA (Drittland). 
              Die Übermittlung personenbezogener Daten erfolgt auf Grundlage von:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>
                <strong>EU-Standardvertragsklauseln (SCC)</strong> gemäß Art. 46 Abs. 2 lit. c DSGVO
              </li>
              <li>
                Ergänzenden technischen und organisatorischen Maßnahmen 
                (z.B. Verschlüsselung, EU-Datenstandorte)
              </li>
            </ul>
            <p className="mt-4">
              Durch die Wahl von EU-Datenstandorten (Frankfurt, Schweden) wird sichergestellt, 
              dass die eigentliche Datenverarbeitung innerhalb der Europäischen Union erfolgt.
            </p>
          </section>

          {/* 6. Cookies und Tracking */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              6. Cookies und Tracking
            </h2>
            
            <h3 className="mt-4 mb-2 text-lg font-medium text-slate-900">
              Technisch notwendige Cookies
            </h3>
            <p>Wir verwenden ausschließlich technisch notwendige Cookies für:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Session-Management (Authentifizierung)</li>
              <li>Sicherheitsfunktionen</li>
            </ul>
            <p className="mt-2">
              Diese Cookies sind für den Betrieb der Plattform erforderlich und 
              können nicht deaktiviert werden.
            </p>
            
            <h3 className="mt-6 mb-2 text-lg font-medium text-slate-900">
              Analytics
            </h3>
            <p>Wir nutzen Vercel Analytics zur Analyse der Website-Performance. Dabei werden:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Keine Cookies gesetzt</li>
              <li>IP-Adressen anonymisiert</li>
              <li>Keine personenbezogenen Profile erstellt</li>
            </ul>
            <p className="mt-2 text-sm text-slate-600">
              Rechtsgrundlage: Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO) 
              an der Optimierung unserer Website.
            </p>
            
            <h3 className="mt-6 mb-2 text-lg font-medium text-slate-900">
              Kein Tracking
            </h3>
            <p>Wir verwenden:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Keine Werbe-Cookies</li>
              <li>Keine Social-Media-Tracker</li>
              <li>Keine Remarketing-Tools</li>
            </ul>
          </section>

          {/* 7. Deine Rechte */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              7. Deine Rechte
            </h2>
            <p>Du hast folgende Rechte bezüglich deiner personenbezogenen Daten:</p>
            
            <div className="mt-4 space-y-4">
              <div>
                <p className="font-medium">Auskunftsrecht (Art. 15 DSGVO):</p>
                <p className="text-slate-600">
                  Du kannst Auskunft über die von uns verarbeiteten Daten verlangen.
                </p>
              </div>
              
              <div>
                <p className="font-medium">Recht auf Berichtigung (Art. 16 DSGVO):</p>
                <p className="text-slate-600">
                  Du kannst die Korrektur unrichtiger Daten verlangen.
                </p>
              </div>
              
              <div>
                <p className="font-medium">Recht auf Löschung (Art. 17 DSGVO):</p>
                <p className="text-slate-600">
                  Du kannst die Löschung deiner Daten verlangen, sofern keine 
                  gesetzlichen Aufbewahrungspflichten entgegenstehen.
                </p>
              </div>
              
              <div>
                <p className="font-medium">Recht auf Einschränkung (Art. 18 DSGVO):</p>
                <p className="text-slate-600">
                  Du kannst die Einschränkung der Verarbeitung verlangen.
                </p>
              </div>
              
              <div>
                <p className="font-medium">Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</p>
                <p className="text-slate-600">
                  Du kannst deine Daten in einem strukturierten Format erhalten.
                </p>
              </div>
              
              <div>
                <p className="font-medium">Widerspruchsrecht (Art. 21 DSGVO):</p>
                <p className="text-slate-600">
                  Du kannst der Verarbeitung auf Basis berechtigter Interessen widersprechen.
                </p>
              </div>
              
              <div>
                <p className="font-medium">Beschwerderecht:</p>
                <p className="text-slate-600">
                  Du hast das Recht, dich bei einer Aufsichtsbehörde zu beschweren.
                </p>
              </div>
            </div>
            
            <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="font-medium">Zuständige Aufsichtsbehörde:</p>
              <p className="mt-2">
                Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit 
                Baden-Württemberg
                <br />
                Lautenschlagerstraße 20
                <br />
                70173 Stuttgart
                <br />
                <a 
                  href="https://www.baden-wuerttemberg.datenschutz.de" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://www.baden-wuerttemberg.datenschutz.de
                </a>
              </p>
            </div>
            
            <p className="mt-4">
              Zur Ausübung deiner Rechte wende dich an:{" "}
              <a href="mailto:support@struktora.com" className="text-blue-600 hover:underline">
                support@struktora.com
              </a>
            </p>
          </section>

          {/* 8. Speicherdauer */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              8. Speicherdauer
            </h2>
            <p>
              Wir speichern deine Daten nur so lange, wie es für die jeweiligen 
              Zwecke erforderlich ist:
            </p>
            
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 px-4 py-3 text-left font-medium">
                      Datenkategorie
                    </th>
                    <th className="border border-slate-300 px-4 py-3 text-left font-medium">
                      Speicherdauer
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-3">Account-Daten</td>
                    <td className="border border-slate-300 px-4 py-3">
                      Bis zur Löschung deines Accounts
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-3">Nutzungsstatistiken</td>
                    <td className="border border-slate-300 px-4 py-3">
                      12 Monate (anonymisiert)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-3">Rechnungsdaten</td>
                    <td className="border border-slate-300 px-4 py-3">
                      10 Jahre (gesetzliche Aufbewahrungspflicht)
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-3">KI-Anfragen</td>
                    <td className="border border-slate-300 px-4 py-3">
                      Keine dauerhafte Speicherung
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="mt-4">
              Nach Ablauf der Speicherfrist werden die Daten gelöscht oder anonymisiert.
            </p>
          </section>

          {/* 9. Datensicherheit */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              9. Datensicherheit
            </h2>
            <p>
              Wir setzen technische und organisatorische Maßnahmen zum Schutz 
              deiner Daten ein:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-4">
              <li>SSL/TLS-Verschlüsselung aller Datenübertragungen</li>
              <li>Verschlüsselte Speicherung sensibler Daten</li>
              <li>Sichere Passwort-Speicherung (Hashing mit modernen Algorithmen)</li>
              <li>Regelmäßige Sicherheitsupdates</li>
              <li>Zugriffskontrolle und Berechtigungsmanagement</li>
              <li>Hosting auf EU-Servern</li>
            </ul>
          </section>

          {/* 10. Änderungen */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              10. Änderungen dieser Datenschutzerklärung
            </h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, 
              um sie an geänderte Rechtslagen oder Änderungen unseres Dienstes anzupassen.
            </p>
            <p className="mt-4">
              Die aktuelle Version findest du stets auf dieser Seite. Bei wesentlichen 
              Änderungen informieren wir dich per E-Mail.
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
