// path: packages/my-frontend-module/src/runtime/aui-components/ale./theme.ts
import { z } from "zod";
import type { AuiStyleName, AuiSize } from "../types";

// --- Style & Size Schemas ---
const StyleConfig = z.object({
  base: z.string(),
  variants: z.object({
    info: z.string(),
    success: z.string(),
    warning: z.string(),
    error: z.string(),
    primary: z.string(),
    secondary: z.string(),
    neutral: z.string(),
  }),
  title: z.string(),
  body: z.string(),
  closeButton: z.string(),
});
export type StyleConfig = z.infer<typeof StyleConfig>;

const SizeConfig = z.object({
  padding: z.string(),
  title: z.string(),
  body: z.string(),
  closeButton: z.string(),
});
export type SizeConfig = z.infer<typeof SizeConfig>;

// --- UPDATED: Sizing Configuration now uses CSS variables ---
export const sizeMapping: Record<AuiSize, SizeConfig> = {
  xs: {
    padding: "p-[var(--aui-spacing-2)]",
    title: "text-xs",
    body: "text-xs",
    closeButton: "top-[var(--aui-spacing-1)] right-[var(--aui-spacing-1)]",
  },
  sm: {
    padding: "p-[var(--aui-spacing-3)]",
    title: "text-sm",
    body: "text-sm",
    closeButton: "top-[var(--aui-spacing-2)] right-[var(--aui-spacing-2)]",
  },
  md: {
    padding: "p-[var(--aui-spacing-4)]",
    title: "text-base",
    body: "text-sm",
    closeButton: "top-[var(--aui-spacing-2)] right-[var(--aui-spacing-2)]",
  },
  lg: {
    padding: "p-[var(--aui-spacing-5)]",
    title: "text-lg",
    body: "text-base",
    closeButton: "top-[var(--aui-spacing-3)] right-[var(--aui-spacing-3)]",
  },
  xl: {
    padding: "p-[var(--aui-spacing-6)]",
    title: "text-xl",
    body: "text-lg",
    closeButton: "top-[var(--aui-spacing-3)] right-[var(--aui-spacing-3)]",
  },
};

// --- UPDATED: Style Definitions now use CSS variables for spacing ---
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    base: "relative w-full rounded-lg border shadow-lg backdrop-blur-xl",
    variants: {
      info: "border-[var(--color-primary-500)]/30 bg-[var(--color-primary-500)]/10 text-[var(--color-primary-200)]",
      success:
        "border-[var(--color-success-500)]/30 bg-[var(--color-success-500)]/10 text-[var(--color-success-200)]",
      warning:
        "border-[var(--color-warning-500)]/30 bg-[var(--color-warning-500)]/10 text-[var(--color-warning-200)]",
      error:
        "border-[var(--color-danger-500)]/30 bg-[var(--color-danger-500)]/10 text-[var(--color-danger-200)]",
      primary:
        "border-[var(--color-primary-500)]/30 bg-[var(--color-primary-500)]/10 text-[var(--color-primary-200)]",
      secondary:
        "border-[var(--color-secondary-500)]/30 bg-[var(--color-secondary-500)]/10 text-[var(--color-secondary-200)]",
      neutral:
        "border-[var(--color-background-500)]/30 bg-[var(--color-background-500)]/10 text-[var(--color-text-200)]",
    },
    title: "block font-medium",
    body: "mt-[var(--aui-spacing-2)]",
    closeButton:
      "absolute rounded-md p-[var(--aui-spacing-1)] opacity-80 hover:opacity-100 focus:outline-none focus:ring-2",
  },
  material: {
    base: "relative w-full rounded-md shadow-md",
    variants: {
      info: "bg-[var(--color-primary-200)] text-[var(--color-primary-900)]",
      success: "bg-[var(--color-success-200)] text-[var(--color-success-900)]",
      warning: "bg-[var(--color-warning-200)] text-[var(--color-warning-900)]",
      error: "bg-[var(--color-danger-200)] text-[var(--color-danger-900)]",
      primary: "bg-[var(--color-primary-200)] text-[var(--color-primary-900)]",
      secondary:
        "bg-[var(--color-secondary-200)] text-[var(--color-secondary-900)]",
      neutral: "bg-[var(--color-background-200)] text-[var(--color-text-900)]",
    },
    title: "font-semibold",
    body: "mt-[var(--aui-spacing-1)]",
    closeButton:
      "absolute rounded-full p-[var(--aui-spacing-1)] transition-colors",
  },
  bootstrap: {
    base: "relative w-full border-l-4",
    variants: {
      info: "bg-[var(--color-primary-100)] border-[var(--color-primary-500)] text-[var(--color-primary-800)]",
      success:
        "bg-[var(--color-success-100)] border-[var(--color-success-500)] text-[var(--color-success-800)]",
      warning:
        "bg-[var(--color-warning-100)] border-[var(--color-warning-500)] text-[var(--color-warning-800)]",
      error:
        "bg-[var(--color-danger-100)] border-[var(--color-danger-500)] text-[var(--color-danger-800)]",
      primary:
        "bg-[var(--color-primary-100)] border-[var(--color-primary-500)] text-[var(--color-primary-800)]",
      secondary:
        "bg-[var(--color-secondary-100)] border-[var(--color-secondary-500)] text-[var(--color-secondary-800)]",
      neutral:
        "bg-[var(--color-background-100)] border-[var(--color-background-500)] text-[var(--color-text-800)]",
    },
    title: "font-bold",
    body: "mt-[var(--aui-spacing-1)]",
    closeButton: "absolute p-[var(--aui-spacing-4)]",
  },
  windows: {
    base: "relative w-full border-l-2",
    variants: {
      info: "bg-[var(--color-background-100)] border-[var(--color-primary-600)] text-[var(--color-text-900)]",
      success:
        "bg-[var(--color-background-100)] border-[var(--color-success-600)] text-[var(--color-text-900)]",
      warning:
        "bg-[var(--color-background-100)] border-[var(--color-warning-600)] text-[var(--color-text-900)]",
      error:
        "bg-[var(--color-background-100)] border-[var(--color-danger-600)] text-[var(--color-text-900)]",
      primary:
        "bg-[var(--color-background-100)] border-[var(--color-primary-600)] text-[var(--color-text-900)]",
      secondary:
        "bg-[var(--color-background-100)] border-[var(--color-secondary-600)] text-[var(--color-text-900)]",
      neutral:
        "bg-[var(--color-background-100)] border-[var(--color-background-600)] text-[var(--color-text-900)]",
    },
    title: "font-semibold",
    body: "",
    closeButton: "absolute p-[var(--aui-spacing-1)]",
  },
};
