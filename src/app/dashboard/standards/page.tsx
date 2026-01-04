'use client';

import { useStandards } from '@/hooks/use-standards';
import { FamilySection } from '@/components/standards';
import { Loader2 } from 'lucide-react';

export default function StandardsPage() {
  const { families, loading, error } = useStandards();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-destructive">{error}</p>
      </div>
    );
  }

  const familiesWithStandards = families.filter(f => f.standards.length > 0);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Standards</h1>
        <p className="text-muted-foreground mt-1">
          Wähle einen Standard, um professionelle Texte zu generieren.
        </p>
      </div>

      {familiesWithStandards.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Keine Standards verfügbar.</p>
        </div>
      ) : (
        <div className="space-y-12">
          {familiesWithStandards.map((family) => (
            <FamilySection key={family.id} family={family} />
          ))}
        </div>
      )}
    </div>
  );
}

