import Link from "next/link";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("common");

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-xl font-bold text-slate-900">{t("appName")}</div>
          <div className="flex gap-6 text-sm text-slate-600">
            <Link href="/impressum" className="hover:text-slate-900">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-slate-900">
              Datenschutz
            </Link>
            <Link href="/agb" className="hover:text-slate-900">
              AGB
            </Link>
          </div>
          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} {t("appName")}. Alle Rechte
            vorbehalten.
          </div>
        </div>
      </div>
    </footer>
  );
};
