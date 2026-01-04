import type { CompanyVariables, CompanyContext, InputField } from '@/types';

interface TemplateContext {
  inputs: Record<string, string>;
  variables: CompanyVariables;
  context: CompanyContext | null;
  overrides?: Record<string, string>;
}

/**
 * Ersetzt Platzhalter im Prompt-Template
 */
export function fillTemplate(
  template: string,
  { inputs, variables, context, overrides }: TemplateContext
): string {
  let result = template;
  
  // 1. Company Context Platzhalter
  if (context) {
    result = result.replace(/\{\{company_name\}\}/g, context.company_name || '[Firmenname nicht konfiguriert]');
    result = result.replace(/\{\{industry\}\}/g, context.industry || '[Branche nicht konfiguriert]');
    result = result.replace(/\{\{description\}\}/g, context.description || '[Beschreibung nicht konfiguriert]');
    result = result.replace(/\{\{products\}\}/g, context.products || '');
    result = result.replace(/\{\{greeting\}\}/g, context.custom_greeting || 'Mit freundlichen Grüßen');
  } else {
    // Fallback wenn kein Context
    result = result.replace(/\{\{company_name\}\}/g, '[Firmenname nicht konfiguriert]');
    result = result.replace(/\{\{industry\}\}/g, '[Branche nicht konfiguriert]');
    result = result.replace(/\{\{description\}\}/g, '[Beschreibung nicht konfiguriert]');
    result = result.replace(/\{\{products\}\}/g, '');
    result = result.replace(/\{\{greeting\}\}/g, 'Mit freundlichen Grüßen');
  }
  
  // 2. Company Variables Platzhalter (mit Overrides)
  const effectiveVariables = { ...variables, ...overrides } as CompanyVariables & Record<string, string>;
  
  result = result.replace(/\{\{tonality\}\}/g, formatTonality(effectiveVariables.tonality));
  result = result.replace(/\{\{anrede\}\}/g, formatAnrede(effectiveVariables.anrede));
  result = result.replace(/\{\{technical_depth\}\}/g, effectiveVariables.technical_depth || '');
  result = result.replace(/\{\{commitment_level\}\}/g, effectiveVariables.commitment_level || '');
  result = result.replace(/\{\{legal_caution\}\}/g, effectiveVariables.legal_caution || '');
  result = result.replace(/\{\{documentation_level\}\}/g, effectiveVariables.documentation_level || '');
  result = result.replace(/\{\{governance_strictness\}\}/g, effectiveVariables.governance_strictness || '');
  result = result.replace(/\{\{sender_role\}\}/g, effectiveVariables.sender_role || '');
  result = result.replace(/\{\{customer_context\}\}/g, effectiveVariables.customer_context || '');
  
  // Nogo Rules als Liste formatieren
  const nogoRules = effectiveVariables.nogo_rules || [];
  const nogoFormatted = nogoRules.length > 0 ? nogoRules.join(', ') : 'keine';
  result = result.replace(/\{\{nogo_words\}\}/g, nogoFormatted);
  result = result.replace(/\{\{nogo_rules\}\}/g, nogoFormatted);
  
  // 3. User Inputs Platzhalter
  for (const [key, value] of Object.entries(inputs)) {
    const regex = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
    result = result.replace(regex, value || '');
  }
  
  return result;
}

/**
 * Formatiert Tonality für den Prompt
 */
function formatTonality(tonality: string): string {
  const map: Record<string, string> = {
    formell: 'formell und professionell',
    sachlich: 'sachlich und neutral',
    freundlich: 'freundlich und warmherzig',
    locker: 'locker und entspannt',
    empathisch: 'empathisch und verständnisvoll',
  };
  return map[tonality] || tonality;
}

/**
 * Formatiert Anrede für den Prompt
 */
function formatAnrede(anrede: string): string {
  const map: Record<string, string> = {
    sie_formell: 'Siezen Sie den Empfänger förmlich',
    sie_hoeflich: 'Siezen Sie den Empfänger höflich',
    du_formell: 'Duzen Sie den Empfänger, aber bleiben Sie professionell',
    du_locker: 'Duzen Sie den Empfänger locker',
    // Legacy-Kompatibilität
    Sie: 'Siezen Sie den Empfänger',
    Du: 'Duzen Sie den Empfänger',
  };
  return map[anrede] || anrede;
}

/**
 * Validiert Inputs gegen Input-Field-Definitionen
 */
export function validateInputs(
  inputs: Record<string, string>,
  fields: InputField[]
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  for (const field of fields) {
    const value = inputs[field.field_key];
    
    // Required check
    if (field.is_required && (!value || value.trim() === '')) {
      errors.push(`Feld "${field.label}" ist erforderlich`);
      continue;
    }
    
    // Skip further validation if empty and not required
    if (!value) continue;
    
    // Validation rules
    if (field.validation) {
      if (field.validation.minLength && value.length < field.validation.minLength) {
        errors.push(`Feld "${field.label}" muss mindestens ${field.validation.minLength} Zeichen haben`);
      }
      if (field.validation.maxLength && value.length > field.validation.maxLength) {
        errors.push(`Feld "${field.label}" darf maximal ${field.validation.maxLength} Zeichen haben`);
      }
    }
    
    // Select/Radio: Check if value is in options
    if (field.options && (field.type === 'select' || field.type === 'radio')) {
      const validValues = field.options.map(o => o.value);
      if (!validValues.includes(value)) {
        errors.push(`Ungültiger Wert für "${field.label}"`);
      }
    }
  }
  
  return { valid: errors.length === 0, errors };
}

