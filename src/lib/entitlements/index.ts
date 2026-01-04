import { createClient } from '@/lib/supabase/server';
import type { SubscriptionTier } from '@/types';
import { PLAN_ENTITLEMENTS } from './constants';

export interface EntitlementsData {
  plan: SubscriptionTier;
  activeFamilies: string[];
  maxCustomStandards: number | null;
  versioningEnabled: boolean;
  approvalFlowEnabled: boolean;
  auditLogAccess: boolean;
  auditExportEnabled: boolean;
  teamsEnabled: boolean;
  maxTeams: number;
  maxUsers: number;
  monthlyExecutions: number;
  executionsUsed: number;
  executionsRemaining: number;
}

/**
 * Lädt Entitlements für ein Team (Legacy-Kompatibilität)
 * Später: organizationId verwenden
 */
export async function getEntitlements(teamId: string): Promise<EntitlementsData> {
  const supabase = await createClient();
  
  // Team laden um Plan zu bekommen
  const { data: team } = await supabase
    .from('teams')
    .select('subscription_tier, subscription_status')
    .eq('id', teamId)
    .single();
  
  // Fallback auf 'free' wenn kein Team oder inaktives Abo
  let plan: SubscriptionTier = 'free';
  if (team?.subscription_tier && team.subscription_status === 'active') {
    plan = team.subscription_tier as SubscriptionTier;
  } else if (team?.subscription_status === 'trial') {
    // Trial-User bekommen Starter-Features
    plan = 'starter';
  }
  
  const defaults = PLAN_ENTITLEMENTS[plan];
  
  // Executions zählen (aktueller Monat)
  const startOfMonth = new Date();
  startOfMonth.setDate(1);
  startOfMonth.setHours(0, 0, 0, 0);
  
  const { count: executionsUsed } = await supabase
    .from('usage_stats')
    .select('*', { count: 'exact', head: true })
    .eq('team_id', teamId)
    .gte('created_at', startOfMonth.toISOString());
  
  const used = executionsUsed || 0;
  const executionsRemaining = defaults.monthlyExecutions === -1 
    ? -1 
    : Math.max(0, defaults.monthlyExecutions - used);
  
  return {
    plan,
    activeFamilies: defaults.activeFamilies === 'all' ? [] : defaults.activeFamilies,
    maxCustomStandards: defaults.maxCustomStandards,
    versioningEnabled: defaults.versioningEnabled,
    approvalFlowEnabled: defaults.approvalFlowEnabled,
    auditLogAccess: defaults.auditLogAccess,
    auditExportEnabled: defaults.auditExportEnabled,
    teamsEnabled: defaults.teamsEnabled,
    maxTeams: defaults.maxTeams,
    maxUsers: defaults.maxUsers,
    monthlyExecutions: defaults.monthlyExecutions,
    executionsUsed: used,
    executionsRemaining,
  };
}

/**
 * Prüft ob eine Familie aktiv ist
 */
export function isFamilyActive(entitlements: EntitlementsData, familySlug: string): boolean {
  // Leeres Array ODER null/undefined = alle Familien aktiv
  if (!entitlements.activeFamilies || !Array.isArray(entitlements.activeFamilies) || entitlements.activeFamilies.length === 0) {
    return true;
  }
  return entitlements.activeFamilies.includes(familySlug);
}

/**
 * Prüft ob Executions-Limit erreicht ist
 */
export function hasExecutionsRemaining(entitlements: EntitlementsData): boolean {
  if (entitlements.executionsRemaining === -1) return true; // Unlimited
  return entitlements.executionsRemaining > 0;
}

// Re-export
export { PLAN_ENTITLEMENTS } from './constants';
export type { FeatureKey } from './constants';

