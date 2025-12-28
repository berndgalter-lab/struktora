import { Hero } from "@/components/marketing/hero";
import { Demo } from "@/components/marketing/demo";
import { UseCases } from "@/components/marketing/use-cases";
import { Pricing } from "@/components/marketing/pricing";
import { FAQ } from "@/components/marketing/faq";

export default function LandingPage() {
  return (
    <>
      <Hero />

      {/* Context Block - Übergang zwischen Hero und Demo */}
      <div className="bg-slate-50/50 py-12 md:py-16">
        <p className="mx-auto max-w-3xl px-4 text-center text-lg text-slate-600 md:text-xl">
          Für wiederkehrende Arbeitsabläufe von Mitarbeitern – ohne Anpassung bestehender Systeme.
          <br className="hidden sm:block" />
          Zum Beispiel für Kunden-E-Mails, Angebotskommunikation, Reklamationsantworten
          <br className="hidden md:block" />
          und interne Dokumentation – überall dort, wo heute manuell formuliert wird.
        </p>
      </div>

      <Demo />
      <UseCases />
      <Pricing />
      <FAQ />
    </>
  );
}
