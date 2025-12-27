// Supabase Database Types

export interface Database {
  public: {
    Tables: {
      teams: {
        Row: {
          id: string;
          name: string;
          created_at: string;
          subscription_status: "trial" | "active" | "cancelled" | "past_due";
          subscription_tier: "starter" | "team" | "business";
          subscription_id: string | null;
          trial_ends_at: string;
          lemon_squeezy_customer_id: string | null;
        };
        Insert: {
          id?: string;
          name: string;
          created_at?: string;
          subscription_status?: "trial" | "active" | "cancelled" | "past_due";
          subscription_tier?: "starter" | "team" | "business";
          subscription_id?: string | null;
          trial_ends_at?: string;
          lemon_squeezy_customer_id?: string | null;
        };
        Update: {
          id?: string;
          name?: string;
          created_at?: string;
          subscription_status?: "trial" | "active" | "cancelled" | "past_due";
          subscription_tier?: "starter" | "team" | "business";
          subscription_id?: string | null;
          trial_ends_at?: string;
          lemon_squeezy_customer_id?: string | null;
        };
      };
      company_profiles: {
        Row: {
          id: string;
          team_id: string;
          company_name: string;
          industry: string | null;
          description: string | null;
          products: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          team_id: string;
          company_name: string;
          industry?: string | null;
          description?: string | null;
          products?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          team_id?: string;
          company_name?: string;
          industry?: string | null;
          description?: string | null;
          products?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      company_policies: {
        Row: {
          id: string;
          team_id: string;
          anrede: "Sie" | "Du";
          tonality: "formell" | "sachlich" | "locker";
          nogo_words: string[];
          greeting: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          team_id: string;
          anrede?: "Sie" | "Du";
          tonality?: "formell" | "sachlich" | "locker";
          nogo_words?: string[];
          greeting?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          team_id?: string;
          anrede?: "Sie" | "Du";
          tonality?: "formell" | "sachlich" | "locker";
          nogo_words?: string[];
          greeting?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      users: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          team_id: string | null;
          role: "admin" | "member";
          created_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          team_id?: string | null;
          role?: "admin" | "member";
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          team_id?: string | null;
          role?: "admin" | "member";
          created_at?: string;
        };
      };
      team_invites: {
        Row: {
          id: string;
          team_id: string;
          email: string;
          token: string;
          invited_by: string | null;
          expires_at: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          team_id: string;
          email: string;
          token: string;
          invited_by?: string | null;
          expires_at?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          team_id?: string;
          email?: string;
          token?: string;
          invited_by?: string | null;
          expires_at?: string;
          created_at?: string;
        };
      };
      usage_stats: {
        Row: {
          id: string;
          team_id: string;
          user_id: string | null;
          recipe_id: string;
          tokens_used: number | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          team_id: string;
          user_id?: string | null;
          recipe_id: string;
          tokens_used?: number | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          team_id?: string;
          user_id?: string | null;
          recipe_id?: string;
          tokens_used?: number | null;
          created_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}

// Convenience type aliases
export type Team = Database["public"]["Tables"]["teams"]["Row"];
export type TeamInsert = Database["public"]["Tables"]["teams"]["Insert"];
export type TeamUpdate = Database["public"]["Tables"]["teams"]["Update"];

export type CompanyProfile = Database["public"]["Tables"]["company_profiles"]["Row"];
export type CompanyProfileInsert = Database["public"]["Tables"]["company_profiles"]["Insert"];
export type CompanyProfileUpdate = Database["public"]["Tables"]["company_profiles"]["Update"];

export type CompanyPolicy = Database["public"]["Tables"]["company_policies"]["Row"];
export type CompanyPolicyInsert = Database["public"]["Tables"]["company_policies"]["Insert"];
export type CompanyPolicyUpdate = Database["public"]["Tables"]["company_policies"]["Update"];

export type User = Database["public"]["Tables"]["users"]["Row"];
export type UserInsert = Database["public"]["Tables"]["users"]["Insert"];
export type UserUpdate = Database["public"]["Tables"]["users"]["Update"];

export type TeamInvite = Database["public"]["Tables"]["team_invites"]["Row"];
export type TeamInviteInsert = Database["public"]["Tables"]["team_invites"]["Insert"];
export type TeamInviteUpdate = Database["public"]["Tables"]["team_invites"]["Update"];

export type UsageStat = Database["public"]["Tables"]["usage_stats"]["Row"];
export type UsageStatInsert = Database["public"]["Tables"]["usage_stats"]["Insert"];
export type UsageStatUpdate = Database["public"]["Tables"]["usage_stats"]["Update"];
