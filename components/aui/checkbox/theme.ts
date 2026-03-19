import { z } from "zod";
import type { AuiStyleName } from "../types";

// Zod schema for type validation
export const StyleConfig = z.object({
  root: z.string(),
  input: z.string(),
  box: z.string(),
  indicator: z.string(),
  label: z.string(),
  sizes: z.object({
    xs: z.object({ box: z.string(), label: z.string() }),
    sm: z.object({ box: z.string(), label: z.string() }),
    md: z.object({ box: z.string(), label: z.string() }),
    lg: z.object({ box: z.string(), label: z.string() }),
    xl: z.object({ box: z.string(), label: z.string() }),
  }),
  variants: z.object({
    primary: z.string(),
    secondary: z.string(),
    success: z.string(),
    warning: z.string(),
    error: z.string(),
    info: z.string(),
    neutral: z.string(),
  }),
});
export type StyleConfig = z.infer<typeof StyleConfig>;

// REFACTORED: All hardcoded colors have been replaced with CSS variables.
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    root: "relative flex items-center gap-3 cursor-pointer select-none text-[var(--color-text-100)]/90",
    input: "peer sr-only",
    box: "rounded-md border-2 bg-[var(--color-background-900)]/20 backdrop-blur-sm transition-colors",
    indicator:
      "h-full w-full text-white opacity-0 peer-checked:opacity-100 transition-opacity",
    label: "font-medium",
    sizes: {
      xs: { box: "h-4 w-4", label: "text-xs" },
      sm: { box: "h-5 w-5", label: "text-sm" },
      md: { box: "h-6 w-6", label: "text-base" },
      lg: { box: "h-7 w-7", label: "text-lg" },
      xl: { box: "h-8 w-8", label: "text-xl" },
    },
    variants: {
      primary:
        "border-[var(--color-primary-400)]/50 peer-checked:bg-[var(--color-primary-500)]/50",
      secondary:
        "border-[var(--color-secondary-400)]/50 peer-checked:bg-[var(--color-secondary-500)]/50",
      success:
        "border-[var(--color-success-400)]/50 peer-checked:bg-[var(--color-success-500)]/50",
      warning:
        "border-[var(--color-warning-400)]/50 peer-checked:bg-[var(--color-warning-500)]/50",
      error:
        "border-[var(--color-danger-400)]/50 peer-checked:bg-[var(--color-danger-500)]/50",
      info: "border-[var(--color-primary-400)]/50 peer-checked:bg-[var(--color-primary-500)]/50",
      neutral:
        "border-[var(--color-text-100)]/30 peer-checked:bg-[var(--color-text-100)]/50",
    },
  },
  material: {
    root: "relative inline-flex items-center gap-2 cursor-pointer select-none text-[var(--color-text-800)]",
    input: "peer sr-only",
    box: "rounded border-2 transition-colors",
    indicator:
      "h-full w-full text-white transform scale-0 peer-checked:scale-100 transition-transform duration-150",
    label: "font-medium",
    sizes: {
      xs: { box: "h-4 w-4", label: "text-xs" },
      sm: { box: "h-5 w-5", label: "text-sm" },
      md: { box: "h-6 w-6", label: "text-base" },
      lg: { box: "h-7 w-7", label: "text-lg" },
      xl: { box: "h-8 w-8", label: "text-xl" },
    },
    variants: {
      primary:
        "border-[var(--color-primary-600)] peer-checked:bg-[var(--color-primary-600)]",
      secondary:
        "border-[var(--color-secondary-600)] peer-checked:bg-[var(--color-secondary-600)]",
      success:
        "border-[var(--color-success-600)] peer-checked:bg-[var(--color-success-600)]",
      warning:
        "border-[var(--color-warning-600)] peer-checked:bg-[var(--color-warning-600)]",
      error:
        "border-[var(--color-danger-600)] peer-checked:bg-[var(--color-danger-600)]",
      info: "border-[var(--color-primary-600)] peer-checked:bg-[var(--color-primary-600)]",
      neutral:
        "border-[var(--color-secondary-400)] peer-checked:bg-[var(--color-secondary-600)]",
    },
  },
  bootstrap: {
    root: "relative flex items-center gap-2 cursor-pointer select-none",
    input: "peer sr-only",
    box: "shrink-0 rounded-sm border transition-colors",
    indicator: "h-full w-full text-white opacity-0 peer-checked:opacity-100",
    label: "",
    sizes: {
      xs: { box: "h-3 w-3", label: "text-xs" },
      sm: { box: "h-4 w-4", label: "text-sm" },
      md: { box: "h-5 w-5", label: "text-base" },
      lg: { box: "h-6 w-6", label: "text-lg" },
      xl: { box: "h-7 w-7", label: "text-xl" },
    },
    variants: {
      primary:
        "border-[var(--color-primary-500)] peer-checked:bg-[var(--color-primary-500)]",
      secondary:
        "border-[var(--color-secondary-500)] peer-checked:bg-[var(--color-secondary-500)]",
      success:
        "border-[var(--color-success-500)] peer-checked:bg-[var(--color-success-500)]",
      warning:
        "border-[var(--color-warning-500)] peer-checked:bg-[var(--color-warning-500)]",
      error:
        "border-[var(--color-danger-500)] peer-checked:bg-[var(--color-danger-500)]",
      info: "border-[var(--color-primary-500)] peer-checked:bg-[var(--color-primary-500)]",
      neutral:
        "border-[var(--color-secondary-400)] peer-checked:bg-[var(--color-secondary-500)]",
    },
  },
  windows: {
    root: "relative flex items-center gap-2 cursor-pointer select-none",
    input: "peer sr-only",
    box: "rounded-sm border-2 bg-white transition-colors",
    indicator: "h-full w-full text-white opacity-0 peer-checked:opacity-100",
    label: "text-sm",
    sizes: {
      xs: { box: "h-4 w-4", label: "text-xs" },
      sm: { box: "h-5 w-5", label: "text-sm" },
      md: { box: "h-6 w-6", label: "text-base" },
      lg: { box: "h-7 w-7", label: "text-lg" },
      xl: { box: "h-8 w-8", label: "text-xl" },
    },
    variants: {
      primary:
        "border-[var(--color-primary-600)] peer-checked:bg-[var(--color-primary-600)]",
      secondary:
        "border-[var(--color-secondary-600)] peer-checked:bg-[var(--color-secondary-600)]",
      success:
        "border-[var(--color-success-600)] peer-checked:bg-[var(--color-success-600)]",
      warning:
        "border-[var(--color-warning-600)] peer-checked:bg-[var(--color-warning-600)]",
      error:
        "border-[var(--color-danger-600)] peer-checked:bg-[var(--color-danger-600)]",
      info: "border-[var(--color-primary-600)] peer-checked:bg-[var(--color-primary-600)]",
      neutral:
        "border-[var(--color-secondary-600)] peer-checked:bg-[var(--color-secondary-600)]",
    },
  },
};
