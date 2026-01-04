# Repository-Inventur
Stand: 03. Januar 2026

## 1. Projektstruktur Übersicht

```
src/
├── app/
│   ├── (auth)/              # Auth-Seiten (Login, Signup, Invite)
│   │   ├── invite/[token]/
│   │   ├── login/
│   │   └── signup/
│   ├── (marketing)/         # Öffentliche Seiten
│   │   ├── agb/
│   │   ├── arbeitsstandards-verstehen/
│   │   ├── avv/
│   │   ├── beispiel/
│   │   ├── check/           # Calendly-Terminbuchung
│   │   ├── datenschutz/
│   │   ├── impressum/
│   │   ├── pricing/         # TODO
│   │   └── widerruf/
│   ├── api/                 # API-Routen
│   │   ├── ai/
│   │   ├── billing/
│   │   ├── checkout/
│   │   ├── settings/
│   │   ├── team/
│   │   └── webhooks/
│   └── dashboard/           # Dashboard-Bereich
│       ├── admin/           # TODO
│       ├── recipes/[id]/
│       └── settings/
├── components/
│   ├── ui/                  # shadcn/ui Komponenten
│   ├── dashboard/           # Dashboard-spezifische Komponenten
│   ├── marketing/           # Marketing-Komponenten
│   ├── recipes/             # Recipe-Wizard Komponenten
│   └── settings/            # Settings-Formulare
├── hooks/
│   ├── use-recipe.ts
│   ├── use-team.ts
│   └── use-user.ts
├── lib/
│   ├── azure-openai.ts      # AI-Generierung
│   ├── legal-versions.ts    # Versionierung rechtlicher Dokumente
│   ├── lemonsqueezy.ts      # Payment-Integration
│   ├── recipes/index.ts     # Recipe-Definitionen (HARDCODED)
│   ├── supabase/
│   │   ├── client.ts        # Browser-Client
│   │   ├── middleware.ts    # Auth-Middleware
│   │   └── server.ts        # Server-Client + Service-Client
│   └── utils.ts
├── types/
│   ├── database.ts          # Supabase-Typen
│   ├── index.ts
│   └── recipes.ts           # Recipe-Typen
└── middleware.ts
```

---

## 2. Recipes-System

### 2.1 Recipe Interface

```typescript
// src/types/recipes.ts

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
```

### 2.2 Definierte Recipes

| ID | Name | Kategorie | Input-Felder | Status |
|----|------|-----------|--------------|--------|
| email-sachlich | E-Mail Antwort (sachlich) | kommunikation | original_email, recipient_type, key_message, next_step | aktiv |
| email-freundlich | E-Mail Antwort (freundlich) | kommunikation | original_email, recipient_type, key_message, tone | aktiv |
| absage | Absage formulieren | kommunikation | context, reason, relationship, future_contact | aktiv |
| followup | Follow-up schreiben | kommunikation | previous_context, goal, urgency | aktiv |
| rueckfragen | Rückfragen stellen | kommunikation | document_or_email, unclear_points, tone | aktiv |
| text-kuerzen | Text kürzen | texte | original_text, target_length, keep_points | aktiv |
| zusammenfassung | Zusammenfassung | texte | original_text, format, audience | aktiv |
| meeting-tasks | Meeting → Aufgaben | meetings | meeting_notes, participants, deadline_info | aktiv |
| handover | Übergabe / Handover | meetings | project_info, status, next_steps, recipient | aktiv |
| angebot | Angebot formulieren | sales | customer_request, products_services, conditions | aktiv |
| anfrage-quali | Anfrage qualifizieren | sales | inquiry, qualification_criteria | aktiv |
| reklamation | Reklamation beantworten | support | complaint, resolution, compensation | aktiv |

**Gesamt: 12 Recipes**

### 2.3 Recipe-Details

#### Recipe: email-sachlich
- **Name:** E-Mail Antwort (sachlich)
- **Beschreibung:** Professionelle, sachliche Antwort auf E-Mails
- **Kategorie:** kommunikation
- **Icon:** Mail
- **Geschätzte Zeit:** 2-3 Min
- **Input-Felder:**

