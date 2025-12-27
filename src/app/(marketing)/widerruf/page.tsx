import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function WiderrufPage() {
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

        <h1 className="mb-8 text-3xl font-bold text-slate-900">
          Widerrufsbelehrung
        </h1>

        <div className="space-y-10 text-slate-700 leading-relaxed">
          {/* Widerrufsrecht */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              Widerrufsrecht
            </h2>
            <p>
              Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen 
              diesen Vertrag zu widerrufen.
            </p>
            <p className="mt-4">
              Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsschlusses.
            </p>
            <p className="mt-4">
              Um dein Widerrufsrecht auszuüben, musst du uns
            </p>
            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold">BG Online Media (haftungsbeschränkt)</p>
              <p className="mt-2">
                Grünwiesenstraße 33
                <br />
                74321 Bietigheim-Bissingen
                <br />
                Deutschland
                <br />
                E-Mail: support@struktora.com
                <br />
                Telefon: +49 176 22372958
              </p>
            </div>
            <p className="mt-4">
              mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter 
              Brief oder E-Mail) über deinen Entschluss, diesen Vertrag zu widerrufen, 
              informieren. Du kannst dafür das beigefügte Muster-Widerrufsformular 
              verwenden, das jedoch nicht vorgeschrieben ist.
            </p>
            <p className="mt-4">
              <strong>Hinweis:</strong> Du kannst den Widerruf an uns richten. Sofern 
              die Bestellung über LemonSqueezy abgewickelt wurde, kann der Widerruf 
              alternativ auch über die von LemonSqueezy bereitgestellten Kontaktwege 
              erklärt werden.
            </p>
            <p className="mt-4">
              Zur Wahrung der Widerrufsfrist reicht es aus, dass du die Mitteilung 
              über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absendest.
            </p>
          </section>

          <hr className="border-slate-200" />

          {/* Folgen des Widerrufs */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              Folgen des Widerrufs
            </h2>
            <p>
              Wenn du diesen Vertrag widerrufst, erstatten wir dir alle Zahlungen, 
              die du im Zusammenhang mit diesem Vertrag geleistet hast, unverzüglich 
              und spätestens binnen vierzehn Tagen ab dem Tag, an dem die Mitteilung 
              über deinen Widerruf bei uns eingegangen ist.
            </p>
            <p className="mt-4">
              Die Rückzahlung erfolgt über dasselbe Zahlungsmittel, das du bei der 
              ursprünglichen Transaktion eingesetzt hast, es sei denn, es wurde 
              ausdrücklich etwas anderes vereinbart; in keinem Fall werden dir wegen 
              dieser Rückzahlung Entgelte berechnet.
            </p>
            <p className="mt-4">
              <strong>
                Soweit die Zahlung über LemonSqueezy (Merchant of Record) abgewickelt 
                wurde, erfolgt die technische Abwicklung der Rückzahlung über LemonSqueezy.
              </strong>
            </p>
          </section>

          <hr className="border-slate-200" />

          {/* Besonderer Hinweis */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              Besonderer Hinweis zum vorzeitigen Erlöschen des Widerrufsrechts 
              bei digitalen Dienstleistungen
            </h2>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
              <p className="text-amber-900">
                Das Widerrufsrecht erlischt vorzeitig, wenn wir mit der Ausführung des 
                Vertrags begonnen haben, nachdem du
              </p>
              <ol className="list-decimal list-inside mt-3 space-y-2 text-amber-900">
                <li>
                  ausdrücklich zugestimmt hast, dass wir mit der Ausführung des 
                  Vertrags vor Ablauf der Widerrufsfrist beginnen, und
                </li>
                <li>
                  deine Kenntnis davon bestätigt hast, dass du durch deine Zustimmung 
                  mit Beginn der Ausführung des Vertrags dein Widerrufsrecht verlierst.
                </li>
              </ol>
            </div>
            <p className="mt-4">
              Diese Zustimmung wird im Rahmen des Bestellvorgangs eingeholt.
            </p>
          </section>

          <hr className="border-slate-200" />

          {/* Muster-Widerrufsformular */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              Muster-Widerrufsformular
            </h2>
            <p className="mb-4">
              (Wenn du den Vertrag widerrufen willst, dann fülle bitte dieses 
              Formular aus und sende es zurück.)
            </p>
            <div className="rounded-lg border border-slate-300 bg-white p-6 space-y-5">
              <div>
                <p className="font-medium">An:</p>
                <p className="mt-1">
                  BG Online Media (haftungsbeschränkt)
                  <br />
                  Grünwiesenstraße 33
                  <br />
                  74321 Bietigheim-Bissingen
                  <br />
                  Deutschland
                  <br />
                  E-Mail: support@struktora.com
                </p>
              </div>
              
              <p>
                Hiermit widerrufe ich den von mir abgeschlossenen Vertrag über 
                die Erbringung der folgenden Dienstleistung:
              </p>
              
              <p className="font-semibold">Struktora Abonnement</p>
              
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 pt-2">
                <div>
                  <label className="text-sm text-slate-500">Bestellt am:</label>
                  <div className="border-b-2 border-slate-300 mt-1 h-8"></div>
                </div>
                <div>
                  <label className="text-sm text-slate-500">Name des Verbrauchers:</label>
                  <div className="border-b-2 border-slate-300 mt-1 h-8"></div>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm text-slate-500">Anschrift des Verbrauchers:</label>
                  <div className="border-b-2 border-slate-300 mt-1 h-8"></div>
                </div>
                <div>
                  <label className="text-sm text-slate-500">Datum:</label>
                  <div className="border-b-2 border-slate-300 mt-1 h-8"></div>
                </div>
                <div>
                  <label className="text-sm text-slate-500">Unterschrift (nur bei Papier):</label>
                  <div className="border-b-2 border-slate-300 mt-1 h-8"></div>
                </div>
              </div>
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
