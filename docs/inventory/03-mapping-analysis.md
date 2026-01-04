# Mapping-Analyse: IST → SOLL
Stand: 03. Januar 2026

---

## 1. Executive Summary

### 1.1 Kern-Entscheidungen

| Entscheidung | Wert |
|--------------|------|
| **Recipes → Varianten** | Jedes Recipe wird zu einer Variante eines Standards |
| **Kategorien → Standard-Familien** | Die 5 Kategorien werden 1:1 zu Standard-Familien |
| **Gruppierung** | Ähnliche Recipes werden unter gemeinsamen Standards gruppiert |
| **Policy-Felder** | 4 bestehende Felder werden auf 12 Unternehmensvariablen erweitert |
| **Prompt-Templates** | 1:1 Übernahme, nur Platzhalter-Quellen ändern sich |

### 1.2 Zahlen-Übersicht

| Metrik | IST | SOLL |
|--------|-----|------|
| Kategorien / Standard-Familien | 5 | 5 |
| Recipes / Standards | 12 | 9 |
| – / Varianten | – | 12 |
| Policy-Felder / Unternehmensvariablen | 4 | 12 |
| Prompt-Templates | 12 | 12 (in standard_versions) |

---

## 2. Recipe → Standard/Variante Mapping

### 2.1 Mapping-Übersicht

| Recipe-ID | Recipe-Name | → Standard | → Variante | Begründung |
|-----------|-------------|------------|------------|------------|
| email-sachlich | E-Mail Antwort (sachlich) | **E-Mail beantworten** | Sachliche Antwort | Gleiche Aufgabe, andere Tonalität |
| email-freundlich | E-Mail Antwort (freundlich) | **E-Mail beantworten** | Freundliche Antwort | Gleiche Aufgabe, andere Tonalität |
| absage | Absage formulieren | **Absage formulieren** | Standard | Eigenständige Aufgabe |
| followup | Follow-up schreiben | **Follow-up** | Standard | Eigenständige Aufgabe |
| rueckfragen | Rückfragen stellen | **Rückfragen** | Standard | Eigenständige Aufgabe |
| text-kuerzen | Text kürzen | **Textbearbeitung** | Kürzen | Gleiche Basis-Aufgabe |
| zusammenfassung | Zusammenfassung | **Textbearbeitung** | Zusammenfassen | Gleiche Basis-Aufgabe |
| meeting-tasks | Meeting → Aufgaben | **Meeting-Dokumentation** | Aufgaben extrahieren | Gleiche Basis-Aufgabe |
| handover | Übergabe / Handover | **Meeting-Dokumentation** | Übergabe dokumentieren | Gleiche Basis-Aufgabe |
| angebot | Angebot formulieren | **Angebot** | Standard | Eigenständige Aufgabe |
| anfrage-quali | Anfrage qualifizieren | **Anfrage-Qualifizierung** | Standard | Eigenständige Aufgabe |
| reklamation | Reklamation beantworten | **Reklamation** | Standard | Eigenständige Aufgabe |

### 2.2 Resultierende Standard-Struktur

```
Standard-Familie: Kommunikation (kommunikation)
├── Standard: E-Mail beantworten (email-beantworten)
│   ├── Variante: Sachliche Antwort (email-sachlich)
│   └── Variante: Freundliche Antwort (email-freundlich)
├── Standard: Absage formulieren (absage)
│   └── Variante: Standard (standard)
├── Standard: Follow-up (followup)
│   └── Variante: Standard (standard)
└── Standard: Rückfragen (rueckfragen)
    └── Variante: Standard (standard)

Standard-Familie: Textverarbeitung (texte)
└── Standard: Textbearbeitung (textbearbeitung)
    ├── Variante: Kürzen (text-kuerzen)
    └── Variante: Zusammenfassen (zusammenfassung)

Standard-Familie: Meeting-Dokumentation (meetings)
└── Standard: Meeting-Dokumentation (meeting-doku)
    ├── Variante: Aufgaben extrahieren (meeting-tasks)
    └── Variante: Übergabe dokumentieren (handover)

Standard-Familie: Vertrieb (sales)
├── Standard: Angebot (angebot)
│   └── Variante: Standard (standard)
└── Standard: Anfrage-Qualifizierung (anfrage-quali)
    └── Variante: Standard (standard)

Standard-Familie: Kundenservice (support)
└── Standard: Reklamation (reklamation)
    └── Variante: Standard (standard)
```

