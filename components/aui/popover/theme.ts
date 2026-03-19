import { z } from "zod";
import type { AuiStyleName } from "../types";

// Zod schema for type validation
export const StyleConfig = z.object({
  panel: z.string(),
  header: z.string(),
  body: z.string(),
  footer: z.string(),
});
export type StyleConfig = z.infer<typeof StyleConfig>;

// REFACTORED: All hardcoded colors have been replaced with CSS variables.
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    panel:
      "w-72 rounded-xl border border-[var(--color-text-100)]/10 bg-[var(--color-background-900)]/60 text-[var(--color-text-100)]/90 shadow-2xl backdrop-blur-xl",
    header: "p-3 font-semibold border-b border-[var(--color-text-100)]/10",
    body: "p-3",
    footer: "p-3 border-t border-[var(--color-text-100)]/10",
  },
  material: {
    panel:
      "w-72 rounded-lg border border-[var(--color-background-200)] bg-[var(--color-background-500)] text-[var(--color-text-500)] shadow-xl",
    header: "p-4 text-lg font-medium",
    body: "p-4",
    footer: "p-3 bg-[var(--color-background-100)] flex justify-end gap-2",
  },
  bootstrap: {
    panel:
      "w-80 rounded-lg border border-[var(--color-background-300)] bg-[var(--color-background-500)] shadow-lg",
    header:
      "px-4 py-3 bg-[var(--color-background-100)] border-b border-[var(--color-background-200)] font-semibold text-lg",
    body: "p-4",
    footer:
      "px-4 py-3 bg-[var(--color-background-100)] border-t border-[var(--color-background-200)] flex justify-end gap-2",
  },
  windows: {
    panel:
      "w-72 rounded-sm border border-[var(--color-secondary-300)] bg-[var(--color-background-500)] shadow-lg",
    header: "p-3 font-semibold",
    body: "p-3",
    footer: "p-3 bg-[var(--color-background-100)] flex justify-end gap-2",
  },
};
