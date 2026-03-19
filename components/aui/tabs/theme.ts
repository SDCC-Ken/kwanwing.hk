import { z } from "zod";
import type { AuiStyleName } from "../types";

// Zod schema for type validation
export const StyleConfig = z.object({
  root: z.string(),
  list: z.string(),
  tab: z.string(),
  tabActive: z.string(),
  panel: z.string(),
  orientations: z.object({
    horizontal: z.object({
      root: z.string(),
      list: z.string(),
      tab: z.string(),
    }),
    vertical: z.object({ root: z.string(), list: z.string(), tab: z.string() }),
  }),
});
export type StyleConfig = z.infer<typeof StyleConfig>;

// REFACTORED: All hardcoded colors have been replaced with CSS variables.
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    root: "flex",
    list: "flex",
    tab: "px-4 py-2 text-sm font-medium text-[var(--color-text-100)]/60 hover:bg-[var(--color-text-100)]/10 hover:text-white transition-colors rounded-md",
    tabActive: "bg-[var(--color-text-100)]/20 text-white",
    panel:
      "mt-3 p-4 rounded-lg border border-[var(--color-text-100)]/10 bg-[var(--color-background-900)]/20 flex-grow",
    orientations: {
      horizontal: { root: "flex-col", list: "flex-row gap-2", tab: "" },
      vertical: {
        root: "flex-row gap-4",
        list: "flex-col gap-2",
        tab: "w-full justify-start",
      },
    },
  },
  material: {
    root: "flex w-full",
    list: "relative flex",
    tab: "relative px-4 py-2 text-sm font-medium text-[var(--color-secondary-600)] hover:bg-[var(--color-background-100)] rounded-t-lg transition-colors",
    tabActive:
      "text-[var(--color-primary-600)] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[var(--color-primary-600)]",
    panel: "mt-2 p-4",
    orientations: {
      horizontal: {
        root: "flex-col",
        list: "flex-row border-b border-[var(--color-background-200)]",
        tab: "",
      },
      vertical: {
        root: "flex-row gap-4",
        list: "flex-col border-r border-[var(--color-background-200)]",
        tab: "w-full justify-start !rounded-t-none !rounded-l-lg after:right-auto after:left-0 after:top-0 after:bottom-0 after:w-0.5 after:h-full",
      },
    },
  },
  bootstrap: {
    root: "flex w-full",
    list: "flex -mb-px",
    tab: "px-4 py-2 text-sm font-medium text-[var(--color-secondary-500)] hover:text-[var(--color-text-700)] border-b-2 border-transparent",
    tabActive:
      "text-[var(--color-primary-600)] border-[var(--color-primary-500)]",
    panel: "mt-2 p-4 border-t border-[var(--color-background-200)]",
    orientations: {
      horizontal: { root: "flex-col", list: "flex-row", tab: "" },
      vertical: {
        root: "flex-row gap-4",
        list: "flex-col !-mb-0 border-b-0 border-r-2 border-[var(--color-background-200)]",
        tab: "w-full justify-start !border-b-0 !border-r-2",
      },
    },
  },
  windows: {
    root: "flex w-full",
    list: "flex gap-1",
    tab: "px-3 py-1.5 text-sm font-medium text-[var(--color-text-800)] hover:bg-[var(--color-background-200)]",
    tabActive:
      "bg-[var(--color-background-500)] border-t border-l border-r border-[var(--color-secondary-300)] rounded-t-sm relative -bottom-px",
    panel: "p-4 border border-[var(--color-secondary-300)]",
    orientations: {
      horizontal: {
        root: "flex-col",
        list: "flex-row border-b border-[var(--color-secondary-300)]",
        tab: "",
      },
      vertical: {
        root: "flex-row gap-0",
        list: "flex-col border-r border-[var(--color-secondary-300)]",
        tab: "!border-b-0 !border-r-0 !border-l-2 !border-[var(--color-primary-600)] !-right-px !rounded-t-none !rounded-l-sm",
      },
    },
  },
};
