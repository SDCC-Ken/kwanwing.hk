// path: packages/my-frontend-module/src/runtime/aui-components/accordi./theme.ts
import { z } from "zod/v4";
import type { AuiStyleName, AuiSize } from "../types";

export const StyleConfig = z.object({
  root: z.string(),
  item: z.object({
    base: z.string(),
    open: z.string(),
    closed: z.string(),
  }),
  header: z.string(),
  icon: z.string(),
  content: z.string(),
});
export type StyleConfig = z.infer<typeof StyleConfig>;

export const SizeConfig = z.object({
  header: z.string(),
  icon: z.string(),
  content: z.string(),
});
export type SizeConfig = z.infer<typeof SizeConfig>;

// Sizing configuration
export const sizeMapping: Record<AuiSize, SizeConfig> = {
  xs: {
    header: "py-[var(--aui-spacing-1)] px-[var(--aui-spacing-2)] text-xs",
    icon: "h-3 w-3",
    content: "px-[var(--aui-spacing-2)] pb-[var(--aui-spacing-2)] text-xs",
  },
  sm: {
    header: "py-[var(--aui-spacing-2)] px-[var(--aui-spacing-3)] text-sm",
    icon: "h-4 w-4",
    content: "px-[var(--aui-spacing-3)] pb-[var(--aui-spacing-3)] text-sm",
  },
  md: {
    header: "py-[var(--aui-spacing-3)] px-[var(--aui-spacing-4)] text-base",
    icon: "h-5 w-5",
    content: "px-[var(--aui-spacing-4)] pb-[var(--aui-spacing-4)] text-base",
  },
  lg: {
    header: "py-[var(--aui-spacing-4)] px-[var(--aui-spacing-5)] text-lg",
    icon: "h-6 w-6",
    content: "px-[var(--aui-spacing-5)] pb-[var(--aui-spacing-5)] text-lg",
  },
  xl: {
    header: "py-[var(--aui-spacing-5)] px-[var(--aui-spacing-6)] text-xl",
    icon: "h-7 w-7",
    content: "px-[var(--aui-spacing-6)] pb-[var(--aui-spacing-6)] text-xl",
  },
};

// UPDATED: Style mapping with brighter text colors for better contrast
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    root: "w-full space-y-[var(--aui-spacing-2)]",
    item: {
      base: "rounded-lg border border-[var(--color-background-100)]/10 bg-[var(--color-background-800)]/30 backdrop-blur-xl transition-all duration-300",
      open: "p-[var(--aui-spacing-1)]",
      closed: "p-0",
    },
    header:
      "flex w-full items-center justify-between text-left font-medium text-[var(--color-text-100)] focus:outline-none",
    icon: "transform transition-transform duration-300",
    content: "pt-0 text-[var(--color-text-200)]",
  },
  material: {
    root: "w-full",
    item: {
      base: "bg-[var(--color-background-200)] shadow-sm transition-all duration-200 first:rounded-t-lg last:rounded-b-lg",
      open: "mb-[var(--aui-spacing-2)] last:mb-0",
      closed: "",
    },
    header:
      "flex w-full items-center justify-between text-left font-medium text-[var(--color-text-100)] hover:bg-[var(--color-background-300)]",
    icon: "transform transition-transform",
    content: "pt-0 text-[var(--color-text-300)]",
  },
  bootstrap: {
    root: "w-full",
    item: {
      base: "border border-[var(--color-background-300)] overflow-hidden first:rounded-t-lg last:rounded-b-lg",
      open: "",
      closed: "-mb-px last:mb-0",
    },
    // UPDATED: Use a dark text color for the header for better contrast in light mode.
    header:
      "flex w-full items-center justify-between text-left font-medium bg-[var(--color-background-200)] text-[var(--color-text-900)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]",
    icon: "transform transition-transform",
    content:
      "border-t border-[var(--color-background-300)] bg-[var(--color-background-100)] text-[var(--color-text-300)]",
  },
  windows: {
    root: "w-full space-y-[var(--aui-spacing-1)]",
    item: {
      base: "bg-[var(--color-background-200)] transition-all duration-200",
      open: "",
      closed: "",
    },
    header:
      "flex w-full items-center justify-between text-left font-medium text-[var(--color-text-100)] hover:bg-[var(--color-background-300)]",
    icon: "transform transition-transform",
    content: "pt-0 text-sm text-[var(--color-text-300)]",
  },
};
