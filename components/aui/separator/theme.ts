import { z } from "zod";
import type { AuiStyleName } from "../types";

// Zod schema for type validation
export const StyleConfig = z.object({
  root: z.string(),
  orientations: z.object({
    horizontal: z.string(),
    vertical: z.string(),
  }),
  sizes: z.object({
    xs: z.string(),
    sm: z.string(),
    md: z.string(),
    lg: z.string(),
    xl: z.string(),
  }),
  types: z.object({
    solid: z.string(),
    dashed: z.string(),
    dotted: z.string(),
  }),
  line: z.string(),
  label: z.string(),
});
export type StyleConfig = z.infer<typeof StyleConfig>;

// REFACTORED: All hardcoded colors have been replaced with CSS variables.
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    root: "grid items-center select-none text-sm text-[var(--color-text-100)]/50",
    orientations: {
      horizontal: "grid-cols-[1fr_auto_1fr] gap-3 w-full",
      vertical: "grid-rows-[1fr_auto_1fr] gap-3 h-full inline-grid",
    },
    sizes: {
      xs: "border-t",
      sm: "border-t-2",
      md: "border-t-4",
      lg: "border-t-8",
      xl: "border-t-[12px]",
    },
    types: {
      solid: "border-solid",
      dashed: "border-dashed",
      dotted: "border-dotted",
    },
    line: "border-[var(--color-text-100)]/20",
    label: "px-3 font-medium",
  },
  material: {
    root: "grid items-center select-none text-sm text-[var(--color-secondary-500)]",
    orientations: {
      horizontal: "grid-cols-[1fr_auto_1fr] gap-2 w-full",
      vertical: "grid-rows-[1fr_auto_1fr] gap-2 h-full inline-grid",
    },
    sizes: {
      xs: "border-t",
      sm: "border-t-2",
      md: "border-t-4",
      lg: "border-t-8",
      xl: "border-t-[12px]",
    },
    types: {
      solid: "border-solid",
      dashed: "border-dashed",
      dotted: "border-dotted",
    },
    line: "border-[var(--color-secondary-300)]",
    label: "px-2 font-medium",
  },
  bootstrap: {
    root: "grid items-center select-none text-sm text-[var(--color-secondary-600)]",
    orientations: {
      horizontal: "grid-cols-[1fr_auto_1fr] gap-3 w-full",
      vertical: "grid-rows-[1fr_auto_1fr] gap-3 h-full inline-grid",
    },
    sizes: {
      xs: "border-t",
      sm: "border-t-2",
      md: "border-t-4",
      lg: "border-t-8",
      xl: "border-t-[12px]",
    },
    types: {
      solid: "border-solid",
      dashed: "border-dashed",
      dotted: "border-dotted",
    },
    line: "border-[var(--color-secondary-300)]",
    label: "px-3 font-semibold",
  },
  windows: {
    root: "grid items-center select-none text-sm text-[var(--color-secondary-700)]",
    orientations: {
      horizontal: "grid-cols-[1fr_auto_1fr] gap-2 w-full",
      vertical: "grid-rows-[1fr_auto_1fr] gap-2 h-full inline-grid",
    },
    sizes: {
      xs: "border-t",
      sm: "border-t-2",
      md: "border-t-4",
      lg: "border-t-8",
      xl: "border-t-[12px]",
    },
    types: {
      solid: "border-solid",
      dashed: "border-dashed",
      dotted: "border-dotted",
    },
    line: "border-[var(--color-secondary-400)]",
    label: "px-2 font-semibold",
  },
};
