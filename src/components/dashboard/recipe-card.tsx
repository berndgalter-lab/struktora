"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  Mail,
  Heart,
  XCircle,
  RefreshCw,
  HelpCircle,
  Scissors,
  FileText,
  CheckSquare,
  ArrowRightLeft,
  FileCheck,
  Search,
  MessageCircle,
  Clock,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Recipe } from "@/types/recipes";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Mail,
  Heart,
  XCircle,
  RefreshCw,
  HelpCircle,
  Scissors,
  FileText,
  CheckSquare,
  ArrowRightLeft,
  FileCheck,
  Search,
  MessageCircle,
};

interface RecipeCardProps {
  recipe: Omit<Recipe, "promptTemplate" | "fields">;
}

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const t = useTranslations("dashboard.categories");
  const Icon = iconMap[recipe.icon] || FileText;

  return (
    <Link href={`/dashboard/recipes/${recipe.id}`}>
      <Card className="group h-full cursor-pointer transition-all hover:shadow-md hover:border-slate-300">
        <CardContent className="p-5">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100">
              <Icon className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                {recipe.name}
              </h3>
              <p className="mt-1 text-sm text-slate-500 line-clamp-2">
                {recipe.description}
              </p>
              <div className="mt-3 flex items-center gap-3">
                <Badge variant="secondary" className="text-xs">
                  {t(recipe.category)}
                </Badge>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="h-3 w-3" />
                  {recipe.estimatedTime}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
