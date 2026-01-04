'use client';

import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import type { InputField } from '@/types';

interface TextareaFieldProps {
  field: InputField;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export function TextareaField({ field, value, onChange, error }: TextareaFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={field.field_key}>
        {field.label}
        {field.is_required && <span className="text-destructive ml-1">*</span>}
      </Label>
      <Textarea
        id={field.field_key}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={field.placeholder || undefined}
        rows={5}
        className={error ? 'border-destructive' : ''}
      />
      {field.help_text && (
        <p className="text-sm text-muted-foreground">{field.help_text}</p>
      )}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}