### 2.3 Zusammenfassung

| Metrik | Wert |
|--------|------|
| Standard-Familien | 5 |
| Standards | 9 |
| Varianten | 12 |
| Standards mit mehreren Varianten | 3 |
| Standards mit nur 1 Variante | 6 |
| Recipes ohne Mapping | 0 |

---

## 3. Kategorie → Standard-Familie Mapping

| IST: Kategorie | SOLL: Standard-Familie | Slug | Icon |
|----------------|------------------------|------|------|
| kommunikation | Kommunikation | `kommunikation` | MessageSquare |
| texte | Textverarbeitung | `texte` | FileText |
| meetings | Meeting-Dokumentation | `meetings` | Calendar |
| sales | Vertrieb | `sales` | TrendingUp |
| support | Kundenservice | `support` | HeadphonesIcon |

**Entscheidung:** 1:1 Mapping, keine neuen Familien nötig.

---

## 4. Company Policies → Unternehmensvariablen Mapping

### 4.1 Bestehende Felder (IST)

| Feld | Typ | Werte | Verwendung in Prompt |
|------|-----|-------|---------------------|
| anrede | text | "Sie" \| "Du" | `{{anrede}}` |
| tonality | text | "formell" \| "sachlich" \| "locker" | `{{tonality}}` |
| nogo_words | text[] | Freitext-Array | `{{nogo_words}}` |
| greeting | text | Freitext | `{{greeting}}` |

### 4.2 Neue Unternehmensvariablen (SOLL) - 12 Variablen

| # | Variable | Typ | Werte | Default | IST-Entsprechung |
|---|----------|-----|-------|---------|-----------------|
| 1 | **tonality** | enum | formell, sachlich, freundlich, locker, empathisch | sachlich | ← tonality (erweitert) |
| 2 | **anrede** | enum | sie_formell, sie_hoeflich, du_formell, du_locker | sie_hoeflich | ← anrede (erweitert) |
| 3 | **technical_depth** | enum | niedrig, mittel, hoch, experte | mittel | NEU |
| 4 | **commitment_level** | enum | unverbindlich, standard, verbindlich, rechtlich_bindend | standard | NEU |
| 5 | **legal_caution** | enum | minimal, standard, erhoeht, maximal | standard | NEU |
| 6 | **documentation_level** | enum | minimal, standard, ausfuehrlich, vollstaendig | standard | NEU |
| 7 | **governance_strictness** | enum | locker, standard, streng, audit_ready | standard | NEU |
| 8 | **escalation_level** | enum | keine, info, warnung, eskalation | keine | NEU |
| 9 | **approval_logic** | enum | keine, optional, erforderlich, mehrstufig | keine | NEU |
| 10 | **sender_role** | enum | neutral, funktion, person, team | neutral | NEU |
| 11 | **customer_context** | enum | interessent, neukunde, bestandskunde, premium, kritisch | bestandskunde | NEU |
| 12 | **nogo_rules** | text[] | Freitext-Array | [] | ← nogo_words |

**Sonderfall greeting:**
- Wird als `custom_greeting` in den company_contexts gespeichert (nicht als Variable)
- Alternativ: Als 13. Variable mit Typ `text`

### 4.3 Erweiterte Enum-Werte im Detail

#### tonality (Tonalität)
```typescript
// IST
type Tonality = "formell" | "sachlich" | "locker";

// SOLL (erweitert)
type Tonality = "formell" | "sachlich" | "freundlich" | "locker" | "empathisch";
```

| Wert | Beschreibung | Mapping von IST |
|------|--------------|-----------------|
| formell | Sehr förmlich, Behörden-Stil | ← "formell" |
| sachlich | Neutral, professionell | ← "sachlich" |
| freundlich | Warmherzig aber professionell | NEU (zwischen sachlich/locker) |
| locker | Entspannt, kollegial | ← "locker" |
| empathisch | Verständnisvoll, einfühlsam | NEU (für Support) |

#### anrede (Anrede & Sprachform)
```typescript
// IST
type Anrede = "Sie" | "Du";

// SOLL (erweitert)
type Anrede = "sie_formell" | "sie_hoeflich" | "du_formell" | "du_locker";
```

