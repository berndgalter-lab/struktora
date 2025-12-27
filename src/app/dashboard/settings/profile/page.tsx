"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Loader2 } from "lucide-react";
import { ProfileForm } from "@/components/settings/profile-form";
import type { CompanyProfile } from "@/types/database";

export default function ProfileSettingsPage() {
  const t = useTranslations("common");
  const [profile, setProfile] = useState<Partial<CompanyProfile> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/settings/profile");
        if (response.ok) {
          const data = await response.json();
          setProfile(data.profile);
        }
      } catch {
        setError("Fehler beim Laden des Profils");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
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

  return <ProfileForm initialData={profile} />;
}
