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

        <div className="prose prose-slate max-w-none">
          <h2>Widerrufsrecht</h2>
          <p>
            Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
            diesen Vertrag zu widerrufen.
          </p>
          <p>
            Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des
            Vertragsschlusses.
          </p>
          <p>
            Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer
            eindeutigen Erklärung (z.B. per E-Mail) über Ihren Entschluss,
            diesen Vertrag zu widerrufen, informieren.
          </p>
          <p className="font-medium">
            Kontakt für den Widerruf:
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
            Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die
            Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der
            Widerrufsfrist absenden.
          </p>

          <h2>Folgen des Widerrufs</h2>
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

          <h2>Besondere Hinweise bei digitalen Inhalten</h2>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="m-0">
              <strong>Wichtig:</strong> Das Widerrufsrecht erlischt vorzeitig,
              wenn wir mit der Ausführung des Vertrags begonnen haben, nachdem
              Sie ausdrücklich zugestimmt haben, dass wir mit der Ausführung des
              Vertrags vor Ablauf der Widerrufsfrist beginnen, und Sie Ihre
              Kenntnis davon bestätigt haben, dass Sie durch Ihre Zustimmung mit
              Beginn der Ausführung des Vertrags Ihr Widerrufsrecht verlieren.
            </p>
          </div>
          <p>
            Diese Zustimmung erfolgt bei der Registrierung auf unserer
            Plattform.
          </p>

          <h2>Muster-Widerrufsformular</h2>
          <p>
            (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte
            dieses Formular aus und senden Sie es zurück.)
          </p>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <p className="m-0">
              An:
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
            <p>
              _________________________________________________
              <br />
              (Beschreibung der Dienstleistung)
            </p>
            <p>
              Bestellt am: _________________
              <br />
              <br />
              Name des/der Verbraucher(s): _________________
              <br />
              <br />
              Anschrift des/der Verbraucher(s): _________________
              <br />
              <br />
              _________________
              <br />
              <br />
              Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf
              Papier): _________________
              <br />
              <br />
              Datum: _________________
            </p>
            <p className="m-0 text-sm text-slate-500">
              (*) Unzutreffendes streichen.
            </p>
          </div>

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

