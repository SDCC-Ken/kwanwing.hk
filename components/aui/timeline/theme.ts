import { z } from "zod";
import type { AuiStyleName } from "../types";

// Zod schema for type validation
export const StyleConfig = z.object({
  root: z.string(),
  item: z.string(),
  separator: z.string(),
  dot: z.string(),
  connector: z.string(),
  content: z.string(),
  title: z.string(),
  description: z.string(),
  orientations: z.object({
    horizontal: z.object({
      root: z.string(),
      item: z.string(),
      separator: z.string(),
    }),
    vertical: z.object({
      root: z.string(),
      item: z.string(),
      separator: z.string(),
    }),
  }),
  sizes: z.object({
    xs: z.object({
      dot: z.string(),
      title: z.string(),
      description: z.string(),
    }),
    sm: z.object({
      dot: z.string(),
      title: z.string(),
      description: z.string(),
    }),
    md: z.object({
      dot: z.string(),
      title: z.string(),
      description: z.string(),
    }),
    lg: z.object({
      dot: z.string(),
      title: z.string(),
      description: z.string(),
    }),
    xl: z.object({
      dot: z.string(),
      title: z.string(),
      description: z.string(),
    }),
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
    root: "flex",
    item: "relative flex",
    separator: "absolute",
    dot: "relative z-10 flex items-center justify-center rounded-full border-2 bg-[var(--color-background-50)]/50 backdrop-blur-sm",
    connector: "h-full w-full bg-[var(--color-text-muted)]/20",
    content: "",
    title: "font-semibold text-[var(--color-text)]",
    description: "mt-1 text-sm text-[var(--color-text-muted)]",
    orientations: {
      vertical: {
        root: "flex-col",
        item: "pb-8",
        separator: "left-4 top-5 h-full w-0.5",
      },
      horizontal: {
        root: "flex-row items-start",
        item: "flex-1 flex-col items-center pt-8 text-center",
        separator: "left-0 top-4 h-0.5 w-full",
      },
    },
    sizes: {
      xs: { dot: "h-4 w-4", title: "text-xs", description: "text-xs" },
      sm: { dot: "h-6 w-6", title: "text-sm", description: "text-xs" },
      md: { dot: "h-8 w-8", title: "text-base", description: "text-sm" },
      lg: { dot: "h-10 w-10", title: "text-lg", description: "text-base" },
      xl: { dot: "h-12 w-12", title: "text-xl", description: "text-lg" },
    },
    variants: {
      primary: "border-[var(--color-primary-400)]/20",
      secondary: "border-[var(--color-secondary-400)]/20",
      success: "border-[var(--color-success-400)]/20",
      warning: "border-[var(--color-warning-400)]/20",
      error: "border-[var(--color-danger-400)]/20",
      info: "border-[var(--color-info-400)]/20",
      neutral: "border-[var(--color-neutral-400)]/20",
    },
  },
  material: {
    root: "flex",
    item: "relative flex",
    separator: "absolute",
    dot: "relative z-10 flex items-center justify-center rounded-full border-2 border-[var(--color-background-500)]",
    connector: "h-full w-full bg-[var(--color-background-200)]",
    content: "",
    title: "font-medium text-[var(--color-text-900)]",
    description: "mt-1 text-sm text-[var(--color-secondary-600)]",
    orientations: {
      vertical: {
        root: "flex-col",
        item: "pb-10",
        separator: "left-5 top-5 h-full w-0.5",
      },
      horizontal: {
        root: "flex-row items-start",
        item: "flex-1 flex-col items-center pt-10 text-center",
        separator: "left-0 top-5 h-0.5 w-full",
      },
    },
    sizes: {
      xs: { dot: "h-6 w-6", title: "text-xs", description: "text-xs" },
      sm: { dot: "h-8 w-8", title: "text-sm", description: "text-xs" },
      md: { dot: "h-10 w-10", title: "text-base", description: "text-sm" },
      lg: { dot: "h-12 w-12", title: "text-lg", description: "text-base" },
      xl: { dot: "h-14 w-14", title: "text-xl", description: "text-lg" },
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
  bootstrap: {
    root: "flex",
    item: "relative flex",
    separator: "absolute",
    dot: "relative z-10 flex h-8 w-8 items-center justify-center rounded-full",
    connector: "h-full w-full bg-[var(--color-secondary-300)]",
    content: "",
    title: "font-bold text-[var(--color-text-800)]",
    description: "mt-1 text-sm text-[var(--color-secondary-600)]",
    orientations: {
      vertical: {
        root: "flex-col",
        item: "pb-8",
        separator: "left-4 top-4 h-full w-px",
      },
      horizontal: {
        root: "flex-row items-start",
        item: "flex-1 flex-col items-center pt-8 text-center",
        separator: "left-0 top-4 h-px w-full",
      },
    },
    sizes: {
      xs: { dot: "h-4 w-4", title: "text-xs", description: "text-xs" },
      sm: { dot: "h-6 w-6", title: "text-sm", description: "text-xs" },
      md: { dot: "h-8 w-8", title: "text-base", description: "text-sm" },
      lg: { dot: "h-10 w-10", title: "text-lg", description: "text-base" },
      xl: { dot: "h-12 w-12", title: "text-xl", description: "text-lg" },
    },
    variants: {
      primary: "bg-[var(--color-primary-300)]",
      secondary: "bg-[var(--color-secondary-300)]",
      success: "bg-[var(--color-success-300)]",
      warning: "bg-[var(--color-warning-300)]",
      error: "bg-[var(--color-danger-300)]",
      info: "bg-[var(--color-info-300)]",
      neutral: "bg-[var(--color-neutral-300)]",
    },
  },
  windows: {
    root: "flex",
    item: "relative flex",
    separator: "absolute",
    dot: "relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-background-500)] border-2",
    connector: "h-full w-full bg-[var(--color-secondary-300)]",
    content: "",
    title: "font-semibold text-[var(--color-text-900)]",
    description: "mt-0.5 text-sm text-[var(--color-secondary-700)]",
    orientations: {
      vertical: {
        root: "flex-col",
        item: "pb-6",
        separator: "left-3 top-3 h-full w-0.5",
      },
      horizontal: {
        root: "flex-row items-start",
        item: "flex-1 flex-col items-center pt-6 text-center",
        separator: "left-0 top-3 h-0.5 w-full",
      },
    },
    sizes: {
      xs: { dot: "h-4 w-4", title: "text-xs", description: "text-xs" },
      sm: { dot: "h-5 w-5", title: "text-sm", description: "text-xs" },
      md: { dot: "h-6 w-6", title: "text-base", description: "text-sm" },
      lg: { dot: "h-7 w-7", title: "text-lg", description: "text-base" },
      xl: { dot: "h-8 w-8", title: "text-xl", description: "text-lg" },
    },
    variants: {
      primary: "border-[var(--color-primary-300)]",
      secondary: "border-[var(--color-secondary-300)]",
      success: "border-[var(--color-success-300)]",
      warning: "border-[var(--color-warning-300)]",
      error: "border-[var(--color-danger-300)]",
      info: "border-[var(--color-info-300)]",
      neutral: "border-[var(--color-neutral-300)]",
    },
  },
};
