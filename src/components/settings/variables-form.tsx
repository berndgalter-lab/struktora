'use client';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Save } from 'lucide-react';
import type { CompanyVariables } from '@/types';

interface VariablesFormProps {
  variables: CompanyVariables;
  onChange: (variables: CompanyVariables) => void;
  onSave: () => Promise<void>;
  saving: boolean;
}

const VARIABLE_OPTIONS = {
  tonality: [
    { value: 'formell', label: 'Formell & professionell' },
    { value: 'sachlich', label: 'Sachlich & neutral' },
    { value: 'freundlich', label: 'Freundlich & warmherzig' },
    { value: 'locker', label: 'Locker & entspannt' },
    { value: 'empathisch', label: 'Empathisch & verständnisvoll' },
  ],
  anrede: [
    { value: 'sie_formell', label: 'Sie (förmlich)' },
    { value: 'sie_hoeflich', label: 'Sie (höflich)' },
    { value: 'du_formell', label: 'Du (professionell)' },
    { value: 'du_locker', label: 'Du (locker)' },
  ],
  technical_depth: [
    { value: 'niedrig', label: 'Niedrig - Einfache Sprache' },
    { value: 'mittel', label: 'Mittel - Ausgewogen' },
    { value: 'hoch', label: 'Hoch - Detailliert' },
    { value: 'experte', label: 'Experte - Fachsprache' },
  ],
  commitment_level: [
    { value: 'unverbindlich', label: 'Unverbindlich' },
    { value: 'standard', label: 'Standard' },
    { value: 'verbindlich', label: 'Verbindlich' },
    { value: 'rechtlich_bindend', label: 'Rechtlich bindend' },
  ],
  legal_caution: [
    { value: 'minimal', label: 'Minimal' },
    { value: 'standard', label: 'Standard' },
    { value: 'erhoeht', label: 'Erhöht' },
    { value: 'maximal', label: 'Maximal' },
  ],
  documentation_level: [
    { value: 'minimal', label: 'Minimal' },
    { value: 'standard', label: 'Standard' },
    { value: 'ausfuehrlich', label: 'Ausführlich' },
    { value: 'vollstaendig', label: 'Vollständig' },
  ],
  governance_strictness: [
    { value: 'locker', label: 'Locker' },
    { value: 'standard', label: 'Standard' },
    { value: 'streng', label: 'Streng' },
    { value: 'audit_ready', label: 'Audit-Ready' },
  ],
  escalation_level: [
    { value: 'keine', label: 'Keine' },
    { value: 'info', label: 'Info' },
    { value: 'warnung', label: 'Warnung' },
    { value: 'eskalation', label: 'Eskalation' },
  ],
  approval_logic: [
    { value: 'keine', label: 'Keine Freigabe' },
    { value: 'optional', label: 'Optional' },
    { value: 'erforderlich', label: 'Erforderlich' },
    { value: 'mehrstufig', label: 'Mehrstufig' },
  ],
  sender_role: [
    { value: 'neutral', label: 'Neutral' },
    { value: 'funktion', label: 'Funktion/Rolle' },
    { value: 'person', label: 'Person' },
    { value: 'team', label: 'Team' },
  ],
  customer_context: [
    { value: 'interessent', label: 'Interessent' },
    { value: 'neukunde', label: 'Neukunde' },
    { value: 'bestandskunde', label: 'Bestandskunde' },
    { value: 'premium', label: 'Premium-Kunde' },
    { value: 'kritisch', label: 'Kritischer Kunde' },
  ],
};

const VARIABLE_LABELS: Record<string, { label: string; description: string }> = {
  tonality: { label: 'Tonalität', description: 'Der Grundton deiner Kommunikation' },
  anrede: { label: 'Anrede', description: 'Wie Empfänger angesprochen werden' },
  technical_depth: { label: 'Technische Tiefe', description: 'Detailgrad der Erklärungen' },
  commitment_level: { label: 'Verbindlichkeit', description: 'Wie bindend Aussagen sind' },
  legal_caution: { label: 'Rechtliche Vorsicht', description: 'Absicherung bei rechtlichen Themen' },
  documentation_level: { label: 'Dokumentationsgrad', description: 'Ausführlichkeit der Dokumentation' },
  governance_strictness: { label: 'Governance-Strenge', description: 'Compliance-Anforderungen' },
  escalation_level: { label: 'Eskalationsniveau', description: 'Standard-Eskalationsstufe' },
  approval_logic: { label: 'Freigabelogik', description: 'Erforderliche Freigaben' },
  sender_role: { label: 'Absenderrolle', description: 'Wie der Absender auftritt' },
  customer_context: { label: 'Kundenkontext', description: 'Standard-Kundenbeziehung' },
};

