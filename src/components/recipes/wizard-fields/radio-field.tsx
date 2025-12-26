"use client";

import { Label } from "@/components/ui/label";
import type { RecipeField } from "@/types/recipes";

interface RadioFieldProps {
  field: RecipeField;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const RadioField = ({
  field,
  value,
  onChange,
  disabled = false,
}: RadioFieldProps) => {
  return (
    <div className="space-y-3">
      <Label>
        {field.label}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      <div className="space-y-2">
        {field.options?.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="radio"
              name={field.id}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              disabled={disabled}
              className="h-4 w-4 text-blue-600 border-slate-300 focus:ring-blue-500"
            />
            <span className="text-sm text-slate-700">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
