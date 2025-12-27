"use client";

import { useEffect, useState } from "react";
import { User as AuthUser } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";
import type { User, Team, CompanyProfile, CompanyPolicy } from "@/types/database";

interface UserState {
  authUser: AuthUser | null;
  user: User | null;
  team: Team | null;
  companyProfile: CompanyProfile | null;
  companyPolicy: CompanyPolicy | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  authUser: null,
  user: null,
  team: null,
  companyProfile: null,
  companyPolicy: null,
  isLoading: true,
  error: null,
};

export const useUser = () => {
  const [state, setState] = useState<UserState>(initialState);

  useEffect(() => {
    const supabase = createClient();

    const loadUserData = async () => {
      try {
        // Get authenticated user
        const {
          data: { user: authUser },
          error: authError,
        } = await supabase.auth.getUser();

        if (authError || !authUser) {
          setState({
            ...initialState,
            isLoading: false,
          });
          return;
        }

        // Get user profile from our users table
        const { data: user, error: userError } = await supabase
          .from("users")
          .select("*")
          .eq("id", authUser.id)
          .single();

        if (userError) {
          // User might not exist yet in our table (new signup)
          setState({
            authUser,
            user: null,
            team: null,
            companyProfile: null,
            companyPolicy: null,
            isLoading: false,
            error: null,
          });
          return;
        }

        // If user has no team, return early
        if (!user.team_id) {
          setState({
            authUser,
            user,
            team: null,
            companyProfile: null,
            companyPolicy: null,
            isLoading: false,
            error: null,
          });
          return;
        }

        // Fetch team data
        const { data: team } = await supabase
          .from("teams")
          .select("*")
          .eq("id", user.team_id)
          .single();

        // Fetch company profile
        const { data: companyProfile } = await supabase
          .from("company_profiles")
          .select("*")
          .eq("team_id", user.team_id)
          .single();

        // Fetch company policy
        const { data: companyPolicy } = await supabase
          .from("company_policies")
          .select("*")
          .eq("team_id", user.team_id)
          .single();

        setState({
          authUser,
          user,
          team: team || null,
          companyProfile: companyProfile || null,
          companyPolicy: companyPolicy || null,
          isLoading: false,
          error: null,
        });
      } catch {
        setState({
          ...initialState,
          isLoading: false,
          error: "Fehler beim Laden der Benutzerdaten.",
        });
      }
    };

    loadUserData();

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event: string, session: { user?: unknown } | null) => {
      if (session?.user) {
        loadUserData();
      } else {
        setState({
          ...initialState,
          isLoading: false,
        });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setState({
      ...initialState,
      isLoading: false,
    });
  };

  return {
    ...state,
    signOut,
    isAuthenticated: !!state.authUser,
    isAdmin: state.user?.role === "admin",
  };
};
