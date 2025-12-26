// Recipe Type Definitions

export interface Recipe {
  id: string;
  name: string;
  description: string;
  category: "kommunikation" | "texte" | "meetings" | "sales" | "support";
  icon: string;
  estimatedTime: string;
  fields: RecipeField[];
  promptTemplate: string;
}

export interface RecipeField {
  id: string;
  label: string;
  type: "textarea" | "select" | "radio";
  placeholder?: string;
  required: boolean;
  options?: { value: string; label: string }[];
}

