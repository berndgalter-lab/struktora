'use client';

import { useState, useCallback } from 'react';
import { useVariant, useExecuteStandard } from '@/hooks/use-standards';
import { TextField, TextareaField, SelectField } from './wizard-fields';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2, Copy, Check, ArrowLeft, RefreshCw } from 'lucide-react';
import type { InputField } from '@/types';

interface StandardWizardProps {
  variantId: string;
  onBack?: () => void;
}

export function StandardWizard({ variantId, onBack }: StandardWizardProps) {
  const { variant, loading: loadingVariant, error: variantError } = useVariant(variantId);
  const { execute, loading: executing, error: executeError } = useExecuteStandard();
  
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [output, setOutput] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleInputChange = useCallback((key: string, value: string) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
    // Clear validation error when user types
    if (validationErrors[key]) {
      setValidationErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  }, [validationErrors]);

  const validateInputs = useCallback(() => {
    if (!variant?.current_version?.input_fields) return true;
    
    const errors: Record<string, string> = {};
    
    for (const field of variant.current_version.input_fields) {
      const value = inputs[field.field_key];
      
      if (field.is_required && (!value || value.trim() === '')) {
        errors[field.field_key] = `${field.label} ist erforderlich`;
      }
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  }, [variant, inputs]);

  const handleSubmit = async () => {
    if (!validateInputs()) return;
    
    try {
      const result = await execute(variantId, inputs);
      setOutput(result.output);
    } catch {
      // Error is handled by useExecuteStandard
    }
  };

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setInputs({});
    setOutput(null);
    setValidationErrors({});
  };

  const handleRegenerate = async () => {
    setOutput(null);
    await handleSubmit();
  };

  const renderField = (field: InputField) => {
    const value = inputs[field.field_key] || '';
    const error = validationErrors[field.field_key];
    
    switch (field.type) {
      case 'textarea':
        return (
          <TextareaField
            key={field.id}
            field={field}
            value={value}
            onChange={(v) => handleInputChange(field.field_key, v)}
            error={error}
          />
        );
      case 'select':
      case 'radio':
        return (
          <SelectField
            key={field.id}
            field={field}
            value={value}
            onChange={(v) => handleInputChange(field.field_key, v)}
            error={error}
          />
        );
      case 'text':
      case 'number':
      case 'date':
      default:
        return (
          <TextField
            key={field.id}
            field={field}
            value={value}
            onChange={(v) => handleInputChange(field.field_key, v)}
            error={error}
          />
        );
    }
  };

  // Loading State
  if (loadingVariant) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  // Error State
  if (variantError || !variant) {
    return (
      <Card>
        <CardContent className="p-6">
          <p className="text-destructive">
            {variantError || 'Standard konnte nicht geladen werden'}
          </p>
          {onBack && (
            <Button variant="outline" onClick={onBack} className="mt-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück
            </Button>
          )}
        </CardContent>
      </Card>
    );
  }

  const inputFields = variant.current_version?.input_fields || [];

  // Result View
  if (output) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {onBack && (
                <Button variant="ghost" size="icon" onClick={onBack}>
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              )}
              <div>
                <CardTitle>{variant.standard.name}</CardTitle>
                <CardDescription>{variant.name}</CardDescription>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleRegenerate} disabled={executing}>
                {executing ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <RefreshCw className="mr-2 h-4 w-4" />
                )}
                Neu generieren
              </Button>
              <Button variant="outline" size="sm" onClick={handleReset}>
                Neu starten
              </Button>
              <Button size="sm" onClick={handleCopy}>
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Kopiert
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Kopieren
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg bg-muted p-4 whitespace-pre-wrap text-sm leading-relaxed">
            {output}
          </div>
        </CardContent>
      </Card>
    );
  }

  // Input Form View
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          {onBack && (
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
          )}
          <div>
            <CardTitle>{variant.standard.name}</CardTitle>
            <CardDescription>
              {variant.name}
              {variant.estimated_time && ` · ${variant.estimated_time}`}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="space-y-6"
        >
          {inputFields.map(renderField)}
          
          {executeError && (
            <div className="rounded-lg bg-destructive/10 p-4 text-sm text-destructive">
              {executeError}
            </div>
          )}
          
          <div className="flex justify-end gap-2 pt-4">
            {onBack && (
              <Button type="button" variant="outline" onClick={onBack}>
                Abbrechen
              </Button>
            )}
            <Button type="submit" disabled={executing}>
              {executing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Generieren
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