| Wert | Beschreibung | Mapping von IST |
|------|--------------|-----------------|
| sie_formell | Sie, sehr formal | ← "Sie" (Kontext: Behörde) |
| sie_hoeflich | Sie, höflich-professionell | ← "Sie" (Standard) |
| du_formell | Du, aber professionell | NEU |
| du_locker | Du, entspannt | ← "Du" |

### 4.4 Variablen-Presets

**Preset 1: Standard (für die meisten Unternehmen)**
```json
{
  "name": "Standard",
  "slug": "standard",
  "values": {
    "tonality": "sachlich",
    "anrede": "sie_hoeflich",
    "technical_depth": "mittel",
    "commitment_level": "standard",
    "legal_caution": "standard",
    "documentation_level": "standard",
    "governance_strictness": "standard",
    "escalation_level": "keine",
    "approval_logic": "keine",
    "sender_role": "neutral",
    "customer_context": "bestandskunde",
    "nogo_rules": []
  }
}
```

**Preset 2: Reguliert (Pharma, Finanzen, Medizin)**
```json
{
  "name": "Reguliertes Umfeld",
  "slug": "reguliert",
  "values": {
    "tonality": "formell",
    "anrede": "sie_formell",
    "technical_depth": "hoch",
    "commitment_level": "verbindlich",
    "legal_caution": "erhoeht",
    "documentation_level": "vollstaendig",
    "governance_strictness": "audit_ready",
    "escalation_level": "info",
    "approval_logic": "erforderlich",
    "sender_role": "funktion",
    "customer_context": "bestandskunde",
    "nogo_rules": ["mündliche Zusagen", "ungefähre Angaben"]
  }
}
```

**Preset 3: Locker (Startups, Kreativbranche)**
```json
{
  "name": "Modern & Locker",
  "slug": "locker",
  "values": {
    "tonality": "freundlich",
    "anrede": "du_locker",
    "technical_depth": "niedrig",
    "commitment_level": "unverbindlich",
    "legal_caution": "minimal",
    "documentation_level": "minimal",
    "governance_strictness": "locker",
    "escalation_level": "keine",
    "approval_logic": "keine",
    "sender_role": "person",
    "customer_context": "bestandskunde",
    "nogo_rules": []
  }
}
```

---

## 5. Input-Felder Analyse

### 5.1 Alle Input-Felder pro Recipe

| Recipe | Feld-Key | Label | Typ | Required |
|--------|----------|-------|-----|----------|
| email-sachlich | original_email | Original-E-Mail | textarea | ✓ |
| email-sachlich | recipient_type | An wen? | select | ✓ |
| email-sachlich | key_message | Kernaussage | textarea | ✓ |
| email-sachlich | next_step | Nächster Schritt | select | ✓ |
| email-freundlich | original_email | Original-E-Mail | textarea | ✓ |
| email-freundlich | recipient_type | An wen? | select | ✓ |
| email-freundlich | key_message | Kernaussage | textarea | ✓ |
| email-freundlich | tone | Stimmung | select | ✓ |
| absage | context | Worum geht es? | textarea | ✓ |
| absage | reason | Grund für Absage | textarea | ✗ |
| absage | relationship | Beziehung zum Empfänger | select | ✓ |
| absage | future_contact | Zukünftiger Kontakt? | select | ✓ |
| followup | previous_context | Vorheriger Kontext | textarea | ✓ |
| followup | goal | Was möchtest du erreichen? | textarea | ✓ |
| followup | urgency | Dringlichkeit | select | ✓ |
| rueckfragen | document_or_email | Original-Dokument oder E-Mail | textarea | ✓ |
| rueckfragen | unclear_points | Unklare Punkte | textarea | ✓ |
| rueckfragen | tone | Tonalität | select | ✓ |
| text-kuerzen | original_text | Original-Text | textarea | ✓ |
| text-kuerzen | target_length | Ziel-Länge | select | ✓ |
| text-kuerzen | keep_points | Was muss bleiben? | textarea | ✗ |
| zusammenfassung | original_text | Zu zusammenfassender Text | textarea | ✓ |
| zusammenfassung | format | Format | select | ✓ |
| zusammenfassung | audience | Für wen? | select | ✓ |
| meeting-tasks | meeting_notes | Meeting-Notizen | textarea | ✓ |
| meeting-tasks | participants | Teilnehmer | textarea | ✗ |
| meeting-tasks | deadline_info | Deadline-Infos | textarea | ✗ |
| handover | project_info | Projekt/Aufgabe | textarea | ✓ |
| handover | status | Aktueller Status | textarea | ✓ |
| handover | next_steps | Nächste Schritte | textarea | ✓ |
| handover | recipient | Empfänger | textarea | ✗ |
| angebot | customer_request | Kundenanfrage | textarea | ✓ |
| angebot | products_services | Angebotene Leistung | textarea | ✓ |
| angebot | conditions | Konditionen | textarea | ✓ |
| anfrage-quali | inquiry | Kundenanfrage | textarea | ✓ |
| anfrage-quali | qualification_criteria | Qualifizierungskriterien | textarea | ✗ |
| reklamation | complaint | Beschwerde | textarea | ✓ |
| reklamation | resolution | Lösung | textarea | ✓ |
| reklamation | compensation | Entschädigung/Kulanz | textarea | ✗ |

