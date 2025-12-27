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

        <h1 className="mb-2 text-3xl font-bold text-slate-900">
          Datenschutzerklärung
        </h1>
        <p className="mb-8 text-sm text-slate-500">Stand: Dezember 2025</p>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              1. Verantwortlicher
            </h2>
            <p>
              BG Online Media (haftungsbeschränkt)
              <br />
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
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              2. Übersicht der Verarbeitungen
            </h2>
            <p>
              Wir verarbeiten personenbezogene Daten nur, soweit dies zur 
              Bereitstellung unserer Plattform erforderlich ist.
            </p>
            
            <h3 className="mt-6 mb-2 text-lg font-medium text-slate-900">
              Arten der verarbeiteten Daten:
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Bestandsdaten (Name, E-Mail-Adresse)</li>
              <li>Zahlungsdaten (über Zahlungsdienstleister)</li>
              <li>Nutzungsdaten (Zugriffszeiten, genutzte Funktionen)</li>
              <li>Meta-/Kommunikationsdaten (IP-Adresse, Geräteinformationen)</li>
            </ul>
            
            <h3 className="mt-6 mb-2 text-lg font-medium text-slate-900">
              Nicht gespeicherte Daten:
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Inhalte deiner KI-Anfragen werden nicht dauerhaft gespeichert</li>
              <li>KI-Outputs werden nicht für Training verwendet</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              3. Rechtsgrundlagen
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Vertragserfüllung</strong> (Art. 6 Abs. 1 lit. b DSGVO): 
                Bereitstellung des Dienstes
              </li>
              <li>
                <strong>Berechtigte Interessen</strong> (Art. 6 Abs. 1 lit. f DSGVO): 
                Sicherheit, Betrugsprävention
              </li>
              <li>
                <strong>Einwilligung</strong> (Art. 6 Abs. 1 lit. a DSGVO): 
                Wo ausdrücklich erteilt
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              4. Empfänger und Auftragsverarbeiter
            </h2>
            <p>Wir arbeiten mit folgenden Dienstleistern:</p>
            
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-medium text-slate-900">Hosting</h3>
                <p className="mt-1">
                  <strong>Vercel Inc.</strong>
                  <br />
                  Serverstandort: EU
                  <br />
                  Zweck: Bereitstellung der Website
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-slate-900">
                  Authentifizierung und Datenbank
                </h3>
                <p className="mt-1">
                  <strong>Supabase Inc.</strong>
                  <br />
                  Serverstandort: Frankfurt, Deutschland (EU)
                  <br />
                  Zweck: Nutzerauthentifizierung, Datenspeicherung
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-slate-900">KI-Verarbeitung</h3>
                <p className="mt-1">
                  <strong>Microsoft Azure OpenAI</strong>
                  <br />
                  Serverstandort: Sweden Central (EU)
                  <br />
                  Zweck: Verarbeitung von KI-Anfragen
                </p>
                <div className="mt-3 rounded-lg border border-blue-200 bg-blue-50 p-4">
                  <p className="font-medium text-blue-900 mb-2">Wichtig:</p>
                  <ul className="list-disc list-inside space-y-1 text-blue-800">
                    <li>Verarbeitung erfolgt auf EU-Servern</li>
                    <li>Daten werden NICHT für das Training von KI-Modellen verwendet</li>
                    <li>Keine dauerhafte Speicherung bei Microsoft</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-slate-900">Zahlungsabwicklung</h3>
                <p className="mt-1">
                  <strong>LemonSqueezy (Lemon Squeezy, LLC)</strong>
                  <br />
                  Zweck: Abonnementverwaltung, Zahlungsabwicklung
                  <br />
                  Datenschutz: EU-Standardvertragsklauseln
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              5. Cookies
            </h2>
            <p>Wir verwenden ausschließlich technisch notwendige Cookies:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-4">
              <li>Session-Cookies für die Authentifizierung</li>
              <li>Keine Tracking-Cookies</li>
              <li>Keine Werbe-Cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              6. Deine Rechte
            </h2>
            <p>Du hast folgende Rechte bezüglich deiner Daten:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>
                <strong>Auskunft</strong> (Art. 15 DSGVO): Welche Daten wir über dich speichern
              </li>
              <li>
                <strong>Berichtigung</strong> (Art. 16 DSGVO): Korrektur unrichtiger Daten
              </li>
              <li>
                <strong>Löschung</strong> (Art. 17 DSGVO): Löschung deiner Daten
              </li>
              <li>
                <strong>Einschränkung</strong> (Art. 18 DSGVO): Einschränkung der Verarbeitung
              </li>
              <li>
                <strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO): Export deiner Daten
              </li>
              <li>
                <strong>Widerspruch</strong> (Art. 21 DSGVO): Widerspruch gegen Verarbeitung
              </li>
              <li>
                <strong>Beschwerde</strong>: Bei der zuständigen Aufsichtsbehörde
              </li>
            </ul>
            <p className="mt-4">
              <strong>Zuständige Aufsichtsbehörde:</strong>
              <br />
              Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit 
              Baden-Württemberg
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              7. Speicherdauer
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Account-Daten:</strong> Bis zur Löschung deines Accounts
              </li>
              <li>
                <strong>Rechnungsdaten:</strong> 10 Jahre (gesetzliche Aufbewahrungspflicht)
              </li>
              <li>
                <strong>Nutzungsstatistiken:</strong> 12 Monate, anonymisiert
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              8. Datensicherheit
            </h2>
            <p>Wir setzen technische und organisatorische Maßnahmen ein:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-4">
              <li>SSL/TLS-Verschlüsselung aller Datenübertragungen</li>
              <li>Sichere Passwort-Speicherung (Hashing)</li>
              <li>Regelmäßige Sicherheitsupdates</li>
              <li>Zugriffskontrolle und Logging</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              9. Änderungen
            </h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. 
              Die aktuelle Version findest du stets auf dieser Seite.
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
