import type {
  StandardStatus,
  InputFieldType,
  TonalityType,
  AnredeType,
  TechnicalDepthType,
  CommitmentLevelType,
  LegalCautionType,
  DocumentationLevelType,
  GovernanceStrictnessType,
  EscalationLevelType,
  ApprovalLogicType,
  SenderRoleType,
  CustomerContextType,
  ExecutionStatus,
  AuditAction,
  UserRole,
  SubscriptionTier,
  SubscriptionStatus,
} from './enums';

// ============================================================================
// ORGANIZATIONS
// ============================================================================

export interface Organization {
  id: string;
  name: string;
  slug: string;
  settings: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

// ============================================================================
// TEAMS (erweitert)
// ============================================================================

export interface Team {
  id: string;
  name: string;
  organization_id: string | null;
  subscription_status: SubscriptionStatus;
  subscription_tier: SubscriptionTier;
  subscription_id: string | null;
  trial_ends_at: string;
  lemon_squeezy_customer_id: string | null;
  created_at: string;
}

// ============================================================================
// USERS (erweitert)
// ============================================================================

export interface User {
  id: string;
  email: string;
  full_name: string | null;
  display_name: string | null;
  organization_id: string | null;
  team_id: string | null;
  role: UserRole;
  created_at: string;
}

// ============================================================================
// STANDARD FAMILIES
// ============================================================================

export interface StandardFamily {
  id: string;
  organization_id: string | null;
  slug: string;
  name: string;
  description: string | null;
  icon: string;
  sort_order: number;
  is_system: boolean;
  created_at: string;
  updated_at: string;
}

// ============================================================================
// STANDARDS
// ============================================================================

export interface Standard {
  id: string;
  organization_id: string | null;
  family_id: string;
  slug: string;
  name: string;
  description: string | null;
  icon: string;
  status: StandardStatus;
  sort_order: number;
  is_system: boolean;
  created_by: string | null;
  created_at: string;
  updated_at: string;
}

export interface StandardWithFamily extends Standard {
  family: StandardFamily;
}

export interface StandardWithVariants extends Standard {
  family: StandardFamily;
  variants: StandardVariant[];
}

// ============================================================================
// STANDARD VARIANTS
// ============================================================================

export interface StandardVariant {
  id: string;
  standard_id: string;
  slug: string;
  name: string;
  description: string | null;
  estimated_time: string;
  sort_order: number;
  is_default: boolean;
  is_system: boolean;
  created_at: string;
  updated_at: string;
}

export interface StandardVariantWithVersion extends StandardVariant {
  current_version: StandardVersion | null;
}

export interface StandardVariantFull extends StandardVariant {
  standard: StandardWithFamily;
  current_version: StandardVersion & { input_fields: InputField[] };
}

// ============================================================================
// STANDARD VERSIONS
// ============================================================================

export interface StandardVersion {
  id: string;
  variant_id: string;
  version_number: number;
  prompt_template: string;
  system_prompt: string | null;
  rules: Record<string, unknown>;
  change_notes: string | null;
  is_current: boolean;
  created_by: string | null;
  approved_by: string | null;
  approved_at: string | null;
  created_at: string;
}

// ============================================================================
// INPUT FIELDS
// ============================================================================

export interface InputFieldOption {
  value: string;
  label: string;
}

export interface InputFieldValidation {
  minLength?: number;
  maxLength?: number;
  pattern?: string;
}

export interface InputField {
  id: string;
  version_id: string;
  field_key: string;
  label: string;
  type: InputFieldType;
  placeholder: string | null;
  help_text: string | null;
  is_required: boolean;
  options: InputFieldOption[] | null;
  validation: InputFieldValidation | null;
  sort_order: number;
  created_at: string;
}

// ============================================================================
// COMPANY CONTEXT
// ============================================================================

export interface CompanyContext {
  id: string;
  organization_id: string;
  team_id: string | null;
  company_name: string;
  industry: string | null;
  description: string | null;
  products: string | null;
  custom_greeting: string;
  additional_context: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

// ============================================================================
// COMPANY VARIABLES
// ============================================================================

export interface CompanyVariableDefinition {
  id: string;
  variable_key: string;
  name: string;
  description: string | null;
  data_type: 'enum' | 'text_array';
  enum_type: string | null;
  default_value: string;
  sort_order: number;
  is_system: boolean;
  created_at: string;
}

export interface CompanyVariable {
  id: string;
  organization_id: string;
  team_id: string | null;
  variable_key: string;
  value: string;
  value_array: string[] | null;
  created_at: string;
  updated_at: string;
}

/** Typisierte Variablen für Verwendung in der App */
export interface CompanyVariables {
  tonality: TonalityType;
  anrede: AnredeType;
  technical_depth: TechnicalDepthType;
  commitment_level: CommitmentLevelType;
  legal_caution: LegalCautionType;
  documentation_level: DocumentationLevelType;
  governance_strictness: GovernanceStrictnessType;
  escalation_level: EscalationLevelType;
  approval_logic: ApprovalLogicType;
  sender_role: SenderRoleType;
  customer_context: CustomerContextType;
  nogo_rules: string[];
}

/** Default-Werte für alle Variablen */
export const DEFAULT_COMPANY_VARIABLES: CompanyVariables = {
  tonality: 'sachlich',
  anrede: 'sie_hoeflich',
  technical_depth: 'mittel',
  commitment_level: 'standard',
  legal_caution: 'standard',
  documentation_level: 'standard',
  governance_strictness: 'standard',
  escalation_level: 'keine',
  approval_logic: 'keine',
  sender_role: 'neutral',
  customer_context: 'bestandskunde',
  nogo_rules: [],
};

export interface CompanyVariablePreset {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  values: Partial<CompanyVariables>;
  is_system: boolean;
  sort_order: number;
  created_at: string;
}

// ============================================================================
// EXECUTIONS
// ============================================================================

export interface Execution {
  id: string;
  organization_id: string;
  team_id: string | null;
  user_id: string;
  standard_id: string | null;
  variant_id: string | null;
  version_id: string | null;
  inputs: Record<string, string>;
  variables_used: Partial<CompanyVariables>;
  overrides: Record<string, string>;
  output: string | null;
  tokens_used: number | null;
  duration_ms: number | null;
  status: ExecutionStatus;
  error_message: string | null;
  created_at: string;
}

export interface ExecutionWithDetails extends Execution {
  standard: Standard | null;
  variant: StandardVariant | null;
  user: Pick<User, 'id' | 'email' | 'display_name'> | null;
}

// ============================================================================
// AUDIT LOGS
// ============================================================================

export interface AuditLog {
  id: string;
  organization_id: string;
  actor_id: string | null;
  action: AuditAction;
  entity_type: string;
  entity_id: string | null;
  metadata: Record<string, unknown>;
  ip_address: string | null;
  user_agent: string | null;
  created_at: string;
}

// ============================================================================
// ENTITLEMENTS
// ============================================================================

export interface Entitlements {
  id: string;
  organization_id: string;
  plan: SubscriptionTier;
  
