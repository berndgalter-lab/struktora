import { useTranslations } from "next-intl";
import { AlertTriangle, Users, Clock, Server } from "lucide-react";

const problems = [
  { icon: AlertTriangle, key: "item1" },
  { icon: Users, key: "item2" },
  { icon: Clock, key: "item3" },
  { icon: Server, key: "item4" },
];

export const Problem = () => {
  const t = useTranslations("landing.problem");

  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold text-white">
          {t("title")}
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.key}
                className="flex items-start gap-4 rounded-lg border border-slate-700 bg-slate-800 p-5"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-500/20">
                  <Icon className="h-5 w-5 text-red-400" />
                </div>
                <p className="text-slate-300">{t(problem.key)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

