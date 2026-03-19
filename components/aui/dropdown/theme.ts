import { z } from "zod";
import type { AuiStyleName } from "../types";

// Zod schema for type validation
export const StyleConfig = z.object({
  panel: z.string(),
});
export type StyleConfig = z.infer<typeof StyleConfig>;

// REFACTORED: All hardcoded colors have been replaced with CSS variables.
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    panel:
      "rounded-lg border border-[var(--color-text-100)]/10 bg-[var(--color-background-900)] shadow-2xl backdrop-blur-xl",
  },
  material: {
    panel:
      "rounded-md bg-[var(--color-background-500)] text-[var(--color-text-500)] shadow-lg ring-1 ring-black/5",
  },
  bootstrap: {
    panel:
      "rounded-md border border-[var(--color-background-300)] bg-[var(--color-background-500)] shadow-md",
  },
  windows: {
    panel:
      "border border-[var(--color-secondary-400)] bg-[var(--color-background-100)] shadow-lg",
  },
};
