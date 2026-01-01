import Link from "next/link";
import { Logo } from "@/components/ui/logo";

export const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Logo href="/" size="md" />
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-600">
            <Link href="/impressum" className="hover:text-slate-900">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-slate-900">
              Datenschutz
            </Link>
            <Link href="/agb" className="hover:text-slate-900">
              AGB
            </Link>
            <Link href="/widerruf" className="hover:text-slate-900">
              Widerruf
            </Link>
            <Link href="/avv" className="hover:text-slate-900">
              AVV
            </Link>
          </div>
          <div className="text-sm text-slate-500">
            © 2026 struktora. Alle Rechte vorbehalten.
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-xs text-slate-400">
            Das Angebot richtet sich an Kunden mit Sitz in der EU (DACH).
          </p>
        </div>
      </div>
    </footer>
  );
};
