import type { Recipe } from "@/types/recipes";

// Recipe definitions without promptTemplate (added later)
export const recipes: Omit<Recipe, "promptTemplate" | "fields">[] = [
  // Kommunikation
  {
    id: "email-sachlich",
    name: "E-Mail Antwort (sachlich)",
    description: "Professionelle, sachliche Antwort auf E-Mails",
    category: "kommunikation",
    icon: "Mail",
    estimatedTime: "2-3 Min",
  },
  {
    id: "email-freundlich",
    name: "E-Mail Antwort (freundlich)",
    description: "Herzliche, freundliche Antwort auf E-Mails",
    category: "kommunikation",
    icon: "Heart",
    estimatedTime: "2-3 Min",
  },
  {
    id: "absage",
    name: "Absage formulieren",
    description: "Höfliche Absagen für Anfragen, Bewerbungen oder Angebote",
    category: "kommunikation",
    icon: "XCircle",
    estimatedTime: "2-3 Min",
  },
  {
    id: "followup",
    name: "Follow-up schreiben",
    description: "Nachfass-E-Mails für ausstehende Antworten",
    category: "kommunikation",
    icon: "RefreshCw",
    estimatedTime: "2-3 Min",
  },
  {
    id: "rueckfragen",
    name: "Rückfragen stellen",
    description: "Klärende Fragen professionell formulieren",
    category: "kommunikation",
    icon: "HelpCircle",
    estimatedTime: "2-3 Min",
  },
  // Texte
  {
    id: "text-kuerzen",
    name: "Text kürzen",
    description: "Lange Texte auf das Wesentliche reduzieren",
    category: "texte",
    icon: "Scissors",
    estimatedTime: "1-2 Min",
  },
  {
    id: "zusammenfassung",
    name: "Zusammenfassung",
    description: "Dokumente und Texte zusammenfassen",
    category: "texte",
    icon: "FileText",
    estimatedTime: "2-3 Min",
  },
  // Meetings
  {
    id: "meeting-tasks",
    name: "Meeting → Aufgaben",
    description: "Aus Meeting-Notizen klare To-Dos extrahieren",
    category: "meetings",
    icon: "CheckSquare",
    estimatedTime: "2-3 Min",
  },
  {
    id: "handover",
    name: "Übergabe / Handover",
    description: "Strukturierte Übergabe-Dokumentation erstellen",
    category: "meetings",
    icon: "ArrowRightLeft",
    estimatedTime: "3-5 Min",
  },
  // Sales
  {
    id: "angebot",
    name: "Angebot formulieren",
    description: "Überzeugende Angebotstexte schreiben",
    category: "sales",
    icon: "FileCheck",
    estimatedTime: "3-5 Min",
  },
  {
    id: "anfrage-quali",
    name: "Anfrage qualifizieren",
    description: "Kundenanfragen analysieren und bewerten",
    category: "sales",
    icon: "Search",
    estimatedTime: "2-3 Min",
  },
  // Support
  {
    id: "reklamation",
    name: "Reklamation beantworten",
    description: "Professionelle Antworten auf Beschwerden",
    category: "support",
    icon: "MessageCircle",
    estimatedTime: "3-5 Min",
  },
];

export const getRecipeById = (id: string) => {
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
