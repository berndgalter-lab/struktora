"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { RecipeField } from "@/types/recipes";

interface TextareaFieldProps {
  field: RecipeField;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const TextareaField = ({
  field,
  value,
  onChange,
  disabled = false,
}: TextareaFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={field.id}>
        {field.label}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      <Textarea
        id={field.id}
        placeholder={field.placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        rows={4}
        className="resize-none"
      />
    </div>
  );
};
