import { z } from "zod";
import type { AuiStyleName } from "../types";

// Zod schema for type validation
export const StyleConfig = z.object({
  base: z.string(),
  sizes: z.object({
    xs: z.string(),
    sm: z.string(),
    md: z.string(),
    lg: z.string(),
    xl: z.string(),
  }),
  variants: z.object({
    neutral: z.string(),
    primary: z.string(),
    secondary: z.string(),
    success: z.string(),
    warning: z.string(),
    error: z.string(),
    info: z.string(),
  }),
});
export type StyleConfig = z.infer<typeof StyleConfig>;

// REFACTORED: All hardcoded colors have been replaced with CSS variables.
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    base: "inline-flex items-center font-medium border",
    sizes: {
      xs: "px-1.5 py-0.5 text-xs rounded-md",
      sm: "px-2 py-0.5 text-xs rounded-md",
      md: "px-2.5 py-0.5 text-sm rounded-lg",
      lg: "px-3 py-1 text-base rounded-lg",
      xl: "px-3.5 py-1.5 text-lg rounded-lg",
    },
    variants: {
      neutral:
        "border-[var(--color-secondary-500)]/30 bg-[var(--color-secondary-500)]/10 text-[var(--color-secondary-100)]",
      primary:
        "border-[var(--color-primary-500)]/30 bg-[var(--color-primary-500)]/10 text-[var(--color-primary-100)]",
      secondary:
        "border-[var(--color-secondary-500)]/30 bg-[var(--color-secondary-500)]/10 text-[var(--color-secondary-100)]",
      success:
        "border-[var(--color-success-500)]/30 bg-[var(--color-success-500)]/10 text-[var(--color-success-100)]",
      warning:
        "border-[var(--color-warning-500)]/30 bg-[var(--color-warning-500)]/10 text-[var(--color-warning-100)]",
      error:
        "border-[var(--color-danger-500)]/30 bg-[var(--color-danger-500)]/10 text-[var(--color-danger-100)]",
      info: "border-[var(--color-primary-500)]/30 bg-[var(--color-primary-500)]/10 text-[var(--color-primary-100)]",
    },
  },
  material: {
    base: "inline-flex items-center font-bold uppercase tracking-wide",
    sizes: {
      xs: "px-1 py-0.5 text-[10px] rounded",
      sm: "px-1.5 py-0.5 text-[10px] rounded",
      md: "px-2 py-1 text-xs rounded",
      lg: "px-2.5 py-1.5 text-sm rounded-md",
      xl: "px-3 py-2 text-base rounded-md",
    },
    variants: {
      neutral:
        "bg-[var(--color-secondary-200)] text-[var(--color-secondary-800)]",
      primary: "bg-[var(--color-primary-600)] text-[var(--color-text-100)]",
      secondary: "bg-[var(--color-secondary-600)] text-[var(--color-text-100)]",
      success: "bg-[var(--color-success-600)] text-[var(--color-text-100)]",
      warning: "bg-[var(--color-warning-500)] text-[var(--color-text-900)]",
      error: "bg-[var(--color-danger-600)] text-[var(--color-text-100)]",
      info: "bg-[var(--color-primary-600)] text-[var(--color-text-100)]",
    },
  },
  bootstrap: {
    base: "inline-flex items-center font-semibold",
    sizes: {
      xs: "px-1.5 py-1 text-xs rounded-full",
      sm: "px-2 py-1 text-xs rounded-full",
      md: "px-2.5 py-1.5 text-sm rounded-full",
      lg: "px-3 py-2 text-base rounded-full",
      xl: "px-3.5 py-2.5 text-lg rounded-full",
    },
    variants: {
      neutral: "bg-[var(--color-secondary-500)] text-[var(--color-text-100)]",
      primary: "bg-[var(--color-primary-500)] text-[var(--color-text-100)]",
      secondary: "bg-[var(--color-secondary-500)] text-[var(--color-text-100)]",
      success: "bg-[var(--color-success-500)] text-[var(--color-text-100)]",
      warning: "bg-[var(--color-warning-500)] text-[var(--color-text-900)]",
      error: "bg-[var(--color-danger-500)] text-[var(--color-text-100)]",
      info: "bg-[var(--color-primary-500)] text-[var(--color-text-100)]",
    },
  },
  windows: {
    base: "inline-flex items-center font-semibold border",
    sizes: {
      xs: "px-1.5 py-0.5 text-xs rounded-sm",
      sm: "px-2 py-0.5 text-xs rounded-sm",
      md: "px-2.5 py-0.5 text-sm rounded",
      lg: "px-3 py-1 text-base rounded",
      xl: "px-3.5 py-1.5 text-lg rounded",
    },
    variants: {
      neutral:
        "bg-[var(--color-background-100)] border-[var(--color-secondary-300)] text-[var(--color-secondary-800)]",
      primary:
        "bg-[var(--color-primary-100)] border-[var(--color-primary-300)] text-[var(--color-primary-800)]",
      secondary:
        "bg-[var(--color-secondary-100)] border-[var(--color-secondary-300)] text-[var(--color-secondary-800)]",
      success:
        "bg-[var(--color-success-100)] border-[var(--color-success-300)] text-[var(--color-success-800)]",
      warning:
        "bg-[var(--color-warning-100)] border-[var(--color-warning-300)] text-[var(--color-warning-800)]",
      error:
        "bg-[var(--color-danger-100)] border-[var(--color-danger-300)] text-[var(--color-danger-800)]",
      info: "bg-[var(--color-primary-100)] border-[var(--color-primary-300)] text-[var(--color-primary-800)]",
    },
  },
};