### 5.2 Feld-Typen Verteilung

| Typ | Anzahl | Anteil |
|-----|--------|--------|
| textarea | 28 | 74% |
| select | 10 | 26% |
| radio | 0 | 0% |
| **Gesamt** | **38** | 100% |

### 5.3 Gemeinsame Felder (Kandidaten für Wiederverwendung)

| Feld-Key | Vorkommen | In Recipes |
|----------|-----------|------------|
| original_email | 2 | email-sachlich, email-freundlich |
| recipient_type | 2 | email-sachlich, email-freundlich |
| key_message | 2 | email-sachlich, email-freundlich |
| original_text | 2 | text-kuerzen, zusammenfassung |
| tone | 2 | email-freundlich, rueckfragen |

**Entscheidung:** Diese werden PRO VARIANTE in `input_fields` gespeichert (keine Wiederverwendung auf DB-Ebene, aber gleiche Struktur).

---

## 6. Prompt-Template Analyse

### 6.1 Verwendete Platzhalter

#### System-Platzhalter (aus Company-Daten)

| Platzhalter | IST-Quelle | SOLL-Quelle | Vorkommen |
|-------------|------------|-------------|-----------|
| `{{company_name}}` | company_profiles.company_name | company_contexts.company_name | 10 |
| `{{industry}}` | company_profiles.industry | company_contexts.industry | 4 |
| `{{description}}` | company_profiles.description | company_contexts.description | 3 |
| `{{anrede}}` | company_policies.anrede | company_variables.anrede | 11 |
| `{{tonality}}` | company_policies.tonality | company_variables.tonality | 7 |
| `{{greeting}}` | company_policies.greeting | company_contexts.custom_greeting | 11 |
| `{{nogo_words}}` | company_policies.nogo_words | company_variables.nogo_rules | 1 |

#### Input-Platzhalter (User-Eingaben)

Alle Input-Felder werden als `{{field_key}}` in den Templates verwendet.
Diese bleiben unverändert.

### 6.2 Template-Migration

**Änderungen:**
1. Platzhalter-Namen bleiben identisch
2. Quell-Tabellen ändern sich:
   - `company_profiles` → `company_contexts`
   - `company_policies` → `company_variables`
3. Prompt-Templates werden in `standard_versions.prompt_template` gespeichert

**Beispiel-Migration:**
```diff
// Logik in /api/execute (ehemals /api/ai)
- const profile = await getCompanyProfile(teamId);
- const policy = await getCompanyPolicy(teamId);
+ const context = await getCompanyContext(teamId);
+ const variables = await getCompanyVariables(teamId);

// Platzhalter-Ersetzung bleibt gleich:
prompt = prompt.replace(/\{\{company_name\}\}/g, context.company_name);
prompt = prompt.replace(/\{\{anrede\}\}/g, variables.anrede);
```

### 6.3 Neue Platzhalter (für erweiterte Variablen)

| Neue Variable | Platzhalter | Nutzung (optional) |
|---------------|-------------|-------------------|
| technical_depth | `{{technical_depth}}` | "Technische Tiefe: {{technical_depth}}" |
| commitment_level | `{{commitment_level}}` | In rechtlich sensitiven Templates |
| legal_caution | `{{legal_caution}}` | In Angebots-/Vertrags-Templates |
| documentation_level | `{{documentation_level}}` | In Handover-Templates |
| sender_role | `{{sender_role}}` | "Unterzeichne als: {{sender_role}}" |
| customer_context | `{{customer_context}}` | Ton anpassen an Kundenstatus |

