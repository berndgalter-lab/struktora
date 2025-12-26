import type { Recipe } from "@/types/recipes";

// Complete recipe definitions with fields and prompt templates
export const recipes: Recipe[] = [
  // ==================== KOMMUNIKATION ====================
  {
    id: "email-sachlich",
    name: "E-Mail Antwort (sachlich)",
    description: "Professionelle, sachliche Antwort auf E-Mails",
    category: "kommunikation",
    icon: "Mail",
    estimatedTime: "2-3 Min",
    fields: [
      {
        id: "original_email",
        label: "Original-E-Mail",
        type: "textarea",
        placeholder: "Füge die E-Mail ein, auf die du antworten möchtest...",
        required: true,
      },
      {
        id: "recipient_type",
        label: "An wen?",
        type: "select",
        required: true,
        options: [
          { value: "kunde", label: "Kunde / Interessent" },
          { value: "lieferant", label: "Lieferant / Partner" },
          { value: "kollege", label: "Kollege (intern)" },
          { value: "behoerde", label: "Behörde" },
        ],
      },
      {
        id: "key_message",
        label: "Kernaussage",
        type: "textarea",
        placeholder: "Was willst du inhaltlich sagen? Stichpunkte reichen.",
        required: true,
      },
      {
        id: "next_step",
        label: "Nächster Schritt",
        type: "select",
        required: true,
        options: [
          { value: "zusagen", label: "Ich bestätige / sage zu" },
          { value: "pruefen", label: "Ich muss erst prüfen" },
          { value: "ablehnen", label: "Ich lehne ab" },
          { value: "rueckfrage", label: "Ich brauche mehr Infos" },
          { value: "info", label: "Nur zur Info" },
        ],
      },
    ],
    promptTemplate: `Du bist Mitarbeiter eines Unternehmens und schreibst eine professionelle E-Mail-Antwort.

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

Schreibe die Antwort-E-Mail. Beginne direkt mit der Anrede.`,
  },
  {
    id: "email-freundlich",
    name: "E-Mail Antwort (freundlich)",
    description: "Herzliche, freundliche Antwort auf E-Mails",
    category: "kommunikation",
    icon: "Heart",
    estimatedTime: "2-3 Min",
    fields: [
      {
        id: "original_email",
        label: "Original-E-Mail",
        type: "textarea",
        placeholder: "Füge die E-Mail ein, auf die du antworten möchtest...",
        required: true,
      },
      {
        id: "recipient_type",
        label: "An wen?",
        type: "select",
        required: true,
        options: [
          { value: "kunde", label: "Kunde / Interessent" },
          { value: "partner", label: "Partner / Lieferant" },
          { value: "kollege", label: "Kollege (intern)" },
        ],
      },
      {
        id: "key_message",
        label: "Kernaussage",
        type: "textarea",
        placeholder: "Was willst du inhaltlich sagen?",
        required: true,
      },
      {
        id: "tone",
        label: "Stimmung",
        type: "select",
        required: true,
        options: [
          { value: "dankbar", label: "Dankbar" },
          { value: "begeistert", label: "Begeistert" },
          { value: "verstaendnisvoll", label: "Verständnisvoll" },
          { value: "ermutigend", label: "Ermutigend" },
        ],
      },
    ],
    promptTemplate: `Du bist Mitarbeiter eines Unternehmens und schreibst eine freundliche, herzliche E-Mail-Antwort.

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

Schreibe die freundliche Antwort-E-Mail. Beginne direkt mit der Anrede.`,
  },
  {
    id: "absage",
    name: "Absage formulieren",
    description: "Höfliche Absagen für Anfragen, Bewerbungen oder Angebote",
    category: "kommunikation",
    icon: "XCircle",
    estimatedTime: "2-3 Min",
    fields: [
      {
        id: "context",
        label: "Worum geht es?",
        type: "textarea",
        placeholder: "Beschreibe kurz die Situation (Bewerbung, Angebot, Anfrage...)",
        required: true,
      },
      {
        id: "reason",
        label: "Grund für Absage",
        type: "textarea",
        placeholder: "Warum sagst du ab? (kann auch vage bleiben)",
        required: false,
      },
      {
        id: "relationship",
        label: "Beziehung zum Empfänger",
        type: "select",
        required: true,
        options: [
          { value: "bewerber", label: "Bewerber" },
          { value: "kunde", label: "Kunde" },
          { value: "lieferant", label: "Lieferant / Dienstleister" },
          { value: "partner", label: "Geschäftspartner" },
          { value: "sonstige", label: "Sonstige" },
        ],
      },
      {
        id: "future_contact",
        label: "Zukünftiger Kontakt?",
        type: "select",
        required: true,
        options: [
          { value: "ja", label: "Tür offen halten" },
          { value: "nein", label: "Endgültige Absage" },
          { value: "spaeter", label: "Später wieder melden" },
        ],
      },
    ],
    promptTemplate: `Du formulierst eine höfliche, respektvolle Absage.

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

Schreibe die Absage-E-Mail. Beginne direkt mit der Anrede.`,
  },
  {
    id: "followup",
    name: "Follow-up schreiben",
    description: "Nachfass-E-Mails für ausstehende Antworten",
    category: "kommunikation",
    icon: "RefreshCw",
    estimatedTime: "2-3 Min",
    fields: [
      {
        id: "previous_context",
        label: "Vorheriger Kontext",
        type: "textarea",
        placeholder: "Was war der ursprüngliche Anlass? Wann war der letzte Kontakt?",
        required: true,
      },
      {
        id: "goal",
        label: "Was möchtest du erreichen?",
        type: "textarea",
        placeholder: "Antwort bekommen, Termin vereinbaren, Entscheidung...",
        required: true,
      },
      {
        id: "urgency",
        label: "Dringlichkeit",
        type: "select",
        required: true,
        options: [
          { value: "niedrig", label: "Niedrig - Freundliche Erinnerung" },
          { value: "mittel", label: "Mittel - Zeitnah wichtig" },
          { value: "hoch", label: "Hoch - Deadline steht bevor" },
        ],
      },
    ],
    promptTemplate: `Du schreibst ein professionelles Follow-up.

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

Schreibe das Follow-up. Beginne direkt mit der Anrede.`,
  },
  {
    id: "rueckfragen",
    name: "Rückfragen stellen",
    description: "Klärende Fragen professionell formulieren",
    category: "kommunikation",
    icon: "HelpCircle",
    estimatedTime: "2-3 Min",
    fields: [
      {
        id: "document_or_email",
        label: "Original-Dokument oder E-Mail",
        type: "textarea",
        placeholder: "Füge den Text ein, zu dem du Fragen hast...",
        required: true,
      },
      {
        id: "unclear_points",
        label: "Unklare Punkte",
        type: "textarea",
        placeholder: "Was ist unklar? Was musst du wissen?",
        required: true,
      },
      {
        id: "tone",
        label: "Tonalität",
        type: "select",
        required: true,
        options: [
          { value: "neutral", label: "Neutral / Sachlich" },
          { value: "freundlich", label: "Freundlich / Kollegial" },
          { value: "formell", label: "Formell / Offiziell" },
        ],
      },
    ],
    promptTemplate: `Du formulierst professionelle Rückfragen.

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

Schreibe die E-Mail mit den Rückfragen. Beginne direkt mit der Anrede.`,
  },

  // ==================== TEXTE ====================
  {
    id: "text-kuerzen",
    name: "Text kürzen",
    description: "Lange Texte auf das Wesentliche reduzieren",
    category: "texte",
    icon: "Scissors",
    estimatedTime: "1-2 Min",
    fields: [
      {
        id: "original_text",
        label: "Original-Text",
        type: "textarea",
        placeholder: "Füge den Text ein, der gekürzt werden soll...",
        required: true,
      },
      {
        id: "target_length",
        label: "Ziel-Länge",
        type: "select",
        required: true,
        options: [
          { value: "50", label: "~50% kürzer" },
          { value: "30", label: "~70% kürzer (nur das Wichtigste)" },
          { value: "tweet", label: "Tweet-Länge (~280 Zeichen)" },
        ],
      },
      {
        id: "keep_points",
        label: "Was muss bleiben?",
        type: "textarea",
        placeholder: "Wichtige Punkte die nicht verloren gehen dürfen (optional)",
        required: false,
      },
    ],
    promptTemplate: `Du kürzt Texte auf das Wesentliche.

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

Gib den gekürzten Text aus. Keine Erklärungen, nur der gekürzte Text.`,
  },
  {
    id: "zusammenfassung",
    name: "Zusammenfassung",
    description: "Dokumente und Texte zusammenfassen",
    category: "texte",
    icon: "FileText",
    estimatedTime: "2-3 Min",
    fields: [
      {
        id: "original_text",
        label: "Zu zusammenfassender Text",
        type: "textarea",
        placeholder: "Füge den Text ein, der zusammengefasst werden soll...",
        required: true,
      },
      {
        id: "format",
        label: "Format",
        type: "select",
        required: true,
        options: [
          { value: "bullets", label: "Stichpunkte" },
          { value: "paragraph", label: "Fließtext" },
          { value: "executive", label: "Executive Summary" },
        ],
      },
      {
        id: "audience",
        label: "Für wen?",
        type: "select",
        required: true,
        options: [
          { value: "chef", label: "Chef / Management" },
          { value: "team", label: "Team / Kollegen" },
          { value: "kunde", label: "Kunde" },
          { value: "ich", label: "Für mich selbst" },
        ],
      },
    ],
    promptTemplate: `Du erstellst eine Zusammenfassung.

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

Erstelle die Zusammenfassung. Keine Einleitung, direkt die Zusammenfassung.`,
  },

  // ==================== MEETINGS ====================
  {
    id: "meeting-tasks",
    name: "Meeting → Aufgaben",
    description: "Aus Meeting-Notizen klare To-Dos extrahieren",
    category: "meetings",
    icon: "CheckSquare",
    estimatedTime: "2-3 Min",
    fields: [
      {
        id: "meeting_notes",
        label: "Meeting-Notizen",
        type: "textarea",
        placeholder: "Füge deine Meeting-Notizen ein (können auch unstrukturiert sein)...",
        required: true,
      },
      {
        id: "participants",
        label: "Teilnehmer",
        type: "textarea",
        placeholder: "Wer war dabei? (Namen oder Rollen)",
        required: false,
      },
      {
        id: "deadline_info",
        label: "Deadline-Infos",
        type: "textarea",
        placeholder: "Wurden Deadlines genannt? (optional)",
        required: false,
      },
    ],
    promptTemplate: `Du extrahierst Aufgaben aus Meeting-Notizen.

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

Erstelle die Aufgabenliste. Nur die Aufgaben, keine Einleitung.`,
  },
  {
    id: "handover",
    name: "Übergabe / Handover",
    description: "Strukturierte Übergabe-Dokumentation erstellen",
    category: "meetings",
    icon: "ArrowRightLeft",
    estimatedTime: "3-5 Min",
    fields: [
      {
        id: "project_info",
        label: "Projekt/Aufgabe",
        type: "textarea",
        placeholder: "Was wird übergeben? Beschreibe das Projekt/die Aufgabe...",
        required: true,
      },
      {
        id: "status",
        label: "Aktueller Status",
        type: "textarea",
        placeholder: "Was ist erledigt? Was ist offen? Wo stehen wir?",
        required: true,
      },
      {
        id: "next_steps",
        label: "Nächste Schritte",
        type: "textarea",
        placeholder: "Was muss als nächstes passieren?",
        required: true,
      },
      {
        id: "recipient",
        label: "Empfänger",
        type: "textarea",
        placeholder: "Wer übernimmt? (Name oder Rolle)",
        required: false,
      },
    ],
    promptTemplate: `Du erstellst eine strukturierte Übergabe-Dokumentation.

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
5. Wichtige Kontakte/Ressourcen (falls relevant)`,
  },

  // ==================== SALES ====================
  {
    id: "angebot",
    name: "Angebot formulieren",
    description: "Überzeugende Angebotstexte schreiben",
    category: "sales",
    icon: "FileCheck",
    estimatedTime: "3-5 Min",
    fields: [
      {
        id: "customer_request",
        label: "Kundenanfrage",
        type: "textarea",
        placeholder: "Was hat der Kunde angefragt? Was ist sein Bedarf?",
        required: true,
      },
      {
        id: "products_services",
        label: "Angebotene Leistung",
        type: "textarea",
        placeholder: "Was bietest du an? Produkte, Services, Umfang...",
        required: true,
      },
      {
        id: "conditions",
        label: "Konditionen",
        type: "textarea",
        placeholder: "Preis, Lieferzeit, Zahlungsbedingungen...",
        required: true,
      },
    ],
    promptTemplate: `Du schreibst einen überzeugenden Angebotstext.

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

Schreibe den Angebotstext. Beginne mit der Anrede.`,
  },
  {
    id: "anfrage-quali",
    name: "Anfrage qualifizieren",
    description: "Kundenanfragen analysieren und bewerten",
    category: "sales",
    icon: "Search",
    estimatedTime: "2-3 Min",
    fields: [
      {
        id: "inquiry",
        label: "Kundenanfrage",
        type: "textarea",
        placeholder: "Füge die Kundenanfrage ein...",
        required: true,
      },
      {
        id: "qualification_criteria",
        label: "Qualifizierungskriterien",
        type: "textarea",
        placeholder: "Wonach soll bewertet werden? (Budget, Timing, Fit...)",
        required: false,
      },
    ],
    promptTemplate: `Du analysierst und qualifizierst eine Kundenanfrage.

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
- Empfohlene nächste Schritte`,
  },

  // ==================== SUPPORT ====================
  {
    id: "reklamation",
    name: "Reklamation beantworten",
    description: "Professionelle Antworten auf Beschwerden",
    category: "support",
    icon: "MessageCircle",
    estimatedTime: "3-5 Min",
    fields: [
      {
        id: "complaint",
        label: "Beschwerde",
        type: "textarea",
        placeholder: "Füge die Kundenbeschwerde ein...",
        required: true,
      },
      {
        id: "resolution",
        label: "Lösung",
        type: "textarea",
        placeholder: "Was ist die Lösung/Erklärung?",
        required: true,
      },
      {
        id: "compensation",
        label: "Entschädigung/Kulanz",
        type: "textarea",
        placeholder: "Gibt es eine Entschädigung? (optional)",
        required: false,
      },
    ],
    promptTemplate: `Du beantwortest eine Kundenbeschwerde professionell.

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

Schreibe die Antwort auf die Reklamation. Beginne mit der Anrede.`,
  },
];

export const getRecipeById = (id: string): Recipe | undefined => {
  return recipes.find((r) => r.id === id);
};

export const getRecipesByCategory = (category: Recipe["category"]) => {
  return recipes.filter((r) => r.category === category);
};

export const categories = [
  "kommunikation",
  "texte",
  "meetings",
  "sales",
  "support",
] as const;
