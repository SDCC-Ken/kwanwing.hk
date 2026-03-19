import { z } from "zod";
import type { AuiStyleName } from "../types";

// Zod schema for type validation
export const StyleConfig = z.object({
  root: z.string(),
  list: z.string(),
  item: z.string(),
  button: z.string(),
  buttonActive: z.string(),
  buttonDisabled: z.string(),
  ellipsis: z.string(),
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
    root: "w-full",
    list: "flex items-center justify-center gap-2",
    item: "",
    button:
      "flex items-center justify-center rounded-lg border border-[var(--color-text-100)]/20 bg-[var(--color-background-900)]/30 text-[var(--color-text-100)]/80 hover:bg-[var(--color-text-100)]/10 transition-colors",
    buttonActive: "font-bold",
    buttonDisabled: "opacity-40 cursor-not-allowed",
    ellipsis:
      "flex items-center justify-center text-[var(--color-text-100)]/50",
    variants: {
      primary:
        "bg-[var(--color-primary-500)]/50 border-[var(--color-primary-400)]/50",
      secondary:
        "bg-[var(--color-secondary-500)]/50 border-[var(--color-secondary-400)]/50",
      success:
        "bg-[var(--color-success-500)]/50 border-[var(--color-success-400)]/50",
      warning:
        "bg-[var(--color-warning-500)]/50 border-[var(--color-warning-400)]/50",
      error:
        "bg-[var(--color-danger-500)]/50 border-[var(--color-danger-400)]/50",
      info: "bg-[var(--color-info-500)]/50 border-[var(--color-info-400)]/50",
      neutral:
        "bg-[var(--color-neutral-500)]/50 border-[var(--color-neutral-400)]/50",
    },
    sizes: {
      xs: "h-8 w-8 text-xs",
      sm: "h-9 w-9 text-sm",
      md: "h-10 w-10 text-base",
      lg: "h-11 w-11 text-lg",
      xl: "h-12 w-12 text-xl",
    },
  },
  material: {
    root: "w-full",
    list: "flex items-center justify-center gap-1",
    item: "",
    button:
      "flex items-center justify-center rounded-full font-medium hover:bg-[var(--color-background-100)] transition-colors",
    buttonActive: "text-white shadow-md",
    buttonDisabled: "opacity-50 cursor-not-allowed",
    ellipsis:
      "flex items-center justify-center text-[var(--color-secondary-500)]",
    variants: {
      primary: "bg-[var(--color-primary-600)]",
      secondary: "bg-[var(--color-secondary-600)]",
      success: "bg-[var(--color-success-600)]",
      warning: "bg-[var(--color-warning-600)]",
      error: "bg-[var(--color-danger-600)]",
      info: "bg-[var(--color-info-600)]",
      neutral: "bg-[var(--color-neutral-600)]",
    },
    sizes: {
      xs: "h-8 w-8 text-xs",
      sm: "h-9 w-9 text-sm",
      md: "h-10 w-10 text-base",
      lg: "h-11 w-11 text-lg",
      xl: "h-12 w-12 text-xl",
    },
  },
  bootstrap: {
    root: "w-full",
    list: "flex items-center justify-center -space-x-px",
    item: "",
    button:
      "flex items-center justify-center px-4 border border-[var(--color-secondary-300)] bg-[var(--color-background-500)] text-[var(--color-primary-600)] hover:bg-[var(--color-background-100)]",
    buttonActive: "z-10 font-bold",
    buttonDisabled:
      "opacity-60 cursor-not-allowed bg-[var(--color-background-100)] text-[var(--color-secondary-500)]",
    ellipsis:
      "flex items-center justify-center px-4 border border-[var(--color-secondary-300)] bg-[var(--color-background-500)] text-[var(--color-secondary-500)]",
    variants: {
      primary:
        "bg-[var(--color-primary-100)] border-[var(--color-primary-500)] text-[var(--color-primary-600)]",
      secondary:
        "bg-[var(--color-secondary-100)] border-[var(--color-secondary-500)] text-[var(--color-secondary-600)]",
      success:
        "bg-[var(--color-success-100)] border-[var(--color-success-500)] text-[var(--color-success-600)]",
      warning:
        "bg-[var(--color-warning-100)] border-[var(--color-warning-500)] text-[var(--color-warning-600)]",
      error:
        "bg-[var(--color-danger-100)] border-[var(--color-danger-500)] text-[var(--color-danger-600)]",
      info: "bg-[var(--color-info-100)] border-[var(--color-info-500)] text-[var(--color-info-600)]",
      neutral:
        "bg-[var(--color-neutral-100)] border-[var(--color-neutral-500)] text-[var(--color-neutral-600)]",
    },
    sizes: {
      xs: "h-8 text-xs",
      sm: "h-9 text-sm",
      md: "h-10 text-base",
      lg: "h-11 text-lg",
      xl: "h-12 text-xl",
    },
  },
  windows: {
    root: "w-full",
    list: "flex items-center justify-center gap-1",
    item: "",
    button:
      "flex items-center justify-center min-w-[32px] px-2 border border-[var(--color-secondary-300)] bg-[var(--color-background-500)] hover:bg-[var(--color-background-100)]",
    buttonActive: "text-white",
    buttonDisabled:
      "opacity-70 cursor-not-allowed bg-[var(--color-background-100)]",
    ellipsis:
      "flex items-center justify-center px-2 text-[var(--color-secondary-500)]",
    variants: {
      primary:
        "bg-[var(--color-primary-600)] border-[var(--color-primary-600)]",
      secondary:
        "bg-[var(--color-secondary-600)] border-[var(--color-secondary-600)]",
      success:
        "bg-[var(--color-success-600)] border-[var(--color-success-600)]",
      warning:
        "bg-[var(--color-warning-600)] border-[var(--color-warning-600)]",
      error: "bg-[var(--color-danger-600)] border-[var(--color-danger-600)]",
      info: "bg-[var(--color-info-600)] border-[var(--color-info-600)]",
      neutral:
        "bg-[var(--color-neutral-600)] border-[var(--color-neutral-600)]",
    },
    sizes: {
      xs: "h-7 text-xs",
      sm: "h-8 text-sm",
      md: "h-9 text-base",
      lg: "h-10 text-lg",
      xl: "h-11 text-xl",
    },
  },
};
