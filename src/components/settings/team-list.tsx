"use client";

import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { User } from "@/types/database";

interface TeamListProps {
  members: User[];
}

export const TeamList = ({ members }: TeamListProps) => {
  const t = useTranslations("settings.team");

  const getInitials = (email: string, name?: string | null) => {
    if (name) {
      return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
    }
    return email.slice(0, 2).toUpperCase();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("members")}</CardTitle>
        <CardDescription>
          {members.length} {members.length === 1 ? "Mitglied" : "Mitglieder"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {members.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between rounded-lg border border-slate-200 p-3"
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-slate-100 text-slate-600">
                    {getInitials(member.email, member.full_name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-slate-900">
                    {member.full_name || member.email}
                  </p>
                  {member.full_name && (
                    <p className="text-sm text-slate-500">{member.email}</p>
                  )}
                </div>
              </div>
              <Badge variant={member.role === "admin" ? "default" : "secondary"}>
                {member.role === "admin" ? t("admin") : t("member")}
              </Badge>
            </div>
          ))}

          {members.length === 0 && (
            <p className="text-center text-slate-500 py-4">
              Keine Teammitglieder gefunden
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
