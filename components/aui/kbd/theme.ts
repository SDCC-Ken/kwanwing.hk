import { z } from "zod";
import type { AuiStyleName } from "../types";

// Zod schema for type validation
export const StyleConfig = z.object({
  root: z.string(),
  sizes: z.object({
    xs: z.string(),
    sm: z.string(),
    md: z.string(),
    lg: z.string(),
    xl: z.string(),
  }),
});
export type StyleConfig = z.infer<typeof StyleConfig>;

// REFACTORED: All hardcoded colors have been replaced with CSS variables.
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    root: "inline-flex items-center justify-center font-mono font-medium border rounded-md border-[var(--color-text-100)]/20 bg-[var(--color-background-900)]/30 text-[var(--color-text-100)]/80 shadow-md",
    sizes: {
      xs: "px-1 min-w-[16px] h-4 text-xs",
      sm: "px-1.5 min-w-[20px] h-5 text-xs",
      md: "px-2 min-w-[24px] h-6 text-sm",
      lg: "px-2.5 min-w-[28px] h-7 text-base",
      xl: "px-3 min-w-[32px] h-8 text-lg",
    },
  },
  material: {
    root: "inline-flex items-center justify-center font-mono font-medium rounded-md bg-[var(--color-background-200)] text-[var(--color-text-800)] shadow-[0_2px_0_0_rgba(0,0,0,0.1)] dark:shadow-[0_2px_0_0_rgba(0,0,0,0.3)]",
    sizes: {
      xs: "px-1 min-w-[16px] h-4 text-xs",
      sm: "px-1.5 min-w-[20px] h-5 text-xs",
      md: "px-2 min-w-[24px] h-6 text-sm",
      lg: "px-2.5 min-w-[28px] h-7 text-base",
      xl: "px-3 min-w-[32px] h-8 text-lg",
    },
  },
  bootstrap: {
    root: "inline-flex items-center justify-center font-mono font-bold rounded border border-b-2 border-[var(--color-secondary-300)] bg-[var(--color-background-100)] text-[var(--color-text-700)]",
    sizes: {
      xs: "px-1 min-w-[16px] h-4 text-xs",
      sm: "px-1.5 min-w-[20px] h-5 text-xs",
      md: "px-2 min-w-[24px] h-6 text-sm",
      lg: "px-2.5 min-w-[28px] h-7 text-base",
      xl: "px-3 min-w-[32px] h-8 text-lg",
    },
  },
  windows: {
    root: "inline-flex items-center justify-center font-mono rounded-sm border border-b-2 border-[var(--color-secondary-400)] bg-[var(--color-background-100)] text-[var(--color-text-900)]",
    sizes: {
      xs: "px-1 min-w-[16px] h-4 text-xs",
      sm: "px-1.5 min-w-[20px] h-5 text-xs",
      md: "px-2 min-w-[24px] h-6 text-sm",
      lg: "px-2.5 min-w-[28px] h-7 text-base",
      xl: "px-3 min-w-[32px] h-8 text-lg",
    },
  },
};
