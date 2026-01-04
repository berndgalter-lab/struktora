import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getVariantForExecution } from '@/lib/standards';
import { getCompanyVariables, getCompanyContext } from '@/lib/standards/variables';

interface RouteParams {
  params: Promise<{ variantId: string }>;
}

/**
 * GET /api/standards/[variantId]
 * Lädt eine Variante mit allen Details für den Wizard
 */
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { variantId } = await params;
    
    // 1. Auth prüfen
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (authError || !user) {
      return NextResponse.json(
        { error: 'Nicht authentifiziert' },
        { status: 401 }
      );
    }
    
    // 2. User-Daten laden
    const { data: userData } = await supabase
      .from('users')
      .select('organization_id, team_id')
      .eq('id', user.id)
      .single();
    
    // Fallback: team_id als organization_id für Übergangsphase
    const organizationId = userData?.organization_id || userData?.team_id;
    const teamId = userData?.team_id;
    
    if (!organizationId) {
      return NextResponse.json(
        { error: 'Keine Organization zugeordnet' },
        { status: 403 }
      );
    }
    
    // 3. Variante laden
    const variant = await getVariantForExecution(variantId);
    
    if (!variant) {
      return NextResponse.json(
        { error: 'Variante nicht gefunden' },
        { status: 404 }
      );
    }
    
    // 4. Company Variables und Context laden (für Vorschau/Defaults)
    const [variables, context] = await Promise.all([
      getCompanyVariables(organizationId, teamId),
      getCompanyContext(organizationId, teamId),
    ]);
    
    // 5. Response
    return NextResponse.json({
      variant,
      variables,
      context,
    });
    
  } catch (error) {
    console.error('Variant API error:', error);
    return NextResponse.json(
      { error: 'Fehler beim Laden der Variante' },
      { status: 500 }
    );
  }
}

