import { z } from "zod";
import type { AuiStyleName } from "../types";

// Zod schema for type validation
export const StyleConfig = z.object({
  root: z.string(),
  list: z.string(),
  item: z.string(),
  link: z.string(),
  currentPage: z.string(),
  separator: z.string(),
});
export type StyleConfig = z.infer<typeof StyleConfig>;

// REFACTORED: All hardcoded colors have been replaced with CSS variables.
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    root: "w-full",
    list: "flex items-center space-x-2 text-sm font-medium",
    item: "flex items-center",
    link: "text-[var(--color-text-400)] hover:text-[var(--color-text-100)] transition-colors",
    currentPage: "text-[var(--color-text-100)]",
    separator: "mx-2 text-[var(--color-text-600)]",
  },
  material: {
    root: "w-full",
    list: "flex items-center space-x-1.5 text-sm",
    item: "flex items-center",
    link: "text-[var(--color-secondary-600)] hover:underline",
    currentPage: "text-[var(--color-text-800)]",
    separator: "mx-1.5 text-[var(--color-secondary-500)]",
  },
  bootstrap: {
    root: "w-full",
    list: "flex items-center text-sm",
    item: "flex items-center",
    link: "text-[var(--color-primary-600)] hover:text-[var(--color-primary-800)]",
    currentPage: "text-[var(--color-secondary-500)]",
    separator: "mx-2 text-[var(--color-secondary-400)]",
  },
  windows: {
    root: "w-full",
    list: "flex items-center space-x-1 text-sm",
    item: "flex items-center",
    link: "text-[var(--color-secondary-600)] hover:text-[var(--color-primary-600)] hover:underline",
    currentPage: "text-[var(--color-text-900)] font-semibold",
    separator: "mx-1 text-[var(--color-secondary-400)]",
  },
};
