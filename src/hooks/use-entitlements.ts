'use client';

import { useState, useEffect, useCallback } from 'react';
import type { SubscriptionTier } from '@/types';

/**
 * Client-side Entitlements Daten
 */
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

/**
 * Upgrade-Nachrichten für Features
 */
const UPGRADE_MESSAGES: Record<FeatureKey, string> = {
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

/**
 * Hook zum Laden und Prüfen von Entitlements
 */
export function useEntitlements() {
  const [entitlements, setEntitlements] = useState<EntitlementsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    async function fetchEntitlements() {
      try {
        const response = await fetch('/api/entitlements');
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Fehler beim Laden der Entitlements');
        }
        const data = await response.json();
        setEntitlements(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unbekannter Fehler');
      } finally {
        setLoading(false);
      }
    }
    
    fetchEntitlements();
  }, []);
  
  /**
   * Prüft ob ein Feature verfügbar ist
   */
  const canUse = useCallback((feature: FeatureKey): boolean => {
    if (!entitlements) return false;
    
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
      default:
        if (feature.startsWith('family_')) {
          const familySlug = feature.replace('family_', '');
          // Leeres Array ODER null/undefined = alle aktiv
          if (!entitlements.activeFamilies || entitlements.activeFamilies.length === 0) {
            return true;
          }
          return entitlements.activeFamilies.includes(familySlug);
        }
        return false;
    }
  }, [entitlements]);
  
  /**
   * Prüft ob eine Familie aktiv ist
   */
  const isFamilyActive = useCallback((familySlug: string): boolean => {
    if (!entitlements) return false;
    // Leeres Array ODER null/undefined = alle aktiv
    if (!entitlements.activeFamilies || entitlements.activeFamilies.length === 0) {
      return true;
    }
    return entitlements.activeFamilies.includes(familySlug);
  }, [entitlements]);
  
  /**
   * Prüft ob noch Executions verfügbar sind
   */
  const hasExecutionsRemaining = useCallback((): boolean => {
    if (!entitlements) return false;
    if (entitlements.executionsRemaining === -1) return true;
    return entitlements.executionsRemaining > 0;
  }, [entitlements]);
  
  /**
   * Gibt Upgrade-Nachricht für ein Feature zurück
   */
  const getUpgradeMessage = useCallback((feature: FeatureKey): string => {
    return UPGRADE_MESSAGES[feature];
  }, []);
  
  return {
    entitlements,
    loading,
    error,
    canUse,
    isFamilyActive,
    hasExecutionsRemaining,
    getUpgradeMessage,
  };
}

