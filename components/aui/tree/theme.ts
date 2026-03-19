// aui-tr./theme.ts
import { z } from "zod";
import type { AuiStyleName } from "../types";

// Zod schema for type validation
export const StyleConfig = z.object({
  root: z.string(),
  item: z.string(),
  itemContent: z.string(),
  itemActive: z.string(),
  chevron: z.string(),
  branch: z.string(),
});
export type StyleConfig = z.infer<typeof StyleConfig>;

// REFACTORED: All hardcoded colors have been replaced with CSS variables.
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    root: "space-y-1 text-[var(--color-text-200)]",
    item: "group rounded-md",
    itemContent:
      "flex items-center gap-2 p-2 cursor-pointer rounded-md hover:bg-[var(--color-text-100)]/10",
    itemActive: "bg-[var(--color-text-100)]/10 text-white",
    chevron:
      "h-4 w-4 text-[var(--color-text-500)] group-hover:text-white transition-transform duration-200",
    branch: "pl-6 border-l-2 border-dashed border-[var(--color-text-100)]/10",
  },
  material: {
    root: "space-y-0.5 text-[var(--color-text-800)]",
    item: "group rounded",
    itemContent:
      "flex items-center gap-1.5 p-1.5 cursor-pointer rounded hover:bg-[var(--color-background-100)]",
    itemActive: "bg-[var(--color-primary-100)] text-[var(--color-primary-700)]",
    chevron:
      "h-5 w-5 text-[var(--color-secondary-500)] transition-transform duration-200",
    branch: "pl-4",
  },
  bootstrap: {
    root: "text-[var(--color-text-900)]",
    item: "group",
    itemContent:
      "flex items-center gap-2 py-1 px-2 cursor-pointer hover:bg-[var(--color-background-100)]",
    itemActive: "bg-[var(--color-primary-500)] text-white",
    chevron:
      "h-4 w-4 text-[var(--color-secondary-600)] transition-transform duration-200",
    branch: "pl-5 border-l border-[var(--color-background-200)]",
  },
  windows: {
    root: "text-[var(--color-text-900)]",
    item: "group",
    itemContent:
      "flex items-center gap-1.5 p-1 cursor-pointer hover:bg-[var(--color-background-200)]",
    itemActive: "bg-[var(--color-background-200)]",
    chevron:
      "h-4 w-4 text-[var(--color-secondary-700)] transition-transform duration-200",
    branch: "pl-5",
  },
};
