'use client';

import { StandardCard } from './standard-card';
import type { StandardFamily, StandardWithVariants } from '@/types';
import {
  MessageSquare,
  FileText,
  Calendar,
  TrendingUp,
  Headphones,
  Folder,
  type LucideIcon,
} from 'lucide-react';

// Icon-Mapping für Standard-Familien
const iconMap: Record<string, LucideIcon> = {
  MessageSquare,
  FileText,
  Calendar,
  TrendingUp,
  Headphones,
  Folder,
};

interface FamilySectionProps {
  family: StandardFamily & { standards: StandardWithVariants[] };
}

export function FamilySection({ family }: FamilySectionProps) {
  // Icon aus Mapping laden, Fallback auf Folder
  const IconComponent = iconMap[family.icon] || Folder;
  
  if (family.standards.length === 0) {
    return null;
  }

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <IconComponent className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">{family.name}</h2>
          {family.description && (
            <p className="text-sm text-muted-foreground">{family.description}</p>
          )}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {family.standards.map((standard) => (
          <StandardCard key={standard.id} standard={standard} />
        ))}
      </div>
    </section>
  );
}

