import { useTranslations } from "next-intl";
import { Sparkles } from "lucide-react";

export const Solution = () => {
  const t = useTranslations("landing.solution");

  return (
    <section className="bg-blue-600 py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white/20 p-4">
          <Sparkles className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white">{t("title")}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-blue-100">
          {t("description")}
        </p>
      </div>
    </section>
  );
};

