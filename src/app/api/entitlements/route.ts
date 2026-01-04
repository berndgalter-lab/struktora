import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getEntitlements } from '@/lib/entitlements';

/**
 * GET /api/entitlements
 * Lädt Entitlements für den aktuellen User
 */
export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (authError || !user) {
      return NextResponse.json(
        { error: 'Nicht authentifiziert' },
        { status: 401 }
      );
    }
    
    // User-Daten mit Team laden
    const { data: userData } = await supabase
      .from('users')
      .select('team_id')
      .eq('id', user.id)
      .single();
    
    if (!userData?.team_id) {
      return NextResponse.json(
        { error: 'Kein Team zugeordnet' },
        { status: 403 }
      );
    }
    
    const entitlements = await getEntitlements(userData.team_id);
    
    return NextResponse.json(entitlements);
    
  } catch (error) {
    console.error('Entitlements API error:', error);
    return NextResponse.json(
      { error: 'Fehler beim Laden der Entitlements' },
      { status: 500 }
    );
  }
}

