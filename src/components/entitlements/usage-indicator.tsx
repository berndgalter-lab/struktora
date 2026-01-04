'use client';

import { useEntitlements } from '@/hooks';
import { Zap } from 'lucide-react';

interface UsageIndicatorProps {
  showLabel?: boolean;
  compact?: boolean;
}

export function UsageIndicator({ showLabel = true, compact = false }: UsageIndicatorProps) {
  const { entitlements, loading } = useEntitlements();
  
  if (loading || !entitlements) {
    return null;
  }
  
  // Unlimited
  if (entitlements.monthlyExecutions === -1) {
    if (compact) return null;
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Zap className="h-4 w-4" />
        <span>Unbegrenzte Generierungen</span>
      </div>
    );
  }
  
  const percentage = Math.round(
    (entitlements.executionsUsed / entitlements.monthlyExecutions) * 100
  );
  const remaining = entitlements.executionsRemaining;
  const isLow = percentage >= 80;
  const isExhausted = remaining <= 0;
  
  if (compact) {
    return (
      <div className={`flex items-center gap-2 text-sm ${isExhausted ? 'text-destructive' : isLow ? 'text-amber-600' : 'text-muted-foreground'}`}>
        <Zap className="h-4 w-4" />
        <span>{remaining} / {entitlements.monthlyExecutions}</span>
      </div>
    );
  }
  
  return (
    <div className="space-y-2">
      {showLabel && (
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Generierungen diesen Monat</span>
          <span className={isExhausted ? 'text-destructive font-medium' : ''}>
            {entitlements.executionsUsed} / {entitlements.monthlyExecutions}
          </span>
        </div>
      )}
      {/* Progress bar */}
      <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all ${
            isExhausted ? 'bg-destructive' : isLow ? 'bg-amber-500' : 'bg-primary'
          }`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
      {isExhausted && (
        <p className="text-xs text-destructive">
          Monatliches Limit erreicht. Upgrade für mehr Generierungen.
        </p>
      )}
    </div>
  );
}

