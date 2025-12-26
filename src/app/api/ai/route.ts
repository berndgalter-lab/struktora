import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { getRecipeById } from "@/lib/recipes";

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
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: "Nicht authentifiziert" },
        { status: 401 }
      );
    }

    // Get user's team ID
    const { data: userData } = await supabase
      .from("users")
      .select("team_id")
      .eq("id", user.id)
      .single();

    // Get company profile and policy (if user has a team)
    let companyProfile = null;
    let companyPolicy = null;

    if (userData?.team_id) {
      const [profileResult, policyResult] = await Promise.all([
        supabase
          .from("company_profiles")
          .select("*")
          .eq("team_id", userData.team_id)
          .single(),
        supabase
          .from("company_policies")
          .select("*")
          .eq("team_id", userData.team_id)
          .single(),
      ]);

      companyProfile = profileResult.data;
      companyPolicy = policyResult.data;
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
    prompt = prompt.replace(
      /\{\{anrede\}\}/g,
      companyPolicy?.anrede || "Sie"
    );
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

    // TODO: Replace with actual Azure OpenAI call in next iteration
    // For now, return a placeholder response
    const placeholderOutput = `[AI Output Placeholder]

Recipe: ${recipe.name}
Inputs erhalten: ${Object.keys(inputs).join(", ")}

---

Dies ist ein Platzhalter-Text. Die echte KI-Integration (Azure OpenAI) wird im nächsten Schritt implementiert.

Der generierte Prompt hätte ${prompt.length} Zeichen.

Firmenprofil geladen: ${companyProfile ? "Ja" : "Nein"}
Policy geladen: ${companyPolicy ? "Ja" : "Nein"}`;

    return NextResponse.json({
      output: placeholderOutput,
      tokensUsed: 0,
    });
  } catch (error) {
    console.error("AI API Error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Ungültige Anfrage", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten" },
      { status: 500 }
    );
  }
}
