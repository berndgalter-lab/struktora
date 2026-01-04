'use client';

import { useState, useEffect } from 'react';
import { PresetSelector } from '@/components/settings/preset-selector';
import { VariablesForm } from '@/components/settings/variables-form';
import { Loader2 } from 'lucide-react';
import { DEFAULT_COMPANY_VARIABLES } from '@/types/domain';
import type { CompanyVariables, CompanyVariablePreset } from '@/types';

export default function VariablesSettingsPage() {
  const [variables, setVariables] = useState<CompanyVariables>(DEFAULT_COMPANY_VARIABLES);
  const [presets, setPresets] = useState<CompanyVariablePreset[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const response = await fetch('/api/settings/variables');
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Fehler beim Laden');
        }
        const data = await response.json();
        setVariables(data.variables);
        setPresets(data.presets);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Fehler');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    setSuccess(false);
    
    try {
      const response = await fetch('/api/settings/variables', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ variables }),
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Fehler beim Speichern');
      }
      
      const data = await response.json();
      setVariables(data.variables);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Fehler');
    } finally {
      setSaving(false);
    }
  };

  const handleApplyPreset = (values: Record<string, unknown>) => {
    setVariables(prev => ({ ...prev, ...values } as CompanyVariables));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold">Kommunikations-Einstellungen</h2>
        <p className="text-muted-foreground mt-1">
          Definiere die Standard-Einstellungen für alle generierten Texte.
        </p>
      </div>

      {error && (
        <div className="bg-destructive/10 text-destructive px-4 py-3 rounded-lg">
          {error}
        </div>
      )}
      
      {success && (
        <div className="bg-green-500/10 text-green-600 px-4 py-3 rounded-lg">
          Einstellungen gespeichert!
        </div>
      )}

      {/* Presets */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Schnellauswahl</h2>
        <p className="text-muted-foreground mb-4">
          Wähle ein vorkonfiguriertes Profil als Ausgangspunkt.
        </p>
        <PresetSelector presets={presets} onApply={handleApplyPreset} />
      </section>

      {/* Form */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Detaileinstellungen</h2>
        <VariablesForm
          variables={variables}
          onChange={setVariables}
          onSave={handleSave}
          saving={saving}
        />
      </section>
    </div>
  );
}

