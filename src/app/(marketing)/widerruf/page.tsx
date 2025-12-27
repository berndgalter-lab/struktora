import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function WiderrufPage() {
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
          Widerrufsbelehrung
        </h1>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              Widerrufsrecht
            </h2>
            <p>
              Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
              diesen Vertrag zu widerrufen.
            </p>
            <p className="mt-4">
              Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des
              Vertragsschlusses.
            </p>
            <p className="mt-4">
              Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer
              eindeutigen Erklärung (z.B. per E-Mail) über Ihren Entschluss,
              diesen Vertrag zu widerrufen, informieren.
            </p>
            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="font-medium text-slate-900">
                Kontakt für den Widerruf:
              </p>
              <p className="mt-2">
                BG Online Media (haftungsbeschränkt)
                <br />
                Grünwiesenstraße 33
                <br />
                74321 Bietigheim-Bissingen
                <br />
                E-Mail: support@struktora.com
              </p>
            </div>
            <p className="mt-4">
              Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die
              Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der
              Widerrufsfrist absenden.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              Folgen des Widerrufs
            </h2>
            <p>
              Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen,
              die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen
              vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über
              Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese
              Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der
              ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen
              wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden
              Ihnen wegen dieser Rückzahlung Entgelte berechnet.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              Besondere Hinweise bei digitalen Inhalten
            </h2>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
              <p className="font-medium text-amber-900">
                Wichtig: Das Widerrufsrecht erlischt vorzeitig, wenn wir mit der
                Ausführung des Vertrags begonnen haben, nachdem Sie ausdrücklich
                zugestimmt haben, dass wir mit der Ausführung des Vertrags vor
                Ablauf der Widerrufsfrist beginnen, und Sie Ihre Kenntnis davon
                bestätigt haben, dass Sie durch Ihre Zustimmung mit Beginn der
                Ausführung des Vertrags Ihr Widerrufsrecht verlieren.
              </p>
            </div>
            <p className="mt-4">
              Diese Zustimmung erfolgt bei der Registrierung auf unserer
              Plattform.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              Muster-Widerrufsformular
            </h2>
            <p>
              (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte
              dieses Formular aus und senden Sie es zurück.)
            </p>
            <div className="mt-4 rounded-lg border border-slate-300 bg-white p-6 space-y-4">
              <p>
                <strong>An:</strong>
                <br />
                BG Online Media (haftungsbeschränkt)
                <br />
                Grünwiesenstraße 33
                <br />
                74321 Bietigheim-Bissingen
                <br />
                E-Mail: support@struktora.com
              </p>
              <p>
                Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*)
                abgeschlossenen Vertrag über die Erbringung der folgenden
                Dienstleistung:
              </p>
              <div className="border-b border-slate-300 pb-2">
                <span className="text-slate-400">(Beschreibung der Dienstleistung)</span>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <span className="text-sm text-slate-500">Bestellt am:</span>
                  <div className="border-b border-slate-300 mt-1"></div>
                </div>
                <div>
                  <span className="text-sm text-slate-500">Name des/der Verbraucher(s):</span>
                  <div className="border-b border-slate-300 mt-1"></div>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-sm text-slate-500">Anschrift des/der Verbraucher(s):</span>
                  <div className="border-b border-slate-300 mt-1"></div>
                  <div className="border-b border-slate-300 mt-4"></div>
                </div>
                <div>
                  <span className="text-sm text-slate-500">Unterschrift (nur bei Papier):</span>
                  <div className="border-b border-slate-300 mt-1"></div>
                </div>
                <div>
                  <span className="text-sm text-slate-500">Datum:</span>
                  <div className="border-b border-slate-300 mt-1"></div>
                </div>
              </div>
              <p className="text-sm text-slate-500">
                (*) Unzutreffendes streichen.
              </p>
            </div>
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
