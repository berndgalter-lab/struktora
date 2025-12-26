import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const t = useTranslations("common");
  const tAuth = useTranslations("auth");

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-slate-900">
          {t("appName")}
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost">{tAuth("login")}</Button>
          </Link>
          <Link href="/signup">
            <Button>{tAuth("signup")}</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

