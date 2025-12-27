"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowLeft, Loader2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TextareaField } from "./wizard-fields/textarea-field";
import { SelectField } from "./wizard-fields/select-field";
import { RadioField } from "./wizard-fields/radio-field";
import { RecipeOutput } from "./recipe-output";
import type { Recipe } from "@/types/recipes";

interface RecipeWizardProps {
  recipe: Recipe;
}

export const RecipeWizard = ({ recipe }: RecipeWizardProps) => {
  const t = useTranslations("recipes");
  const tCommon = useTranslations("common");
  const tCategories = useTranslations("dashboard.categories");

  // Form state
  const [inputs, setInputs] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    recipe.fields.forEach((field) => {
      initial[field.id] = "";
    });
    return initial;
  });

  // Generation state
  const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const updateInput = (fieldId: string, value: string) => {
    setInputs((prev) => ({ ...prev, [fieldId]: value }));
  };

  const validateInputs = () => {
    for (const field of recipe.fields) {
      if (field.required && !inputs[field.id]?.trim()) {
        return false;
      }
    }
    return true;
  };

  const handleGenerate = async () => {
    if (!validateInputs()) {
      setError("Füll bitte alle Pflichtfelder aus.");
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          recipeId: recipe.id,
          inputs,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Fehler bei der Generierung");
      }

      setOutput(data.output);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ein Fehler ist aufgetreten");
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewInput = () => {
    const reset: Record<string, string> = {};
    recipe.fields.forEach((field) => {
      reset[field.id] = "";
    });
    setInputs(reset);
    setOutput(null);
    setError(null);
  };

  const renderField = (field: Recipe["fields"][0]) => {
    const commonProps = {
      field,
      value: inputs[field.id] || "",
      onChange: (value: string) => updateInput(field.id, value),
      disabled: isLoading,
    };

    switch (field.type) {
      case "textarea":
        return <TextareaField key={field.id} {...commonProps} />;
      case "select":
        return <SelectField key={field.id} {...commonProps} />;
      case "radio":
        return <RadioField key={field.id} {...commonProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <Link href="/dashboard">
          <Button variant="ghost" size="icon" className="mt-1">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-slate-900">{recipe.name}</h1>
          <p className="mt-1 text-slate-600">{recipe.description}</p>
          <div className="mt-3 flex items-center gap-3">
            <Badge variant="secondary">{tCategories(recipe.category)}</Badge>
            <span className="flex items-center gap-1 text-sm text-slate-500">
              <Clock className="h-4 w-4" />
              {recipe.estimatedTime}
            </span>
          </div>
        </div>
      </div>

      {/* Form */}
      <Card>
        <CardContent className="p-6 space-y-5">
          {recipe.fields.map(renderField)}

          {/* Error */}
          {error && (
            <div className="bg-red-50 text-red-600 text-sm p-3 rounded-md">
              {error}
            </div>
          )}

          {/* Generate Button */}
          <Button
            onClick={handleGenerate}
            disabled={isLoading}
            className="w-full gap-2"
            size="lg"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                {t("generating")}
              </>
            ) : (
              t("generate")
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Output */}
      {output && (
        <RecipeOutput
          output={output}
          onRegenerate={handleGenerate}
          onNewInput={handleNewInput}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};