**Entscheidung:** Neue Platzhalter werden NICHT in bestehende Templates eingefügt.
Nur bei zukünftigen neuen Varianten werden sie genutzt.

---

## 7. Detailliertes Standard-Mapping

### 7.1 Standard: E-Mail beantworten

```yaml
standard:
  slug: email-beantworten
  name: E-Mail beantworten
  family: kommunikation
  description: Professionelle Antworten auf eingehende E-Mails
  icon: Mail
  
  varianten:
    - slug: email-sachlich
      name: Sachliche Antwort
      description: Professionelle, sachliche Antwort auf E-Mails
      estimatedTime: "2-3 Min"
      fields: [original_email, recipient_type, key_message, next_step]
      promptTemplate: <aus Recipe übernommen>
      
    - slug: email-freundlich
      name: Freundliche Antwort
      description: Herzliche, freundliche Antwort auf E-Mails
      estimatedTime: "2-3 Min"
      fields: [original_email, recipient_type, key_message, tone]
      promptTemplate: <aus Recipe übernommen>
```

### 7.2 Standard: Textbearbeitung

```yaml
standard:
  slug: textbearbeitung
  name: Textbearbeitung
  family: texte
  description: Texte kürzen oder zusammenfassen
  icon: FileText
  
  varianten:
    - slug: text-kuerzen
      name: Kürzen
      description: Lange Texte auf das Wesentliche reduzieren
      estimatedTime: "1-2 Min"
      fields: [original_text, target_length, keep_points]
      promptTemplate: <aus Recipe übernommen>
      
    - slug: zusammenfassung
      name: Zusammenfassen
      description: Dokumente und Texte zusammenfassen
      estimatedTime: "2-3 Min"
      fields: [original_text, format, audience]
      promptTemplate: <aus Recipe übernommen>
```

### 7.3 Standard: Meeting-Dokumentation

```yaml
standard:
  slug: meeting-doku
  name: Meeting-Dokumentation
  family: meetings
  description: Meeting-Ergebnisse strukturiert dokumentieren
  icon: Calendar
  
  varianten:
    - slug: meeting-tasks
      name: Aufgaben extrahieren
      description: Aus Meeting-Notizen klare To-Dos extrahieren
      estimatedTime: "2-3 Min"
      fields: [meeting_notes, participants, deadline_info]
      promptTemplate: <aus Recipe übernommen>
      
    - slug: handover
      name: Übergabe dokumentieren
      description: Strukturierte Übergabe-Dokumentation erstellen
      estimatedTime: "3-5 Min"
      fields: [project_info, status, next_steps, recipient]
      promptTemplate: <aus Recipe übernommen>
```

---

## 8. Daten-Migration Plan

### 8.1 Was wird übernommen

| IST-Daten | SOLL-Tabelle | Transformation |
|-----------|--------------|----------------|
| teams.* | organizations + teams | 1 Team = 1 Organization + 1 Team |
| teams.name | organizations.name | Direkte Übernahme |
| teams.subscription_* | teams.* | Bleibt bei teams |
| users.* | users | + organization_id |
| company_profiles.* | company_contexts | Rename, gleiche Struktur |
| company_policies.anrede | company_variables | Wert-Mapping: "Sie"→"sie_hoeflich", "Du"→"du_locker" |
| company_policies.tonality | company_variables | Direkte Übernahme |
| company_policies.nogo_words | company_variables.nogo_rules | Rename |
| company_policies.greeting | company_contexts.custom_greeting | Verschieben |

### 8.2 Was wird verworfen

| Daten | Grund | Alternative |
|-------|-------|-------------|
| team_invites | Können neu erstellt werden | – |
| usage_stats | Wenig Daten, altes Schema | Neue executions-Tabelle |

### 8.3 Seed-Daten (neu erstellt)

| Tabelle | Inhalt | Anzahl |
|---------|--------|--------|
| standard_families | 5 Familien | 5 |
| standards | 9 Standards | 9 |
| standard_variants | 12 Varianten | 12 |
| standard_versions | 12 Versionen (v1 pro Variante) | 12 |
| input_fields | Alle Felder aller Varianten | 38 |
| company_variable_definitions | 12 Variablen-Definitionen | 12 |
| company_variable_presets | 3 Presets | 3 |

