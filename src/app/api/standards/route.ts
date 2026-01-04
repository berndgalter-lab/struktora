import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getStandardFamilies } from '@/lib/standards';

/**
 * GET /api/standards
 * Lädt alle Standard-Familien mit Standards und Varianten
 */
export async function GET() {
  try {
    // 1. Auth prüfen
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (authError || !user) {
      return NextResponse.json(
        { error: 'Nicht authentifiziert' },
        { status: 401 }
      );
    }
    
    // 2. User-Organization laden
    const { data: userData } = await supabase
      .from('users')
      .select('organization_id, team_id')
      .eq('id', user.id)
      .single();
    
    // Fallback: team_id als organization_id für Übergangsphase
    const organizationId = userData?.organization_id || userData?.team_id;
    
    // 3. Familien mit Standards laden
    const families = await getStandardFamilies(organizationId);
    
    // 4. Response
    return NextResponse.json({ families });
    
  } catch (error) {
    console.error('Standards API error:', error);
    return NextResponse.json(
      { error: 'Fehler beim Laden der Standards' },
      { status: 500 }
    );
  }
}

