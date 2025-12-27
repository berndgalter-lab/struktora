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

        <div className="prose prose-slate max-w-none">
          <h2>1. Verantwortlicher</h2>
          <p>
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO):
          </p>
          <p>
            BG Online Media (haftungsbeschränkt)
            <br />
            Grünwiesenstraße 33
            <br />
            74321 Bietigheim-Bissingen
            <br />
            Deutschland
          </p>
          <p>
            Telefon: +49 176 22372958
            <br />
            E-Mail: support@struktora.com
          </p>

          <h2>2. Erhobene Daten</h2>
          <p>Wir erheben und verarbeiten folgende personenbezogene Daten:</p>
          <h3>Bestandsdaten</h3>
          <ul>
            <li>Name und E-Mail-Adresse bei der Registrierung</li>
            <li>Firmenname und Branche (optional)</li>
          </ul>
          <h3>Nutzungsdaten</h3>
          <ul>
            <li>Zugriffszeiten und -dauer</li>
            <li>Geräteinformationen (Browser, Betriebssystem)</li>
            <li>IP-Adresse (anonymisiert)</li>
          </ul>
          <h3>Inhaltsdaten</h3>
          <ul>
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

          <h2>3. Zweck der Verarbeitung</h2>
          <p>Wir verarbeiten Ihre Daten für folgende Zwecke:</p>
          <ul>
            <li>Bereitstellung und Betrieb der Struktora-Plattform</li>
            <li>Nutzerauthentifizierung und Kontoverwaltung</li>
            <li>Abrechnung der Nutzungsgebühren</li>
            <li>Verbesserung unseres Services</li>
            <li>Kommunikation bezüglich Ihres Accounts</li>
          </ul>

          <h2>4. Rechtsgrundlagen</h2>
          <p>
            Die Verarbeitung Ihrer Daten erfolgt auf Grundlage folgender
            Rechtsgrundlagen:
          </p>
          <ul>
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

          <h2>5. Drittanbieter / Auftragsverarbeiter</h2>
          <p>
            Wir setzen folgende Drittanbieter ein, die Daten in unserem Auftrag
            verarbeiten:
          </p>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Anbieter</th>
                <th className="text-left">Zweck</th>
                <th className="text-left">Standort</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Supabase Inc.</td>
                <td>Authentifizierung, Datenbank</td>
                <td>EU (Frankfurt)</td>
              </tr>
              <tr>
                <td>Microsoft Azure</td>
                <td>KI-Verarbeitung</td>
                <td>EU (Sweden Central)</td>
              </tr>
              <tr>
                <td>Vercel Inc.</td>
                <td>Webhosting</td>
                <td>EU</td>
              </tr>
              <tr>
                <td>LemonSqueezy</td>
                <td>Zahlungsabwicklung</td>
                <td>EU-Standardvertragsklauseln</td>
              </tr>
            </tbody>
          </table>
          <p>
            Mit allen Auftragsverarbeitern haben wir entsprechende
            Auftragsverarbeitungsverträge (AVV) abgeschlossen.
          </p>

          <h2>6. KI-Verarbeitung – Wichtige Hinweise</h2>
          <p>
            Struktora nutzt künstliche Intelligenz (KI) zur Generierung von
            Texten. Dabei gilt:
          </p>
          <ul>
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

          <h2>7. Cookies</h2>
          <p>Struktora verwendet ausschließlich technisch notwendige Cookies:</p>
          <ul>
            <li>
              <strong>Session-Cookies:</strong> Für die Aufrechterhaltung Ihrer
              Anmeldung
            </li>
            <li>
              <strong>Auth-Cookies:</strong> Für die sichere Authentifizierung
            </li>
          </ul>
          <p>
            Wir verwenden <strong>keine Tracking-Cookies</strong> und{" "}
            <strong>keine Cookies für Werbezwecke</strong>.
          </p>

          <h2>8. Ihre Rechte als betroffene Person</h2>
          <p>
            Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
          </p>
          <ul>
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
          <p>
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:
            support@struktora.com
          </p>

          <h2>9. Datensicherheit</h2>
          <p>
            Wir setzen technische und organisatorische Maßnahmen ein, um Ihre
            Daten zu schützen:
          </p>
          <ul>
            <li>SSL/TLS-Verschlüsselung für alle Datenübertragungen</li>
            <li>Sichere Passwort-Hashing-Verfahren</li>
            <li>Regelmäßige Sicherheits-Backups</li>
            <li>Zugriffskontrolle und Authentifizierung</li>
          </ul>

          <h2>10. Speicherdauer</h2>
          <ul>
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

          <h2>11. Änderungen dieser Datenschutzerklärung</h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu
            aktualisieren, um sie an geänderte Rechtslagen oder bei Änderungen
            unseres Dienstes anzupassen. Die aktuelle Version finden Sie stets
            auf dieser Seite.
          </p>

          <p className="mt-8 text-sm text-slate-500">
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