---

## 9. Migrations-Reihenfolge

### Phase 1: Neue Tabellen erstellen (leer)

```sql
-- Reihenfolge wegen Foreign Keys wichtig!
1. organizations
2. standard_families
3. standards
4. standard_variants
5. standard_versions
6. input_fields
7. company_variable_definitions
8. company_variable_presets
9. executions
10. audit_logs
11. entitlements
```

### Phase 2: Bestehende Tabellen erweitern

```sql
-- Teams und Users erweitern
ALTER TABLE teams ADD COLUMN organization_id UUID REFERENCES organizations(id);
ALTER TABLE users ADD COLUMN organization_id UUID REFERENCES organizations(id);
```

### Phase 3: Daten migrieren

```sql
-- 1. Organizations aus Teams erstellen
INSERT INTO organizations (id, name, slug)
SELECT id, name, lower(replace(name, ' ', '-'))
FROM teams;

-- 2. Teams mit organization_id updaten
UPDATE teams SET organization_id = id;

-- 3. Users mit organization_id updaten
UPDATE users u SET organization_id = (
  SELECT t.organization_id FROM teams t WHERE t.id = u.team_id
);

-- 4. company_profiles → company_contexts
INSERT INTO company_contexts (...)
SELECT ... FROM company_profiles;

-- 5. company_policies → company_variables
INSERT INTO company_variables (team_id, variable_key, value)
SELECT 
  team_id, 
  'anrede', 
  CASE anrede WHEN 'Sie' THEN 'sie_hoeflich' ELSE 'du_locker' END
FROM company_policies;

-- Analog für tonality, nogo_rules
```

### Phase 4: Seed-Daten einfügen

```sql
-- Standard-Familien, Standards, Varianten, Versionen, Input-Felder
-- Aus YAML/JSON Seed-Dateien
```

### Phase 5: Alte Tabellen löschen

```sql
-- Nach erfolgreicher Migration
DROP TABLE company_policies;
-- company_profiles bleibt als Backup oder wird zu company_contexts umbenannt
```

---

## 10. ID/Slug Konventionen

### 10.1 Standard-Familien

| Name | Slug |
|------|------|
| Kommunikation | `kommunikation` |
| Textverarbeitung | `texte` |
| Meeting-Dokumentation | `meetings` |
| Vertrieb | `sales` |
| Kundenservice | `support` |

### 10.2 Standards

| Name | Slug |
|------|------|
| E-Mail beantworten | `email-beantworten` |
| Absage formulieren | `absage` |
| Follow-up | `followup` |
| Rückfragen | `rueckfragen` |
| Textbearbeitung | `textbearbeitung` |
| Meeting-Dokumentation | `meeting-doku` |
| Angebot | `angebot` |
| Anfrage-Qualifizierung | `anfrage-quali` |
| Reklamation | `reklamation` |

### 10.3 Varianten

| Standard | Variante | Slug |
|----------|----------|------|
| email-beantworten | Sachliche Antwort | `email-sachlich` |
| email-beantworten | Freundliche Antwort | `email-freundlich` |
| absage | Standard | `standard` |
| followup | Standard | `standard` |
| rueckfragen | Standard | `standard` |
| textbearbeitung | Kürzen | `text-kuerzen` |
| textbearbeitung | Zusammenfassen | `zusammenfassung` |
| meeting-doku | Aufgaben extrahieren | `meeting-tasks` |
| meeting-doku | Übergabe dokumentieren | `handover` |
| angebot | Standard | `standard` |
| anfrage-quali | Standard | `standard` |
| reklamation | Standard | `standard` |

**Entscheidung:** Recipe-IDs werden als Varianten-Slugs beibehalten für Rückwärtskompatibilität.

---

## 11. Offene Entscheidungen

### 11.1 Zu klären

| # | Frage | Optionen | Empfehlung |
|---|-------|----------|------------|
| 1 | greeting-Feld wohin? | Variable / company_contexts / verwerfen | → company_contexts.custom_greeting |
| 2 | Alte usage_stats migrieren? | Ja / Nein | → Nein (Schema zu anders) |
| 3 | Recipe-URLs ändern? | /recipes/{id} → /standards/{s}/{v} | → Redirect einbauen |
| 4 | Variante "standard" benennen? | "Standard" / "Default" / Recipe-Name | → "Standard" |

