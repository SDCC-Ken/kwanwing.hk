// path: src/runtime/utils/textar./theme.ts

import { z } from "zod";
import type { AuiStyleName, AuiSize, AuiVariant } from "../types";

// Zod schema for type validation, now including sizes and variants
export const StyleConfig = z.object({
  root: z.string(),
  label: z.string(),
  textarea: z.string(),
  helpText: z.string(),
  sizes: z.record(z.custom<AuiSize>(), z.string()),
  variants: z.record(z.custom<AuiVariant>(), z.string()),
});
export type StyleConfig = z.infer<typeof StyleConfig>;

// Complete style mapping for all themes
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    root: "w-full",
    label: "block mb-1.5 text-sm font-medium text-[var(--color-text-200)]",
    textarea:
      "w-full min-h-[80px] rounded-lg border-2 bg-[var(--color-background-900)]/30 text-[var(--color-text-100)]/90 placeholder:text-[var(--color-text-100)]/40 backdrop-blur-sm transition-colors duration-200 focus:outline-none focus:ring-2",
    helpText: "mt-1.5 text-xs text-[var(--color-text-100)]/60",
    sizes: {
      xs: "p-1.5 text-xs",
      sm: "p-2 text-sm",
      md: "p-2.5 text-base",
      lg: "p-3 text-lg",
      xl: "p-3.5 text-xl",
    },
    variants: {
      neutral:
        "border-[var(--color-text-100)]/20 focus:border-[var(--color-primary-500)]/50 focus:ring-[var(--color-primary-400)]",
      primary:
        "border-[var(--color-primary-500)]/40 focus:border-[var(--color-primary-500)] focus:ring-[var(--color-primary-400)]",
      secondary:
        "border-[var(--color-secondary-500)]/40 focus:border-[var(--color-secondary-500)] focus:ring-[var(--color-secondary-400)]",
      success:
        "border-[var(--color-success-500)]/40 focus:border-[var(--color-success-500)] focus:ring-[var(--color-success-400)]",
      warning:
        "border-[var(--color-warning-500)]/40 focus:border-[var(--color-warning-500)] focus:ring-[var(--color-warning-400)]",
      info: "border-[var(--color-info-500)]/40 focus:border-[var(--color-info-500)] focus:ring-[var(--color-info-400)]",
      error:
        "border-[var(--color-danger-500)]/60 focus:border-[var(--color-danger-500)] focus:ring-[var(--color-danger-500)]/50",
    },
  },
  material: {
    root: "w-full",
    label: "block mb-1 text-sm font-medium text-[var(--color-secondary-700)]",
    textarea:
      "w-full min-h-[80px] rounded-md border border-[var(--color-secondary-300)] bg-[var(--color-background-100)] shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2",
    helpText: "mt-1 text-xs text-[var(--color-secondary-500)]",
    sizes: {
      xs: "p-1.5 text-xs",
      sm: "p-2 text-sm",
      md: "p-2.5 text-base",
      lg: "p-3 text-lg",
      xl: "p-3.5 text-xl",
    },
    variants: {
      neutral:
        "focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]",
      primary:
        "focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]",
      secondary:
        "focus:ring-[var(--color-secondary-500)] focus:border-[var(--color-secondary-500)]",
      success:
        "focus:ring-[var(--color-success-500)] focus:border-[var(--color-success-500)]",
      warning:
        "focus:ring-[var(--color-warning-500)] focus:border-[var(--color-warning-500)]",
      info: "focus:ring-[var(--color-info-500)] focus:border-[var(--color-info-500)]",
      error:
        "border-[var(--color-danger-500)] focus:ring-[var(--color-danger-500)] focus:border-[var(--color-danger-500)]",
    },
  },
  bootstrap: {
    root: "w-full",
    label: "block mb-1.5 text-sm font-medium",
    textarea:
      "w-full min-h-[80px] rounded-md border border-[var(--color-secondary-300)] shadow-sm transition-colors duration-200 focus:outline-none focus:ring-1",
    helpText: "mt-2 text-sm text-[var(--color-secondary-500)]",
    sizes: {
      xs: "p-1.5 text-xs",
      sm: "p-2 text-sm",
      md: "p-2.5 text-base",
      lg: "p-3 text-lg",
      xl: "p-3.5 text-xl",
    },
    variants: {
      neutral:
        "focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]",
      primary:
        "focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]",
      secondary:
        "focus:ring-[var(--color-secondary-500)] focus:border-[var(--color-secondary-500)]",
      success:
        "focus:ring-[var(--color-success-500)] focus:border-[var(--color-success-500)]",
      warning:
        "focus:ring-[var(--color-warning-500)] focus:border-[var(--color-warning-500)]",
      info: "focus:ring-[var(--color-info-500)] focus:border-[var(--color-info-500)]",
      error:
        "border-[var(--color-danger-500)] text-[var(--color-danger-900)] placeholder:text-[var(--color-danger-300)] focus:ring-[var(--color-danger-500)] focus:border-[var(--color-danger-500)]",
    },
  },
  windows: {
    root: "w-full",
    label: "block mb-1 text-sm font-semibold",
    textarea:
      "w-full min-h-[80px] rounded-none border-b-2 bg-[var(--color-background-100)] transition-colors duration-200 focus:outline-none",
    helpText: "mt-1 text-xs text-[var(--color-secondary-600)]",
    sizes: {
      xs: "p-1 text-xs",
      sm: "p-1.5 text-sm",
      md: "p-2 text-base",
      lg: "p-2.5 text-lg",
      xl: "p-3 text-xl",
    },
    variants: {
      neutral:
        "border-[var(--color-secondary-400)] focus:border-[var(--color-primary-600)]",
      primary:
        "border-[var(--color-primary-600)] focus:border-[var(--color-primary-700)]",
      secondary:
        "border-[var(--color-secondary-600)] focus:border-[var(--color-secondary-700)]",
      success:
        "border-[var(--color-success-600)] focus:border-[var(--color-success-700)]",
      warning:
        "border-[var(--color-warning-600)] focus:border-[var(--color-warning-700)]",
      info: "border-[var(--color-info-600)] focus:border-[var(--color-info-700)]",
      error: "border-[var(--color-danger-600)] bg-[var(--color-danger-100)]",
    },
  },
};
