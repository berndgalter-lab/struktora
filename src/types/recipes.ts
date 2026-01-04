// ============================================================================
// LEGACY COMPATIBILITY - Recipe Types
// Diese Datei existiert für Rückwärtskompatibilität während der Migration.
// Nach vollständiger Umstellung auf Standards können diese Typen entfernt werden.
// ============================================================================

import type { InputFieldOption } from './domain';

/**
 * @deprecated Use StandardVariant + InputField from '@/types' instead
 */
export interface RecipeField {
  id: string;
  label: string;
  type: 'textarea' | 'select' | 'radio';
  placeholder?: string;
  required: boolean;
  options?: InputFieldOption[];
}

/**
 * @deprecated Use Standard + StandardVariant from '@/types' instead
 */
export interface Recipe {
  id: string;
  name: string;
  description: string;
  category: 'kommunikation' | 'texte' | 'meetings' | 'sales' | 'support';
  icon: string;
  estimatedTime: string;
  fields: RecipeField[];
  promptTemplate: string;
}

