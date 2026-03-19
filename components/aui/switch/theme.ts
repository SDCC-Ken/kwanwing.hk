import { z } from "zod";
import type { AuiStyleName } from "../types";

// Zod schema for type validation
export const StyleConfig = z.object({
  root: z.string(),
  label: z.string(),
  track: z.string(),
  trackActive: z.string(),
  thumb: z.string(),
  thumbActive: z.string(),
  sizes: z.object({
    xs: z.object({ root: z.string(), track: z.string(), thumb: z.string() }),
    sm: z.object({ root: z.string(), track: z.string(), thumb: z.string() }),
    md: z.object({ root: z.string(), track: z.string(), thumb: z.string() }),
    lg: z.object({ root: z.string(), track: z.string(), thumb: z.string() }),
    xl: z.object({ root: z.string(), track: z.string(), thumb: z.string() }),
  }),
  variants: z.object({
    error: z.string(),
    primary: z.string(),
    secondary: z.string(),
    success: z.string(),
    info: z.string(),
    warning: z.string(),
    neutral: z.string(),
  }),
});
export type StyleConfig = z.infer<typeof StyleConfig>;

// REFACTORED: All hardcoded colors have been replaced with CSS variables.
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    root: "group inline-flex items-center gap-3 cursor-pointer select-none",
    label: "font-medium text-[var(--color-text-200)]",
    track:
      "relative inline-flex shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out bg-[var(--color-background-900)]/30 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-primary-400)] focus-visible:ring-offset-black/50",
    trackActive: "",
    thumb:
      "pointer-events-none inline-block transform rounded-full bg-[var(--color-text-100)]/90 shadow-lg ring-0 transition duration-200 ease-in-out",
    thumbActive: "translate-x-full",
    sizes: {
      xs: {
        root: "text-xs",
        track: "h-4 w-7",
        thumb: "h-3 w-3 translate-x-0.5",
      },
      sm: {
        root: "text-sm",
        track: "h-5 w-9",
        thumb: "h-4 w-4 translate-x-0.5",
      },
      md: {
        root: "text-base",
        track: "h-6 w-11",
        thumb: "h-5 w-5 translate-x-0.5",
      },
      lg: {
        root: "text-lg",
        track: "h-7 w-12",
        thumb: "h-6 w-6 translate-x-0.5",
      },
      xl: {
        root: "text-xl",
        track: "h-8 w-14",
        thumb: "h-7 w-7 translate-x-0.5",
      },
    },
    variants: {
      primary: "bg-[var(--color-primary-500)]/80",
      secondary: "bg-[var(--color-secondary-500)]/80",
      success: "bg-[var(--color-success-500)]/80",
      warning: "bg-[var(--color-warning-500)]/80",
      error: "bg-[var(--color-danger-500)]/80",
      info: "bg-[var(--color-info-500)]/80",
      neutral: "bg-[var(--color-neutral-500)]/80",
    },
  },
  material: {
    root: "group inline-flex items-center gap-2 cursor-pointer select-none",
    label: "font-medium text-[var(--color-secondary-700)]",
    track:
      "relative inline-flex shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out bg-[var(--color-secondary-300)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-primary-500)]",
    trackActive: "",
    thumb:
      "pointer-events-none inline-block transform rounded-full bg-[var(--color-background-500)] shadow-lg ring-0 transition duration-200 ease-in-out",
    thumbActive: "translate-x-full",
    sizes: {
      xs: {
        root: "text-xs",
        track: "h-3 w-6",
        thumb: "h-2 w-2 translate-x-0.5",
      },
      sm: {
        root: "text-sm",
        track: "h-4 w-7",
        thumb: "h-3 w-3 translate-x-0.5",
      },
      md: {
        root: "text-base",
        track: "h-5 w-9",
        thumb: "h-4 w-4 translate-x-0.5",
      },
      lg: {
        root: "text-lg",
        track: "h-6 w-11",
        thumb: "h-5 w-5 translate-x-0.5",
      },
      xl: {
        root: "text-xl",
        track: "h-7 w-12",
        thumb: "h-6 w-6 translate-x-0.5",
      },
    },
    variants: {
      primary: "bg-[var(--color-primary-600)]",
      secondary: "bg-[var(--color-secondary-600)]",
      success: "bg-[var(--color-success-600)]",
      warning: "bg-[var(--color-warning-600)]",
      error: "bg-[var(--color-danger-600)]",
      info: "bg-[var(--color-info-600)]",
      neutral: "bg-[var(--color-neutral-600)]",
    },
  },
  bootstrap: {
    root: "group inline-flex items-center gap-2.5 cursor-pointer select-none",
    label: "font-medium",
    track:
      "relative inline-flex shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out bg-[var(--color-background-200)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-primary-500)]",
    trackActive: "",
    thumb:
      "pointer-events-none inline-block transform rounded-full bg-[var(--color-background-500)] shadow ring-0 transition duration-200 ease-in-out",
    thumbActive: "translate-x-full",
    sizes: {
      xs: {
        root: "text-xs",
        track: "h-4 w-7",
        thumb: "h-3 w-3 translate-x-0.5",
      },
      sm: {
        root: "text-sm",
        track: "h-5 w-9",
        thumb: "h-4 w-4 translate-x-0.5",
      },
      md: {
        root: "text-base",
        track: "h-6 w-11",
        thumb: "h-5 w-5 translate-x-0.5",
      },
      lg: {
        root: "text-lg",
        track: "h-7 w-14",
        thumb: "h-6 w-6 translate-x-0.5",
      },
      xl: {
        root: "text-xl",
        track: "h-8 w-16",
        thumb: "h-7 w-7 translate-x-0.5",
      },
    },
    variants: {
      primary: "bg-[var(--color-primary-500)]",
      secondary: "bg-[var(--color-secondary-500)]",
      success: "bg-[var(--color-success-500)]",
      warning: "bg-[var(--color-warning-500)]",
      error: "bg-[var(--color-danger-500)]",
      info: "bg-[var(--color-info-500)]",
      neutral: "bg-[var(--color-neutral-500)]",
    },
  },
  windows: {
    root: "group inline-flex items-center gap-2 cursor-pointer select-none",
    label: "font-medium",
    track:
      "relative inline-flex shrink-0 rounded-full border-2 border-[var(--color-secondary-400)] transition-colors duration-200 ease-in-out bg-transparent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-text-900)]",
    trackActive: "",
    thumb:
      "pointer-events-none inline-block transform rounded-full bg-[var(--color-secondary-500)] shadow ring-0 transition duration-200 ease-in-out",
    thumbActive: "translate-x-full bg-[var(--color-background-500)]",
    sizes: {
      xs: {
        root: "text-xs",
        track: "h-3 w-7",
        thumb: "h-2 w-2 translate-x-0.5",
      },
      sm: {
        root: "text-sm",
        track: "h-4 w-8",
        thumb: "h-3 w-3 translate-x-0.5",
      },
      md: {
        root: "text-base",
        track: "h-5 w-10",
        thumb: "h-4 w-4 translate-x-0.5",
      },
      lg: {
        root: "text-lg",
        track: "h-6 w-12",
        thumb: "h-5 w-5 translate-x-0.5",
      },
      xl: {
        root: "text-xl",
        track: "h-7 w-14",
        thumb: "h-6 w-6 translate-x-0.5",
      },
    },
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
  },
};
