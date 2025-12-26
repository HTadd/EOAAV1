/**
 * Centralized registry of all LINK_PLACEHOLDER labels used throughout the app.
 * Replace these with real URLs when linking to external resources.
 */
export const LINK_PLACEHOLDERS = [
  "WPA Official Rulebook",
  "WSPS Official Rulebook",
  "Grant Application Portal",
  "Program Website",
  "Equipment Listing Contact",
  "External Link",
] as const;

// Helper to check if all placeholders are registered
export function checkAllPlaceholdersRegistered(
  usedPlaceholders: string[]
): { missing: string[]; registered: string[] } {
  const registeredSet = new Set(LINK_PLACEHOLDERS);
  const missing = usedPlaceholders.filter((p) => !registeredSet.has(p as any));
  const registered = usedPlaceholders.filter((p) => registeredSet.has(p as any));
  return { missing, registered };
}