| Key | Label | Typ | Required | Options |
|-----|-------|-----|----------|---------|
| original_email | Original-E-Mail | textarea | ✓ | – |
| recipient_type | An wen? | select | ✓ | kunde, lieferant, kollege, behoerde |
| key_message | Kernaussage | textarea | ✓ | – |
| next_step | Nächster Schritt | select | ✓ | zusagen, pruefen, ablehnen, rueckfrage, info |

- **Prompt-Template Platzhalter:**
  - `{{company_name}}` - Firmenname (aus company_profiles)
  - `{{industry}}` - Branche (aus company_profiles)
  - `{{description}}` - Beschreibung (aus company_profiles)
  - `{{anrede}}` - Anrede (aus company_policies)
  - `{{tonality}}` - Tonalität (aus company_policies)
  - `{{nogo_words}}` - Verbotene Wörter (aus company_policies)
  - `{{greeting}}` - Grußformel (aus company_policies)
  - `{{recipient_type}}` - User-Input
  - `{{next_step}}` - User-Input
  - `{{original_email}}` - User-Input
  - `{{key_message}}` - User-Input

- **Prompt-Template (Auszug):**
```
Du bist Mitarbeiter eines Unternehmens und schreibst eine professionelle E-Mail-Antwort.

UNTERNEHMENSPROFIL:
- Firma: {{company_name}}
- Branche: {{industry}}
- Beschreibung: {{description}}

KOMMUNIKATIONS-POLICY:
- Anrede: {{anrede}}
- Tonalität: {{tonality}}
- Vermeide diese Wörter: {{nogo_words}}
- Grußformel: {{greeting}}

KONTEXT:
- Empfänger-Typ: {{recipient_type}}
- Nächster Schritt: {{next_step}}

REGELN:
- Halte die Mail kurz und präzise (max. 150 Wörter)
...
```

#### Recipe: absage
- **Name:** Absage formulieren
- **Beschreibung:** Höfliche Absagen für Anfragen, Bewerbungen oder Angebote
- **Kategorie:** kommunikation
- **Icon:** XCircle
- **Geschätzte Zeit:** 2-3 Min
- **Input-Felder:**

| Key | Label | Typ | Required | Options |
|-----|-------|-----|----------|---------|
| context | Worum geht es? | textarea | ✓ | – |
| reason | Grund für Absage | textarea | ✗ | – |
| relationship | Beziehung zum Empfänger | select | ✓ | bewerber, kunde, lieferant, partner, sonstige |
| future_contact | Zukünftiger Kontakt? | select | ✓ | ja, nein, spaeter |

#### Recipe: text-kuerzen
- **Name:** Text kürzen
- **Beschreibung:** Lange Texte auf das Wesentliche reduzieren
- **Kategorie:** texte
- **Icon:** Scissors
- **Geschätzte Zeit:** 1-2 Min
- **Input-Felder:**

| Key | Label | Typ | Required | Options |
|-----|-------|-----|----------|---------|
| original_text | Original-Text | textarea | ✓ | – |
| target_length | Ziel-Länge | select | ✓ | 50, 30, tweet |
| keep_points | Was muss bleiben? | textarea | ✗ | – |

*(Weitere Recipes folgen demselben Muster)*

### 2.4 Recipe-Loading Mechanismus

- **Speicherort:** `/src/lib/recipes/index.ts`
- **Datenquelle:** Hardcoded TypeScript Array
- **Funktionen:**
  - `getRecipeById(id: string): Recipe | undefined`
  - `getRecipesByCategory(category): Recipe[]`
- **Kategorien:** `["kommunikation", "texte", "meetings", "sales", "support"]`

---

## 3. API-Routen

### 3.1 Übersicht

