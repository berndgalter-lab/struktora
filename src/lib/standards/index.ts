import { createClient } from '@/lib/supabase/server';
import type { 
  StandardVariantFull, 
  StandardWithVariants,
  StandardFamily,
  InputField,
  Standard,
  StandardVariant,
  StandardVersion,
} from '@/types';

// Re-exports für einfacheren Import
export { getCompanyVariables, getCompanyContext } from './variables';
export { fillTemplate, validateInputs } from './template';

/**
 * Lädt alle Standard-Familien mit Standards und Varianten
 */
export async function getStandardFamilies(
  organizationId?: string
): Promise<(StandardFamily & { standards: StandardWithVariants[] })[]> {
  const supabase = await createClient();
  
  // Familien laden (System + Organization)
  let familiesQuery = supabase
    .from('standard_families')
    .select('*')
    .order('sort_order');
  
  if (organizationId) {
    familiesQuery = familiesQuery.or(`organization_id.is.null,organization_id.eq.${organizationId}`);
  } else {
    familiesQuery = familiesQuery.is('organization_id', null);
  }
  
  const { data: families, error: familiesError } = await familiesQuery;
  
  if (familiesError || !families) {
    console.error('Error loading families:', familiesError);
    return [];
  }
  
  // Standards laden
  let standardsQuery = supabase
    .from('standards')
    .select('*')
    .eq('status', 'active')
    .order('sort_order');
  
  if (organizationId) {
    standardsQuery = standardsQuery.or(`organization_id.is.null,organization_id.eq.${organizationId}`);
  } else {
    standardsQuery = standardsQuery.is('organization_id', null);
  }
  
  const { data: standards, error: standardsError } = await standardsQuery;
  
  if (standardsError || !standards) {
    console.error('Error loading standards:', standardsError);
    return [];
  }
  
  // Varianten laden
  const standardIds = standards.map((s: Standard) => s.id);
  
  if (standardIds.length === 0) {
    return families.map((family: StandardFamily) => ({
      ...family,
      standards: [],
    }));
  }
  
  const { data: variants } = await supabase
    .from('standard_variants')
    .select('*')
    .in('standard_id', standardIds)
    .order('sort_order');
  
  // Zusammenbauen
  return families.map((family: StandardFamily) => ({
    ...family,
    standards: standards
      .filter((s: Standard) => s.family_id === family.id)
      .map((standard: Standard) => ({
        ...standard,
        family,
        variants: (variants || []).filter((v: StandardVariant) => v.standard_id === standard.id),
      })) as StandardWithVariants[],
  }));
}

/**
 * Lädt eine Variante mit allen Details für die Ausführung
 */
export async function getVariantForExecution(variantId: string): Promise<StandardVariantFull | null> {
  const supabase = await createClient();
  
  // Variante laden
  const { data: variant, error: variantError } = await supabase
    .from('standard_variants')
    .select('*')
    .eq('id', variantId)
    .single();
  
  if (variantError || !variant) {
    console.error('Error loading variant:', variantError);
    return null;
  }
  
  // Standard laden
  const { data: standard, error: standardError } = await supabase
    .from('standards')
    .select('*')
    .eq('id', variant.standard_id)
    .single();
  
  if (standardError || !standard) {
    console.error('Error loading standard:', standardError);
    return null;
  }
  
  // Familie laden
  const { data: family, error: familyError } = await supabase
    .from('standard_families')
    .select('*')
    .eq('id', standard.family_id)
    .single();
  
  if (familyError || !family) {
    console.error('Error loading family:', familyError);
    return null;
  }
  
  // Aktuelle Version laden
  const { data: version, error: versionError } = await supabase
    .from('standard_versions')
    .select('*')
    .eq('variant_id', variantId)
    .eq('is_current', true)
    .single();
  
  if (versionError || !version) {
    console.error('Error loading version:', versionError);
    return null;
  }
  
  // Input Fields laden
  const { data: inputFields } = await supabase
    .from('input_fields')
    .select('*')
    .eq('version_id', version.id)
    .order('sort_order');
  
  const standardWithFamily = {
    ...standard,
    family,
  } as Standard & { family: StandardFamily };
  
  return {
    ...variant,
    standard: standardWithFamily,
    current_version: {
      ...version,
      input_fields: (inputFields || []) as InputField[],
    },
  } as StandardVariantFull;
}

/**
 * Lädt einen Standard mit seinen Varianten anhand des Slugs
 */
export async function getStandardBySlug(
  familySlug: string,
  standardSlug: string,
  organizationId?: string
): Promise<StandardWithVariants | null> {
  const supabase = await createClient();
  
  // Familie finden
  let familyQuery = supabase
    .from('standard_families')
    .select('*')
    .eq('slug', familySlug);
  
  if (organizationId) {
    familyQuery = familyQuery.or(`organization_id.is.null,organization_id.eq.${organizationId}`);
  } else {
    familyQuery = familyQuery.is('organization_id', null);
  }
  
  const { data: family } = await familyQuery.maybeSingle();
  
  if (!family) return null;
  
  // Standard finden
  let standardQuery = supabase
    .from('standards')
    .select('*')
    .eq('family_id', family.id)
    .eq('slug', standardSlug)
    .eq('status', 'active');
  
  if (organizationId) {
    standardQuery = standardQuery.or(`organization_id.is.null,organization_id.eq.${organizationId}`);
  } else {
    standardQuery = standardQuery.is('organization_id', null);
  }
  
  const { data: standard } = await standardQuery.maybeSingle();
  
  if (!standard) return null;
  
  // Varianten laden
  const { data: variants } = await supabase
    .from('standard_variants')
    .select('*')
    .eq('standard_id', standard.id)
    .order('sort_order');
  
  return {
    ...standard,
    family,
    variants: variants || [],
  } as StandardWithVariants;
}

/**
 * Speichert eine Ausführung
 */
export async function saveExecution(execution: {
  organization_id: string;
  team_id?: string | null;
  user_id: string;
  standard_id: string;
  variant_id: string;
  version_id: string;
  inputs: Record<string, string>;
  variables_used: Record<string, unknown>;
  overrides: Record<string, string>;
  output: string;
  tokens_used: number;
  duration_ms: number;
  status: 'pending' | 'completed' | 'failed';
  error_message?: string;
}): Promise<string | null> {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('executions')
    .insert(execution)
    .select('id')
    .single();
  
  if (error) {
    console.error('Error saving execution:', error);
    return null;
  }
  
  return data.id;
}

