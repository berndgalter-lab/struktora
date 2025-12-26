"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { AlertCircle } from "lucide-react";
import Link from "next/link";
import { recipes, categories } from "@/lib/recipes";
import { RecipeCard } from "@/components/dashboard/recipe-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  const t = useTranslations("dashboard");
  const tCategories = useTranslations("dashboard.categories");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Filter recipes by category
  const filteredRecipes = activeCategory
    ? recipes.filter((r) => r.category === activeCategory)
    : recipes;

  // TODO: Replace with real user data from useUser hook
  const hasProfile = false; // Placeholder

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">{t("welcome")}</h1>
      </div>

      {/* Profile Warning */}
      {!hasProfile && (
        <div className="flex items-center gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
          <AlertCircle className="h-5 w-5 flex-shrink-0 text-amber-600" />
          <div className="flex-1">
            <p className="text-sm text-amber-800">
              Fülle dein Firmenprofil aus, damit die KI-Antworten zu deinem
              Unternehmen passen.
            </p>
          </div>
          <Link href="/dashboard/settings/profile">
            <Button size="sm" variant="outline" className="border-amber-300">
              Profil ausfüllen
            </Button>
          </Link>
        </div>
      )}

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={activeCategory === null ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveCategory(null)}
        >
          Alle
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(category)}
          >
            {tCategories(category)}
          </Button>
        ))}
      </div>

      {/* Recipe Grid */}
      <div>
        <h2 className="mb-4 text-lg font-semibold text-slate-900">
          {t("allRecipes")}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
}
