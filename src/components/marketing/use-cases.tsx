export const UseCases = () => {
  const cases = [
    {
      title: "Kunden-E-Mails beantworten",
      text: "Eingehende Kundenanfragen werden strukturiert verarbeitet und in konsistente, unternehmenskonforme Antworten überführt – ohne jedes Mal neu zu formulieren.",
    },
    {
      title: "Angebote und Follow-ups",
      text: "Angebotsmails, Nachfass-E-Mails und Rückfragen werden einheitlich formuliert, abgestimmt auf Tonalität, Branche und interne Vorgaben.",
    },
    {
      title: "Reklamationen professionell beantworten",
      text: "Reklamationen werden sachlich, deeskalierend und konsistent beantwortet – unabhängig davon, welcher Mitarbeiter antwortet.",
    },
  ];

  return (
    <section className="bg-slate-50/50 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        {/* Überschrift */}
        <h2 className="text-center text-2xl font-semibold text-slate-900 md:text-3xl">
          Typische Einsatzbereiche im Arbeitsalltag
        </h2>

        {/* Use Case Karten */}
        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {cases.map((useCase, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-sm border border-slate-100"
            >
              <h3 className="mb-3 text-lg font-semibold text-slate-900">
                {useCase.title}
              </h3>
              <p className="text-sm text-slate-600 md:text-base">
                {useCase.text}
              </p>
            </div>
          ))}
        </div>

        {/* Abschlusssatz */}
        <p className="mt-10 text-center text-slate-500">
          Weitere Anwendungsfälle wie interne Dokumentation oder FAQs lassen
          sich auf derselben Basis abbilden.
        </p>
      </div>
    </section>
  );
};

