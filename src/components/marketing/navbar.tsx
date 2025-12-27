import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export const Navbar = () => {
  const tAuth = useTranslations("auth");

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Logo href="/" size="md" />
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
