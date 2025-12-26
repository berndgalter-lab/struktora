"use client";

import { MobileSidebar } from "./sidebar";

interface HeaderProps {
  title?: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="flex h-16 items-center gap-4 border-b border-slate-200 bg-white px-4 lg:px-6">
      <MobileSidebar />
      {title && (
        <h1 className="text-lg font-semibold text-slate-900">{title}</h1>
      )}
    </header>
  );
};
