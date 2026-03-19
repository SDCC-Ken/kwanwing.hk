import { z } from "zod";
import type { AuiStyleName } from "../types";

// Zod schema for type validation
export const StyleConfig = z.object({
  root: z.string(),
  indicator: z.string(),
  positions: z.object({
    "top-right": z.string(),
    "top-left": z.string(),
    "bottom-right": z.string(),
    "bottom-left": z.string(),
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
    root: "relative inline-flex",
    indicator:
      "absolute z-10 flex items-center justify-center rounded-full border-2 border-[var(--color-background-900)]/30 text-xs font-bold text-white",
    positions: {
      "top-right": "top-0 right-0 -translate-y-1/2 translate-x-1/2",
      "top-left": "top-0 left-0 -translate-y-1/2 -translate-x-1/2",
      "bottom-right": "bottom-0 right-0 translate-y-1/2 translate-x-1/2",
      "bottom-left": "bottom-0 left-0 translate-y-1/2 -translate-x-1/2",
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
    sizes: {
      xs: "h-3 w-3 min-w-[12px] px-0.5 text-[8px]",
      sm: "h-4 w-4 min-w-[16px] px-0.5 text-[10px]",
      md: "h-5 w-5 min-w-[20px] px-1 text-xs",
      lg: "h-6 w-6 min-w-[24px] px-1.5 text-sm",
      xl: "h-7 w-7 min-w-[28px] px-2 text-base",
    },
  },
  material: {
    root: "relative inline-flex",
    indicator:
      "absolute z-10 flex items-center justify-center rounded-full text-xs font-semibold text-white",
    positions: {
      "top-right": "top-0 right-0 transform translate-x-1/4 -translate-y-1/4",
      "top-left": "top-0 left-0 transform -translate-x-1/4 -translate-y-1/4",
      "bottom-right":
        "bottom-0 right-0 transform translate-x-1/4 translate-y-1/4",
      "bottom-left":
        "bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4",
    },
    variants: {
      primary: "bg-[var(--color-primary-600)]",
      secondary: "bg-[var(--color-secondary-600)]",
      success: "bg-[var(--color-success-600)]",
      warning: "bg-[var(--color-warning-500)]",
      error: "bg-[var(--color-danger-600)]",
      info: "bg-[var(--color-info-600)]",
      neutral: "bg-[var(--color-neutral-600)]",
    },
    sizes: {
      xs: "h-3 w-3 min-w-[12px] px-1 text-[8px]",
      sm: "h-4 w-4 min-w-[16px] px-1 text-[10px]",
      md: "h-5 w-5 min-w-[20px] px-1 text-xs",
      lg: "h-6 w-6 min-w-[24px] px-1.5 text-sm",
      xl: "h-7 w-7 min-w-[28px] px-2 text-base",
    },
  },
  bootstrap: {
    root: "relative inline-flex",
    indicator:
      "absolute z-10 flex items-center justify-center rounded-full border-2 border-[var(--color-background-500)] text-xs font-bold text-white",
    positions: {
      "top-right": "top-0 right-0 transform translate-x-1/2 -translate-y-1/2",
      "top-left": "top-0 left-0 transform -translate-x-1/2 -translate-y-1/2",
      "bottom-right":
        "bottom-0 right-0 transform translate-x-1/2 translate-y-1/2",
      "bottom-left":
        "bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2",
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
    sizes: {
      xs: "h-3 w-3 min-w-[12px] px-1 text-[8px]",
      sm: "h-4 w-4 min-w-[16px] px-1 text-[10px]",
      md: "h-5 w-5 min-w-[20px] px-1 text-xs",
      lg: "h-6 w-6 min-w-[24px] px-1.5 text-sm",
      xl: "h-7 w-7 min-w-[28px] px-2 text-base",
    },
  },
  windows: {
    root: "relative inline-flex",
    indicator:
      "absolute z-10 flex items-center justify-center rounded-full border-2 border-[var(--color-background-500)] text-xs font-bold text-white",
    positions: {
      "top-right": "top-0 right-0",
      "top-left": "top-0 left-0",
      "bottom-right": "bottom-0 right-0",
      "bottom-left": "bottom-0 left-0",
    },
    variants: {
      primary: "bg-[var(--color-primary-600)]",
      secondary: "bg-[var(--color-secondary-600)]",
      success: "bg-[var(--color-success-600)]",
      warning: "bg-[var(--color-warning-500)]",
      error: "bg-[var(--color-danger-600)]",
      info: "bg-[var(--color-info-600)]",
      neutral: "bg-[var(--color-neutral-600)]",
    },
    sizes: {
      xs: "h-2 w-2 min-w-[8px] p-0",
      sm: "h-3 w-3 min-w-[12px] p-0",
      md: "h-4 w-4 min-w-[16px] px-0.5",
      lg: "h-5 w-5 min-w-[20px] px-1",
      xl: "h-6 w-6 min-w-[24px] px-1.5",
    },
  },
};
