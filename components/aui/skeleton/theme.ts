import { z } from "zod";
import type { AuiStyleName } from "../types";

// Zod schema for type validation
export const StyleConfig = z.object({
  base: z.string(),
});
export type StyleConfig = z.infer<typeof StyleConfig>;

// REFACTORED: All hardcoded colors have been replaced with CSS variables.
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    base: "animate-pulse rounded-md bg-[var(--color-text-100)]/10",
  },
  material: {
    base: "animate-pulse rounded-md bg-[var(--color-background-200)]",
  },
  bootstrap: {
    base: "animate-pulse rounded bg-[var(--color-background-200)]",
  },
  windows: {
    base: "animate-pulse rounded-sm bg-[var(--color-secondary-300)]",
  },
};
