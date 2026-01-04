"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Building2, MessageSquare, Sliders, Users, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

const settingsNav = [
  { href: "/dashboard/settings/profile", icon: Building2, labelKey: "profile" },
  { href: "/dashboard/settings/policy", icon: MessageSquare, labelKey: "policy" },
  { href: "/dashboard/settings/variables", icon: Sliders, labelKey: "variables" },
  { href: "/dashboard/settings/team", icon: Users, labelKey: "team" },
  { href: "/dashboard/settings/billing", icon: CreditCard, labelKey: "billing" },
];

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const t = useTranslations("nav");

  return (
    <div className="space-y-6">
      {/* Settings Navigation */}
      <nav className="flex flex-wrap gap-2 border-b border-slate-200 pb-4">
        {settingsNav.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              <Icon className="h-4 w-4" />
              {t(item.labelKey)}
            </Link>
          );
        })}
      </nav>

      {/* Content */}
      {children}
    </div>
  );
}

