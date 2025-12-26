import { useTranslations } from "next-intl";
import Link from "next/link";

// Auth layout - centered card layout for login/signup
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations("common");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
      <div className="mb-8">
        <Link href="/" className="text-2xl font-bold text-slate-900">
          {t("appName")}
        </Link>
      </div>
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
}
