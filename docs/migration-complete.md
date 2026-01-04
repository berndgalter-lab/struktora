# Struktora OS Migration - Abgeschlossen

**Datum:** 4. Januar 2026
**Version:** 1.0.0

## Zusammenfassung

Die Migration von "Recipes" zu "Struktora OS Standards" wurde erfolgreich abgeschlossen. Das neue System bietet:

- **Dynamische Standards** statt hardcodierter Recipes
- **12 Unternehmensvariablen** für granulare Kommunikationssteuerung
- **Entitlements-System** für Plan-basierte Feature-Gates
- **Versionierungs-Ready** Architektur

---

## Neue Datenbank-Struktur

### Neue Tabellen (in Seed-Dateien vorbereitet)

| Tabelle | Beschreibung |
|---------|--------------|
| `standard_families` | Gruppierung (5 System-Familien) |
| `standards` | Arbeitsstandards (9 System-Standards) |
| `standard_variants` | Varianten/Anlässe (12 System-Varianten) |
| `standard_versions` | Versionierung mit Prompt-Templates |
| `input_fields` | Dynamische Eingabefelder pro Version |
| `company_variable_definitions` | Schema für 12 Variablen |
| `company_variable_presets` | 3 System-Presets |

### Legacy-Kompatibilität

Die bestehenden Tabellen werden weiterhin unterstützt:
- `teams` - Unverändert
- `users` - Unverändert
- `company_profiles` - Für Firmenprofil
- `company_policies` - Für Anrede, Tonalität, No-Go Words
- `usage_stats` - Für Execution-Tracking

---

## Neue API-Endpoints

| Endpoint | Methode | Beschreibung |
|----------|---------|--------------|
| `/api/execute` | POST | Standard ausführen |
| `/api/standards` | GET | Alle Standards laden |
| `/api/standards/[variantId]` | GET | Variante mit Details |
| `/api/entitlements` | GET | Plan & Features |
| `/api/settings/variables` | GET/PUT | Company Variables |

---

## Neue UI-Routen

| Route | Beschreibung |
|-------|--------------|
| `/dashboard/standards` | Standards-Übersicht nach Familien |
| `/dashboard/standards/[variantId]` | Standard-Wizard |
| `/dashboard/settings/variables` | Kommunikations-Einstellungen |

---

## Standard-Familien & Varianten

### Kommunikation
- **E-Mail beantworten** → Sachlich, Freundlich
- **Absage formulieren** → Standard
- **Follow-up** → Standard
- **Rückfragen** → Standard

### Textverarbeitung
- **Textbearbeitung** → Kürzen, Zusammenfassen

### Meeting-Dokumentation
- **Meeting-Dokumentation** → Aufgaben extrahieren, Übergabe dokumentieren

### Vertrieb
- **Angebot** → Standard
- **Anfrage-Qualifizierung** → Standard

### Kundenservice
- **Reklamation** → Standard

---

## Entitlements-System

### Feature-Keys

| Feature | Beschreibung |
|---------|--------------|
| `custom_standards` | Eigene Standards erstellen |
| `versioning` | Versionierung |
| `approval_flow` | Freigabe-Workflows |
| `audit_log` | Audit-Logs |
| `audit_export` | Audit-Export |
| `teams` | Mehrere Teams |
| `family_kommunikation` | Familie "Kommunikation" |
| `family_texte` | Familie "Textverarbeitung" |
| `family_meetings` | Familie "Meeting-Dokumentation" |
| `family_sales` | Familie "Vertrieb" |
| `family_support` | Familie "Kundenservice" |

### Plan-Übersicht

| Plan | Familien | Custom Standards | Teams | Executions/Monat |
|------|----------|------------------|-------|------------------|
| Free | 1 | 0 | ❌ | 50 |
| Starter | 3 | 3 | ❌ | 200 |
| Team | Alle | 10 | ✅ | 1.000 |
| Business | Alle | ∞ | ✅ | 5.000 |
| Enterprise | Alle | ∞ | ✅ | ∞ |

---

## 12 Company Variables

| # | Key | Name | Typ |
|---|-----|------|-----|
| 1 | `tonality` | Tonalität | Enum |
| 2 | `anrede` | Anrede & Sprachform | Enum |
| 3 | `technical_depth` | Technische Detailtiefe | Enum |
| 4 | `commitment_level` | Verbindlichkeitsgrad | Enum |
| 5 | `legal_caution` | Rechtlicher Vorsichtsgrad | Enum |
| 6 | `documentation_level` | Dokumentationsgrad | Enum |
| 7 | `governance_strictness` | Governance-Strenge | Enum |
| 8 | `escalation_level` | Eskalationsniveau | Enum |
| 9 | `approval_logic` | Freigabelogik | Enum |
| 10 | `sender_role` | Rollen-/Absenderlogik | Enum |
| 11 | `customer_context` | Kunden-/Kontextstatus | Enum |
| 12 | `nogo_rules` | No-Go Begriffe | Array |

### Presets

