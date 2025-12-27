import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DatenschutzPage() {
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
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              1. Verantwortlicher
            </h2>
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO):
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
              Telefon: +49 176 22372958
              <br />
              E-Mail: support@struktora.com
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              2. Erhobene Daten
            </h2>
            <p>Wir erheben und verarbeiten folgende personenbezogene Daten:</p>
            
            <h3 className="mt-6 mb-2 text-lg font-medium text-slate-900">
              Bestandsdaten
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Name und E-Mail-Adresse bei der Registrierung</li>
              <li>Firmenname und Branche (optional)</li>
            </ul>
            
            <h3 className="mt-6 mb-2 text-lg font-medium text-slate-900">
              Nutzungsdaten
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Zugriffszeiten und -dauer</li>
              <li>Geräteinformationen (Browser, Betriebssystem)</li>
              <li>IP-Adresse (anonymisiert)</li>
            </ul>
            
            <h3 className="mt-6 mb-2 text-lg font-medium text-slate-900">
              Inhaltsdaten
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                Texte, die Sie in die Workflows eingeben, werden zur Verarbeitung
                an unsere KI-Dienste übermittelt
              </li>
              <li>
                <strong>
                  Diese Inhalte werden NICHT dauerhaft gespeichert
                </strong>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              3. Zweck der Verarbeitung
            </h2>
            <p>Wir verarbeiten Ihre Daten für folgende Zwecke:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-4">
              <li>Bereitstellung und Betrieb der Struktora-Plattform</li>
              <li>Nutzerauthentifizierung und Kontoverwaltung</li>
              <li>Abrechnung der Nutzungsgebühren</li>
              <li>Verbesserung unseres Services</li>
              <li>Kommunikation bezüglich Ihres Accounts</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              4. Rechtsgrundlagen
            </h2>
            <p>
              Die Verarbeitung Ihrer Daten erfolgt auf Grundlage folgender
              Rechtsgrundlagen:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>
                <strong>Art. 6 Abs. 1 lit. b DSGVO</strong> – Vertragserfüllung:
                Die Verarbeitung ist für die Erfüllung des Nutzungsvertrags
                erforderlich.
              </li>
              <li>
                <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> – Berechtigtes
                Interesse: Wir haben ein berechtigtes Interesse an der
                Verbesserung unserer Dienste und der Gewährleistung der
                IT-Sicherheit.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              5. Drittanbieter / Auftragsverarbeiter
            </h2>
            <p>
              Wir setzen folgende Drittanbieter ein, die Daten in unserem Auftrag
              verarbeiten:
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse border border-slate-300">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="border border-slate-300 px-4 py-2 text-left font-medium">Anbieter</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-medium">Zweck</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-medium">Standort</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">Supabase Inc.</td>
                    <td className="border border-slate-300 px-4 py-2">Authentifizierung, Datenbank</td>
                    <td className="border border-slate-300 px-4 py-2">EU (Frankfurt)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">Microsoft Azure</td>
                    <td className="border border-slate-300 px-4 py-2">KI-Verarbeitung</td>
                    <td className="border border-slate-300 px-4 py-2">EU (Sweden Central)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">Vercel Inc.</td>
                    <td className="border border-slate-300 px-4 py-2">Webhosting</td>
                    <td className="border border-slate-300 px-4 py-2">EU</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">LemonSqueezy</td>
                    <td className="border border-slate-300 px-4 py-2">Zahlungsabwicklung</td>
                    <td className="border border-slate-300 px-4 py-2">EU-Standardvertragsklauseln</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              Mit allen Auftragsverarbeitern haben wir entsprechende
              Auftragsverarbeitungsverträge (AVV) abgeschlossen.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              6. KI-Verarbeitung – Wichtige Hinweise
            </h2>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
              <p className="font-medium text-blue-900 mb-2">
                Struktora nutzt künstliche Intelligenz (KI) zur Generierung von Texten.
              </p>
              <ul className="list-disc list-inside space-y-2 text-blue-800">
                <li>
                  Ihre Eingaben werden an Microsoft Azure OpenAI Service zur
                  Verarbeitung übermittelt
                </li>
                <li>
                  Die Verarbeitung erfolgt auf{" "}
                  <strong>EU-Servern (Sweden Central)</strong>
                </li>
                <li>
                  Ihre Eingaben werden{" "}
                  <strong>NICHT für das Training von KI-Modellen verwendet</strong>
                </li>
                <li>
                  Es erfolgt <strong>keine dauerhafte Speicherung</strong> Ihrer
                  Prompts oder der generierten Outputs bei Microsoft
                </li>
                <li>
                  Microsoft hat sich zur Einhaltung der DSGVO verpflichtet
                  (EU-Standardvertragsklauseln)
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              7. Cookies
            </h2>
            <p>Struktora verwendet ausschließlich technisch notwendige Cookies:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-4">
              <li>
                <strong>Session-Cookies:</strong> Für die Aufrechterhaltung Ihrer
                Anmeldung
              </li>
              <li>
                <strong>Auth-Cookies:</strong> Für die sichere Authentifizierung
              </li>
            </ul>
            <p className="mt-4">
              Wir verwenden <strong>keine Tracking-Cookies</strong> und{" "}
              <strong>keine Cookies für Werbezwecke</strong>.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              8. Ihre Rechte als betroffene Person
            </h2>
            <p>
              Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>
                <strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie können
                Auskunft über Ihre gespeicherten Daten verlangen.
              </li>
              <li>
                <strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie
                können die Berichtigung unrichtiger Daten verlangen.
              </li>
              <li>
                <strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie können
                die Löschung Ihrer Daten verlangen.
              </li>
              <li>
                <strong>Recht auf Einschränkung (Art. 18 DSGVO):</strong> Sie
                können die Einschränkung der Verarbeitung verlangen.
              </li>
              <li>
                <strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong>{" "}
                Sie können Ihre Daten in einem strukturierten Format erhalten.
              </li>
              <li>
                <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie können der
                Verarbeitung widersprechen.
              </li>
              <li>
                <strong>Beschwerderecht:</strong> Sie haben das Recht, sich bei
                einer Aufsichtsbehörde zu beschweren.
              </li>
            </ul>
            <p className="mt-4">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
              <a href="mailto:support@struktora.com" className="text-blue-600 hover:underline">
                support@struktora.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              9. Datensicherheit
            </h2>
            <p>
              Wir setzen technische und organisatorische Maßnahmen ein, um Ihre
              Daten zu schützen:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-4">
              <li>SSL/TLS-Verschlüsselung für alle Datenübertragungen</li>
              <li>Sichere Passwort-Hashing-Verfahren</li>
              <li>Regelmäßige Sicherheits-Backups</li>
              <li>Zugriffskontrolle und Authentifizierung</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              10. Speicherdauer
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Account-Daten:</strong> Werden bis zur Löschung Ihres
                Accounts gespeichert.
              </li>
              <li>
                <strong>Nutzungsstatistiken:</strong> Werden anonymisiert für
                maximal 12 Monate gespeichert.
              </li>
              <li>
                <strong>Rechnungsdaten:</strong> Werden gemäß gesetzlicher
                Aufbewahrungspflichten (10 Jahre) gespeichert.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              11. Änderungen dieser Datenschutzerklärung
            </h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu
              aktualisieren, um sie an geänderte Rechtslagen oder bei Änderungen
              unseres Dienstes anzupassen. Die aktuelle Version finden Sie stets
              auf dieser Seite.
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
