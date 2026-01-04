import { createClient } from '@/lib/supabase/server';
import type { CompanyVariables, CompanyContext } from '@/types';
import { DEFAULT_COMPANY_VARIABLES } from '@/types/domain';

/**
 * Lädt Company Variables für eine Organization
 * Team-spezifische Werte haben Vorrang vor Organization-weiten Werten
 */
export async function getCompanyVariables(
  organizationId: string,
  teamId?: string | null
): Promise<CompanyVariables> {
  const supabase = await createClient();
  
  // Alle Variablen für die Organization laden
  // Team-spezifische haben Vorrang (DESC Sortierung, nullsFirst: false)
  let query = supabase
    .from('company_variables')
    .select('variable_key, value, value_array')
    .eq('organization_id', organizationId);
  
  if (teamId) {
    query = query.or(`team_id.eq.${teamId},team_id.is.null`);
  } else {
    query = query.is('team_id', null);
  }
  
  const { data: variables, error } = await query.order('team_id', { 
    ascending: false, 
    nullsFirst: false 
  });
  
  if (error) {
    console.error('Error loading company variables:', error);
  }
  
  // Default-Werte als Basis
  const result: CompanyVariables = { ...DEFAULT_COMPANY_VARIABLES };
  
  // Geladene Werte überschreiben
  if (variables) {
    const seen = new Set<string>();
    for (const v of variables) {
      // Erste gefundene (team-spezifisch) gewinnt
      if (seen.has(v.variable_key)) continue;
      seen.add(v.variable_key);
      
      if (v.variable_key === 'nogo_rules') {
        result.nogo_rules = v.value_array || [];
      } else if (v.variable_key in result) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (result as unknown as Record<string, any>)[v.variable_key] = v.value;
      }
    }
  }
  
  return result;
}

/**
 * Lädt Company Context für eine Organization
 * Team-spezifischer Context hat Vorrang
 */
export async function getCompanyContext(
  organizationId: string,
  teamId?: string | null
): Promise<CompanyContext | null> {
  const supabase = await createClient();
  
  let query = supabase
    .from('company_contexts')
    .select('*')
    .eq('organization_id', organizationId);
  
  if (teamId) {
    query = query.or(`team_id.eq.${teamId},team_id.is.null`);
  } else {
    query = query.is('team_id', null);
  }
  
  const { data, error } = await query
    .order('team_id', { ascending: false, nullsFirst: false })
    .limit(1)
    .maybeSingle();
  
  if (error) {
    console.error('Error loading company context:', error);
    return null;
  }
  
  return data;
}