// Helper Component
function VariableSelect({ 
  variableKey, 
  value, 
  onChange 
}: { 
  variableKey: keyof typeof VARIABLE_OPTIONS; 
  value: string; 
  onChange: (value: string) => void;
}) {
  const options = VARIABLE_OPTIONS[variableKey];
  const labels = VARIABLE_LABELS[variableKey];

  return (
    <div className="space-y-2">
      <Label>{labels.label}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p className="text-xs text-muted-foreground">{labels.description}</p>
    </div>
  );
}

export function VariablesForm({ variables, onChange, onSave, saving }: VariablesFormProps) {
  const handleChange = (key: keyof CompanyVariables, value: string | string[]) => {
    onChange({ ...variables, [key]: value });
  };

  const handleNogoChange = (text: string) => {
    const rules = text.split('\n').map(s => s.trim()).filter(Boolean);
    handleChange('nogo_rules', rules);
  };

  return (
    <div className="space-y-6">
      {/* Kommunikation & Ton */}
      <Card>
        <CardHeader>
          <CardTitle>Kommunikation & Ton</CardTitle>
          <CardDescription>Wie soll deine Kommunikation klingen?</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          <VariableSelect
            variableKey="tonality"
            value={variables.tonality}
            onChange={(v) => handleChange('tonality', v)}
          />
          <VariableSelect
            variableKey="anrede"
            value={variables.anrede}
            onChange={(v) => handleChange('anrede', v)}
          />
        </CardContent>
      </Card>

      {/* Fachliche Tiefe */}
      <Card>
        <CardHeader>
          <CardTitle>Fachliche Tiefe</CardTitle>
          <CardDescription>Wie detailliert und verbindlich?</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <VariableSelect
            variableKey="technical_depth"
            value={variables.technical_depth}
            onChange={(v) => handleChange('technical_depth', v)}
          />
          <VariableSelect
            variableKey="commitment_level"
            value={variables.commitment_level}
            onChange={(v) => handleChange('commitment_level', v)}
          />
          <VariableSelect
            variableKey="legal_caution"
            value={variables.legal_caution}
            onChange={(v) => handleChange('legal_caution', v)}
          />
        </CardContent>
      </Card>

      {/* Dokumentation & Governance */}
      <Card>
        <CardHeader>
          <CardTitle>Dokumentation & Governance</CardTitle>
          <CardDescription>Compliance und Freigabe-Einstellungen</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          <VariableSelect
            variableKey="documentation_level"
            value={variables.documentation_level}
            onChange={(v) => handleChange('documentation_level', v)}
          />
          <VariableSelect
            variableKey="governance_strictness"
            value={variables.governance_strictness}
            onChange={(v) => handleChange('governance_strictness', v)}
          />
          <VariableSelect
            variableKey="escalation_level"
            value={variables.escalation_level}
            onChange={(v) => handleChange('escalation_level', v)}
          />
          <VariableSelect
            variableKey="approval_logic"
            value={variables.approval_logic}
            onChange={(v) => handleChange('approval_logic', v)}
          />
        </CardContent>
      </Card>

      {/* Kontext */}
      <Card>
        <CardHeader>
          <CardTitle>Kontext</CardTitle>
          <CardDescription>Absender- und Empfänger-Einstellungen</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          <VariableSelect
            variableKey="sender_role"
            value={variables.sender_role}
            onChange={(v) => handleChange('sender_role', v)}
          />
          <VariableSelect
            variableKey="customer_context"
            value={variables.customer_context}
            onChange={(v) => handleChange('customer_context', v)}
          />
        </CardContent>
      </Card>

      {/* No-Go Begriffe */}
      <Card>
        <CardHeader>
          <CardTitle>No-Go Begriffe</CardTitle>
          <CardDescription>
            Begriffe die in generierten Texten vermieden werden sollen (einer pro Zeile)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            value={variables.nogo_rules.join('\n')}
            onChange={(e) => handleNogoChange(e.target.value)}
            placeholder={`z.B.\nzeitnah\ndiesbezüglich\nin Kürze`}
            rows={5}
            className="font-mono text-sm"
          />
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={onSave} disabled={saving} size="lg">
          {saving ? (
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            <Save className="h-4 w-4 mr-2" />
          )}
          Einstellungen speichern
        </Button>
      </div>
    </div>
  );
}