| Preset | Beschreibung |
|--------|--------------|
| **Standard** | Ausgewogen für die meisten Unternehmen |
| **Reguliertes Umfeld** | Pharma, Finanzen, Medizin - strenge Compliance |
| **Modern & Locker** | Startups, Kreativbranche - informell |

---

## Gelöschte Dateien

| Pfad | Beschreibung |
|------|--------------|
| `/src/lib/recipes/` | Alte Recipe-Definitionen |
| `/src/components/recipes/` | Alte Recipe-Komponenten |
| `/src/app/api/ai/` | Alte AI-Route |
| `/src/app/dashboard/recipes/` | Alte Recipe-Seiten |
| `/src/types/recipes.ts` | Alte Typen |
| `/src/hooks/use-recipe.ts` | Alter Hook |
| `/src/components/dashboard/recipe-card.tsx` | Alte Karte |

---

## Neue Dateien

### Lib

```
/src/lib/
├── entitlements/
│   ├── constants.ts    # Plan-Definitionen
│   ├── gates.ts        # Feature-Gates
│   └── index.ts        # Lade-Logik
└── standards/
    ├── index.ts        # Standards-Service
    ├── template.ts     # Template-Engine
    └── variables.ts    # Variables-Service
```

### Components

```
/src/components/
├── entitlements/
│   ├── feature-gate.tsx
│   ├── upgrade-prompt.tsx
│   ├── usage-indicator.tsx
│   └── index.ts
└── standards/
    ├── family-section.tsx
    ├── standard-card.tsx
    ├── standard-wizard.tsx
    ├── wizard-fields/
    │   ├── select-field.tsx
    │   ├── text-field.tsx
    │   ├── textarea-field.tsx
    │   └── index.ts
    └── index.ts
```

### Types

```
/src/types/
├── enums.ts           # Alle Enum-Typen
├── domain.ts          # Domain-Interfaces
├── standards.ts       # Re-Exports
└── index.ts           # Zentrale Exports
```

### Hooks

```
/src/hooks/
├── use-entitlements.ts
├── use-standards.ts
├── use-user.ts
└── index.ts
```

---

## Testing-Checkliste

### Authentifizierung
- [ ] Login funktioniert
- [ ] Logout funktioniert
- [ ] Session bleibt erhalten

### Standards
- [ ] `/dashboard/standards` zeigt alle Familien
- [ ] Standards sind nach Familien gruppiert
- [ ] Varianten sind klickbar
- [ ] Standard-Wizard lädt Felder korrekt
- [ ] Pflichtfelder werden validiert
- [ ] AI-Generierung funktioniert
- [ ] Ergebnis wird angezeigt
- [ ] Kopieren funktioniert
- [ ] Neu generieren funktioniert

### Entitlements
- [ ] Entitlements werden geladen
- [ ] Gesperrte Familien zeigen Upgrade-Prompt
- [ ] Usage-Indicator zeigt verbleibende Executions
- [ ] Execution-Limit wird im Wizard geprüft

### Settings
- [ ] `/dashboard/settings/variables` ist erreichbar
- [ ] Alle 12 Variablen werden angezeigt
- [ ] Presets können angewendet werden
- [ ] Variablen-Änderungen werden gespeichert
- [ ] Success-Feedback erscheint

### Navigation
- [ ] Dashboard-Sidebar zeigt "Standards"
- [ ] Settings-Tabs enthalten "Variablen"
- [ ] Alle Links funktionieren

---

## Bekannte Limitierungen

1. **Datenbank-Tabellen:** Die neuen Tabellen (standards, variants, etc.) sind als Seed-Dateien vorbereitet, aber noch nicht in Supabase ausgeführt
2. **Versionierung nicht aktiv:** UI für Versions-Management fehlt
3. **Approval-Flow nicht aktiv:** Freigabe-Workflow nicht implementiert
4. **Audit-Log UI fehlt:** Nur Datenbank-Struktur vorbereitet
5. **Custom Standards:** UI zum Erstellen eigener Standards fehlt
6. **Organization-Hierarchie:** Noch nicht vollständig implementiert

---

## Nächste Schritte

### Kurzfristig (erforderlich)
1. Seed-Daten in Supabase ausführen
2. End-to-End-Tests durchführen
3. Production-Deployment

### Mittelfristig (optional)
1. Versions-Management UI
2. Audit-Log Viewer
3. Custom Standards Editor
4. Team-Management erweitern

### Langfristig (Roadmap)
1. Multi-Organization Support
2. Approval-Workflows
3. API für externe Integrationen
4. SSO/SAML

---

## Seed-Dateien

Die folgenden Seed-Dateien müssen in Supabase ausgeführt werden:

1. `/supabase/seed/01-variable-definitions-and-presets.sql`
   - Company Variable Definitions (12 Variablen)
   - Company Variable Presets (3 Presets)
   - Standard Families (5 Familien)

2. `/supabase/seed/standards-seed.sql`
   - Standards (9 Standards)
   - Standard Variants (12 Varianten)
   - Standard Versions (12 Versionen mit Prompt-Templates)
   - Input Fields (38 Felder)

---

## Kontakt

Bei Fragen zur Migration:
- Repository: struktora
- Dokumentation: `/docs/inventory/`

