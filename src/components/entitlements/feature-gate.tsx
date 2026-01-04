'use client';

import { ReactNode } from 'react';
import { useEntitlements } from '@/hooks';
import { UpgradePrompt } from './upgrade-prompt';
import type { FeatureKey } from '@/hooks/use-entitlements';

interface FeatureGateProps {
  feature: FeatureKey;
  children: ReactNode;
  fallback?: ReactNode;
  showUpgrade?: boolean;
}

export function FeatureGate({ 
  feature, 
  children, 
  fallback,
  showUpgrade = true 
}: FeatureGateProps) {
  const { canUse, loading, getUpgradeMessage } = useEntitlements();
  
  // Während des Ladens nichts anzeigen
  if (loading) {
    return null;
  }
  
  // Feature verfügbar
  if (canUse(feature)) {
    return <>{children}</>;
  }
  
  // Feature nicht verfügbar
  if (fallback) {
    return <>{fallback}</>;
  }
  
  if (showUpgrade) {
    return <UpgradePrompt message={getUpgradeMessage(feature)} />;
  }
  
  return null;
}