### 11.2 Getroffene Annahmen

1. ✓ Alle 12 Recipes werden zu Varianten (keine werden verworfen)
2. ✓ Die 5 Kategorien werden 1:1 zu Standard-Familien
3. ✓ Einige Recipes sind eigenständige Standards mit nur 1 Variante
4. ✓ Prompt-Templates werden 1:1 übernommen
5. ✓ Recipe-Slugs werden als Varianten-Slugs beibehalten

---

## 12. Nächste Schritte

| # | Schritt | Output |
|---|---------|--------|
| 1 | Ziel-Schema definieren | `/docs/architecture/target-schema.sql` |
| 2 | Migration-SQL erstellen | `/supabase/migrations/003_*.sql` |
| 3 | Seed-Daten erstellen | `/supabase/seed/standards.json` |
| 4 | API umbauen | `/api/ai` → `/api/execute` |
| 5 | UI umbauen | Recipe-Wizard → Standard-Wizard |
| 6 | Redirects einrichten | `/recipes/{id}` → `/standards/{s}/{v}` |

---

## Anhang A: Vollständige Feld-Definitionen

### A.1 Select-Optionen pro Feld

#### recipient_type (email-sachlich)
```json
[
  { "value": "kunde", "label": "Kunde / Interessent" },
  { "value": "lieferant", "label": "Lieferant / Partner" },
  { "value": "kollege", "label": "Kollege (intern)" },
  { "value": "behoerde", "label": "Behörde" }
]
```

#### next_step (email-sachlich)
```json
[
  { "value": "zusagen", "label": "Ich bestätige / sage zu" },
  { "value": "pruefen", "label": "Ich muss erst prüfen" },
  { "value": "ablehnen", "label": "Ich lehne ab" },
  { "value": "rueckfrage", "label": "Ich brauche mehr Infos" },
  { "value": "info", "label": "Nur zur Info" }
]
```

#### tone (email-freundlich)
```json
[
  { "value": "dankbar", "label": "Dankbar" },
  { "value": "begeistert", "label": "Begeistert" },
  { "value": "verstaendnisvoll", "label": "Verständnisvoll" },
  { "value": "ermutigend", "label": "Ermutigend" }
]
```

#### relationship (absage)
```json
[
  { "value": "bewerber", "label": "Bewerber" },
  { "value": "kunde", "label": "Kunde" },
  { "value": "lieferant", "label": "Lieferant / Dienstleister" },
  { "value": "partner", "label": "Geschäftspartner" },
  { "value": "sonstige", "label": "Sonstige" }
]
```

#### future_contact (absage)
```json
[
  { "value": "ja", "label": "Tür offen halten" },
  { "value": "nein", "label": "Endgültige Absage" },
  { "value": "spaeter", "label": "Später wieder melden" }
]
```

#### urgency (followup)
```json
[
  { "value": "niedrig", "label": "Niedrig - Freundliche Erinnerung" },
  { "value": "mittel", "label": "Mittel - Zeitnah wichtig" },
  { "value": "hoch", "label": "Hoch - Deadline steht bevor" }
]
```

#### tone (rueckfragen)
```json
[
  { "value": "neutral", "label": "Neutral / Sachlich" },
  { "value": "freundlich", "label": "Freundlich / Kollegial" },
  { "value": "formell", "label": "Formell / Offiziell" }
]
```

#### target_length (text-kuerzen)
```json
[
  { "value": "50", "label": "~50% kürzer" },
  { "value": "30", "label": "~70% kürzer (nur das Wichtigste)" },
  { "value": "tweet", "label": "Tweet-Länge (~280 Zeichen)" }
]
```

#### format (zusammenfassung)
```json
[
  { "value": "bullets", "label": "Stichpunkte" },
  { "value": "paragraph", "label": "Fließtext" },
  { "value": "executive", "label": "Executive Summary" }
]
```

#### audience (zusammenfassung)
```json
[
  { "value": "chef", "label": "Chef / Management" },
  { "value": "team", "label": "Team / Kollegen" },
  { "value": "kunde", "label": "Kunde" },
  { "value": "ich", "label": "Für mich selbst" }
]
```

