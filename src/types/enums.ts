// ============================================================================
// STRUKTORA OS - Enum Types
// Generiert aus Supabase Schema
// ============================================================================

// Subscription
export type SubscriptionStatus = 'trial' | 'active' | 'cancelled' | 'past_due';
export type SubscriptionTier = 'free' | 'starter' | 'team' | 'business' | 'enterprise';

// User
export type UserRole = 'org_admin' | 'team_admin' | 'member' | 'viewer';

// Standards
export type StandardStatus = 'draft' | 'active' | 'deprecated';
export type InputFieldType = 'text' | 'textarea' | 'select' | 'radio' | 'number' | 'date';

// Company Variables - Tonalität & Kommunikation
export type TonalityType = 'formell' | 'sachlich' | 'freundlich' | 'locker' | 'empathisch';
export type AnredeType = 'sie_formell' | 'sie_hoeflich' | 'du_formell' | 'du_locker';

// Company Variables - Fachliche Tiefe
export type TechnicalDepthType = 'niedrig' | 'mittel' | 'hoch' | 'experte';
export type CommitmentLevelType = 'unverbindlich' | 'standard' | 'verbindlich' | 'rechtlich_bindend';
export type LegalCautionType = 'minimal' | 'standard' | 'erhoeht' | 'maximal';

// Company Variables - Dokumentation & Governance
export type DocumentationLevelType = 'minimal' | 'standard' | 'ausfuehrlich' | 'vollstaendig';
export type GovernanceStrictnessType = 'locker' | 'standard' | 'streng' | 'audit_ready';
export type EscalationLevelType = 'keine' | 'info' | 'warnung' | 'eskalation';
export type ApprovalLogicType = 'keine' | 'optional' | 'erforderlich' | 'mehrstufig';

// Company Variables - Kontext
export type SenderRoleType = 'neutral' | 'funktion' | 'person' | 'team';
export type CustomerContextType = 'interessent' | 'neukunde' | 'bestandskunde' | 'premium' | 'kritisch';

// Audit
export type AuditAction =
  | 'standard.created' | 'standard.updated' | 'standard.deleted'
  | 'variant.created' | 'variant.updated' | 'variant.deleted'
  | 'version.created' | 'version.approved'
  | 'execution.started' | 'execution.completed' | 'execution.failed'
  | 'variables.updated' | 'settings.updated'
  | 'user.invited' | 'user.joined' | 'user.removed';

// Execution
export type ExecutionStatus = 'pending' | 'completed' | 'failed';

