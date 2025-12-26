import { notFound } from "next/navigation";
import { getRecipeById } from "@/lib/recipes";
import { RecipeWizard } from "@/components/recipes/recipe-wizard";

interface RecipePageProps {
  params: Promise<{ id: string }>;
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { id } = await params;
  const recipe = getRecipeById(id);

  if (!recipe) {
    notFound();
  }

  return <RecipeWizard recipe={recipe} />;
}

// Generate static params for all recipes
export async function generateStaticParams() {
  const { recipes } = await import("@/lib/recipes");
  return recipes.map((recipe) => ({
    id: recipe.id,
  }));
}
