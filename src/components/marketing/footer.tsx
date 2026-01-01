import Link from "next/link";
import { Logo } from "@/components/ui/logo";

export const Footer = () => {
  return (
    <footer className="border-t border-border/20 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Logo href="/" size="md" />
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground/60 md:text-sm">
            <Link href="/impressum" className="hover:text-foreground">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-foreground">
              Datenschutz
            </Link>
            <Link href="/agb" className="hover:text-foreground">
              AGB
            </Link>
            <Link href="/widerruf" className="hover:text-foreground">
              Widerruf
            </Link>
            <Link href="/avv" className="hover:text-foreground">
              AVV
            </Link>
          </div>
          <div className="text-xs text-muted-foreground/60 md:text-sm">
            © 2026 struktora. Alle Rechte vorbehalten.
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-xs text-muted-foreground/50">
            Das Angebot richtet sich an Kunden mit Sitz in der EU (DACH).
          </p>
        </div>
      </div>
    </footer>
  );
};
