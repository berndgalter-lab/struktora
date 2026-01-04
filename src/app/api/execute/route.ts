import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { 
  getVariantForExecution, 
  saveExecution,
  getCompanyVariables, 
  getCompanyContext,
  fillTemplate, 
  validateInputs,
} from '@/lib/standards';
import { generateCompletion } from '@/lib/azure-openai';

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  
  // Execution context für Fehlerfall
  let executionContext: {
    organizationId?: string;
    teamId?: string | null;
    userId?: string;
    standardId?: string;
    variantId?: string;
    versionId?: string;
    inputs?: Record<string, string>;
    overrides?: Record<string, string>;
  } = {};
  
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
    
    executionContext.userId = user.id;
    
    // 2. User-Daten laden (mit organization_id)
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('organization_id, team_id')
      .eq('id', user.id)
      .single();
    
    if (userError) {
      console.error('Error loading user data:', userError);
    }
    
    // Fallback: Wenn keine organization_id, dann team_id als organization_id nutzen
    // Dies ist für die Übergangsphase während der Migration
    const organizationId = userData?.organization_id || userData?.team_id;
    const teamId = userData?.team_id;
    
    if (!organizationId) {
      return NextResponse.json(
        { error: 'Keine Organization/Team zugeordnet' },
        { status: 403 }
      );
    }
    
    executionContext.organizationId = organizationId;
    executionContext.teamId = teamId;
    
    // 3. Request Body parsen
    const body = await request.json();
    const { variantId, inputs, overrides } = body as {
      variantId: string;
      inputs: Record<string, string>;
      overrides?: Record<string, string>;
    };
    
    if (!variantId) {
      return NextResponse.json(
        { error: 'variantId ist erforderlich' },
        { status: 400 }
      );
    }
    
    executionContext.variantId = variantId;
    executionContext.inputs = inputs;
    executionContext.overrides = overrides;
    
    // 4. Variante mit Version und Input Fields laden
    const variant = await getVariantForExecution(variantId);
    
    if (!variant || !variant.current_version) {
      return NextResponse.json(
        { error: 'Variante nicht gefunden oder keine aktive Version' },
        { status: 404 }
      );
    }
    
    executionContext.standardId = variant.standard.id;
    executionContext.versionId = variant.current_version.id;
    
    // 5. Inputs validieren
    const validation = validateInputs(inputs || {}, variant.current_version.input_fields);
    
    if (!validation.valid) {
      return NextResponse.json(
        { error: 'Validierungsfehler', details: validation.errors },
        { status: 400 }
      );
    }
    
    // 6. Company Context und Variables laden
    const [variables, context] = await Promise.all([
      getCompanyVariables(organizationId, teamId),
      getCompanyContext(organizationId, teamId),
    ]);
    
    // 7. Prompt-Template befüllen
    const filledPrompt = fillTemplate(variant.current_version.prompt_template, {
      inputs: inputs || {},
      variables,
      context,
      overrides: overrides || {},
    });
    
    // 8. Azure OpenAI aufrufen (via bestehende generateCompletion Funktion)
    const { content: output, tokensUsed } = await generateCompletion(filledPrompt);
    
    const durationMs = Date.now() - startTime;
    
    // 9. Execution speichern
    const executionId = await saveExecution({
      organization_id: organizationId,
      team_id: teamId,
      user_id: user.id,
      standard_id: variant.standard.id,
      variant_id: variant.id,
      version_id: variant.current_version.id,
      inputs: inputs || {},
      variables_used: variables as unknown as Record<string, unknown>,
      overrides: overrides || {},
      output,
      tokens_used: tokensUsed,
      duration_ms: durationMs,
      status: 'completed',
    });
    
    // 10. Response
    return NextResponse.json({
      executionId,
      output,
      tokensUsed,
      durationMs,
    });
    
  } catch (error) {
    console.error('Execute error:', error);
    
    const durationMs = Date.now() - startTime;
    
    // Bei Fehler trotzdem speichern (falls wir genug Kontext haben)
    if (executionContext.organizationId && 
        executionContext.userId && 
        executionContext.variantId &&
        executionContext.standardId &&
        executionContext.versionId) {
      try {
        await saveExecution({
          organization_id: executionContext.organizationId,
          team_id: executionContext.teamId,
          user_id: executionContext.userId,
          standard_id: executionContext.standardId,
          variant_id: executionContext.variantId,
          version_id: executionContext.versionId,
          inputs: executionContext.inputs || {},
          variables_used: {} as Record<string, unknown>,
          overrides: executionContext.overrides || {},
          output: '',
          tokens_used: 0,
          duration_ms: durationMs,
          status: 'failed',
          error_message: error instanceof Error ? error.message : 'Unknown error',
        });
      } catch (saveError) {
        console.error('Failed to save failed execution:', saveError);
      }
    }
    
    // Spezifische Fehlerbehandlung (übernommen von /api/ai)
    if (error instanceof Error) {
      if (error.message.includes('401') || error.message.includes('Unauthorized')) {
        return NextResponse.json(
          { error: 'AI-Service Authentifizierung fehlgeschlagen' },
          { status: 500 }
        );
      }

      if (error.message.includes('429') || error.message.includes('Rate limit')) {
        return NextResponse.json(
          { error: 'Zu viele Anfragen – warte kurz und versuch es nochmal.' },
          { status: 429 }
        );
      }

      if (error.message.includes('quota') || error.message.includes('exceeded')) {
        return NextResponse.json(
          { error: 'AI-Kontingent aufgebraucht. Melde dich beim Support.' },
          { status: 503 }
        );
      }

      if (error.message.includes('content_filter')) {
        return NextResponse.json(
          { error: 'Der Inhalt konnte nicht verarbeitet werden. Check deine Eingabe.' },
          { status: 400 }
        );
      }
    }
    
    return NextResponse.json(
      { error: 'Interner Fehler bei der Ausführung' },
      { status: 500 }
    );
  }
}

