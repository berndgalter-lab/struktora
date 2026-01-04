# Datenbank-Inventur (Supabase)
Stand: 03. Januar 2026

> ⚠️ **Hinweis:** Diese Inventur basiert auf TypeScript-Typen (`/src/types/database.ts`) und API-Code-Analyse. Einige Details sollten im Supabase Dashboard verifiziert werden. Die entsprechenden SQL-Queries sind in Abschnitt 10 dokumentiert.

---

## 1. Tabellen-Übersicht

| Tabelle | Beschreibung | Verwendung im Code | RLS |
|---------|--------------|-------------------|-----|
| teams | Firmen/Mandanten mit Abo-Info | /api/billing, /api/checkout, webhooks | ⚠️ Prüfen |
| users | Benutzer mit Team-Zuordnung | /api/ai, /api/settings/*, /api/team | ⚠️ Prüfen |
| company_profiles | Firmenprofile (1:1 zu teams) | /api/ai, /api/settings/profile | ⚠️ Prüfen |
| company_policies | Kommunikations-Policies (1:1 zu teams) | /api/ai, /api/settings/policy | ⚠️ Prüfen |
| team_invites | Einladungen mit Token | /api/team/invite | ⚠️ Prüfen |
| usage_stats | Nutzungsstatistiken | /api/ai (insert) | ⚠️ Prüfen |
| user_consents | Rechtliche Zustimmungen | signup flow | ⚠️ Prüfen |

---

## 2. Tabellen-Details

### 2.1 teams

**Beschreibung:** Firmen/Mandanten mit Subscription-Informationen

| Spalte | Typ | Nullable | Default | Constraint | Quelle |
|--------|-----|----------|---------|------------|--------|
| id | uuid | NO | gen_random_uuid() | PRIMARY KEY | TypeScript |
| name | text | NO | - | - | TypeScript |
| created_at | timestamptz | NO | now() | - | TypeScript |
| subscription_status | text | NO | 'trial' | - | TypeScript |
| subscription_tier | text | NO | 'starter' | - | TypeScript |
| subscription_id | text | YES | NULL | - | TypeScript |
| trial_ends_at | timestamptz | NO | now() + interval '14 days' | - | TypeScript |
| lemon_squeezy_customer_id | text | YES | NULL | - | Migration 002 |

**Erlaubte Werte (aus TypeScript):**
- `subscription_status`: "trial" | "active" | "cancelled" | "past_due"
- `subscription_tier`: "starter" | "team" | "business"

**Indices (bekannt):**
- `teams_pkey` - PRIMARY KEY (id)
- `idx_teams_lemon_squeezy_customer_id` - BTREE (lemon_squeezy_customer_id) [Migration 002]

**RLS Policies:** ⚠️ Im Dashboard prüfen

---

### 2.2 users

**Beschreibung:** Benutzer mit Team-Zuordnung, verknüpft mit auth.users

| Spalte | Typ | Nullable | Default | Constraint | Quelle |
|--------|-----|----------|---------|------------|--------|
| id | uuid | NO | - | PRIMARY KEY, FK → auth.users(id) ON DELETE CASCADE | TypeScript |
| email | text | NO | - | - | TypeScript |
| full_name | text | YES | NULL | - | TypeScript |
| team_id | uuid | YES | NULL | FK → teams(id) ON DELETE SET NULL | TypeScript |
| role | text | NO | 'member' | - | TypeScript |
| created_at | timestamptz | NO | now() | - | TypeScript |

**Erlaubte Werte (aus TypeScript):**
- `role`: "admin" | "member"

**Indices (vermutet):**
- `users_pkey` - PRIMARY KEY (id)
- `users_team_id_idx` - BTREE (team_id) [empfohlen für JOINs]

**RLS Policies:** ⚠️ Im Dashboard prüfen

**Verwendung im Code:**
```typescript
// /api/ai/route.ts - Lädt team_id
const { data: userData } = await serviceClient
  .from("users")
  .select("team_id")
  .eq("id", user.id)
  .single();

// /api/settings/profile/route.ts - Lädt team_id und role
const { data: userData } = await serviceClient
  .from("users")
  .select("team_id, role")
  .eq("id", user.id)
  .single();
```

---

### 2.3 company_profiles

**Beschreibung:** Firmenprofil-Informationen für AI-Prompt-Generierung (1:1 zu teams)

| Spalte | Typ | Nullable | Default | Constraint | Quelle |
|--------|-----|----------|---------|------------|--------|
| id | uuid | NO | gen_random_uuid() | PRIMARY KEY | TypeScript |
| team_id | uuid | NO | - | FK → teams(id) ON DELETE CASCADE, UNIQUE | TypeScript |
| company_name | text | NO | - | - | TypeScript |
| industry | text | YES | NULL | - | TypeScript |
| description | text | YES | NULL | - | TypeScript |
| products | text | YES | NULL | - | TypeScript |
| created_at | timestamptz | NO | now() | - | TypeScript |
| updated_at | timestamptz | NO | now() | - | TypeScript |

**Indices (vermutet):**
- `company_profiles_pkey` - PRIMARY KEY (id)
- `company_profiles_team_id_key` - UNIQUE (team_id)

**RLS Policies:** ⚠️ Im Dashboard prüfen

**Verwendung im AI-Prompt:**
```typescript
// Felder die in Prompt-Templates verwendet werden:
- {{company_name}} → companyProfile?.company_name
- {{industry}} → companyProfile?.industry
- {{description}} → companyProfile?.description
```

---

### 2.4 company_policies

**Beschreibung:** Kommunikations-Policies für AI-Prompt-Generierung (1:1 zu teams)

| Spalte | Typ | Nullable | Default | Constraint | Quelle |
|--------|-----|----------|---------|------------|--------|
| id | uuid | NO | gen_random_uuid() | PRIMARY KEY | TypeScript |
| team_id | uuid | NO | - | FK → teams(id) ON DELETE CASCADE, UNIQUE | TypeScript |
| anrede | text | NO | 'Sie' | - | TypeScript |
| tonality | text | NO | 'sachlich' | - | TypeScript |
| nogo_words | text[] | YES | '{}' | - | TypeScript |
| greeting | text | YES | 'Mit freundlichen Grüßen' | - | TypeScript |
| created_at | timestamptz | NO | now() | - | TypeScript |
| updated_at | timestamptz | NO | now() | - | TypeScript |

**Erlaubte Werte (aus TypeScript):**
- `anrede`: "Sie" | "Du"
- `tonality`: "formell" | "sachlich" | "locker"

**Indices (vermutet):**
- `company_policies_pkey` - PRIMARY KEY (id)
- `company_policies_team_id_key` - UNIQUE (team_id)

**RLS Policies:** ⚠️ Im Dashboard prüfen

**Verwendung im AI-Prompt:**
```typescript
// Felder die in Prompt-Templates verwendet werden:
- {{anrede}} → companyPolicy?.anrede || "Sie"
- {{tonality}} → companyPolicy?.tonality || "sachlich"
- {{greeting}} → companyPolicy?.greeting || "Mit freundlichen Grüßen"
- {{nogo_words}} → companyPolicy?.nogo_words?.join(", ") || "keine"
```

---

### 2.5 team_invites

**Beschreibung:** Team-Einladungen mit Token und Ablaufdatum

| Spalte | Typ | Nullable | Default | Constraint | Quelle |
|--------|-----|----------|---------|------------|--------|
| id | uuid | NO | gen_random_uuid() | PRIMARY KEY | TypeScript |
| team_id | uuid | NO | - | FK → teams(id) ON DELETE CASCADE | TypeScript |
| email | text | NO | - | - | TypeScript |
| token | text | NO | - | UNIQUE | TypeScript |
| invited_by | uuid | YES | NULL | FK → users(id) | TypeScript |
| expires_at | timestamptz | NO | now() + interval '7 days' | - | TypeScript |
| created_at | timestamptz | NO | now() | - | TypeScript |

**Indices (vermutet):**
- `team_invites_pkey` - PRIMARY KEY (id)
- `team_invites_token_key` - UNIQUE (token)
- `team_invites_team_id_idx` - BTREE (team_id)

**RLS Policies:** ⚠️ Im Dashboard prüfen

**Verwendung im Code:**
```typescript
// /api/team/invite/route.ts
const token = randomBytes(32).toString("hex");

// Check für existierende Einladung
.eq("email", email.toLowerCase())
.eq("team_id", userData.team_id)
.gt("expires_at", new Date().toISOString())
```

---

### 2.6 usage_stats

**Beschreibung:** Nutzungsstatistiken pro Recipe-Ausführung (anonymisiert)

| Spalte | Typ | Nullable | Default | Constraint | Quelle |
|--------|-----|----------|---------|------------|--------|
| id | uuid | NO | gen_random_uuid() | PRIMARY KEY | TypeScript |
| team_id | uuid | NO | - | FK → teams(id) ON DELETE CASCADE | TypeScript |
| user_id | uuid | YES | NULL | FK → users(id) ON DELETE SET NULL | TypeScript |
| recipe_id | text | NO | - | - | TypeScript |
| tokens_used | integer | YES | NULL | - | TypeScript |
| created_at | timestamptz | NO | now() | - | TypeScript |

**Indices (vermutet):**
- `usage_stats_pkey` - PRIMARY KEY (id)
- `usage_stats_team_id_idx` - BTREE (team_id)
- `usage_stats_created_at_idx` - BTREE (created_at) [empfohlen für Reporting]

**RLS Policies:** ⚠️ Im Dashboard prüfen

**Verwendung im Code:**
```typescript
// /api/ai/route.ts - Non-blocking insert
serviceClient
  .from("usage_stats")
  .insert({
    team_id: teamId,
    user_id: user.id,
    recipe_id: recipeId,
    tokens_used: tokensUsed,
  })
```

---

### 2.7 user_consents

**Beschreibung:** Rechtliche Zustimmungen bei Registrierung (DSGVO-konform)

| Spalte | Typ | Nullable | Default | Constraint | Quelle |
|--------|-----|----------|---------|------------|--------|
| id | uuid | NO | gen_random_uuid() | PRIMARY KEY | Code-Analyse |
| user_id | uuid | NO | - | FK → auth.users(id) | Code-Analyse |
| accepted_terms_version | text | YES | NULL | - | Code-Analyse |
| accepted_privacy_version | text | YES | NULL | - | Code-Analyse |
| accepted_dpa_version | text | YES | NULL | - | Code-Analyse |
| user_agent | text | YES | NULL | - | Code-Analyse |
| created_at | timestamptz | NO | now() | - | Code-Analyse |

**Indices (vermutet):**
- `user_consents_pkey` - PRIMARY KEY (id)
- `user_consents_user_id_idx` - BTREE (user_id)

**RLS Policies:** ⚠️ Im Dashboard prüfen

**Verwendung im Code:**
```typescript
// /app/(auth)/signup/page.tsx
await supabase.from("user_consents").insert({
  user_id: data.user.id,
  accepted_terms_version: LEGAL_VERSIONS.terms,
  accepted_privacy_version: LEGAL_VERSIONS.privacy,
  accepted_dpa_version: LEGAL_VERSIONS.dpa,
  user_agent: window.navigator.userAgent,
});
```

---

## 3. Beziehungen (ERD)

```mermaid
erDiagram
    auth_users ||--|| users : "id → id"
    auth_users ||--o{ user_consents : "id → user_id"
    
    teams ||--o{ users : "id → team_id"
    teams ||--|| company_profiles : "id → team_id"
    teams ||--|| company_policies : "id → team_id"
    teams ||--o{ team_invites : "id → team_id"
    teams ||--o{ usage_stats : "id → team_id"
    
    users ||--o{ team_invites : "id → invited_by"
    users ||--o{ usage_stats : "id → user_id"

    teams {
        uuid id PK
        text name
        text subscription_status
        text subscription_tier
        text subscription_id
        timestamptz trial_ends_at
        text lemon_squeezy_customer_id
        timestamptz created_at
    }
    
    users {
        uuid id PK_FK
        text email
        text full_name
        uuid team_id FK
        text role
        timestamptz created_at
    }
    
    company_profiles {
        uuid id PK
        uuid team_id FK_UK
        text company_name
        text industry
        text description
        text products
        timestamptz created_at
        timestamptz updated_at
    }
    
    company_policies {
        uuid id PK
        uuid team_id FK_UK
        text anrede
        text tonality
        text_array nogo_words
        text greeting
        timestamptz created_at
        timestamptz updated_at
    }
    
    team_invites {
        uuid id PK
        uuid team_id FK
        text email
        text token UK
        uuid invited_by FK
        timestamptz expires_at
        timestamptz created_at
    }
    
    usage_stats {
        uuid id PK
        uuid team_id FK
        uuid user_id FK
        text recipe_id
        integer tokens_used
        timestamptz created_at
    }
    
    user_consents {
        uuid id PK
        uuid user_id FK
        text accepted_terms_version
        text accepted_privacy_version
        text accepted_dpa_version
        text user_agent
        timestamptz created_at
    }
```

---

## 4. RLS Policies

> ⚠️ **WICHTIG:** Die folgenden Policies sind basierend auf Best Practices vermutet. Bitte im Supabase Dashboard mit Query aus Abschnitt 10.2 verifizieren.

### 4.1 Erwartete RLS-Struktur

| Tabelle | SELECT | INSERT | UPDATE | DELETE |
|---------|--------|--------|--------|--------|
| teams | Mitglieder sehen eigenes Team | Nur via Trigger | Nur Admin | Nur Admin |
| users | Eigene Daten + Team-Mitglieder | Via Auth-Trigger | Eigene Daten | Eigene Daten |
| company_profiles | Team-Mitglieder | Admin | Admin | Admin |
| company_policies | Team-Mitglieder | Admin | Admin | Admin |
| team_invites | Admin sieht Team-Einladungen | Admin | - | Admin |
| usage_stats | Team-Mitglieder | Authentifiziert | - | - |
| user_consents | Eigene Daten | Authentifiziert | - | - |

### 4.2 Vermutete Policy-Expressions

**teams (SELECT):**
```sql
-- User ist Mitglied des Teams
id IN (SELECT team_id FROM users WHERE id = auth.uid())
```

**users (SELECT):**
```sql
-- Eigene Daten ODER Team-Mitglieder
id = auth.uid() OR team_id IN (SELECT team_id FROM users WHERE id = auth.uid())
```

**company_profiles / company_policies (SELECT):**
```sql
-- Team-Mitglieder
team_id IN (SELECT team_id FROM users WHERE id = auth.uid())
```

**company_profiles / company_policies (INSERT/UPDATE/DELETE):**
```sql
-- Nur Admins des Teams
team_id IN (SELECT team_id FROM users WHERE id = auth.uid() AND role = 'admin')
```

---

## 5. Functions/RPCs

> ⚠️ Im Dashboard mit Query aus Abschnitt 10.4 prüfen.

### 5.1 Vermutete Functions

**Wahrscheinlich vorhanden:**

```sql
-- Trigger-Function für User-Erstellung nach Auth-Signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email)
  VALUES (NEW.id, NEW.email);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

**Möglicherweise vorhanden:**

```sql
-- Function für Team-Erstellung bei erstem Signup
CREATE OR REPLACE FUNCTION public.create_team_for_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Erstelle neues Team
  INSERT INTO public.teams (name)
  VALUES (NEW.email || '''s Team')
  RETURNING id INTO NEW.team_id;
  
  -- Setze User als Admin
  NEW.role := 'admin';
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```

---

## 6. Triggers

> ⚠️ Im Dashboard mit Query aus Abschnitt 10.5 prüfen.

### 6.1 Vermutete Triggers

| Trigger | Tabelle | Event | Timing | Function |
|---------|---------|-------|--------|----------|
| on_auth_user_created | auth.users | INSERT | AFTER | handle_new_user() |
| ??? | users | INSERT | BEFORE | create_team_for_user() |

---

## 7. Enums/Custom Types

> ⚠️ Im Dashboard mit Query aus Abschnitt 10.6 prüfen.

### 7.1 Vermutete Enums

Basierend auf TypeScript-Typen könnten folgende Enums existieren:

```sql
-- Vermutlich NICHT als Enum, sondern als TEXT mit CHECK
CREATE TYPE subscription_status AS ENUM ('trial', 'active', 'cancelled', 'past_due');
CREATE TYPE subscription_tier AS ENUM ('starter', 'team', 'business');
CREATE TYPE user_role AS ENUM ('admin', 'member');
CREATE TYPE anrede_type AS ENUM ('Sie', 'Du');
CREATE TYPE tonality_type AS ENUM ('formell', 'sachlich', 'locker');
```

**Hinweis:** Der Code verwendet TEXT-Typen mit TypeScript-Validation, keine Postgres-Enums.

---

## 8. Indices

### 8.1 Bekannte Indices

| Tabelle | Index | Typ | Spalten | Quelle |
|---------|-------|-----|---------|--------|
| teams | teams_pkey | PRIMARY | id | Standard |
| teams | idx_teams_lemon_squeezy_customer_id | BTREE | lemon_squeezy_customer_id | Migration 002 |

### 8.2 Empfohlene Indices (zu prüfen)

| Tabelle | Index | Typ | Spalten | Grund |
|---------|-------|-----|---------|-------|
| users | users_team_id_idx | BTREE | team_id | JOIN-Performance |
| users | users_email_idx | BTREE | email | Unique-Check |
| company_profiles | company_profiles_team_id_idx | BTREE | team_id | Lookup |
| company_policies | company_policies_team_id_idx | BTREE | team_id | Lookup |
| team_invites | team_invites_token_idx | BTREE | token | Token-Lookup |
| team_invites | team_invites_email_team_idx | BTREE | email, team_id | Unique-Check |
| usage_stats | usage_stats_team_id_created_idx | BTREE | team_id, created_at | Reporting |

---

## 9. Erkenntnisse für Migration

### 9.1 Fehlende Strukturen (für Zielmodell nötig)

- [ ] `organizations` Tabelle (Mandanten-Hierarchie)
- [ ] `standard_families` Tabelle (Gruppierung von Standards)
- [ ] `standards` Tabelle (Arbeitsstandards statt Recipes)
- [ ] `standard_variants` Tabelle (Varianten/Anlässe)
- [ ] `standard_versions` Tabelle (Versionierung)
- [ ] `input_fields` Tabelle (dynamische Felder pro Standard)
- [ ] `executions` Tabelle (vollständige Ausführungshistorie)
- [ ] `company_variables` Tabelle (12 strukturierte Variablen statt 4)
- [ ] `company_variable_presets` Tabelle (Preset-System)
- [ ] `audit_logs` Tabelle (vollständiges Audit)
- [ ] `entitlements` Tabelle (Berechtigungen/Limits)

### 9.2 Tabellen zum Umbau

| IST-Tabelle | Änderung | Grund |
|-------------|----------|-------|
| teams | + organization_id FK | Hierarchie für Enterprise |
| users | + organization_id FK, + display_name | Hierarchie, bessere UX |
| company_profiles | → company_contexts | Umbenennung, mehr Struktur |
| company_policies | → company_variables | Komplettes Redesign (4 → 12 Variablen) |
| usage_stats | → executions | Vollständige Ausführungshistorie mit Inputs/Outputs |

### 9.3 Tabellen zum Löschen/Ersetzen

| Tabelle | Aktion | Daten-Migration |
|---------|--------|-----------------|
| company_policies | Ersetzen durch company_variables | anrede, tonality, greeting, nogo_words → neue Variablen |
| usage_stats | Erweitern zu executions | recipe_id → standard_id, + input_data, + output_data |

### 9.4 RLS Policy Änderungen nötig

- [ ] Alle Policies müssen organization_id berücksichtigen (Multi-Tenancy)
- [ ] Neue Policies für neue Tabellen (standards, executions, etc.)
- [ ] Entitlement-Checks in Policies integrieren (Limits prüfen)
- [ ] Admin-Rollen erweitern (Team-Admin vs. Org-Admin)

### 9.5 Offene Fragen für Supabase-Check

1. **RLS aktiviert?** Ist RLS für alle Tabellen aktiviert?
2. **Welche Functions existieren?** Gibt es User-Creation Triggers?
3. **Welche Indices existieren?** Performance-relevante Indices?
4. **Gibt es Constraints?** CHECK-Constraints für Enums?
5. **Daten vorhanden?** Anzahl Zeilen pro Tabelle?

---

## 10. SQL-Queries für Supabase Dashboard

> 📋 **Anleitung:** Diese Queries im Supabase SQL Editor ausführen und Ergebnisse in dieses Dokument einfügen.

### 10.1 Tabellen und Spalten

```sql
-- Query 1: Alle Tabellen mit Spalten, Typen und Constraints
SELECT 
  c.table_name,
  c.column_name,
  c.data_type,
  c.udt_name,
  c.is_nullable,
  c.column_default,
  c.character_maximum_length
FROM information_schema.columns c
WHERE c.table_schema = 'public'
ORDER BY c.table_name, c.ordinal_position;
```

### 10.2 RLS Policies

```sql
-- Query 2: Alle RLS Policies
SELECT 
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual::text as using_expression,
  with_check::text as with_check_expression
FROM pg_policies
WHERE schemaname = 'public'
ORDER BY tablename, policyname;
```

### 10.3 RLS Status pro Tabelle

```sql
-- Query 3: RLS aktiviert pro Tabelle?
SELECT 
  relname as table_name,
  relrowsecurity as rls_enabled,
  relforcerowsecurity as rls_forced
FROM pg_class
WHERE relnamespace = 'public'::regnamespace
  AND relkind = 'r'
ORDER BY relname;
```

### 10.4 Functions

```sql
-- Query 4: Alle Functions im public Schema
SELECT 
  p.proname as function_name,
  pg_get_function_arguments(p.oid) as arguments,
  t.typname as return_type,
  l.lanname as language
FROM pg_proc p
JOIN pg_namespace n ON p.pronamespace = n.oid
JOIN pg_type t ON p.prorettype = t.oid
JOIN pg_language l ON p.prolang = l.oid
WHERE n.nspname = 'public'
ORDER BY p.proname;
```

### 10.5 Triggers

```sql
-- Query 5: Alle Triggers
SELECT 
  trigger_name,
  event_manipulation,
  event_object_table,
  action_timing,
  action_statement
FROM information_schema.triggers
WHERE trigger_schema = 'public'
ORDER BY event_object_table, trigger_name;
```

### 10.6 Enums

```sql
-- Query 6: Alle Custom Enums
SELECT 
  t.typname as enum_name,
  e.enumlabel as enum_value,
  e.enumsortorder as sort_order
FROM pg_type t
JOIN pg_enum e ON t.oid = e.enumtypid
JOIN pg_namespace n ON t.typnamespace = n.oid
WHERE n.nspname = 'public'
ORDER BY t.typname, e.enumsortorder;
```

### 10.7 Indices

```sql
-- Query 7: Alle Indices
SELECT
  tablename,
  indexname,
  indexdef
FROM pg_indexes
WHERE schemaname = 'public'
ORDER BY tablename, indexname;
```

### 10.8 Foreign Keys

```sql
-- Query 8: Alle Foreign Keys
SELECT
  tc.table_name,
  kcu.column_name,
  ccu.table_name AS foreign_table,
  ccu.column_name AS foreign_column,
  tc.constraint_name
FROM information_schema.table_constraints tc
JOIN information_schema.key_column_usage kcu
  ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.constraint_column_usage ccu
  ON tc.constraint_name = ccu.constraint_name
WHERE tc.constraint_type = 'FOREIGN KEY'
  AND tc.table_schema = 'public'
ORDER BY tc.table_name;
```

### 10.9 Zeilenanzahl pro Tabelle

```sql
-- Query 9: Zeilenanzahl pro Tabelle
SELECT 
  schemaname,
  relname as table_name,
  n_live_tup as row_count
FROM pg_stat_user_tables
WHERE schemaname = 'public'
ORDER BY n_live_tup DESC;
```

---

## 11. Query-Ergebnisse (nach Ausführung einfügen)

> 📝 Hier die Ergebnisse der SQL-Queries einfügen:

### 11.1 Tabellen und Spalten
```
[ERGEBNIS HIER EINFÜGEN]
```

### 11.2 RLS Policies
```
[ERGEBNIS HIER EINFÜGEN]
```

### 11.3 RLS Status
```
[ERGEBNIS HIER EINFÜGEN]
```

### 11.4 Functions
```
[ERGEBNIS HIER EINFÜGEN]
```

### 11.5 Triggers
```
[ERGEBNIS HIER EINFÜGEN]
```

### 11.6 Enums
```
[ERGEBNIS HIER EINFÜGEN]
```

### 11.7 Indices
```
[ERGEBNIS HIER EINFÜGEN]
```

### 11.8 Foreign Keys
```
[ERGEBNIS HIER EINFÜGEN]
```

### 11.9 Zeilenanzahl
```
[ERGEBNIS HIER EINFÜGEN]
```

