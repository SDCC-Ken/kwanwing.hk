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
    sm: z.object({ horizontal: z.string(), vertical: z.string() }),
    md: z.object({ horizontal: z.string(), vertical: z.string() }),
    lg: z.object({ horizontal: z.string(), vertical: z.string() }),
  }),
  indicator: z.string(),
  indicatorIndeterminate: z.string(),
  animations: z.object({
    carousel: z.string(),
    pulse: z.string(),
    swing: z.string(),
  }),
  variants: z.object({
    primary: z.string(),
    secondary: z.string(),
    ghost: z.string(),
    link: z.string(),
    info: z.string(),
    success: z.string(),
    warning: z.string(),
    error: z.string(),
    neutral: z.string(),
  }),
});
export type StyleConfig = z.infer<typeof StyleConfig>;

// REFACTORED: All hardcoded colors have been replaced with CSS variables.
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    root: "relative rounded-full bg-[var(--color-background-900)]/30 border border-[var(--color-text-100)]/10 backdrop-blur-sm overflow-hidden",
    orientations: {
      horizontal: "w-full",
      vertical: "h-48",
    },
    sizes: {
      sm: { horizontal: "h-1.5", vertical: "w-1.5" },
      md: { horizontal: "h-2.5", vertical: "w-2.5" },
      lg: { horizontal: "h-4", vertical: "w-4" },
    },
    indicator:
      "bg-[var(--color-primary-500)]/80 transition-all duration-300 ease-out",
    indicatorIndeterminate: "bg-[var(--color-primary-500)]/80",
    animations: {
      carousel: "w-1/3 h-full animate-progress-carousel",
      pulse: "w-full h-full animate-pulse",
      swing: "w-1/4 h-full animate-progress-swing",
    },
    variants: {
      primary:
        "border-[var(--color-primary-400)]/30 bg-[var(--color-primary-500)]/20 text-[var(--color-primary-100)] hover:bg-[var(--color-primary-500)]/30 focus-visible:ring-[var(--color-primary-400)]",
      secondary:
        "border-[var(--color-secondary-400)]/30 bg-[var(--color-secondary-500)]/20 text-[var(--color-secondary-100)] hover:bg-[var(--color-secondary-500)]/30 focus-visible:ring-[var(--color-secondary-400)]",
      info: "border-[var(--color-primary-400)]/30 bg-[var(--color-primary-500)]/20 text-[var(--color-primary-100)] hover:bg-[var(--color-primary-500)]/30 focus-visible:ring-[var(--color-primary-400)]",
      success:
        "border-[var(--color-success-400)]/30 bg-[var(--color-success-500)]/20 text-[var(--color-success-100)] hover:bg-[var(--color-success-500)]/30 focus-visible:ring-[var(--color-success-400)]",
      warning:
        "border-[var(--color-warning-400)]/30 bg-[var(--color-warning-500)]/20 text-[var(--color-warning-100)] hover:bg-[var(--color-warning-500)]/30 focus-visible:ring-[var(--color-warning-400)]",
      error:
        "border-[var(--color-danger-400)]/30 bg-[var(--color-danger-500)]/20 text-[var(--color-danger-100)] hover:bg-[var(--color-danger-500)]/30 focus-visible:ring-[var(--color-danger-400)]",
      neutral:
        "border-[var(--color-text-100)]/20 bg-[var(--color-text-100)]/10 text-[var(--color-text-100)]/80 hover:bg-[var(--color-text-100)]/20 focus-visible:ring-[var(--color-text-100)]/80",
      ghost:
        "border-transparent text-[var(--color-text-100)]/80 hover:bg-[var(--color-text-100)]/10",
      link: "border-transparent text-[var(--color-primary-300)] hover:text-[var(--color-primary-200)] underline-offset-4 hover:underline",
    },
  },
  material: {
    root: "relative rounded-full bg-[var(--color-background-200)] overflow-hidden",
    orientations: {
      horizontal: "w-full",
      vertical: "h-48",
    },
    sizes: {
      sm: { horizontal: "h-1", vertical: "w-1" },
      md: { horizontal: "h-1.5", vertical: "w-1.5" },
      lg: { horizontal: "h-2", vertical: "w-2" },
    },
    indicator:
      "bg-[var(--color-primary-600)] transition-all duration-300 ease-out",
    indicatorIndeterminate: "bg-[var(--color-primary-600)]",
    animations: {
      carousel: "w-2/5 h-full animate-progress-carousel",
      pulse: "w-full h-full animate-pulse",
      swing: "w-1/3 h-full animate-progress-swing",
    },
    variants: {
      primary:
        "bg-[var(--color-primary-600)] text-[var(--color-text-100)] hover:bg-[var(--color-primary-700)]",
      secondary:
        "bg-[var(--color-secondary-600)] text-[var(--color-text-100)] hover:bg-[var(--color-secondary-700)]",
      info: "bg-[var(--color-primary-600)] text-[var(--color-text-100)] hover:bg-[var(--color-primary-700)]",
      success:
        "bg-[var(--color-success-600)] text-[var(--color-text-100)] hover:bg-[var(--color-success-700)]",
      warning:
        "bg-[var(--color-warning-600)] text-[var(--color-text-100)] hover:bg-[var(--color-warning-700)]",
      error:
        "bg-[var(--color-danger-600)] text-[var(--color-text-100)] hover:bg-[var(--color-danger-700)]",
      neutral:
        "bg-[var(--color-secondary-200)] text-[var(--color-secondary-800)] hover:bg-[var(--color-secondary-300)]",
      ghost:
        "text-[var(--color-primary-600)] hover:bg-[var(--color-primary-600)]/10 shadow-none",
      link: "text-[var(--color-primary-600)] hover:underline shadow-none",
    },
  },
  bootstrap: {
    root: "relative rounded-full bg-[var(--color-background-200)] overflow-hidden",
    orientations: {
      horizontal: "w-full",
      vertical: "h-48",
    },
    sizes: {
      sm: { horizontal: "h-2", vertical: "w-2" },
      md: { horizontal: "h-4", vertical: "w-4" },
      lg: { horizontal: "h-6", vertical: "w-6" },
    },
    indicator:
      "bg-[var(--color-primary-500)] transition-all duration-300 ease-out",
    indicatorIndeterminate: "bg-[var(--color-primary-500)]",
    animations: {
      carousel: "w-full h-full animate-progress-carousel-striped",
      pulse: "w-full h-full animate-pulse",
      swing: "w-1/3 h-full animate-progress-swing",
    },
    variants: {
      primary:
        "border-[var(--color-primary-500)] bg-[var(--color-primary-500)] text-[var(--color-text-100)] hover:bg-[var(--color-primary-600)] hover:border-[var(--color-primary-600)] focus:ring-[var(--color-primary-500)]",
      secondary:
        "border-[var(--color-secondary-500)] bg-[var(--color-secondary-500)] text-[var(--color-text-100)] hover:bg-[var(--color-secondary-600)] hover:border-[var(--color-secondary-600)] focus:ring-[var(--color-secondary-500)]",
      info: "border-[var(--color-primary-500)] bg-[var(--color-primary-500)] text-[var(--color-text-100)] hover:bg-[var(--color-primary-600)] hover:border-[var(--color-primary-600)] focus:ring-[var(--color-primary-500)]",
      success:
        "border-[var(--color-success-500)] bg-[var(--color-success-500)] text-[var(--color-text-100)] hover:bg-[var(--color-success-600)] hover:border-[var(--color-success-600)] focus:ring-[var(--color-success-500)]",
      warning:
        "border-[var(--color-warning-500)] bg-[var(--color-warning-500)] text-[var(--color-text-100)] hover:bg-[var(--color-warning-600)] hover:border-[var(--color-warning-600)] focus:ring-[var(--color-warning-500)]",
      error:
        "border-[var(--color-danger-500)] bg-[var(--color-danger-500)] text-[var(--color-text-100)] hover:bg-[var(--color-danger-600)] hover:border-[var(--color-danger-600)] focus:ring-[var(--color-danger-500)]",
      neutral:
        "border-[var(--color-secondary-300)] bg-[var(--color-background-500)] text-[var(--color-text-700)] hover:bg-[var(--color-background-100)] focus:ring-[var(--color-secondary-400)]",
      ghost:
        "border-transparent text-[var(--color-primary-500)] hover:bg-[var(--color-primary-100)] focus:ring-[var(--color-primary-500)]",
      link: "border-transparent text-[var(--color-primary-500)] underline hover:text-[var(--color-primary-700)] focus:ring-[var(--color-primary-500)]",
    },
  },
  windows: {
    root: "relative bg-[var(--color-secondary-300)] overflow-hidden",
    orientations: {
      horizontal: "w-full",
      vertical: "h-48",
    },
    sizes: {
      sm: { horizontal: "h-0.5", vertical: "w-0.5" },
      md: { horizontal: "h-1", vertical: "w-1" },
      lg: { horizontal: "h-1.5", vertical: "w-1.5" },
    },
    indicator:
      "bg-[var(--color-primary-600)] transition-all duration-300 ease-out",
    indicatorIndeterminate: "bg-[var(--color-primary-600)]",
    animations: {
      carousel: "w-1/4 h-full animate-progress-carousel",
      pulse: "w-full h-full animate-pulse",
      swing: "w-1/5 h-full animate-progress-swing",
    },
    variants: {
      primary:
        "border-transparent bg-[var(--color-primary-600)] text-[var(--color-text-100)] hover:bg-[var(--color-primary-700)] focus:ring-[var(--color-primary-500)]",
      secondary:
        "border-transparent bg-[var(--color-secondary-600)] text-[var(--color-text-100)] hover:bg-[var(--color-secondary-700)] focus:ring-[var(--color-secondary-500)]",
      info: "border-transparent bg-[var(--color-primary-600)] text-[var(--color-text-100)] hover:bg-[var(--color-primary-700)] focus:ring-[var(--color-primary-500)]",
      success:
        "border-transparent bg-[var(--color-success-600)] text-[var(--color-text-100)] hover:bg-[var(--color-success-700)] focus:ring-[var(--color-success-500)]",
      warning:
        "border-transparent bg-[var(--color-warning-600)] text-[var(--color-text-100)] hover:bg-[var(--color-warning-700)] focus:ring-[var(--color-warning-500)]",
      error:
        "border-transparent bg-[var(--color-danger-600)] text-[var(--color-text-100)] hover:bg-[var(--color-danger-700)] focus:ring-[var(--color-danger-500)]",
      neutral:
        "border-[var(--color-secondary-300)] bg-[var(--color-background-500)] text-[var(--color-text-900)] hover:bg-[var(--color-background-100)] focus:ring-[var(--color-secondary-400)]",
      ghost:
        "border-transparent text-[var(--color-text-900)] hover:bg-[var(--color-background-100)] focus:ring-[var(--color-secondary-400)]",
      link: "border-transparent text-[var(--color-primary-600)] underline hover:bg-[var(--color-background-100)] focus:ring-[var(--color-primary-500)]",
    },
  },
};