  // Scope
  active_families: string[];
  max_custom_standards: number | null;
  
  // Governance
  versioning_enabled: boolean;
  approval_flow_enabled: boolean;
  audit_log_access: boolean;
  audit_export_enabled: boolean;
  
  // Org Reach
  teams_enabled: boolean;
  max_teams: number;
  max_users: number;
  
  // Usage
  monthly_executions: number;
  executions_used: number;
  executions_reset_at: string | null;
  
  custom_features: Record<string, unknown>;
  valid_from: string;
  valid_until: string | null;
  created_at: string;
  updated_at: string;
}

// ============================================================================
// API REQUEST/RESPONSE TYPES
// ============================================================================

/** Request für Standard-Ausführung */
export interface ExecuteStandardRequest {
  variantId: string;
  inputs: Record<string, string>;
  overrides?: Record<string, string>;
}

/** Response für Standard-Ausführung */
export interface ExecuteStandardResponse {
  executionId: string;
  output: string;
  tokensUsed: number;
}

/** Standard-Liste Response */
export interface StandardsListResponse {
  families: (StandardFamily & { standards: StandardWithVariants[] })[];
}

// ============================================================================
// LEGACY COMPATIBILITY TYPES
// Für Übergangsphase während der Migration
// ============================================================================

/** @deprecated Use CompanyContext instead */
export interface CompanyProfile {
  id: string;
  team_id: string;
  company_name: string;
  industry: string | null;
  description: string | null;
  products: string | null;
  created_at: string;
  updated_at: string;
}

/** @deprecated Use CompanyVariables instead */
export interface CompanyPolicy {
  id: string;
  team_id: string;
  anrede: 'Sie' | 'Du';
  tonality: 'formell' | 'sachlich' | 'locker';
  nogo_words: string[];
  greeting: string;
  created_at: string;
  updated_at: string;
}