| Route | Methode | Zweck | Auth Required |
|-------|---------|-------|---------------|
| /api/ai | POST | Recipe ausführen | Ja |
| /api/settings/profile | GET | Firmenprofil laden | Ja |
| /api/settings/profile | PUT | Firmenprofil speichern | Ja (Admin) |
| /api/settings/policy | GET | Kommunikations-Policy laden | Ja |
| /api/settings/policy | PUT | Kommunikations-Policy speichern | Ja (Admin) |
| /api/team | GET | Team-Mitglieder laden | Ja |
| /api/team/invite | POST | Einladung senden | Ja (Admin) |
| /api/billing | GET | Abo-Status laden | Ja |
| /api/billing/portal | POST | Kundenportal-URL abrufen | Ja |
| /api/checkout | POST | Checkout starten | Ja |
| /api/webhooks/lemonsqueezy | POST | Payment Webhooks | Nein (Signatur) |

### 3.2 /api/ai - Detailanalyse

**Request-Schema:**
```typescript
{
  recipeId: string,
  inputs: Record<string, string>
}
```

**Response-Schema:**
```typescript
{
  output: string,
  tokensUsed: number
}
```

**Ablauf:**
1. Request validieren (Zod Schema)
2. Recipe laden via `getRecipeById(recipeId)`
3. User authentifizieren via Supabase
4. Team-ID des Users laden
5. Company Profile & Policy laden (falls Team vorhanden)
6. Prompt-Template mit Platzhaltern füllen:
   - Firmeninfo: company_name, industry, description
   - Policy: anrede, tonality, greeting, nogo_words
   - User-Inputs: alle Felder aus `inputs`
7. Azure OpenAI aufrufen
8. Usage Stats speichern (non-blocking)
9. Response zurückgeben

**Verwendete Daten aus DB:**
- `users.team_id` - Team-Zuordnung
- `company_profiles`: company_name, industry, description
- `company_policies`: anrede, tonality, greeting, nogo_words

### 3.3 /api/settings/profile

**GET Response:**
```typescript
{ profile: CompanyProfile | null }
```

**PUT Request:**
```typescript
{
  company_name: string,    // required
  industry?: string,
  description?: string,
  products?: string
}
```

**Berechtigungen:** Nur Admins können PUT

### 3.4 /api/settings/policy

**GET Response:**
```typescript
{ policy: CompanyPolicy | null }
```

**PUT Request:**
```typescript
{
  anrede?: "Sie" | "Du",
  tonality?: "formell" | "sachlich" | "locker",
  nogo_words?: string[],
  greeting?: string
}
```

**Berechtigungen:** Nur Admins können PUT

### 3.5 /api/team/invite

**POST Request:**
```typescript
{ email: string }
```

**Response:**
```typescript
{ success: true, inviteId: string }
```

**Ablauf:**
1. Prüfen ob User Admin ist
2. Prüfen ob Email bereits im Team
3. Prüfen ob bereits Einladung existiert
4. Token generieren (32 Bytes hex)
5. Einladung in DB speichern
6. TODO: Email senden (nicht implementiert)

### 3.6 /api/webhooks/lemonsqueezy

**Handled Events:**
- `subscription_created`
- `subscription_updated`
- `subscription_cancelled`
- `subscription_payment_failed`
- `subscription_resumed`
- `subscription_expired`

**Signatur-Validierung:** HMAC-SHA256

---

## 4. Dashboard-Seiten

### 4.1 Implementierte Seiten

| Route | Datei | Status | Beschreibung |
|-------|-------|--------|--------------|
| /dashboard | page.tsx | ✅ Fertig | Recipe-Übersicht mit Kategorie-Filter |
| /dashboard/recipes/[id] | page.tsx | ✅ Fertig | Recipe-Wizard für Ausführung |
| /dashboard/settings | page.tsx | ✅ Fertig | Redirect zu /profile |
| /dashboard/settings/profile | page.tsx | ✅ Fertig | Firmenprofil bearbeiten |
| /dashboard/settings/policy | page.tsx | ✅ Fertig | Kommunikations-Policy bearbeiten |
| /dashboard/settings/team | page.tsx | ✅ Fertig | Team-Mitglieder + Einladungen |
| /dashboard/settings/billing | page.tsx | ✅ Fertig | Abo-Status + Pricing Cards |

