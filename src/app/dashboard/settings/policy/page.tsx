"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { PolicyForm } from "@/components/settings/policy-form";
import type { CompanyPolicy } from "@/types/database";

export default function PolicySettingsPage() {
  const [policy, setPolicy] = useState<Partial<CompanyPolicy> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPolicy = async () => {
      try {
        const response = await fetch("/api/settings/policy");
        if (response.ok) {
          const data = await response.json();
          setPolicy(data.policy);
        }
      } catch {
        setError("Fehler beim Laden der Policy");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPolicy();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 text-red-600 p-4 rounded-lg">
        {error}
      </div>
    );
  }

  return <PolicyForm initialData={policy} />;
}
