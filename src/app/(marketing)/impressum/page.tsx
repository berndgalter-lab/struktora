import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ImpressumPage() {
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

        <h1 className="mb-8 text-3xl font-bold text-slate-900">Impressum</h1>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              Angaben gemäß § 5 TMG / § 18 MStV
            </h2>
            <p className="font-semibold">BG Online Media (haftungsbeschränkt)</p>
            <p className="mt-2">
              Grünwiesenstraße 33
              <br />
              74321 Bietigheim-Bissingen
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              Vertreten durch
            </h2>
            <p>Geschäftsführer: Bernd Galter</p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              Kontakt
            </h2>
            <p>
              Telefon: +49 176 22372958
              <br />
              E-Mail: support@struktora.com
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              Handelsregister
            </h2>
            <p>
              Registergericht: Amtsgericht Stuttgart
              <br />
              Registernummer: HRB 774462
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              Umsatzsteuer-ID
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              DE331972080
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              EU-Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:
              <br />
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mt-2">
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              Verbraucherstreitbeilegung
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              Haftung für Inhalte
            </h2>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. 
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte 
              können wir jedoch keine Gewähr übernehmen. Bei Bekanntwerden von 
              Rechtsverletzungen werden wir entsprechende Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              Haftung für Links
            </h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter. Auf deren 
              Inhalte haben wir keinen Einfluss und übernehmen daher keine Gewähr. 
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter 
              verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir 
              entsprechende Links umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              Urheberrecht
            </h2>
            <p>
              Die durch uns erstellten Inhalte und Werke auf diesen Seiten 
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, 
              Bearbeitung oder Verbreitung außerhalb der gesetzlich zulässigen 
              Fälle bedarf unserer schriftlichen Zustimmung.
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
