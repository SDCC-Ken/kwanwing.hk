// aui-input theme
import { z } from "zod";
import type { AuiStyleName } from "../types";

// Zod schema for type validation
export const StyleConfig = z.object({
  root: z.string(),
  label: z.string(),
  inputContainer: z.string(),
  input: z.string(),
  icon: z.string(),
  inputWithLeftIcon: z.string(),
  inputWithRightIcon: z.string(),
  helpText: z.string(),
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
    root: "w-full",
    label:
      "block mb-1 ml-2 text-xs text-left font-medium text-[var(--color-text-100)]",
    inputContainer: "relative",
    input:
      "w-full rounded-lg border-2 bg-[var(--color-background-900)]/30 text-[var(--color-text-100)]/90 placeholder:text-[var(--color-text-100)]/40 backdrop-blur-sm transition-colors duration-200 focus:outline-none",
    icon: "absolute top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--color-text-100)]/50",
    inputWithLeftIcon: "pl-10",
    inputWithRightIcon: "pr-10",
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
        "border-[var(--color-text-100)]/20 focus:border-[var(--color-primary-500)]/50 focus:ring-2 focus:ring-[var(--color-primary-400)]",
      primary:
        "border-[var(--color-primary-500)]/60 focus:border-[var(--color-primary-500)]/60 focus:ring-[var(--color-primary-500)]/50",
      secondary:
        "border-[var(--color-secondary-500)]/60 focus:border-[var(--color-secondary-500)]/60 focus:ring-[var(--color-secondary-500)]/50",
      success:
        "border-[var(--color-success-500)]/60 focus:border-[var(--color-success-500)]/60 focus:ring-[var(--color-success-500)]/50",
      warning:
        "border-[var(--color-warning-500)]/60 focus:border-[var(--color-warning-500)]/60 focus:ring-[var(--color-warning-500)]/50",
      error:
        "border-[var(--color-danger-500)]/60 focus:border-[var(--color-danger-500)]/60 focus:ring-[var(--color-danger-500)]/50",
      info: "border-[var(--color-primary-500)]/60 focus:border-[var(--color-primary-500)]/60 focus:ring-[var(--color-primary-500)]/50",
    },
  },
  material: {
    root: "w-full",
    label: "block mb-1 text-sm font-medium text-[var(--color-secondary-700)]",
    inputContainer: "relative",
    input:
      "w-full rounded-md border bg-[var(--color-background-100)] shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2",
    icon: "absolute top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--color-secondary-400)]",
    inputWithLeftIcon: "pl-10",
    inputWithRightIcon: "pr-10",
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
        "border-[var(--color-secondary-300)] focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]",
      primary:
        "border-[var(--color-primary-500)] focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]",
      secondary:
        "border-[var(--color-secondary-500)] focus:ring-[var(--color-secondary-500)] focus:border-[var(--color-secondary-500)]",
      success:
        "border-[var(--color-success-500)] focus:ring-[var(--color-success-500)] focus:border-[var(--color-success-500)]",
      warning:
        "border-[var(--color-warning-500)] focus:ring-[var(--color-warning-500)] focus:border-[var(--color-warning-500)]",
      error:
        "border-[var(--color-danger-500)] focus:ring-[var(--color-danger-500)] focus:border-[var(--color-danger-500)]",
      info: "border-[var(--color-primary-500)] focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]",
    },
  },
  bootstrap: {
    root: "w-full",
    label: "block mb-1.5 text-sm font-medium",
    inputContainer: "relative",
    input:
      "w-full rounded-md border shadow-sm transition-colors duration-200 focus:outline-none focus:ring-1",
    icon: "absolute top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--color-secondary-400)]",
    inputWithLeftIcon: "pl-10",
    inputWithRightIcon: "pr-10",
    helpText: "mt-2 text-sm text-[var(--color-secondary-500)]",
    sizes: {
      xs: "p-1 text-xs",
      sm: "p-1.5 text-sm",
      md: "p-2 text-base",
      lg: "p-2.5 text-lg",
      xl: "p-3 text-xl",
    },
    variants: {
      neutral:
        "border-[var(--color-secondary-300)] focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]",
      primary:
        "border-[var(--color-primary-500)] focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]",
      secondary:
        "border-[var(--color-secondary-500)] focus:ring-[var(--color-secondary-500)] focus:border-[var(--color-secondary-500)]",
      success:
        "border-[var(--color-success-500)] focus:ring-[var(--color-success-500)] focus:border-[var(--color-success-500)]",
      warning:
        "border-[var(--color-warning-500)] focus:ring-[var(--color-warning-500)] focus:border-[var(--color-warning-500)]",
      error:
        "border-[var(--color-danger-500)] text-[var(--color-danger-900)] placeholder:text-[var(--color-danger-300)] focus:ring-[var(--color-danger-500)] focus:border-[var(--color-danger-500)]",
      info: "border-[var(--color-primary-500)] focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]",
    },
  },
  windows: {
    root: "w-full",
    label: "block mb-1 text-sm font-semibold",
    inputContainer: "relative",
    input:
      "w-full rounded-none border-b-2 bg-[var(--color-background-100)] transition-colors duration-200 focus:outline-none",
    icon: "absolute top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--color-secondary-500)]",
    inputWithLeftIcon: "pl-9",
    inputWithRightIcon: "pr-9",
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
        "border-[var(--color-primary-600)] focus:border-[var(--color-primary-600)]",
      secondary:
        "border-[var(--color-secondary-600)] focus:border-[var(--color-secondary-600)]",
      success:
        "border-[var(--color-success-600)] focus:border-[var(--color-success-600)]",
      warning:
        "border-[var(--color-warning-600)] focus:border-[var(--color-warning-600)]",
      error: "border-[var(--color-danger-600)] bg-[var(--color-danger-100)]",
      info: "border-[var(--color-primary-600)] focus:border-[var(--color-primary-600)]",
    },
  },
};
