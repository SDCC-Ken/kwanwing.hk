import { z } from "zod";
import type { AuiStyleName } from "../types";

// Zod schema for type validation
export const StyleConfig = z.object({
  panel: z.string(),
  arrow: z.string(),
});
export type StyleConfig = z.infer<typeof StyleConfig>;

// REFACTORED: All hardcoded colors have been replaced with CSS variables.
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    panel:
      "rounded-lg border border-[var(--color-text-100)]/10 bg-[var(--color-background-900)]/70 px-3 py-1.5 text-sm font-semibold text-[var(--color-text-100)]/90 shadow-2xl backdrop-blur-xl",
    arrow: "fill-[var(--color-background-900)]/70",
  },
  material: {
    panel:
      "rounded bg-[var(--color-secondary-700)] px-2.5 py-1 text-sm font-medium text-[var(--color-text-100)] shadow-lg",
    arrow: "fill-[var(--color-secondary-700)]",
  },
  bootstrap: {
    panel:
      "rounded bg-[var(--color-background-900)] px-3 py-1.5 text-sm font-medium text-[var(--color-text-100)]",
    arrow: "fill-[var(--color-background-900)]",
  },
  windows: {
    panel:
      "rounded-sm border border-[var(--color-secondary-300)] bg-[var(--color-background-500)] px-2 py-1 text-sm font-medium text-[var(--color-text-900)] shadow-md",
    arrow:
      "fill-[var(--color-background-500)] stroke-[var(--color-secondary-300)]",
  },
};
