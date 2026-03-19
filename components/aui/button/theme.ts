// aui-button/theme
import { z } from "zod";
import type { AuiStyleName } from "../types";

// Zod schema for type validation
export const StyleConfig = z.object({
  base: z.string(),
  disabled: z.string(),
  sizes: z.object({
    xs: z.string(),
    sm: z.string(),
    md: z.string(),
    lg: z.string(),
    xl: z.string(),
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

// REFACTORED: Now using semantic Tailwind classes mapped in tailwind.css
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    base: "inline-flex items-center justify-center rounded-btn border font-semibold tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black/20",
    disabled: "opacity-50 cursor-not-allowed",
    sizes: {
      xs: "px-2 py-1 text-xs",
      sm: "px-3 py-1.5 text-xs",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
      xl: "px-8 py-4 text-lg",
    },
    variants: {
      primary:
        "border-btn-primary bg-btn-primary text-btn-primary hover:bg-btn-primary-border/40 focus-visible:ring-btn-primary-border",
      secondary:
        "border-btn-secondary bg-btn-secondary text-btn-secondary hover:bg-btn-secondary-border/40 focus-visible:ring-btn-secondary-border",
      info: "border-btn-primary bg-btn-primary text-btn-primary hover:bg-btn-primary-border/40 focus-visible:ring-btn-primary-border",
      success:
        "border-btn-success bg-btn-success text-btn-success hover:bg-btn-success-border/40 focus-visible:ring-btn-success-border",
      warning:
        "border-btn-warning bg-btn-warning text-btn-warning hover:bg-btn-warning-border/40 focus-visible:ring-btn-warning-border",
      error:
        "border-btn-error bg-btn-error text-btn-error hover:bg-btn-error-border/40 focus-visible:ring-btn-error-border",
      neutral:
        "border-btn-neutral bg-btn-neutral text-btn-neutral hover:bg-btn-neutral-border/30 focus-visible:ring-btn-neutral-border",
      ghost:
        "border-transparent text-main/80 hover:bg-main/10",
      link: "border-transparent text-primary-300 hover:text-primary-200 underline-offset-4 hover:underline",
    },
  },
  material: {
    base: "inline-flex items-center justify-center rounded-btn font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-shadow duration-200 focus:outline-none",
    disabled: "opacity-60 cursor-not-allowed shadow-none",
    sizes: {
      xs: "px-2 py-1 text-xs",
      sm: "px-3 py-1.5 text-xs",
      md: "px-4 py-2 text-sm",
      lg: "px-5 py-2.5 text-sm",
      xl: "px-6 py-3 text-base",
    },
    variants: {
      primary:
        "bg-btn-primary text-btn-primary hover:bg-primary-700",
      secondary:
        "bg-btn-secondary text-btn-secondary hover:bg-secondary-700",
      info: "bg-btn-primary text-btn-primary hover:bg-primary-700",
      success:
        "bg-btn-success text-btn-success hover:bg-success-700",
      warning:
        "bg-btn-warning text-btn-warning hover:bg-warning-700",
      error:
        "bg-btn-error text-btn-error hover:bg-danger-700",
      neutral:
        "bg-btn-neutral text-btn-neutral hover:bg-secondary-300",
      ghost:
        "text-btn-primary hover:bg-btn-primary/10 shadow-none",
      link: "text-btn-primary hover:underline shadow-none",
    },
  },
  bootstrap: {
    base: "inline-flex items-center justify-center rounded-btn border font-medium transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2",
    disabled: "opacity-65 cursor-not-allowed",
    sizes: {
      xs: "px-2 py-1 text-sm",
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-5 py-2.5 text-lg",
      xl: "px-6 py-3 text-xl",
    },
    variants: {
      primary:
        "border-btn-primary bg-btn-primary text-btn-primary hover:bg-primary-600 hover:border-primary-600 focus:ring-primary-500",
      secondary:
        "border-btn-secondary bg-btn-secondary text-btn-secondary hover:bg-secondary-600 hover:border-secondary-600 focus:ring-secondary-500",
      info: "border-btn-primary bg-btn-primary text-btn-primary hover:bg-primary-600 hover:border-primary-600 focus:ring-primary-500",
      success:
        "border-btn-success bg-btn-success text-btn-success hover:bg-success-600 hover:border-success-600 focus:ring-success-500",
      warning:
        "border-btn-warning bg-btn-warning text-btn-warning hover:bg-warning-600 hover:border-warning-600 focus:ring-warning-500",
      error:
        "border-btn-error bg-btn-error text-btn-error hover:bg-danger-600 hover:border-danger-600 focus:ring-danger-500",
      neutral:
        "border-btn-neutral bg-btn-neutral text-btn-neutral hover:bg-background-100 focus:ring-secondary-400",
      ghost:
        "border-transparent text-btn-primary hover:bg-primary-100 focus:ring-primary-500",
      link: "border-transparent text-btn-primary underline hover:text-primary-700 focus:ring-primary-500",
    },
  },
  windows: {
    base: "inline-flex items-center justify-center rounded-btn border font-semibold transition-colors duration-150 focus:outline-none focus:ring-1 focus:ring-offset-1",
    disabled: "opacity-70 cursor-not-allowed bg-background-100",
    sizes: {
      xs: "px-2 py-0.5 text-xs",
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-1.5 text-sm",
      lg: "px-6 py-2 text-base",
      xl: "px-8 py-2.5 text-lg",
    },
    variants: {
      primary:
        "border-transparent bg-btn-primary text-btn-primary hover:bg-primary-700 focus:ring-primary-500",
      secondary:
        "border-transparent bg-btn-secondary text-btn-secondary hover:bg-secondary-700 focus:ring-secondary-500",
      info: "border-transparent bg-btn-primary text-btn-primary hover:bg-primary-700 focus:ring-primary-500",
      success:
        "border-transparent bg-btn-success text-btn-success hover:bg-success-700 focus:ring-success-500",
      warning:
        "border-transparent bg-btn-warning text-btn-warning hover:bg-warning-700 focus:ring-warning-500",
      error:
        "border-transparent bg-btn-error text-btn-error hover:bg-danger-700 focus:ring-danger-500",
      neutral:
        "border-btn-neutral bg-btn-neutral text-btn-neutral hover:bg-background-100 focus:ring-secondary-400",
      ghost:
        "border-transparent text-text-900 hover:bg-background-100 focus:ring-secondary-400",
      link: "border-transparent text-btn-primary underline hover:bg-background-100 focus:ring-primary-500",
    },
  },
};
