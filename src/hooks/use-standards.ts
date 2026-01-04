'use client';

import { useState, useEffect, useCallback } from 'react';
import type { 
  StandardFamily, 
  StandardWithVariants, 
  StandardVariantFull,
  CompanyVariables,
  CompanyContext 
} from '@/types';

interface StandardsResponse {
  families: (StandardFamily & { standards: StandardWithVariants[] })[];
}

interface VariantResponse {
  variant: StandardVariantFull;
  variables: CompanyVariables;
  context: CompanyContext | null;
}

interface ExecuteResponse {
  executionId: string;
  output: string;
  tokensUsed: number;
  durationMs: number;
}

/**
 * Hook zum Laden aller Standards
 */
export function useStandards() {
  const [data, setData] = useState<StandardsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const fetchStandards = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/standards');
      if (!response.ok) {
        const json = await response.json();
        throw new Error(json.error || 'Fehler beim Laden der Standards');
      }
      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unbekannter Fehler');
    } finally {
      setLoading(false);
    }
  }, []);
  
  useEffect(() => {
    fetchStandards();
  }, [fetchStandards]);
  
  return { 
    families: data?.families || [], 
    loading, 
    error,
    refetch: fetchStandards,
  };
}

/**
 * Hook zum Laden einer einzelnen Variante
 */
export function useVariant(variantId: string | null) {
  const [data, setData] = useState<VariantResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    if (!variantId) {
      setData(null);
      return;
    }
    
    async function fetchVariant() {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`/api/standards/${variantId}`);
        if (!response.ok) {
          const json = await response.json();
          throw new Error(json.error || 'Fehler beim Laden der Variante');
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unbekannter Fehler');
      } finally {
        setLoading(false);
      }
    }
    
    fetchVariant();
  }, [variantId]);
  
  return { 
    variant: data?.variant || null,
    variables: data?.variables || null,
    context: data?.context || null,
    loading, 
    error 
  };
}

/**
 * Hook zum Ausführen eines Standards
 */
export function useExecuteStandard() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ExecuteResponse | null>(null);
  
  const execute = useCallback(async (
    variantId: string,
    inputs: Record<string, string>,
    overrides?: Record<string, string>
  ): Promise<ExecuteResponse> => {
    setLoading(true);
    setError(null);
    setResult(null);
    
    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ variantId, inputs, overrides }),
      });
      
      const json = await response.json();
      
      if (!response.ok) {
        throw new Error(json.error || 'Ausführung fehlgeschlagen');
      }
      
      setResult(json);
      return json;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unbekannter Fehler';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);
  
  const reset = useCallback(() => {
    setError(null);
    setResult(null);
  }, []);
  
  return { 
    execute, 
    loading, 
    error, 
    result,
    reset,
  };
}