### 4.2 Placeholder/TODO Seiten

| Route | Datei | TODO-Kommentar |
|-------|-------|----------------|
| /dashboard/admin | page.tsx | `// Admin Dashboard - TODO: Implement` |
| /pricing | page.tsx | `// Pricing Page - TODO: Implement` |
| /invite/[token] | page.tsx | `// Team Invite Page - TODO: Implement` |

---

## 5. Komponenten

### 5.1 UI-Komponenten (shadcn/ui basiert)

Pfad: `/src/components/ui/`

- avatar.tsx
- badge.tsx
- button.tsx
- card.tsx
- dialog.tsx
- dropdown-menu.tsx
- input.tsx
- label.tsx
- logo.tsx
- select.tsx
- separator.tsx
- sheet.tsx
- sonner.tsx
- textarea.tsx

### 5.2 Dashboard-Komponenten

Pfad: `/src/components/dashboard/`

| Komponente | Beschreibung | Verwendet in |
|------------|--------------|--------------|
| header.tsx | Dashboard-Header | dashboard/layout.tsx |
| sidebar.tsx | Navigation-Sidebar | dashboard/layout.tsx |
| recipe-card.tsx | Recipe-Karte für Übersicht | dashboard/page.tsx |

### 5.3 Recipe-bezogene Komponenten

Pfad: `/src/components/recipes/`

| Komponente | Beschreibung | Verwendet in |
|------------|--------------|--------------|
| recipe-wizard.tsx | Haupt-Wizard für Recipe-Ausführung | recipes/[id]/page.tsx |
| recipe-output.tsx | Ausgabe-Anzeige nach Generierung | recipe-wizard.tsx |
| wizard-fields/textarea-field.tsx | Textarea-Input im Wizard | recipe-wizard.tsx |
| wizard-fields/select-field.tsx | Select-Input im Wizard | recipe-wizard.tsx |
| wizard-fields/radio-field.tsx | Radio-Input im Wizard | recipe-wizard.tsx |

### 5.4 Settings-Komponenten

Pfad: `/src/components/settings/`

| Komponente | Beschreibung | Verwendet in |
|------------|--------------|--------------|
| profile-form.tsx | Firmenprofil-Formular | settings/profile/page.tsx |
| policy-form.tsx | Policy-Formular | settings/policy/page.tsx |
| team-list.tsx | Team-Mitglieder-Liste | settings/team/page.tsx |
| invite-form.tsx | Einladungs-Formular | settings/team/page.tsx |
| subscription-status.tsx | Abo-Status-Anzeige | settings/billing/page.tsx |
| pricing-cards.tsx | Pricing-Karten | settings/billing/page.tsx |

### 5.5 Marketing-Komponenten

Pfad: `/src/components/marketing/`

- hero.tsx, reframe.tsx, solution-principle.tsx
- struktora-implementation.tsx, use-areas.tsx
- standard-definition.tsx, what-struktora-is-not.tsx
- how-it-works.tsx, target-audience.tsx
- management-benefits.tsx, practical-experience.tsx
- getting-started.tsx, final-cta.tsx
- transition-to-example.tsx, use-case-example.tsx
- navbar.tsx, footer.tsx
- pricing.tsx, pricing-cards.tsx, faq.tsx
- demo.tsx, cta.tsx, features.tsx, problem.tsx, solution.tsx, use-cases.tsx

### 5.6 Sonstige Komponenten

- `/src/components/CalendlyInlineClickToLoad.tsx` - DSGVO-konforme Calendly-Integration

---

## 6. Lib/Utils

### 6.1 Supabase

- `/lib/supabase/client.ts` - Browser-Client mit `createBrowserClient`
- `/lib/supabase/server.ts` - Server-Client + Service-Client (bypasses RLS)
- `/lib/supabase/middleware.ts` - Auth-Session-Refresh

### 6.2 Externe Services

