import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";

export const Demo = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Überschrift */}
        <h2 className="text-center text-2xl font-semibold text-slate-900 md:text-3xl">
          So sieht zuverlässige KI im Arbeitsalltag aus.
        </h2>

        {/* Einordnungstext */}
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Ein typischer Anwendungsfall: Eine eingehende Kunden-E-Mail wird mit
          Struktora in eine konsistente, unternehmenskonforme Antwort überführt
          – in wenigen Schritten.
        </p>

        {/* 3-Schritt-Flow */}
        <div className="mt-12 grid gap-8 md:grid-cols-[1fr,auto,1fr,auto,1fr] md:items-start">
          {/* Schritt 1 – Eingang */}
          <div className="flex flex-col">
            <span className="mb-3 text-center text-sm font-medium text-slate-500">
              Eingehende Kunden-E-Mail
            </span>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <div className="space-y-1 text-sm">
                <p className="text-slate-500">
                  <span className="font-medium text-slate-700">Von:</span>{" "}
                  thomas.mueller@kunde-gmbh.de
                </p>
                <p className="text-slate-500">
                  <span className="font-medium text-slate-700">Betreff:</span>{" "}
                  Rückfrage zu Angebot AG-2024-156
                </p>
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <p>Sehr geehrte Damen und Herren,</p>
                <p>
                  wir haben Ihr Angebot erhalten, allerdings sind uns einige
                  Punkte noch unklar. Könnten Sie uns mitteilen, ob die
                  Lieferzeit von 6 Wochen verbindlich ist? Außerdem würden wir
                  gerne wissen, ob bei größerer Stückzahl ein Rabatt möglich
                  wäre.
                </p>
                <p>Mit freundlichen Grüßen</p>
                <p className="font-medium">Thomas Müller</p>
              </div>
            </div>
          </div>

          {/* Pfeil 1 */}
          <div className="hidden items-center justify-center self-center md:flex">
            <ArrowRight className="h-6 w-6 text-slate-300" />
          </div>
          <div className="flex items-center justify-center md:hidden">
            <ArrowDown className="h-6 w-6 text-slate-300" />
          </div>

          {/* Schritt 2 – Struktur */}
          <div className="flex flex-col">
            <span className="mb-3 text-center text-sm font-medium text-slate-500">
              Struktora – standardisierter Ablauf
            </span>
            <div className="rounded-lg border-2 border-blue-200 bg-white p-4 shadow-sm">
              <div className="mb-4 border-b border-slate-100 pb-3">
                <span className="text-sm font-semibold text-slate-900">
                  E-Mail-Antwort Generator
                </span>
              </div>

              <div className="space-y-4">
                {/* Original-E-Mail Feld */}
                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-600">
                    Original-E-Mail
                  </label>
                  <div className="rounded border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-500">
                    [E-Mail eingefügt...]
                  </div>
                </div>

                {/* Tonalität Dropdown */}
                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-600">
                    Tonalität
                  </label>
                  <div className="flex items-center justify-between rounded border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700">
                    <span>Sachlich / professionell</span>
                    <span className="text-slate-400">▼</span>
                  </div>
                </div>

                {/* Kernpunkte */}
                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-600">
                    Kernpunkte der Antwort
                  </label>
                  <div className="space-y-1 rounded border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
                    <p>– Lieferzeit bestätigen</p>
                    <p>– Mengenrabatt möglich</p>
                  </div>
                </div>

                {/* Info-Hinweis */}
                <div className="flex items-start gap-2 rounded bg-blue-50 px-3 py-2 text-xs text-blue-700">
                  <span>ℹ️</span>
                  <span>Firmenrichtlinien (z. B. Tonalität, Freigaben, Formulierungen) werden automatisch berücksichtigt</span>
                </div>

                {/* Button */}
                <div className="pt-2 text-center">
                  <span className="inline-block rounded bg-slate-900 px-4 py-2 text-xs font-medium text-white">
                    Generieren
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Pfeil 2 */}
          <div className="hidden items-center justify-center self-center md:flex">
            <ArrowRight className="h-6 w-6 text-slate-300" />
          </div>
          <div className="flex items-center justify-center md:hidden">
            <ArrowDown className="h-6 w-6 text-slate-300" />
          </div>

          {/* Schritt 3 – Ergebnis */}
          <div className="flex flex-col">
            <span className="mb-3 text-center text-sm font-medium text-slate-500">
              Fertige Antwort
            </span>
            <div className="rounded-lg border border-green-200 bg-green-50/50 p-4">
              <div className="space-y-3 text-sm text-slate-700">
                <p>Sehr geehrter Herr Müller,</p>
                <p>
                  vielen Dank für Ihre Anfrage zu unserem Angebot AG-2024-156.
                </p>
                <p>
                  Gerne bestätige ich Ihnen, dass die Lieferzeit von 6 Wochen
                  verbindlich ist. Bei einer Bestellung ab 50 Einheiten können
                  wir Ihnen einen Mengenrabatt von 8% einräumen.
                </p>
                <p>
                  Für weitere Fragen stehe ich Ihnen jederzeit zur Verfügung.
                </p>
                <p>Mit freundlichen Grüßen</p>
                <p className="text-slate-500">[Signatur]</p>
              </div>
            </div>
            <p className="mt-2 text-center text-sm text-slate-500">
              Ergebnis: einheitlicher Ton, weniger Aufwand, keine Experimente.
            </p>
          </div>
        </div>

        {/* Mini-CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-slate-700">
            Genau so funktioniert Struktora –
            <br className="hidden sm:block" />
            für alle wiederkehrenden Aufgaben im Arbeitsalltag.
          </p>
          <div className="mt-6">
            <Link href="/signup">
              <Button size="lg">14 Tage testen</Button>
            </Link>
          </div>
          <p className="mt-3 text-sm text-slate-500">
            Ohne IT-Projekt. Ohne Schulung. Sofort nutzbar.
          </p>
        </div>
      </div>
    </section>
  );
};

