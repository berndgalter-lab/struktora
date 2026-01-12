'use client';

import { useEffect } from 'react';
import { useStandards } from '@/hooks/use-standards';
import { useEntitlements } from '@/hooks/use-entitlements';
import { FamilySection } from '@/components/standards';
import { UsageIndicator } from '@/components/entitlements';
import { Loader2 } from 'lucide-react';

export default function StandardsPage() {
  const { families, loading: loadingStandards, error: standardsError } = useStandards();
  const { entitlements, isFamilyActive, loading: loadingEntitlements } = useEntitlements();

  // DEBUG - nach dem Laden
  useEffect(() => {
    if (!loadingEntitlements) {
      console.log('Entitlements:', entitlements);
      console.log('isFamilyActive("kommunikation"):', isFamilyActive('kommunikation'));
    }
  }, [entitlements, loadingEntitlements, isFamilyActive]);

  const loading = loadingStandards || loadingEntitlements;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (standardsError) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-destructive">{standardsError}</p>
      </div>
    );
  }

  const familiesWithStandards = families.filter(f => f.standards.length > 0);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Standards</h1>
          <p className="text-muted-foreground mt-1">
            Wähle einen Standard, um professionelle Texte zu generieren.
          </p>
        </div>
        <div className="w-full sm:w-64">
          <UsageIndicator />
        </div>
      </div>

      {familiesWithStandards.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Keine Standards verfügbar.</p>
        </div>
      ) : (
        <div className="space-y-12">
          {familiesWithStandards.map((family) => (
            <FamilySection 
              key={family.id} 
              family={family}
              isLocked={!isFamilyActive(family.slug)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

