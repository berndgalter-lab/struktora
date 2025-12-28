const faqs = [
  {
    question: "Ist Struktora DSGVO-konform?",
    answer:
      "Ja. Alle Daten werden ausschließlich in der EU verarbeitet. Es findet kein Training mit Kundendaten statt.",
  },
  {
    question: "Müssen meine Mitarbeiter geschult werden?",
    answer:
      "Nein. Struktora arbeitet mit festen Abläufen und klaren Eingabefeldern und kann ohne Schulung sofort genutzt werden.",
  },
  {
    question: "Was ist der Unterschied zu ChatGPT?",
    answer:
      "Struktora ist kein freier Chat. Es arbeitet mit festen Abläufen, berücksichtigt Unternehmensrichtlinien und liefert reproduzierbare Ergebnisse.",
  },
  {
    question: "Für wen ist Struktora gedacht?",
    answer:
      "Für mittelständische Unternehmen, die KI im Arbeitsalltag einsetzen möchten – ohne Experimente, ohne Risiko.",
  },
  {
    question: "Kann ich Struktora testen?",
    answer:
      "Ja. Du kannst Struktora 14 Tage kostenlos testen – ohne Verpflichtung.",
  },
  {
    question: "Wie aufwendig ist die Einführung von Struktora?",
    answer:
      "Der Einstieg ist bewusst einfach gehalten. Es sind keine IT-Projekte, Systemanpassungen oder Schulungen notwendig. Mitarbeiter können Struktora sofort im Arbeitsalltag nutzen.",
  },
];

export const FAQ = () => {
  return (
    <section className="bg-slate-50/50 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        {/* Überschrift */}
        <h2 className="mb-8 text-center text-2xl font-semibold text-slate-900 md:mb-12 md:text-3xl">
          Häufige Fragen
        </h2>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-slate-200 pb-6 last:border-b-0"
            >
              <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                {faq.question}
              </h3>
              <p className="mt-2 text-sm text-slate-600 md:text-base">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

