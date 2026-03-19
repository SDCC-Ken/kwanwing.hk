// aui-chip/theme
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
  closeButton: z.string(),
});
export type StyleConfig = z.infer<typeof StyleConfig>;

// REFACTORED: Now using semantic Tailwind classes mapped in tailwind.css
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    base: "inline-flex items-center justify-center gap-2 font-medium border rounded-full",
    sizes: {
      xs: "px-2 py-0.5 text-xs",
      sm: "px-2.5 py-1 text-xs",
      md: "px-3 py-1.5 text-sm",
      lg: "px-4 py-2 text-base",
      xl: "px-5 py-2.5 text-lg",
    },
    variants: {
      neutral:
        "border-secondary-500/30 bg-secondary-500/10 text-secondary-100",
      primary:
        "border-chip-primary bg-chip-primary text-chip-primary",
      secondary:
        "border-secondary-500/30 bg-secondary-500/10 text-secondary-100",
      success:
        "border-success-500/30 bg-success-500/10 text-success-100",
      warning:
        "border-warning-500/30 bg-warning-500/10 text-warning-100",
      error:
        "border-danger-500/30 bg-danger-500/10 text-danger-100",
      info: "border-primary-500/30 bg-primary-500/10 text-primary-100",
    },
    closeButton:
      "flex items-center justify-center h-4 w-4 rounded-full bg-background-900/20 text-text-100/70 hover:bg-background-900/40 hover:text-text-100/90",
  },
  material: {
    base: "inline-flex items-center justify-center gap-2 font-medium rounded-full",
    sizes: {
      xs: "px-2 py-0.5 text-xs",
      sm: "px-2.5 py-1 text-xs",
      md: "px-3 py-1.5 text-sm",
      lg: "px-4 py-2 text-base",
      xl: "px-5 py-2.5 text-lg",
    },
    variants: {
      neutral:
        "bg-secondary-200 text-secondary-800",
      primary: "bg-chip-primary text-chip-primary",
      secondary:
        "bg-secondary-100 text-secondary-800",
      success: "bg-success-100 text-success-800",
      warning: "bg-warning-100 text-warning-800",
      error: "bg-danger-100 text-danger-800",
      info: "bg-primary-100 text-primary-800",
    },
    closeButton:
      "flex items-center justify-center h-5 w-5 rounded-full hover:bg-background-900/10",
  },
  bootstrap: {
    base: "inline-flex items-center justify-center gap-2 font-semibold rounded-full",
    sizes: {
      xs: "px-1.5 py-0.5 text-xs",
      sm: "px-2 py-1 text-xs",
      md: "px-2.5 py-1 text-sm",
      lg: "px-3 py-1.5 text-base",
      xl: "px-3.5 py-2 text-lg",
    },
    variants: {
      neutral:
        "bg-secondary-100 text-secondary-800",
      primary: "bg-chip-primary text-chip-primary",
      secondary:
        "bg-secondary-100 text-secondary-800",
      success: "bg-success-100 text-success-800",
      warning: "bg-warning-100 text-warning-800",
      error: "bg-danger-100 text-danger-800",
      info: "bg-primary-100 text-primary-800",
    },
    closeButton: "opacity-60 hover:opacity-100",
  },
  windows: {
    base: "inline-flex items-center justify-center gap-2 font-semibold border rounded-full",
    sizes: {
      xs: "px-1.5 py-0.5 text-xs",
      sm: "px-2 py-0.5 text-xs",
      md: "px-2.5 py-0.5 text-sm",
      lg: "px-3 py-1 text-base",
      xl: "px-3.5 py-1 text-lg",
    },
    variants: {
      neutral:
        "bg-background-100 border-secondary-300 text-secondary-800",
      primary:
        "bg-chip-primary border-chip-primary text-chip-primary",
      secondary:
        "bg-secondary-100 border-secondary-300 text-secondary-800",
      success:
        "bg-success-100 border-success-300 text-success-800",
      warning:
        "bg-warning-100 border-warning-300 text-warning-800",
      error:
        "bg-danger-100 border-danger-300 text-danger-800",
      info: "bg-primary-100 border-primary-300 text-primary-800",
    },
    closeButton:
      "flex items-center justify-center h-4 w-4 rounded-full hover:bg-background-900/10",
  },
};
