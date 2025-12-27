"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { TeamList } from "@/components/settings/team-list";
import { InviteForm } from "@/components/settings/invite-form";
import type { User } from "@/types/database";

export default function TeamSettingsPage() {
  const [members, setMembers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch("/api/team");
        if (response.ok) {
          const data = await response.json();
          setMembers(data.members || []);
          setIsAdmin(data.isAdmin || false);
        }
      } catch {
        setError("Fehler beim Laden des Teams");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeam();
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

  return (
    <div className="space-y-6">
      {isAdmin && <InviteForm />}
      <TeamList members={members} />
    </div>
  );
}
