import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AVVPage() {
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
          Auftragsverarbeitungsvertrag (AVV)
        </h1>
        <p className="text-slate-600">gemäß Art. 28 DSGVO</p>
        <p className="mt-2 font-semibold text-slate-700">Stand: Dezember 2025</p>

        <hr className="my-8 border-slate-200" />

        <div className="space-y-10 text-slate-700 leading-relaxed">
          {/* Präambel */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              Präambel
            </h2>
            <p>
              Dieser Auftragsverarbeitungsvertrag („AVV") regelt die Verarbeitung 
              personenbezogener Daten durch die BG Online Media (haftungsbeschränkt) 
              („Auftragsverarbeiter") im Auftrag des Kunden („Verantwortlicher") im 
              Rahmen der Nutzung der Plattform Struktora.
            </p>
            <p className="mt-4">
              Dieser AVV wird Bestandteil des Hauptvertrags (Allgemeine Geschäftsbedingungen) 
              und gilt automatisch mit dessen Abschluss als vereinbart.
            </p>
            <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold">Auftragsverarbeiter:</p>
              <p className="mt-2">
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
              </p>
              <p className="mt-4">
                Geschäftsführer: Bernd Galter
              </p>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* § 1 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 1 Gegenstand und Dauer der Verarbeitung
            </h2>
            <p>
              (1) Der Auftragsverarbeiter verarbeitet personenbezogene Daten im Auftrag 
              des Verantwortlichen im Rahmen der Bereitstellung der SaaS-Plattform 
              Struktora zur KI-gestützten Texterstellung.
            </p>
            <p className="mt-4">
              (2) Die Verarbeitung beginnt mit der Registrierung des Verantwortlichen 
              und endet mit der vollständigen Löschung des Accounts und aller 
              zugehörigen Daten.
            </p>
            <p className="mt-4">(3) Die Art der Verarbeitung umfasst:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Erhebung und Speicherung von Account-Daten</li>
              <li>Verarbeitung von Nutzungsdaten</li>
              <li>Temporäre Verarbeitung von Eingabedaten zur KI-Textgenerierung</li>
              <li>Übermittlung an Unterauftragsverarbeiter gemäß § 7</li>
            </ul>
          </section>

          <hr className="border-slate-200" />

          {/* § 2 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 2 Art und Zweck der Verarbeitung
            </h2>
            <p>Die Verarbeitung dient folgenden Zwecken:</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 px-4 py-3 text-left font-medium">Zweck</th>
                    <th className="border border-slate-300 px-4 py-3 text-left font-medium">Beschreibung</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-3">Account-Verwaltung</td>
                    <td className="border border-slate-300 px-4 py-3">Registrierung, Authentifizierung, Profilverwaltung</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-3">Leistungserbringung</td>
                    <td className="border border-slate-300 px-4 py-3">Bereitstellung der KI-Workflows und Textgenerierung</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-3">Abrechnung</td>
                    <td className="border border-slate-300 px-4 py-3">Verwaltung von Abonnements und Zahlungen</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-3">Support</td>
                    <td className="border border-slate-300 px-4 py-3">Bearbeitung von Kundenanfragen</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-3">Sicherheit</td>
                    <td className="border border-slate-300 px-4 py-3">Schutz vor Missbrauch und Gewährleistung der IT-Sicherheit</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* § 3 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 3 Art der personenbezogenen Daten
            </h2>
            <p>Folgende Kategorien personenbezogener Daten werden verarbeitet:</p>
            
            <div className="mt-6 space-y-4">
              <div>
                <p className="font-medium">Bestandsdaten:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-1 text-slate-600">
                  <li>Name</li>
                  <li>E-Mail-Adresse</li>
                  <li>Unternehmenszugehörigkeit (falls angegeben)</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium">Nutzungsdaten:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-1 text-slate-600">
                  <li>Zeitpunkt und Dauer der Nutzung</li>
                  <li>Genutzte Funktionen</li>
                  <li>Anzahl der Generierungen</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium">Technische Daten:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-1 text-slate-600">
                  <li>IP-Adresse (gekürzt/pseudonymisiert, soweit technisch möglich)</li>
                  <li>Browsertyp und -version</li>
                  <li>Betriebssystem</li>
                  <li>Gerätetyp</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium">Inhaltsdaten:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-1 text-slate-600">
                  <li>Eingaben in KI-Workflows (keine dauerhafte Speicherung über die zur Leistungserbringung technisch notwendige Dauer hinaus)</li>
                  <li>Generierte Texte (keine Speicherung zu eigenen Zwecken des Auftragsverarbeiters)</li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* § 4 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 4 Kategorien betroffener Personen
            </h2>
            <p>Von der Verarbeitung betroffen sind:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-4">
              <li>Mitarbeiter des Verantwortlichen, die die Plattform nutzen</li>
              <li>Vom Verantwortlichen autorisierte Nutzer (Team-Mitglieder)</li>
            </ul>
          </section>

          <hr className="border-slate-200" />

          {/* § 5 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 5 Pflichten des Auftragsverarbeiters
            </h2>
            <p>
              (1) Der Auftragsverarbeiter verarbeitet personenbezogene Daten 
              ausschließlich auf dokumentierte Weisung des Verantwortlichen, es 
              sei denn, er ist durch Rechtsvorschriften zur Verarbeitung verpflichtet. 
              Die Weisungen erfolgen grundsätzlich in Textform.
            </p>
            <p className="mt-4">
              (2) Der Auftragsverarbeiter gewährleistet, dass die zur Verarbeitung 
              befugten Personen zur Vertraulichkeit verpflichtet sind.
            </p>
            <p className="mt-4">
              (3) Der Auftragsverarbeiter trifft die erforderlichen technischen und 
              organisatorischen Maßnahmen gemäß Art. 32 DSGVO (siehe § 6).
            </p>
            <p className="mt-4">
              (4) Der Auftragsverarbeiter unterstützt den Verantwortlichen bei der 
              Einhaltung der Pflichten nach Art. 32-36 DSGVO, insbesondere bei:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Sicherheit der Verarbeitung</li>
              <li>Meldung von Datenschutzverletzungen</li>
              <li>Datenschutz-Folgenabschätzungen</li>
            </ul>
            <p className="mt-4">
              (5) Der Auftragsverarbeiter löscht nach Beendigung der Verarbeitung 
              alle personenbezogenen Daten, sofern nicht eine gesetzliche 
              Aufbewahrungspflicht besteht.
            </p>
            <p className="mt-4">
              (6) Der Auftragsverarbeiter stellt dem Verantwortlichen alle 
              erforderlichen Informationen zum Nachweis der Einhaltung der Pflichten 
              zur Verfügung.
            </p>
          </section>

          <hr className="border-slate-200" />

          {/* § 6 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 6 Technische und organisatorische Maßnahmen (TOMs)
            </h2>
            <p>Der Auftragsverarbeiter hat folgende Maßnahmen implementiert:</p>
            
            <h3 className="mt-6 mb-3 text-lg font-medium text-slate-900">
              Vertraulichkeit (Art. 32 Abs. 1 lit. b DSGVO)
            </h3>
            
            <div className="space-y-4">
              <div>
                <p className="font-medium">Zutrittskontrolle:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-1 text-slate-600">
                  <li>Serverinfrastruktur bei zertifizierten Rechenzentren (ISO 27001)</li>
                  <li>Kein physischer Zutritt durch Auftragsverarbeiter erforderlich</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium">Zugangskontrolle:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-1 text-slate-600">
                  <li>Passwortgeschützte Benutzerkonten</li>
                  <li>Sichere Passwort-Hashing-Verfahren</li>
                  <li>Optionale Zwei-Faktor-Authentifizierung</li>
                  <li>Automatische Session-Timeouts</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium">Zugriffskontrolle:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-1 text-slate-600">
                  <li>Rollenbasiertes Berechtigungskonzept</li>
                  <li>Protokollierung von Zugriffen</li>
                  <li>Prinzip der minimalen Berechtigung</li>
                </ul>
              </div>
            </div>
            
            <h3 className="mt-6 mb-3 text-lg font-medium text-slate-900">
              Integrität (Art. 32 Abs. 1 lit. b DSGVO)
            </h3>
            
            <div className="space-y-4">
              <div>
                <p className="font-medium">Weitergabekontrolle:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-1 text-slate-600">
                  <li>TLS/SSL-Verschlüsselung aller Datenübertragungen</li>
                  <li>Verschlüsselte API-Kommunikation</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium">Eingabekontrolle:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-1 text-slate-600">
                  <li>Protokollierung von Datenänderungen</li>
                  <li>Versionierung kritischer Daten</li>
                </ul>
              </div>
            </div>
            
            <h3 className="mt-6 mb-3 text-lg font-medium text-slate-900">
              Verfügbarkeit und Belastbarkeit (Art. 32 Abs. 1 lit. b DSGVO)
            </h3>
            
            <div className="space-y-4">
              <div>
                <p className="font-medium">Verfügbarkeitskontrolle:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-1 text-slate-600">
                  <li>Regelmäßige Backups</li>
                  <li>Redundante Serverinfrastruktur</li>
                  <li>Monitoring und Alerting</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium">Wiederherstellbarkeit:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-1 text-slate-600">
                  <li>Dokumentierte Wiederherstellungsprozesse</li>
                  <li>Regelmäßige Tests der Backup-Systeme</li>
                </ul>
              </div>
            </div>
            
            <h3 className="mt-6 mb-3 text-lg font-medium text-slate-900">
              Verfahren zur regelmäßigen Überprüfung (Art. 32 Abs. 1 lit. d DSGVO)
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Regelmäßige Sicherheitsupdates</li>
              <li>Überprüfung der Zugriffsberechtigungen</li>
              <li>Aktualisierung der TOMs bei Bedarf</li>
            </ul>
          </section>

          <hr className="border-slate-200" />

          {/* § 7 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 7 Unterauftragsverarbeiter
            </h2>
            <p>
              (1) Der Verantwortliche erteilt dem Auftragsverarbeiter die allgemeine 
              Genehmigung, Unterauftragsverarbeiter einzusetzen.
            </p>
            <p className="mt-4">
              (2) Der Auftragsverarbeiter informiert den Verantwortlichen über 
              beabsichtigte Änderungen in Bezug auf Unterauftragsverarbeiter. 
              Der Verantwortliche kann innerhalb einer angemessenen Frist (mindestens 14 Tage) Einspruch erheben.
            </p>
            <p className="mt-4">(3) Folgende Unterauftragsverarbeiter werden eingesetzt:</p>
            
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 px-3 py-2 text-left font-medium">Unterauftragsverarbeiter</th>
                    <th className="border border-slate-300 px-3 py-2 text-left font-medium">Zweck</th>
                    <th className="border border-slate-300 px-3 py-2 text-left font-medium">Standort</th>
                    <th className="border border-slate-300 px-3 py-2 text-left font-medium">DPA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2">Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA</td>
                    <td className="border border-slate-300 px-3 py-2">Hosting, Analytics</td>
                    <td className="border border-slate-300 px-3 py-2">Primär EU, ggf. Drittland (USA), abgesichert durch SCC</td>
                    <td className="border border-slate-300 px-3 py-2">
                      <a href="https://vercel.com/legal/dpa" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DPA</a>
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-3 py-2">Supabase Inc., 970 Toa Payoh North #07-04, Singapore 318992</td>
                    <td className="border border-slate-300 px-3 py-2">Authentifizierung, Datenbank</td>
                    <td className="border border-slate-300 px-3 py-2">Frankfurt (EU), ggf. Drittland, abgesichert durch SCC</td>
                    <td className="border border-slate-300 px-3 py-2">
                      <a href="https://supabase.com/legal/dpa" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DPA</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2">Microsoft Ireland Operations Limited, Dublin, Ireland</td>
                    <td className="border border-slate-300 px-3 py-2">KI-Verarbeitung (Azure OpenAI)</td>
                    <td className="border border-slate-300 px-3 py-2">Sweden Central (EU)</td>
                    <td className="border border-slate-300 px-3 py-2">
                      <a href="https://www.microsoft.com/licensing/docs/view/Microsoft-Products-and-Services-Data-Protection-Addendum-DPA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DPA</a>
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-3 py-2">Lemon Squeezy, LLC, 222 South Main Street, Salt Lake City, UT 84101, USA</td>
                    <td className="border border-slate-300 px-3 py-2">Zahlungsabwicklung</td>
                    <td className="border border-slate-300 px-3 py-2">Drittland (USA), abgesichert durch SCC</td>
                    <td className="border border-slate-300 px-3 py-2">
                      <a href="https://www.lemonsqueezy.com/dpa" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DPA</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="mt-4">
              (4) Der Auftragsverarbeiter stellt sicher, dass mit allen 
              Unterauftragsverarbeitern Verträge geschlossen sind, die mindestens 
              den Datenschutzanforderungen dieses AVV entsprechen.
            </p>
          </section>

          <hr className="border-slate-200" />

          {/* § 8 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 8 Unterstützungspflichten
            </h2>
            <p>
              (1) Der Auftragsverarbeiter unterstützt den Verantwortlichen bei der 
              Erfüllung von Betroffenenrechten (Art. 15-22 DSGVO) durch:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Bereitstellung von Exportfunktionen</li>
              <li>Löschung von Daten auf Anfrage</li>
              <li>Auskunft über gespeicherte Daten</li>
            </ul>
            <p className="mt-4">
              (2) Der Auftragsverarbeiter informiert den Verantwortlichen unverzüglich, 
              spätestens jedoch innerhalb von 48 Stunden nach Bekanntwerden, über 
              Datenschutzverletzungen, die die Daten des Verantwortlichen betreffen.
            </p>
          </section>

          <hr className="border-slate-200" />

          {/* § 9 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 9 Löschung und Rückgabe von Daten
            </h2>
            <p>
              (1) Nach Beendigung des Vertragsverhältnisses löscht der Auftragsverarbeiter 
              alle personenbezogenen Daten innerhalb von 30 Tagen, sofern nicht 
              gesetzliche Aufbewahrungspflichten bestehen.
            </p>
            <p className="mt-4">
              (2) Auf Wunsch des Verantwortlichen kann vor der Löschung ein Export 
              der Daten erfolgen.
            </p>
            <p className="mt-4">
              (3) Rechnungsdaten werden aufgrund steuerrechtlicher Vorschriften 
              für 10 Jahre aufbewahrt.
            </p>
          </section>

          <hr className="border-slate-200" />

          {/* § 10 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 10 Nachweispflichten und Audits
            </h2>
            <p>
              (1) Der Auftragsverarbeiter stellt dem Verantwortlichen auf Anfrage 
              alle erforderlichen Informationen zum Nachweis der Einhaltung der 
              in Art. 28 DSGVO niedergelegten Pflichten zur Verfügung.
            </p>
            <p className="mt-4">
              (2) Der Auftragsverarbeiter ermöglicht Überprüfungen durch den 
              Verantwortlichen oder einen beauftragten Prüfer. Die Kosten trägt 
              der Verantwortliche, sofern kein Verstoß des Auftragsverarbeiters 
              festgestellt wird. Eine Ankündigung muss mindestens 14 Tage im 
              Voraus erfolgen.
            </p>
            <p className="mt-4">
              (3) Alternativ kann der Nachweis durch Vorlage aktueller Zertifizierungen 
              oder Audit-Berichte der Unterauftragsverarbeiter erfolgen.
            </p>
          </section>

          <hr className="border-slate-200" />

          {/* § 11 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 11 Haftung
            </h2>
            <p>
              Die Haftung richtet sich nach Art. 82 DSGVO sowie den Regelungen 
              in den{" "}
              <Link href="/agb" className="text-blue-600 hover:underline">
                Allgemeinen Geschäftsbedingungen
              </Link>
              .
            </p>
          </section>

          <hr className="border-slate-200" />

          {/* § 12 */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              § 12 Schlussbestimmungen
            </h2>
            <p>
              (1) Änderungen und Ergänzungen dieses AVV bedürfen der Textform.
            </p>
            <p className="mt-4">
              (2) Sollten einzelne Bestimmungen unwirksam sein, bleibt die 
              Wirksamkeit der übrigen Bestimmungen unberührt.
            </p>
            <p className="mt-4">
              (3) Es gilt das Recht der Bundesrepublik Deutschland.
            </p>
          </section>

          <hr className="border-slate-200" />

          {/* Kontakt */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              Kontakt
            </h2>
            <p>Bei Fragen zu diesem AVV wende dich an:</p>
            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold">BG Online Media (haftungsbeschränkt)</p>
              <p className="mt-2">
                E-Mail: support@struktora.com
              </p>
            </div>
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

