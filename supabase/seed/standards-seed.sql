-- ============================================================================
-- STRUKTORA OS - SEED DATA
-- Teil 2: Standards, Varianten, Versionen, Input-Felder
-- Generiert aus /src/lib/recipes/index.ts
-- ============================================================================

-- UUID Schema (alle hex-konform):
-- Families:  f1000000-0000-0000-0000-00000000000X
-- Standards: a1000000-0000-0000-0000-00000000000X
-- Variants:  b1000000-0000-0000-0000-00000000000X
-- Versions:  c1000000-0000-0000-0000-00000000000X

-- ============================================================================
-- 1. STANDARDS (System-Standards, organization_id = NULL)
-- ============================================================================

-- Familie: Kommunikation (f1000000-0000-0000-0000-000000000001)
INSERT INTO standards (id, organization_id, family_id, slug, name, description, icon, status, sort_order, is_system)
VALUES
  -- E-Mail beantworten (2 Varianten: sachlich, freundlich)
  ('a1000000-0000-0000-0000-000000000001', NULL, 'f1000000-0000-0000-0000-000000000001', 
   'email-beantworten', 'E-Mail beantworten', 'Professionelle Antworten auf eingehende E-Mails', 
   'Mail', 'active', 1, TRUE),
  
  -- Absage formulieren (1 Variante)
  ('a1000000-0000-0000-0000-000000000002', NULL, 'f1000000-0000-0000-0000-000000000001',
   'absage', 'Absage formulieren', 'Höfliche Absagen für Anfragen, Bewerbungen oder Angebote',
   'XCircle', 'active', 2, TRUE),
  
  -- Follow-up (1 Variante)
  ('a1000000-0000-0000-0000-000000000003', NULL, 'f1000000-0000-0000-0000-000000000001',
   'followup', 'Follow-up', 'Nachfass-E-Mails für ausstehende Antworten',
   'RefreshCw', 'active', 3, TRUE),
  
  -- Rückfragen (1 Variante)
  ('a1000000-0000-0000-0000-000000000004', NULL, 'f1000000-0000-0000-0000-000000000001',
   'rueckfragen', 'Rückfragen', 'Klärende Fragen professionell formulieren',
   'HelpCircle', 'active', 4, TRUE),

-- Familie: Textverarbeitung (f1000000-0000-0000-0000-000000000002)
  -- Textbearbeitung (2 Varianten: kürzen, zusammenfassen)
  ('a1000000-0000-0000-0000-000000000005', NULL, 'f1000000-0000-0000-0000-000000000002',
   'textbearbeitung', 'Textbearbeitung', 'Texte kürzen oder zusammenfassen',
   'FileText', 'active', 1, TRUE),

-- Familie: Meeting-Dokumentation (f1000000-0000-0000-0000-000000000003)
  -- Meeting-Dokumentation (2 Varianten: tasks, handover)
  ('a1000000-0000-0000-0000-000000000006', NULL, 'f1000000-0000-0000-0000-000000000003',
   'meeting-doku', 'Meeting-Dokumentation', 'Meeting-Ergebnisse strukturiert dokumentieren',
   'Calendar', 'active', 1, TRUE),

-- Familie: Vertrieb (f1000000-0000-0000-0000-000000000004)
  -- Angebot (1 Variante)
  ('a1000000-0000-0000-0000-000000000007', NULL, 'f1000000-0000-0000-0000-000000000004',
   'angebot', 'Angebot', 'Überzeugende Angebotstexte schreiben',
   'FileCheck', 'active', 1, TRUE),
  
  -- Anfrage-Qualifizierung (1 Variante)
  ('a1000000-0000-0000-0000-000000000008', NULL, 'f1000000-0000-0000-0000-000000000004',
   'anfrage-quali', 'Anfrage-Qualifizierung', 'Kundenanfragen analysieren und bewerten',
   'Search', 'active', 2, TRUE),

-- Familie: Kundenservice (f1000000-0000-0000-0000-000000000005)
  -- Reklamation (1 Variante)
  ('a1000000-0000-0000-0000-000000000009', NULL, 'f1000000-0000-0000-0000-000000000005',
   'reklamation', 'Reklamation', 'Professionelle Antworten auf Beschwerden',
   'MessageCircle', 'active', 1, TRUE)

ON CONFLICT (organization_id, slug) 
WHERE organization_id IS NULL
DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  sort_order = EXCLUDED.sort_order;


