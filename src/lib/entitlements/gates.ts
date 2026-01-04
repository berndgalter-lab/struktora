import type { EntitlementsData } from './index';
import type { FeatureKey } from './constants';

/**
 * Prüft ob ein Feature verfügbar ist
 */
export function canUseFeature(entitlements: EntitlementsData, feature: FeatureKey): boolean {
  switch (feature) {
    case 'custom_standards':
      return entitlements.maxCustomStandards === null || entitlements.maxCustomStandards > 0;
    
    case 'versioning':
      return entitlements.versioningEnabled;
    
    case 'approval_flow':
      return entitlements.approvalFlowEnabled;
    
    case 'audit_log':
      return entitlements.auditLogAccess;
    
    case 'audit_export':
      return entitlements.auditExportEnabled;
    
    case 'teams':
      return entitlements.teamsEnabled;
    
    case 'family_kommunikation':
      return entitlements.activeFamilies.length === 0 || entitlements.activeFamilies.includes('kommunikation');
    
    case 'family_texte':
      return entitlements.activeFamilies.length === 0 || entitlements.activeFamilies.includes('texte');
    
    case 'family_meetings':
      return entitlements.activeFamilies.length === 0 || entitlements.activeFamilies.includes('meetings');
    
    case 'family_sales':
      return entitlements.activeFamilies.length === 0 || entitlements.activeFamilies.includes('sales');
    
    case 'family_support':
      return entitlements.activeFamilies.length === 0 || entitlements.activeFamilies.includes('support');
    
    default:
      return false;
  }
}

/**
 * Gibt Upgrade-Hinweis für ein Feature zurück
 */
export function getUpgradeMessage(feature: FeatureKey): string {
  const messages: Record<FeatureKey, string> = {
    custom_standards: 'Eigene Standards erstellen ist ab dem Starter-Plan verfügbar.',
    versioning: 'Versionierung ist ab dem Team-Plan verfügbar.',
    approval_flow: 'Freigabe-Workflows sind ab dem Business-Plan verfügbar.',
    audit_log: 'Audit-Logs sind ab dem Team-Plan verfügbar.',
    audit_export: 'Audit-Export ist ab dem Business-Plan verfügbar.',
    teams: 'Mehrere Teams sind ab dem Team-Plan verfügbar.',
    family_kommunikation: 'Die Familie "Kommunikation" ist in allen Plänen verfügbar.',
    family_texte: 'Die Familie "Textverarbeitung" ist ab dem Starter-Plan verfügbar.',
    family_meetings: 'Die Familie "Meetings" ist ab dem Starter-Plan verfügbar.',
    family_sales: 'Die Familie "Vertrieb" ist ab dem Team-Plan verfügbar.',
    family_support: 'Die Familie "Kundenservice" ist ab dem Team-Plan verfügbar.',
  };
  return messages[feature];
}

/**
 * Gibt den minimalen Plan für ein Feature zurück
 */
export function getMinimumPlan(feature: FeatureKey): string {
  const plans: Record<FeatureKey, string> = {
    custom_standards: 'Starter',
    versioning: 'Team',
    approval_flow: 'Business',
    audit_log: 'Team',
    audit_export: 'Business',
    teams: 'Team',
    family_kommunikation: 'Free',
    family_texte: 'Starter',
    family_meetings: 'Starter',
    family_sales: 'Team',
    family_support: 'Team',
  };
  return plans[feature];
}

