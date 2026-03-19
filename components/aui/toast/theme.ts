import { z } from "zod";
import type { AuiStyleName } from "../types";

// Zod schema for type validation
export const StyleConfig = z.object({
  root: z.string(),
  toast: z.string(),
  title: z.string(),
  description: z.string(),
  closeButton: z.string(),
  variants: z.object({
    error: z.string(),
    primary: z.string(),
    secondary: z.string(),
    success: z.string(),
    info: z.string(),
    warning: z.string(),
    neutral: z.string(),
  }),
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
    root: "fixed z-50 p-4 w-full max-w-sm fhd:max-w-md 2k:max-w-lg 4k:max-w-xl",
    toast:
      "w-full rounded-xl border bg-[var(--color-background-900)]/50 text-[var(--color-text-100)]/90 shadow-2xl backdrop-blur-xl flex items-start gap-3",
    title: "font-semibold",
    description: "text-sm text-[var(--color-text-100)]/70",
    closeButton:
      "ml-auto flex-shrink-0 p-1 rounded-full hover:bg-[var(--color-text-100)]/10",
    variants: {
      primary: "border-[var(--color-primary-400)]/30",
      secondary: "border-[var(--color-secondary-400)]/30",
      success: "border-[var(--color-success-400)]/30",
      warning: "border-[var(--color-warning-400)]/30",
      error: "border-[var(--color-danger-400)]/30",
      info: "border-[var(--color-info-400)]/30",
      neutral: "border-[var(--color-background-400)]/30",
    },
    sizes: {
      xs: "p-2",
      sm: "p-3",
      md: "p-4",
      lg: "p-5",
      xl: "p-6",
    },
  },
  material: {
    root: "fixed z-50 p-4 w-full max-w-sm fhd:max-w-md 2k:max-w-lg 4k:max-w-xl",
    toast: "w-full rounded-lg text-white shadow-2xl flex items-center gap-4",
    title: "font-medium",
    description: "text-sm opacity-80",
    closeButton: "ml-auto flex-shrink-0 p-1.5 rounded-full hover:bg-white/10",
    variants: {
      primary: "bg-[var(--color-primary-700)]",
      secondary: "bg-[var(--color-secondary-800)]",
      success: "bg-[var(--color-success-600)]",
      warning: "bg-[var(--color-warning-500)]",
      error: "bg-[var(--color-danger-700)]",
      info: "bg-[var(--color-info-700)]",
      neutral: "bg-[var(--color-neutral-700)]",
    },
    sizes: {
      xs: "p-2",
      sm: "p-3",
      md: "p-4",
      lg: "p-5",
      xl: "p-6",
    },
  },
  bootstrap: {
    root: "fixed z-50 p-4 w-full max-w-md fhd:max-w-lg 2k:max-w-xl 4k:max-w-2xl",
    toast: "w-full rounded-lg border shadow-lg flex items-start gap-4",
    title: "font-bold",
    description: "text-sm",
    closeButton: "ml-auto flex-shrink-0 opacity-70 hover:opacity-100",
    variants: {
      primary:
        "bg-[var(--color-primary-100)] border-[var(--color-primary-200)] text-[var(--color-primary-800)]",
      secondary:
        "bg-[var(--color-secondary-100)] border-[var(--color-secondary-200)] text-[var(--color-secondary-800)]",
      success:
        "bg-[var(--color-success-100)] border-[var(--color-success-200)] text-[var(--color-success-800)]",
      warning:
        "bg-[var(--color-warning-100)] border-[var(--color-warning-200)] text-[var(--color-warning-800)]",
      error:
        "bg-[var(--color-danger-100)] border-[var(--color-danger-200)] text-[var(--color-danger-800)]",
      info: "bg-[var(--color-info-100)] border-[var(--color-info-200)] text-[var(--color-info-800)]",
      neutral:
        "bg-[var(--color-neutral-100)] border-[var(--color-neutral-200)] text-[var(--color-neutral-800)]",
    },
    sizes: {
      xs: "p-2",
      sm: "p-3",
      md: "p-4",
      lg: "p-5",
      xl: "p-6",
    },
  },
  windows: {
    root: "fixed z-50 p-4 w-full max-w-sm fhd:max-w-md 2k:max-w-lg 4k:max-w-xl",
    toast:
      "w-full rounded-sm bg-[var(--color-background-500)] border border-[var(--color-secondary-300)] shadow-lg flex items-start gap-3",
    title: "font-semibold",
    description: "text-sm",
    closeButton:
      "ml-auto flex-shrink-0 p-1 hover:bg-[var(--color-background-100)]",
    variants: {
      primary:
        "bg-[var(--color-primary-100)] border-[var(--color-primary-300)]",
      secondary:
        "bg-[var(--color-secondary-100)] border-[var(--color-secondary-300)]",
      success:
        "bg-[var(--color-success-100)] border-[var(--color-success-300)]",
      warning:
        "bg-[var(--color-warning-100)] border-[var(--color-warning-300)]",
      error: "bg-[var(--color-danger-100)] border-[var(--color-danger-300)]",
      info: "bg-[var(--color-info-100)] border-[var(--color-info-300)]",
      neutral:
        "bg-[var(--color-neutral-100)] border-[var(--color-neutral-300)]",
    },
    sizes: {
      xs: "p-2",
      sm: "p-3",
      md: "p-4",
      lg: "p-5",
      xl: "p-6",
    },
  },
};
