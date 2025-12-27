import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  href?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export const Logo = ({ href = "/", size = "md", className, onClick }: LogoProps) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  const dotSizes = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-2.5 h-2.5",
  };

  const LogoContent = (
    <span className={cn("inline-flex items-baseline font-extrabold text-slate-900", sizeClasses[size], className)}>
      struktora
      <span className={cn("ml-0.5 rounded-full bg-blue-500 self-end mb-1", dotSizes[size])} />
    </span>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className="inline-block">
        {LogoContent}
      </Link>
    );
  }

  return LogoContent;
};

// Icon-only version for small spaces
export const LogoIcon = ({ size = "md", className }: { size?: "sm" | "md" | "lg"; className?: string }) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  const dotSizes = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  };

  return (
    <span className={cn("inline-flex items-center font-extrabold text-slate-900", sizeClasses[size], className)}>
      s
      <span className={cn("ml-0.5 rounded-full bg-blue-500", dotSizes[size])} />
    </span>
  );
};

