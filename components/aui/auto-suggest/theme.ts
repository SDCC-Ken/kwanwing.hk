//  aui-auto-sugge./theme
import { z } from "zod";
import type { AuiStyleName, AuiSize } from "../types";

// --- Schemas ---
export const StyleConfig = z.object({
  root: z.string(),
  label: z.string(),
  chip: z.string(),
  chipButton: z.string(),
  input: z.string(),
  dropdown: z.string(),
  item: z.string(),
  itemHighlighted: z.string(),
  noResults: z.string(),
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

const SizeConfig = z.object({
  root: z.string(),
  chip: z.string(),
  input: z.string(),
  item: z.string(),
});
export type SizeConfig = z.infer<typeof SizeConfig>;

// --- UPDATED: Sizing Configuration now uses CSS variables ---
export const sizeMapping: Record<AuiSize, SizeConfig> = {
  xs: {
    root: "p-[var(--aui-spacing-1)]",
    chip: "px-[var(--aui-spacing-2)] py-[var(--aui-spacing-1)] text-xs",
    input: "p-[var(--aui-spacing-1)] text-xs",
    item: "p-[var(--aui-spacing-1)] text-xs",
  },
  sm: {
    root: "p-[var(--aui-spacing-2)]",
    chip: "px-[var(--aui-spacing-3)] py-[var(--aui-spacing-1)] text-sm",
    input: "p-[var(--aui-spacing-1)] text-sm",
    item: "p-[var(--aui-spacing-2)] text-sm",
  },
  md: {
    root: "p-[var(--aui-spacing-2)]",
    chip: "px-[var(--aui-spacing-3)] py-[var(--aui-spacing-1)] text-sm",
    input: "p-[var(--aui-spacing-1)] text-base",
    item: "p-[var(--aui-spacing-2)] text-base",
  },
  lg: {
    root: "p-[var(--aui-spacing-3)]",
    chip: "px-[var(--aui-spacing-4)] py-[var(--aui-spacing-2)] text-base",
    input: "p-[var(--aui-spacing-2)] text-lg",
    item: "p-[var(--aui-spacing-3)] text-lg",
  },
  xl: {
    root: "p-[var(--aui-spacing-3)]",
    chip: "px-[var(--aui-spacing-4)] py-[var(--aui-spacing-2)] text-lg",
    input: "p-[var(--aui-spacing-2)] text-xl",
    item: "p-[var(--aui-spacing-3)] text-xl",
  },
};

// --- UPDATED: Style Definitions now use CSS variables for spacing ---
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    label:
      "block mb-1 ml-2 text-xs text-left font-medium text-[var(--color-text-100)]",
    root: "flex items-center gap-[var(--aui-spacing-2)] rounded-lg border border-[var(--color-text-100)]/10 bg-[var(--color-background-900)]/20 backdrop-blur-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-[var(--color-primary-400)]",
    chip: "flex items-center gap-[var(--aui-spacing-1)] rounded-full text-[var(--color-text-100)]/90",
    chipButton: "rounded-full opacity-70 hover:opacity-100",
    input:
      "flex-grow bg-transparent placeholder:text-[var(--color-text-100)]/50 focus:outline-none placeholder:overflow-hidden",
    dropdown:
      "absolute z-10 mt-[var(--aui-spacing-2)] w-full space-y-[var(--aui-spacing-1)] rounded-lg border border-4 border-[var(--color-text-100)]/10 bg-[var(--color-background-900)]/50 p-[var(--aui-spacing-2)] backdrop-blur-xl",
    item: "cursor-pointer rounded-md hover:bg-[var(--color-text-100)]/10",
    itemHighlighted: "bg-[var(--color-text-100)]/20",
    noResults: "text-[var(--color-text-100)]/60",
    variants: {
      primary: "bg-[var(--color-primary-500)]/20",
      secondary: "bg-[var(--color-secondary-500)]/20",
      success: "bg-[var(--color-success-500)]/20",
      warning: "bg-[var(--color-warning-500)]/20",
      error: "bg-[var(--color-danger-500)]/20",
      info: "bg-[var(--color-info-500)]/20",
      neutral: "bg-[var(--color-neutral-500)]/20",
    },
  },
  material: {
    label: "block mb-1 text-sm font-medium text-[var(--color-secondary-700)]",
    root: "flex  items-center gap-[var(--aui-spacing-1)] border-b-2 border-[var(--color-background-700)] transition-colors focus-within:border-[var(--color-primary-500)]",
    chip: "flex items-center gap-[var(--aui-spacing-2)] rounded-full text-[var(--color-text-200)]",
    chipButton:
      "rounded-full text-[var(--color-secondary-500)] hover:text-[var(--color-text-500)]",
    input:
      "flex-grow bg-transparent focus:outline-none placeholder:overflow-hidden",
    dropdown:
      "absolute z-10 mt-[var(--aui-spacing-2)] w-full rounded-md bg-[var(--color-background-600)] shadow-lg",
    item: "cursor-pointer hover:bg-[var(--color-background-700)]",
    itemHighlighted: "bg-[var(--color-background-700)]",
    noResults: "text-[var(--color-secondary-500)]",
    variants: {
      primary: "bg-[var(--color-primary-200)]",
      secondary: "bg-[var(--color-secondary-200)]",
      success: "bg-[var(--color-success-200)]",
      warning: "bg-[var(--color-warning-200)]",
      error: "bg-[var(--color-danger-200)]",
      info: "bg-[var(--color-info-200)]",
      neutral: "bg-[var(--color-neutral-200)]",
    },
  },
  bootstrap: {
    label: "block mb-1.5 text-sm font-medium",
    root: "flex  items-center gap-[var(--aui-spacing-2)] rounded-md border border-[var(--color-background-700)] focus-within:border-[var(--color-primary-500)] focus-within:ring-1 focus-within:ring-[var(--color-primary-500)]",
    chip: "flex items-center gap-[var(--aui-spacing-2)] rounded-md",
    chipButton: "font-bold opacity-70 hover:opacity-100",
    input:
      "flex-grow bg-transparent focus:outline-none placeholder:overflow-hidden",
    dropdown:
      "absolute z-10 mt-[var(--aui-spacing-1)] w-full rounded-md border border-[var(--color-background-700)] bg-[var(--color-background-500)] shadow-md",
    item: "cursor-pointer hover:text-white",
    itemHighlighted: "text-white",
    noResults: "text-[var(--color-secondary-500)]",
    variants: {
      primary: "bg-[var(--color-primary-100)] text-[var(--color-primary-800)]",
      secondary:
        "bg-[var(--color-secondary-100)] text-[var(--color-secondary-800)]",
      success: "bg-[var(--color-success-100)] text-[var(--color-success-800)]",
      warning: "bg-[var(--color-warning-100)] text-[var(--color-warning-800)]",
      error: "bg-[var(--color-danger-100)] text-[var(--color-danger-800)]",
      info: "bg-[var(--color-info-100)] text-[var(--color-info-800)]",
      neutral: "bg-[var(--color-neutral-100)] text-[var(--color-neutral-800)]",
    },
  },
  windows: {
    label: "block mb-1 text-sm font-semibold",
    root: "flex  items-center gap-[var(--aui-spacing-2)] border-b border-[var(--color-secondary-500)] focus-within:border-[var(--color-primary-600)] focus-within:border-b-2",
    chip: "flex items-center gap-[var(--aui-spacing-2)] border border-[var(--color-secondary-400)]",
    chipButton:
      "text-[var(--color-secondary-600)] hover:text-[var(--color-text-900)]",
    input:
      "flex-grow bg-transparent focus:outline-none placeholder:overflow-hidden",
    dropdown:
      "absolute z-10 mt-[var(--aui-spacing-1)] w-full border border-[var(--color-secondary-400)] bg-[var(--color-background-500)] shadow-lg",
    item: "cursor-pointer hover:bg-[var(--color-background-200)]",
    itemHighlighted: "text-white",
    noResults: "text-[var(--color-secondary-500)]",
    variants: {
      primary: "bg-[var(--color-primary-100)]",
      secondary: "bg-[var(--color-secondary-100)]",
      success: "bg-[var(--color-success-100)]",
      warning: "bg-[var(--color-warning-100)]",
      error: "bg-[var(--color-danger-100)]",
      info: "bg-[var(--color-info-100)]",
      neutral: "bg-[var(--color-neutral-100)]",
    },
  },
};