#### Azure OpenAI (`/lib/azure-openai.ts`)
```typescript
export async function generateCompletion(prompt: string): Promise<CompletionResult>
```
- Client: `AzureOpenAI` aus `openai` Package
- Model: via `AZURE_OPENAI_DEPLOYMENT_NAME` env
- System-Prompt: Deutscher Geschäftskommunikations-Assistent
- Max Tokens: 1000
- Temperature: 0.7

#### LemonSqueezy (`/lib/lemonsqueezy.ts`)
- `createCheckout(options)` - Checkout-Session erstellen
- `getSubscription(subscriptionId)` - Abo abrufen
- `getCustomerPortalUrl(customerId)` - Portal-URL
- `getSubscriptionTierFromVariantId(variantId)` - Tier-Mapping
- `getVariantIdForTier(tier)` - Variant-ID Mapping
- `verifyWebhookSignature(payload, signature, secret)` - Webhook-Validierung
- `PLANS` - Plan-Konfiguration (Starter €49, Team €149, Business €399)

### 6.3 Sonstige

- `/lib/legal-versions.ts` - Versionsnummern für AGB, Datenschutz, AVV
- `/lib/utils.ts` - Utility-Funktionen (cn für Tailwind)

---

## 7. Datenbank-Schema (Supabase)

### 7.1 Tabellen

| Tabelle | Beschreibung |
|---------|--------------|
| teams | Firmen/Teams mit Abo-Status |
| company_profiles | Firmenprofile (1:1 zu teams) |
| company_policies | Kommunikations-Policies (1:1 zu teams) |
| users | Benutzer mit Team-Zuordnung |
| team_invites | Einladungen mit Token |
| usage_stats | Nutzungsstatistiken pro Recipe-Ausführung |
| user_consents | Zustimmungen zu rechtlichen Dokumenten |

### 7.2 Wichtige Felder

**teams:**
- subscription_status: "trial" | "active" | "cancelled" | "past_due"
- subscription_tier: "starter" | "team" | "business"
- lemon_squeezy_customer_id: string | null

**company_policies:**
- anrede: "Sie" | "Du"
- tonality: "formell" | "sachlich" | "locker"
- nogo_words: string[]
- greeting: string

**users:**
- role: "admin" | "member"

---

## 8. Erkenntnisse für Migration

### 8.1 Was wird gelöscht
- [ ] `/src/lib/recipes/index.ts` - Hardcoded Recipes Array
- [ ] Verweise auf `getRecipeById` in API-Route `/api/ai`
- [ ] Verweise auf `recipes` Array in Dashboard-Page

### 8.2 Was wird umgebaut
- [ ] `/api/ai` → Neuer Endpoint für Standard-Ausführung
- [ ] Recipe-Loading von Hardcoded → Datenbank
- [ ] Dashboard: Recipe-Übersicht → Standard-Übersicht
- [ ] Recipe-Wizard → Standard-Wizard

### 8.3 Was bleibt unverändert
- [x] UI-Komponenten (shadcn/ui)
- [x] Supabase-Client-Setup
- [x] Azure OpenAI Integration
- [x] LemonSqueezy Payment Integration
- [x] Auth-System (Login, Signup)
- [x] Settings-Seiten (Profile, Policy, Team, Billing)
- [x] Marketing-Seiten

### 8.4 Offene Fragen
- Team-Invite Flow ist nicht vollständig implementiert (Email fehlt)
- Admin-Dashboard ist Placeholder
- Pricing-Page ist Placeholder
- Keine Rate-Limiting auf /api/ai (nur Fehlerhandling für 429)

---

## 9. Zusammenfassung

| Bereich | Anzahl | Status |
|---------|--------|--------|
| Recipes (hardcoded) | 12 | Alle aktiv |
| API-Routen | 11 | Alle implementiert |
| Dashboard-Seiten | 7 | 6 fertig, 1 TODO |
| Marketing-Seiten | 10 | Alle fertig |
| Auth-Seiten | 3 | 2 fertig, 1 TODO |
| UI-Komponenten | 14 | shadcn/ui |
| Feature-Komponenten | ~25 | Implementiert |

