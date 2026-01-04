import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { DEFAULT_COMPANY_VARIABLES } from '@/types/domain';
import type { CompanyVariables } from '@/types';

/**
 * GET /api/settings/variables
 * Lädt aktuelle Company Variables
 * Fallback auf company_policies für Legacy-Kompatibilität
 */
export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (authError || !user) {
      return NextResponse.json({ error: 'Nicht authentifiziert' }, { status: 401 });
    }
    
    // User-Daten mit Team laden
    const { data: userData } = await supabase
      .from('users')
      .select('team_id')
      .eq('id', user.id)
      .single();
    
    if (!userData?.team_id) {
      return NextResponse.json({ error: 'Kein Team zugeordnet' }, { status: 403 });
    }
    
    // Versuche aus company_policies zu laden (Legacy)
    const { data: policy } = await supabase
      .from('company_policies')
      .select('anrede, tonality, greeting, nogo_words')
      .eq('team_id', userData.team_id)
      .single();
    
    // Variablen aus Legacy-Policy mappen
    const variables: CompanyVariables = { ...DEFAULT_COMPANY_VARIABLES };
    
    if (policy) {
      // Legacy-Mapping: 'Sie' -> 'sie_hoeflich', 'Du' -> 'du_locker'
      if (policy.anrede === 'Du') {
        variables.anrede = 'du_locker';
      } else if (policy.anrede === 'Sie') {
        variables.anrede = 'sie_hoeflich';
      }
      
      // Legacy-Mapping: tonality direkt
      if (policy.tonality && ['formell', 'sachlich', 'locker', 'freundlich', 'empathisch'].includes(policy.tonality)) {
        variables.tonality = policy.tonality as typeof variables.tonality;
      }
      
      // No-go words
      if (policy.nogo_words && Array.isArray(policy.nogo_words)) {
        variables.nogo_rules = policy.nogo_words;
      }
    }
    
    // System-Presets als statische Daten (da Tabelle ggf. noch nicht existiert)
    const presets = [
      {
        id: 'preset-standard',
        slug: 'standard',
        name: 'Standard',
        description: 'Ausgewogene Einstellungen für die meisten Unternehmen',
        values: {
          tonality: 'sachlich',
          anrede: 'sie_hoeflich',
          technical_depth: 'mittel',
          commitment_level: 'standard',
          legal_caution: 'standard',
          documentation_level: 'standard',
          governance_strictness: 'standard',
          escalation_level: 'keine',
          approval_logic: 'keine',
          sender_role: 'neutral',
          customer_context: 'bestandskunde',
          nogo_rules: [],
        },
        is_system: true,
        sort_order: 1,
        created_at: new Date().toISOString(),
      },
      {
        id: 'preset-reguliert',
        slug: 'reguliert',
        name: 'Reguliertes Umfeld',
        description: 'Für Pharma, Finanzen, Medizin und andere regulierte Branchen',
        values: {
          tonality: 'formell',
          anrede: 'sie_formell',
          technical_depth: 'hoch',
          commitment_level: 'verbindlich',
          legal_caution: 'erhoeht',
          documentation_level: 'vollstaendig',
          governance_strictness: 'audit_ready',
          escalation_level: 'info',
          approval_logic: 'erforderlich',
          sender_role: 'funktion',
          customer_context: 'bestandskunde',
          nogo_rules: ['mündliche Zusagen', 'ungefähre Angaben', 'circa', 'etwa', 'voraussichtlich'],
        },
        is_system: true,
        sort_order: 2,
        created_at: new Date().toISOString(),
      },
      {
        id: 'preset-locker',
        slug: 'locker',
        name: 'Modern & Locker',
        description: 'Für Startups, Kreativbranche und moderne Unternehmenskultur',
        values: {
          tonality: 'freundlich',
          anrede: 'du_locker',
          technical_depth: 'niedrig',
          commitment_level: 'unverbindlich',
          legal_caution: 'minimal',
          documentation_level: 'minimal',
          governance_strictness: 'locker',
          escalation_level: 'keine',
          approval_logic: 'keine',
          sender_role: 'person',
          customer_context: 'bestandskunde',
          nogo_rules: [],
        },
        is_system: true,
        sort_order: 3,
        created_at: new Date().toISOString(),
      },
    ];
    
    return NextResponse.json({ variables, presets });
    
  } catch (error) {
    console.error('Variables GET error:', error);
    return NextResponse.json({ error: 'Fehler beim Laden' }, { status: 500 });
  }
}

/**
 * PUT /api/settings/variables
 * Speichert Company Variables in Legacy-Policy-Tabelle
 */
export async function PUT(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (authError || !user) {
      return NextResponse.json({ error: 'Nicht authentifiziert' }, { status: 401 });
    }
    
    const { data: userData } = await supabase
      .from('users')
      .select('team_id, role')
      .eq('id', user.id)
      .single();
    
    if (!userData?.team_id) {
      return NextResponse.json({ error: 'Kein Team zugeordnet' }, { status: 403 });
    }
    
    // Nur Admins dürfen ändern
    if (userData.role !== 'admin') {
      // Prüfen ob User der einzige im Team ist (dann auch erlaubt)
      const { count } = await supabase
        .from('users')
        .select('*', { count: 'exact', head: true })
        .eq('team_id', userData.team_id);
      
      if (count && count > 1) {
        return NextResponse.json({ error: 'Keine Berechtigung' }, { status: 403 });
      }
    }
    
    const body = await request.json();
    const variables = body.variables as Partial<CompanyVariables>;
    
    // Mapping zurück auf Legacy-Format
    let anrede: string | undefined;
    if (variables.anrede) {
      anrede = variables.anrede.startsWith('du_') ? 'Du' : 'Sie';
    }
    
    let tonality: string | undefined;
    if (variables.tonality) {
      // Legacy unterstützt: formell, sachlich, locker
      if (['formell', 'sachlich', 'locker'].includes(variables.tonality)) {
        tonality = variables.tonality;
      } else if (variables.tonality === 'freundlich') {
        tonality = 'sachlich'; // Fallback
      } else if (variables.tonality === 'empathisch') {
        tonality = 'sachlich'; // Fallback
      }
    }
    
    // Update oder Insert in company_policies
    const { error: upsertError } = await supabase
      .from('company_policies')
      .upsert({
        team_id: userData.team_id,
        anrede: anrede,
        tonality: tonality,
        nogo_words: variables.nogo_rules || [],
        updated_at: new Date().toISOString(),
      }, {
        onConflict: 'team_id',
      });
    
    if (upsertError) {
      console.error('Upsert error:', upsertError);
      return NextResponse.json({ error: 'Fehler beim Speichern' }, { status: 500 });
    }
    
    // Vollständige Variablen zurückgeben (mit Defaults für nicht-gespeicherte)
    const fullVariables: CompanyVariables = {
      ...DEFAULT_COMPANY_VARIABLES,
      ...variables,
    };
    
    return NextResponse.json({ variables: fullVariables });
    
  } catch (error) {
    console.error('Variables PUT error:', error);
    return NextResponse.json({ error: 'Fehler beim Speichern' }, { status: 500 });
  }
}

