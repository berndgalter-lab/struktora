// ============================================================================
// STRUKTORA OS - Type Exports
// ============================================================================

// Enums
export * from './enums';

// Domain Types (neue Struktur)
export * from './domain';

// Standards (Alias für bessere DX)
export * from './standards';

// Legacy: Database types
// Nur das Database-Interface exportieren, nicht die Convenience-Aliase
// da diese mit den neuen Domain-Typen kollidieren
export type { Database } from './database';

// Legacy Convenience Types - explicit re-export mit Präfix
// Diese werden während der Migration noch verwendet
export type {
  Team as LegacyTeam,
  TeamInsert,
  TeamUpdate,
  CompanyProfile as LegacyCompanyProfile,
  CompanyProfileInsert,
  CompanyProfileUpdate,
  CompanyPolicy as LegacyCompanyPolicy,
  CompanyPolicyInsert,
  CompanyPolicyUpdate,
  User as LegacyUser,
  UserInsert,
  UserUpdate,
  TeamInvite,
  TeamInviteInsert,
  TeamInviteUpdate,
  UsageStat,
  UsageStatInsert,
  UsageStatUpdate,
} from './database';
