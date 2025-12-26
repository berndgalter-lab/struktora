import { useTranslations } from "next-intl";
import { Workflow, Palette, Rocket, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  { icon: Workflow, key: "feature1" },
  { icon: Palette, key: "feature2" },
  { icon: Rocket, key: "feature3" },
  { icon: Shield, key: "feature4" },
];

export const Features = () => {
  const t = useTranslations("landing.features");

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold text-slate-900">
          {t("title")}
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.key} className="border-slate-200">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {t(`${feature.key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {t(`${feature.key}.description`)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
