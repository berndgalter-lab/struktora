import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient, createServiceClient } from "@/lib/supabase/server";
import { getRecipeById } from "@/lib/recipes";
import { generateCompletion } from "@/lib/azure-openai";

// Request validation schema
const requestSchema = z.object({
  recipeId: z.string(),
  inputs: z.record(z.string()),
});

export async function POST(request: Request) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const { recipeId, inputs } = requestSchema.parse(body);

    // Check if recipe exists
    const recipe = getRecipeById(recipeId);
    if (!recipe) {
      return NextResponse.json(
        { error: "Recipe nicht gefunden" },
        { status: 404 }
      );
    }

    // Authenticate user
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    console.log("[AI POST] Auth user:", user?.id, "Error:", authError?.message);

    if (!user) {
      return NextResponse.json(
        { error: "Nicht authentifiziert" },
        { status: 401 }
      );
    }

    // Use service client to bypass RLS
    const serviceClient = createServiceClient();

    // Get user's team ID
    const userResult = await serviceClient
      .from("users")
      .select("team_id")
      .eq("id", user.id)
      .single();

    // Type assertion needed because Supabase types can be tricky
    const teamId: string | null = (userResult.data as { team_id: string | null } | null)?.team_id ?? null;

    console.log("[AI POST] Team ID:", teamId, "Error:", userResult.error?.message);

    // Get company profile and policy (if user has a team)
    let companyProfile: { company_name?: string; industry?: string; description?: string } | null = null;
    let companyPolicy: { anrede?: string; tonality?: string; greeting?: string; nogo_words?: string[] } | null = null;

    if (teamId) {
      const [profileResult, policyResult] = await Promise.all([
        serviceClient
          .from("company_profiles")
          .select("company_name, industry, description")
          .eq("team_id", teamId)
          .single(),
        serviceClient
          .from("company_policies")
          .select("anrede, tonality, greeting, nogo_words")
          .eq("team_id", teamId)
          .single(),
      ]);

      companyProfile = profileResult.data;
      companyPolicy = policyResult.data;

      console.log("[AI POST] Profile:", companyProfile?.company_name, "Policy:", companyPolicy?.anrede);
    }

    // Build the prompt by replacing placeholders
    let prompt = recipe.promptTemplate;

    // Replace company profile placeholders
    prompt = prompt.replace(
      /\{\{company_name\}\}/g,
      companyProfile?.company_name || "[Firmenname nicht konfiguriert]"
    );
    prompt = prompt.replace(
      /\{\{industry\}\}/g,
      companyProfile?.industry || "[Branche nicht konfiguriert]"
    );
    prompt = prompt.replace(
      /\{\{description\}\}/g,
      companyProfile?.description || "[Beschreibung nicht konfiguriert]"
    );

    // Replace policy placeholders
    prompt = prompt.replace(/\{\{anrede\}\}/g, companyPolicy?.anrede || "Sie");
    prompt = prompt.replace(
      /\{\{tonality\}\}/g,
      companyPolicy?.tonality || "sachlich"
    );
    prompt = prompt.replace(
      /\{\{greeting\}\}/g,
      companyPolicy?.greeting || "Mit freundlichen Grüßen"
    );
    prompt = prompt.replace(
      /\{\{nogo_words\}\}/g,
      companyPolicy?.nogo_words?.join(", ") || "keine"
    );

    // Replace input field placeholders
    for (const [key, value] of Object.entries(inputs)) {
      const regex = new RegExp(`\\{\\{${key}\\}\\}`, "g");
      prompt = prompt.replace(regex, value || "");
    }

    // Call Azure OpenAI
    const { content, tokensUsed } = await generateCompletion(prompt);

    // Save usage stats (non-blocking)
    if (teamId) {
      serviceClient
        .from("usage_stats")
        .insert({
          team_id: teamId,
          user_id: user.id,
          recipe_id: recipeId,
          tokens_used: tokensUsed,
        })
        .then(({ error }: { error: unknown }) => {
          if (error) {
            console.error("Failed to save usage stats:", error);
          }
        });
    }

    return NextResponse.json({
      output: content,
      tokensUsed,
    });
  } catch (error) {
    console.error("AI API Error:", error);

    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Ungültige Anfrage", details: error.errors },
        { status: 400 }
      );
    }

    // Handle Azure OpenAI specific errors
    if (error instanceof Error) {
      // Check for common Azure OpenAI errors
      if (error.message.includes("401") || error.message.includes("Unauthorized")) {
        return NextResponse.json(
          { error: "AI-Service Authentifizierung fehlgeschlagen" },
          { status: 500 }
        );
      }

      if (error.message.includes("429") || error.message.includes("Rate limit")) {
        return NextResponse.json(
          { error: "Zu viele Anfragen – warte kurz und versuch's nochmal." },
          { status: 429 }
        );
      }

      if (error.message.includes("quota") || error.message.includes("exceeded")) {
        return NextResponse.json(
          { error: "AI-Kontingent aufgebraucht. Melde dich beim Support." },
          { status: 503 }
        );
      }

      if (error.message.includes("content_filter")) {
        return NextResponse.json(
          { error: "Der Inhalt konnte nicht verarbeitet werden. Check deine Eingabe." },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { error: "Da ist was schiefgelaufen. Versuch's nochmal." },
      { status: 500 }
    );
  }
}
