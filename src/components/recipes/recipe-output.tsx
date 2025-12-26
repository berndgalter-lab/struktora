"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Copy, Check, RefreshCw, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RecipeOutputProps {
  output: string;
  onRegenerate: () => void;
  onNewInput: () => void;
  isLoading?: boolean;
}

export const RecipeOutput = ({
  output,
  onRegenerate,
  onNewInput,
  isLoading = false,
}: RecipeOutputProps) => {
  const t = useTranslations("recipes");
  const tCommon = useTranslations("common");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="border-green-200 bg-green-50/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium text-slate-900">
          {t("output")}
        </CardTitle>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="gap-2"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                {tCommon("copied")}
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                {tCommon("copy")}
              </>
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Output Text */}
        <div className="whitespace-pre-wrap rounded-lg bg-white p-4 text-sm text-slate-700 border border-slate-200">
          {output}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            onClick={onRegenerate}
            disabled={isLoading}
            className="gap-2"
          >
            <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
            {t("regenerate")}
          </Button>
          <Button variant="ghost" onClick={onNewInput} className="gap-2">
            <PenLine className="h-4 w-4" />
            {t("newInput")}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