-- ============================================================================
-- 2. STANDARD VARIANTS
-- ============================================================================

INSERT INTO standard_variants (id, standard_id, slug, name, description, estimated_time, sort_order, is_default, is_system)
VALUES
  -- E-Mail beantworten (a1000000-0000-0000-0000-000000000001)
  ('b1000000-0000-0000-0000-000000000001', 'a1000000-0000-0000-0000-000000000001',
   'sachlich', 'Sachliche Antwort', 'Professionelle, sachliche Antwort auf E-Mails', '2-3 Min', 1, TRUE, TRUE),
  ('b1000000-0000-0000-0000-000000000002', 'a1000000-0000-0000-0000-000000000001',
   'freundlich', 'Freundliche Antwort', 'Herzliche, freundliche Antwort auf E-Mails', '2-3 Min', 2, FALSE, TRUE),

  -- Absage (a1000000-0000-0000-0000-000000000002)
  ('b1000000-0000-0000-0000-000000000003', 'a1000000-0000-0000-0000-000000000002',
   'standard', 'Standard', 'Höfliche Absagen für Anfragen, Bewerbungen oder Angebote', '2-3 Min', 1, TRUE, TRUE),

  -- Follow-up (a1000000-0000-0000-0000-000000000003)
  ('b1000000-0000-0000-0000-000000000004', 'a1000000-0000-0000-0000-000000000003',
   'standard', 'Standard', 'Nachfass-E-Mails für ausstehende Antworten', '2-3 Min', 1, TRUE, TRUE),

  -- Rückfragen (a1000000-0000-0000-0000-000000000004)
  ('b1000000-0000-0000-0000-000000000005', 'a1000000-0000-0000-0000-000000000004',
   'standard', 'Standard', 'Klärende Fragen professionell formulieren', '2-3 Min', 1, TRUE, TRUE),

  -- Textbearbeitung (a1000000-0000-0000-0000-000000000005)
  ('b1000000-0000-0000-0000-000000000006', 'a1000000-0000-0000-0000-000000000005',
   'kuerzen', 'Kürzen', 'Lange Texte auf das Wesentliche reduzieren', '1-2 Min', 1, TRUE, TRUE),
  ('b1000000-0000-0000-0000-000000000007', 'a1000000-0000-0000-0000-000000000005',
   'zusammenfassung', 'Zusammenfassen', 'Dokumente und Texte zusammenfassen', '2-3 Min', 2, FALSE, TRUE),

  -- Meeting-Dokumentation (a1000000-0000-0000-0000-000000000006)
  ('b1000000-0000-0000-0000-000000000008', 'a1000000-0000-0000-0000-000000000006',
   'tasks', 'Aufgaben extrahieren', 'Aus Meeting-Notizen klare To-Dos extrahieren', '2-3 Min', 1, TRUE, TRUE),
  ('b1000000-0000-0000-0000-000000000009', 'a1000000-0000-0000-0000-000000000006',
   'handover', 'Übergabe dokumentieren', 'Strukturierte Übergabe-Dokumentation erstellen', '3-5 Min', 2, FALSE, TRUE),

  -- Angebot (a1000000-0000-0000-0000-000000000007)
  ('b1000000-0000-0000-0000-00000000000a', 'a1000000-0000-0000-0000-000000000007',
   'standard', 'Standard', 'Überzeugende Angebotstexte schreiben', '3-5 Min', 1, TRUE, TRUE),

  -- Anfrage-Qualifizierung (a1000000-0000-0000-0000-000000000008)
  ('b1000000-0000-0000-0000-00000000000b', 'a1000000-0000-0000-0000-000000000008',
   'standard', 'Standard', 'Kundenanfragen analysieren und bewerten', '2-3 Min', 1, TRUE, TRUE),

  -- Reklamation (a1000000-0000-0000-0000-000000000009)
  ('b1000000-0000-0000-0000-00000000000c', 'a1000000-0000-0000-0000-000000000009',
   'standard', 'Standard', 'Professionelle Antworten auf Beschwerden', '3-5 Min', 1, TRUE, TRUE)

