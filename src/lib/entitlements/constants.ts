import type { SubscriptionTier } from '@/types';

/**
 * Plan-spezifische Entitlements
 * Diese werden als Defaults verwendet wenn keine DB-Entitlements existieren
 */
export const PLAN_ENTITLEMENTS: Record<SubscriptionTier, {
  // Scope
  activeFamilies: string[] | 'all';
  maxCustomStandards: number | null;
  
  // Governance
  versioningEnabled: boolean;
  approvalFlowEnabled: boolean;
  auditLogAccess: boolean;
  auditExportEnabled: boolean;
  
  // Org Reach
  teamsEnabled: boolean;
  maxTeams: number;
  maxUsers: number;
  
  // Usage
  monthlyExecutions: number;
}> = {
  free: {
    activeFamilies: ['kommunikation'], // Nur eine Familie
    maxCustomStandards: 0,
    versioningEnabled: false,
    approvalFlowEnabled: false,
    auditLogAccess: false,
    auditExportEnabled: false,
    teamsEnabled: false,
    maxTeams: 1,
    maxUsers: 2,
    monthlyExecutions: 50,
  },
  starter: {
    activeFamilies: ['kommunikation', 'texte', 'meetings'], // 3 Familien
    maxCustomStandards: 3,
    versioningEnabled: false,
    approvalFlowEnabled: false,
    auditLogAccess: false,
    auditExportEnabled: false,
    teamsEnabled: false,
    maxTeams: 1,
    maxUsers: 5,
    monthlyExecutions: 200,
  },
  team: {
    activeFamilies: 'all',
    maxCustomStandards: 10,
    versioningEnabled: true,
    approvalFlowEnabled: false,
    auditLogAccess: true,
    auditExportEnabled: false,
    teamsEnabled: true,
    maxTeams: 5,
    maxUsers: 25,
    monthlyExecutions: 1000,
  },
  business: {
    activeFamilies: 'all',
    maxCustomStandards: null, // Unlimited
    versioningEnabled: true,
    approvalFlowEnabled: true,
    auditLogAccess: true,
    auditExportEnabled: true,
    teamsEnabled: true,
    maxTeams: 20,
    maxUsers: 100,
    monthlyExecutions: 5000,
  },
  enterprise: {
    activeFamilies: 'all',
    maxCustomStandards: null,
    versioningEnabled: true,
    approvalFlowEnabled: true,
    auditLogAccess: true,
    auditExportEnabled: true,
    teamsEnabled: true,
    maxTeams: -1, // Unlimited
    maxUsers: -1, // Unlimited
    monthlyExecutions: -1, // Unlimited
  },
};

/**
 * Feature-Keys für Gate-Checks
 */
export type FeatureKey =
  | 'custom_standards'
  | 'versioning'
  | 'approval_flow'
  | 'audit_log'
  | 'audit_export'
  | 'teams'
  | 'family_kommunikation'
  | 'family_texte'
  | 'family_meetings'
  | 'family_sales'
  | 'family_support';

