'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { InputField } from '@/types';

interface TextFieldProps {
  field: InputField;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export function TextField({ field, value, onChange, error }: TextFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={field.field_key}>
        {field.label}
        {field.is_required && <span className="text-destructive ml-1">*</span>}
      </Label>
      <Input
        id={field.field_key}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={field.placeholder || undefined}
        className={error ? 'border-destructive' : ''}
      />
      {field.help_text && (
        <p className="text-sm text-muted-foreground">{field.help_text}</p>
      )}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}

