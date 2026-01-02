import CalendlyInlineClickToLoad from "@/components/CalendlyInlineClickToLoad";

export default function CheckPage() {
  return (
    <main className="px-6 py-16 md:py-20 lg:py-24">
      <CalendlyInlineClickToLoad
        url="https://calendly.com/bernd-galter-struktora"
        title="Arbeitsstandard prüfen lassen"
        intro="Wir schauen auf eine konkrete Aufgabe aus Ihrem Arbeitsalltag und prüfen, ob ein Arbeitsstandard sinnvoll ist. Keine Vorbereitung nötig."
        buttonLabel="Termin anzeigen"
        privacyHint="Hinweis: Beim Klick wird Calendly (Drittanbieter) geladen. Dabei können Daten übertragen werden."
        height={820}
        utm={{
          utmSource: "website",
          utmMedium: "cta",
          utmCampaign: "arbeitsstandard-check",
        }}
      />
    </main>
  );
}

