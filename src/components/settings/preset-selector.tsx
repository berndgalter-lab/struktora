'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Building2, Shield, Sparkles } from 'lucide-react';
import type { CompanyVariablePreset } from '@/types';

interface PresetSelectorProps {
  presets: CompanyVariablePreset[];
  onApply: (values: Record<string, unknown>) => void;
}

const PRESET_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  standard: Building2,
  reguliert: Shield,
  locker: Sparkles,
};

export function PresetSelector({ presets, onApply }: PresetSelectorProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {presets.map((preset) => {
        const Icon = PRESET_ICONS[preset.slug] || Building2;
        
        return (
          <Card key={preset.id} className="relative hover:border-primary/50 transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-base">{preset.name}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {preset.description && (
                <CardDescription className="mb-4">{preset.description}</CardDescription>
              )}
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => onApply(preset.values as Record<string, unknown>)}
              >
                <Check className="h-4 w-4 mr-2" />
                Anwenden
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