ON CONFLICT (standard_id, slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  estimated_time = EXCLUDED.estimated_time,
  sort_order = EXCLUDED.sort_order;


-- ============================================================================
-- 3. STANDARD VERSIONS (mit Prompt-Templates aus Recipes)
-- ============================================================================

-- email-sachlich (b1000000-0000-0000-0000-000000000001)
INSERT INTO standard_versions (id, variant_id, version_number, prompt_template, is_current)
VALUES
  ('c1000000-0000-0000-0000-000000000001', 'b1000000-0000-0000-0000-000000000001', 1,
   $$Du bist Mitarbeiter eines Unternehmens und schreibst eine professionelle E-Mail-Antwort.

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
- Sachlich und professionell
- Keine Marketing-Floskeln
- Komm schnell zum Punkt

ORIGINAL-E-MAIL:
"""
{{original_email}}
"""

KERNAUSSAGE:
"""
{{key_message}}
"""

Schreibe die Antwort-E-Mail. Beginne direkt mit der Anrede.$$,
   TRUE)
ON CONFLICT (variant_id, version_number) DO NOTHING;

-- email-freundlich (b1000000-0000-0000-0000-000000000002)
INSERT INTO standard_versions (id, variant_id, version_number, prompt_template, is_current)
VALUES
  ('c1000000-0000-0000-0000-000000000002', 'b1000000-0000-0000-0000-000000000002', 1,
   $$Du bist Mitarbeiter eines Unternehmens und schreibst eine freundliche, herzliche E-Mail-Antwort.

UNTERNEHMENSPROFIL:
- Firma: {{company_name}}
- Branche: {{industry}}

KOMMUNIKATIONS-POLICY:
- Anrede: {{anrede}}
- Tonalität: Freundlich und herzlich
- Grußformel: {{greeting}}

KONTEXT:
- Empfänger-Typ: {{recipient_type}}
- Gewünschte Stimmung: {{tone}}

REGELN:
- Freundlich und warmherzig
- Persönliche Note
- Positiv formuliert
- Max. 150 Wörter

ORIGINAL-E-MAIL:
"""
{{original_email}}
"""

KERNAUSSAGE:
"""
{{key_message}}
"""

Schreibe die freundliche Antwort-E-Mail. Beginne direkt mit der Anrede.$$,
   TRUE)
ON CONFLICT (variant_id, version_number) DO NOTHING;

-- absage (b1000000-0000-0000-0000-000000000003)
INSERT INTO standard_versions (id, variant_id, version_number, prompt_template, is_current)
VALUES
  ('c1000000-0000-0000-0000-000000000003', 'b1000000-0000-0000-0000-000000000003', 1,
   $$Du formulierst eine höfliche, respektvolle Absage.

UNTERNEHMENSPROFIL:
- Firma: {{company_name}}

KOMMUNIKATIONS-POLICY:
- Anrede: {{anrede}}
- Tonalität: {{tonality}}
- Grußformel: {{greeting}}

KONTEXT:
- Beziehung: {{relationship}}
- Zukünftiger Kontakt: {{future_contact}}

REGELN:
- Respektvoll und wertschätzend
- Klar aber nicht verletzend
- Wenn gewünscht, Tür für Zukunft offen halten
- Max. 120 Wörter

SITUATION:
"""
{{context}}
"""

GRUND (falls angegeben):
"""
{{reason}}
"""

Schreibe die Absage-E-Mail. Beginne direkt mit der Anrede.$$,
   TRUE)
ON CONFLICT (variant_id, version_number) DO NOTHING;

-- followup (b1000000-0000-0000-0000-000000000004)
INSERT INTO standard_versions (id, variant_id, version_number, prompt_template, is_current)
VALUES
  ('c1000000-0000-0000-0000-000000000004', 'b1000000-0000-0000-0000-000000000004', 1,
   $$Du schreibst ein professionelles Follow-up.

UNTERNEHMENSPROFIL:
- Firma: {{company_name}}

KOMMUNIKATIONS-POLICY:
- Anrede: {{anrede}}
- Tonalität: {{tonality}}
- Grußformel: {{greeting}}

DRINGLICHKEIT: {{urgency}}

REGELN:
- Nicht drängend, aber bestimmt
- Kontext kurz wiederholen
- Klare Handlungsaufforderung
- Max. 100 Wörter

VORHERIGER KONTEXT:
"""
{{previous_context}}
"""

ZIEL:
"""
{{goal}}
"""

Schreibe das Follow-up. Beginne direkt mit der Anrede.$$,
   TRUE)
ON CONFLICT (variant_id, version_number) DO NOTHING;

-- rueckfragen (b1000000-0000-0000-0000-000000000005)
INSERT INTO standard_versions (id, variant_id, version_number, prompt_template, is_current)
VALUES
  ('c1000000-0000-0000-0000-000000000005', 'b1000000-0000-0000-0000-000000000005', 1,
   $$Du formulierst professionelle Rückfragen.

UNTERNEHMENSPROFIL:
- Firma: {{company_name}}

KOMMUNIKATIONS-POLICY:
- Anrede: {{anrede}}
- Grußformel: {{greeting}}

TONALITÄT: {{tone}}

REGELN:
- Fragen klar und präzise formulieren
- Nummeriere mehrere Fragen
- Zeige, dass du den Kontext verstanden hast
- Max. 150 Wörter

ORIGINAL-TEXT:
"""
{{document_or_email}}
"""

UNKLARE PUNKTE:
"""
{{unclear_points}}
"""

Schreibe die E-Mail mit den Rückfragen. Beginne direkt mit der Anrede.$$,
   TRUE)
ON CONFLICT (variant_id, version_number) DO NOTHING;

-- text-kuerzen (b1000000-0000-0000-0000-000000000006)
INSERT INTO standard_versions (id, variant_id, version_number, prompt_template, is_current)
VALUES
  ('c1000000-0000-0000-0000-000000000006', 'b1000000-0000-0000-0000-000000000006', 1,
   $$Du kürzt Texte auf das Wesentliche.

ZIEL-LÄNGE: {{target_length}}

REGELN:
- Kernaussagen erhalten
- Füllwörter und Redundanzen entfernen
- Lesbarkeit erhalten
- Keine wichtigen Informationen verlieren

ORIGINAL-TEXT:
"""
{{original_text}}
"""

WICHTIGE PUNKTE (falls angegeben):
"""
{{keep_points}}
"""

Gib den gekürzten Text aus. Keine Erklärungen, nur der gekürzte Text.$$,
   TRUE)
ON CONFLICT (variant_id, version_number) DO NOTHING;

-- zusammenfassung (b1000000-0000-0000-0000-000000000007)
INSERT INTO standard_versions (id, variant_id, version_number, prompt_template, is_current)
VALUES
  ('c1000000-0000-0000-0000-000000000007', 'b1000000-0000-0000-0000-000000000007', 1,
   $$Du erstellst eine Zusammenfassung.

FORMAT: {{format}}
ZIELGRUPPE: {{audience}}

REGELN:
- Alle wichtigen Punkte erfassen
- Klar strukturiert
- Auf Zielgruppe angepasst
- Bei "Executive Summary": Max. 3-4 Sätze

ORIGINAL-TEXT:
"""
{{original_text}}
"""

Erstelle die Zusammenfassung. Keine Einleitung, direkt die Zusammenfassung.$$,
   TRUE)
ON CONFLICT (variant_id, version_number) DO NOTHING;

-- meeting-tasks (b1000000-0000-0000-0000-000000000008)
INSERT INTO standard_versions (id, variant_id, version_number, prompt_template, is_current)
VALUES
  ('c1000000-0000-0000-0000-000000000008', 'b1000000-0000-0000-0000-000000000008', 1,
   $$Du extrahierst Aufgaben aus Meeting-Notizen.

REGELN:
- Klare, aktionsorientierte Aufgaben
- Wenn möglich: Verantwortlicher + Deadline
- Format: "[ ] Aufgabe - @Verantwortlicher - bis Datum"
- Priorisiere nach Wichtigkeit

TEILNEHMER:
{{participants}}

DEADLINE-INFOS:
{{deadline_info}}

MEETING-NOTIZEN:
"""
{{meeting_notes}}
"""

Erstelle die Aufgabenliste. Nur die Aufgaben, keine Einleitung.$$,
   TRUE)
ON CONFLICT (variant_id, version_number) DO NOTHING;

-- handover (b1000000-0000-0000-0000-000000000009)
INSERT INTO standard_versions (id, variant_id, version_number, prompt_template, is_current)
VALUES
  ('c1000000-0000-0000-0000-000000000009', 'b1000000-0000-0000-0000-000000000009', 1,
   $$Du erstellst eine strukturierte Übergabe-Dokumentation.

UNTERNEHMENSPROFIL:
- Firma: {{company_name}}

REGELN:
- Klar strukturiert mit Überschriften
- Alle wichtigen Infos enthalten
- Handlungsfähig für den Empfänger
- Keine Insider-Begriffe ohne Erklärung

PROJEKT/AUFGABE:
"""
{{project_info}}
"""

AKTUELLER STATUS:
"""
{{status}}
"""

NÄCHSTE SCHRITTE:
"""
{{next_steps}}
"""

EMPFÄNGER: {{recipient}}

Erstelle die Übergabe-Dokumentation mit den Abschnitten:
1. Überblick
2. Status
3. Offene Punkte
4. Nächste Schritte
5. Wichtige Kontakte/Ressourcen (falls relevant)$$,
   TRUE)
ON CONFLICT (variant_id, version_number) DO NOTHING;

-- angebot (b1000000-0000-0000-0000-00000000000a)
INSERT INTO standard_versions (id, variant_id, version_number, prompt_template, is_current)
VALUES
  ('c1000000-0000-0000-0000-00000000000a', 'b1000000-0000-0000-0000-00000000000a', 1,
   $$Du schreibst einen überzeugenden Angebotstext.

UNTERNEHMENSPROFIL:
- Firma: {{company_name}}
- Branche: {{industry}}
- Beschreibung: {{description}}

KOMMUNIKATIONS-POLICY:
- Anrede: {{anrede}}
- Tonalität: {{tonality}}
- Grußformel: {{greeting}}

REGELN:
- Kundennutzen betonen
- Professionell aber nicht übertrieben
- Klare Struktur
- Call-to-Action am Ende

KUNDENANFRAGE:
"""
{{customer_request}}
"""

ANGEBOTENE LEISTUNG:
"""
{{products_services}}
"""

KONDITIONEN:
"""
{{conditions}}
"""

Schreibe den Angebotstext. Beginne mit der Anrede.$$,
   TRUE)
ON CONFLICT (variant_id, version_number) DO NOTHING;

-- anfrage-quali (b1000000-0000-0000-0000-00000000000b)
INSERT INTO standard_versions (id, variant_id, version_number, prompt_template, is_current)
VALUES
  ('c1000000-0000-0000-0000-00000000000b', 'b1000000-0000-0000-0000-00000000000b', 1,
   $$Du analysierst und qualifizierst eine Kundenanfrage.

UNTERNEHMENSPROFIL:
- Firma: {{company_name}}
- Branche: {{industry}}
- Angebotene Produkte/Services: {{description}}

QUALIFIZIERUNGSKRITERIEN (falls angegeben):
{{qualification_criteria}}

ANALYSIERE:
1. Passt der Kunde zu unserem Angebot?
2. Wie konkret ist die Anfrage?
3. Welche Infos fehlen noch?
4. Empfohlene nächste Schritte

KUNDENANFRAGE:
"""
{{inquiry}}
"""

Erstelle die Analyse mit:
- Bewertung (Heiß/Warm/Kalt)
- Zusammenfassung des Bedarfs
- Fehlende Informationen
- Empfohlene nächste Schritte$$,
   TRUE)
ON CONFLICT (variant_id, version_number) DO NOTHING;

-- reklamation (b1000000-0000-0000-0000-00000000000c)
INSERT INTO standard_versions (id, variant_id, version_number, prompt_template, is_current)
VALUES
  ('c1000000-0000-0000-0000-00000000000c', 'b1000000-0000-0000-0000-00000000000c', 1,
   $$Du beantwortest eine Kundenbeschwerde professionell.

UNTERNEHMENSPROFIL:
- Firma: {{company_name}}

KOMMUNIKATIONS-POLICY:
- Anrede: {{anrede}}
- Tonalität: {{tonality}}
- Grußformel: {{greeting}}

REGELN:
- Verständnis zeigen
- Nicht defensiv
- Lösung in den Vordergrund
- Kundenbeziehung erhalten

BESCHWERDE:
"""
{{complaint}}
"""

LÖSUNG:
"""
{{resolution}}
"""

ENTSCHÄDIGUNG (falls angegeben):
"""
{{compensation}}
"""

Schreibe die Antwort auf die Reklamation. Beginne mit der Anrede.$$,
   TRUE)
ON CONFLICT (variant_id, version_number) DO NOTHING;


-- ============================================================================
-- 4. INPUT FIELDS
-- ============================================================================

-- email-sachlich (Version c1000000-0000-0000-0000-000000000001)
INSERT INTO input_fields (version_id, field_key, label, type, placeholder, is_required, options, sort_order)
VALUES
  ('c1000000-0000-0000-0000-000000000001', 'original_email', 'Original-E-Mail', 'textarea', 
   'Füge die E-Mail ein, auf die du antworten möchtest...', TRUE, NULL, 1),
  ('c1000000-0000-0000-0000-000000000001', 'recipient_type', 'An wen?', 'select', NULL, TRUE,
   '[{"value":"kunde","label":"Kunde / Interessent"},{"value":"lieferant","label":"Lieferant / Partner"},{"value":"kollege","label":"Kollege (intern)"},{"value":"behoerde","label":"Behörde"}]'::jsonb, 2),
  ('c1000000-0000-0000-0000-000000000001', 'key_message', 'Kernaussage', 'textarea',
   'Was willst du inhaltlich sagen? Stichpunkte reichen.', TRUE, NULL, 3),
  ('c1000000-0000-0000-0000-000000000001', 'next_step', 'Nächster Schritt', 'select', NULL, TRUE,
   '[{"value":"zusagen","label":"Ich bestätige / sage zu"},{"value":"pruefen","label":"Ich muss erst prüfen"},{"value":"ablehnen","label":"Ich lehne ab"},{"value":"rueckfrage","label":"Ich brauche mehr Infos"},{"value":"info","label":"Nur zur Info"}]'::jsonb, 4)
ON CONFLICT DO NOTHING;

-- email-freundlich (Version c1000000-0000-0000-0000-000000000002)
INSERT INTO input_fields (version_id, field_key, label, type, placeholder, is_required, options, sort_order)
VALUES
  ('c1000000-0000-0000-0000-000000000002', 'original_email', 'Original-E-Mail', 'textarea',
   'Füge die E-Mail ein, auf die du antworten möchtest...', TRUE, NULL, 1),
  ('c1000000-0000-0000-0000-000000000002', 'recipient_type', 'An wen?', 'select', NULL, TRUE,
   '[{"value":"kunde","label":"Kunde / Interessent"},{"value":"partner","label":"Partner / Lieferant"},{"value":"kollege","label":"Kollege (intern)"}]'::jsonb, 2),
  ('c1000000-0000-0000-0000-000000000002', 'key_message', 'Kernaussage', 'textarea',
   'Was willst du inhaltlich sagen?', TRUE, NULL, 3),
  ('c1000000-0000-0000-0000-000000000002', 'tone', 'Stimmung', 'select', NULL, TRUE,
   '[{"value":"dankbar","label":"Dankbar"},{"value":"begeistert","label":"Begeistert"},{"value":"verstaendnisvoll","label":"Verständnisvoll"},{"value":"ermutigend","label":"Ermutigend"}]'::jsonb, 4)
ON CONFLICT DO NOTHING;

-- absage (Version c1000000-0000-0000-0000-000000000003)
INSERT INTO input_fields (version_id, field_key, label, type, placeholder, is_required, options, sort_order)
VALUES
  ('c1000000-0000-0000-0000-000000000003', 'context', 'Worum geht es?', 'textarea',
   'Beschreibe kurz die Situation (Bewerbung, Angebot, Anfrage...)', TRUE, NULL, 1),
  ('c1000000-0000-0000-0000-000000000003', 'reason', 'Grund für Absage', 'textarea',
   'Warum sagst du ab? (kann auch vage bleiben)', FALSE, NULL, 2),
  ('c1000000-0000-0000-0000-000000000003', 'relationship', 'Beziehung zum Empfänger', 'select', NULL, TRUE,
   '[{"value":"bewerber","label":"Bewerber"},{"value":"kunde","label":"Kunde"},{"value":"lieferant","label":"Lieferant / Dienstleister"},{"value":"partner","label":"Geschäftspartner"},{"value":"sonstige","label":"Sonstige"}]'::jsonb, 3),
  ('c1000000-0000-0000-0000-000000000003', 'future_contact', 'Zukünftiger Kontakt?', 'select', NULL, TRUE,
   '[{"value":"ja","label":"Tür offen halten"},{"value":"nein","label":"Endgültige Absage"},{"value":"spaeter","label":"Später wieder melden"}]'::jsonb, 4)
ON CONFLICT DO NOTHING;

-- followup (Version c1000000-0000-0000-0000-000000000004)
INSERT INTO input_fields (version_id, field_key, label, type, placeholder, is_required, options, sort_order)
VALUES
  ('c1000000-0000-0000-0000-000000000004', 'previous_context', 'Vorheriger Kontext', 'textarea',
   'Was war der ursprüngliche Anlass? Wann war der letzte Kontakt?', TRUE, NULL, 1),
  ('c1000000-0000-0000-0000-000000000004', 'goal', 'Was möchtest du erreichen?', 'textarea',
   'Antwort bekommen, Termin vereinbaren, Entscheidung...', TRUE, NULL, 2),
  ('c1000000-0000-0000-0000-000000000004', 'urgency', 'Dringlichkeit', 'select', NULL, TRUE,
   '[{"value":"niedrig","label":"Niedrig - Freundliche Erinnerung"},{"value":"mittel","label":"Mittel - Zeitnah wichtig"},{"value":"hoch","label":"Hoch - Deadline steht bevor"}]'::jsonb, 3)
ON CONFLICT DO NOTHING;

-- rueckfragen (Version c1000000-0000-0000-0000-000000000005)
INSERT INTO input_fields (version_id, field_key, label, type, placeholder, is_required, options, sort_order)
VALUES
  ('c1000000-0000-0000-0000-000000000005', 'document_or_email', 'Original-Dokument oder E-Mail', 'textarea',
   'Füge den Text ein, zu dem du Fragen hast...', TRUE, NULL, 1),
  ('c1000000-0000-0000-0000-000000000005', 'unclear_points', 'Unklare Punkte', 'textarea',
   'Was ist unklar? Was musst du wissen?', TRUE, NULL, 2),
  ('c1000000-0000-0000-0000-000000000005', 'tone', 'Tonalität', 'select', NULL, TRUE,
   '[{"value":"neutral","label":"Neutral / Sachlich"},{"value":"freundlich","label":"Freundlich / Kollegial"},{"value":"formell","label":"Formell / Offiziell"}]'::jsonb, 3)
ON CONFLICT DO NOTHING;

-- text-kuerzen (Version c1000000-0000-0000-0000-000000000006)
INSERT INTO input_fields (version_id, field_key, label, type, placeholder, is_required, options, sort_order)
VALUES
  ('c1000000-0000-0000-0000-000000000006', 'original_text', 'Original-Text', 'textarea',
   'Füge den Text ein, der gekürzt werden soll...', TRUE, NULL, 1),
  ('c1000000-0000-0000-0000-000000000006', 'target_length', 'Ziel-Länge', 'select', NULL, TRUE,
   '[{"value":"50","label":"~50% kürzer"},{"value":"30","label":"~70% kürzer (nur das Wichtigste)"},{"value":"tweet","label":"Tweet-Länge (~280 Zeichen)"}]'::jsonb, 2),
  ('c1000000-0000-0000-0000-000000000006', 'keep_points', 'Was muss bleiben?', 'textarea',
   'Wichtige Punkte die nicht verloren gehen dürfen (optional)', FALSE, NULL, 3)
ON CONFLICT DO NOTHING;

-- zusammenfassung (Version c1000000-0000-0000-0000-000000000007)
INSERT INTO input_fields (version_id, field_key, label, type, placeholder, is_required, options, sort_order)
VALUES
  ('c1000000-0000-0000-0000-000000000007', 'original_text', 'Zu zusammenfassender Text', 'textarea',
   'Füge den Text ein, der zusammengefasst werden soll...', TRUE, NULL, 1),
  ('c1000000-0000-0000-0000-000000000007', 'format', 'Format', 'select', NULL, TRUE,
   '[{"value":"bullets","label":"Stichpunkte"},{"value":"paragraph","label":"Fließtext"},{"value":"executive","label":"Executive Summary"}]'::jsonb, 2),
  ('c1000000-0000-0000-0000-000000000007', 'audience', 'Für wen?', 'select', NULL, TRUE,
   '[{"value":"chef","label":"Chef / Management"},{"value":"team","label":"Team / Kollegen"},{"value":"kunde","label":"Kunde"},{"value":"ich","label":"Für mich selbst"}]'::jsonb, 3)
ON CONFLICT DO NOTHING;

-- meeting-tasks (Version c1000000-0000-0000-0000-000000000008)
INSERT INTO input_fields (version_id, field_key, label, type, placeholder, is_required, options, sort_order)
VALUES
  ('c1000000-0000-0000-0000-000000000008', 'meeting_notes', 'Meeting-Notizen', 'textarea',
   'Füge deine Meeting-Notizen ein (können auch unstrukturiert sein)...', TRUE, NULL, 1),
  ('c1000000-0000-0000-0000-000000000008', 'participants', 'Teilnehmer', 'textarea',
   'Wer war dabei? (Namen oder Rollen)', FALSE, NULL, 2),
  ('c1000000-0000-0000-0000-000000000008', 'deadline_info', 'Deadline-Infos', 'textarea',
   'Wurden Deadlines genannt? (optional)', FALSE, NULL, 3)
ON CONFLICT DO NOTHING;

-- handover (Version c1000000-0000-0000-0000-000000000009)
INSERT INTO input_fields (version_id, field_key, label, type, placeholder, is_required, options, sort_order)
VALUES
  ('c1000000-0000-0000-0000-000000000009', 'project_info', 'Projekt/Aufgabe', 'textarea',
   'Was wird übergeben? Beschreibe das Projekt/die Aufgabe...', TRUE, NULL, 1),
  ('c1000000-0000-0000-0000-000000000009', 'status', 'Aktueller Status', 'textarea',
   'Was ist erledigt? Was ist offen? Wo stehen wir?', TRUE, NULL, 2),
  ('c1000000-0000-0000-0000-000000000009', 'next_steps', 'Nächste Schritte', 'textarea',
   'Was muss als nächstes passieren?', TRUE, NULL, 3),
  ('c1000000-0000-0000-0000-000000000009', 'recipient', 'Empfänger', 'textarea',
   'Wer übernimmt? (Name oder Rolle)', FALSE, NULL, 4)
ON CONFLICT DO NOTHING;

-- angebot (Version c1000000-0000-0000-0000-00000000000a)
INSERT INTO input_fields (version_id, field_key, label, type, placeholder, is_required, options, sort_order)
VALUES
  ('c1000000-0000-0000-0000-00000000000a', 'customer_request', 'Kundenanfrage', 'textarea',
   'Was hat der Kunde angefragt? Was ist sein Bedarf?', TRUE, NULL, 1),
  ('c1000000-0000-0000-0000-00000000000a', 'products_services', 'Angebotene Leistung', 'textarea',
   'Was bietest du an? Produkte, Services, Umfang...', TRUE, NULL, 2),
  ('c1000000-0000-0000-0000-00000000000a', 'conditions', 'Konditionen', 'textarea',
   'Preis, Lieferzeit, Zahlungsbedingungen...', TRUE, NULL, 3)
ON CONFLICT DO NOTHING;

-- anfrage-quali (Version c1000000-0000-0000-0000-00000000000b)
INSERT INTO input_fields (version_id, field_key, label, type, placeholder, is_required, options, sort_order)
VALUES
  ('c1000000-0000-0000-0000-00000000000b', 'inquiry', 'Kundenanfrage', 'textarea',
   'Füge die Kundenanfrage ein...', TRUE, NULL, 1),
  ('c1000000-0000-0000-0000-00000000000b', 'qualification_criteria', 'Qualifizierungskriterien', 'textarea',
   'Wonach soll bewertet werden? (Budget, Timing, Fit...)', FALSE, NULL, 2)
ON CONFLICT DO NOTHING;

-- reklamation (Version c1000000-0000-0000-0000-00000000000c)
INSERT INTO input_fields (version_id, field_key, label, type, placeholder, is_required, options, sort_order)
VALUES
  ('c1000000-0000-0000-0000-00000000000c', 'complaint', 'Beschwerde', 'textarea',
   'Füge die Kundenbeschwerde ein...', TRUE, NULL, 1),
  ('c1000000-0000-0000-0000-00000000000c', 'resolution', 'Lösung', 'textarea',
   'Was ist die Lösung/Erklärung?', TRUE, NULL, 2),
  ('c1000000-0000-0000-0000-00000000000c', 'compensation', 'Entschädigung/Kulanz', 'textarea',
   'Gibt es eine Entschädigung? (optional)', FALSE, NULL, 3)
ON CONFLICT DO NOTHING;


-- ============================================================================
-- ZUSAMMENFASSUNG
-- ============================================================================

SELECT 
  'Seed Teil 2 abgeschlossen' AS status,
  (SELECT COUNT(*) FROM standards WHERE is_system = TRUE) AS standards,
  (SELECT COUNT(*) FROM standard_variants WHERE is_system = TRUE) AS variants,
  (SELECT COUNT(*) FROM standard_versions) AS versions,
  (SELECT COUNT(*) FROM input_fields) AS input_fields;
