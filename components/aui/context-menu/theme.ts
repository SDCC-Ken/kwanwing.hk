import { z } from "zod";
import type { AuiStyleName } from "../types";

// Zod schema for type validation
export const StyleConfig = z.object({
  panel: z.string(),
  item: z.string(),
  itemDisabled: z.string(),
  itemIcon: z.string(),
  separator: z.string(),
});
export type StyleConfig = z.infer<typeof StyleConfig>;

// REFACTORED: All hardcoded colors have been replaced with CSS variables.
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    panel:
      "fixed z-50 min-w-[180px] overflow-hidden rounded-lg border border-[var(--color-text-100)]/10 bg-[var(--color-background-900)]/50 p-1.5 text-[var(--color-text-100)]/90 shadow-2xl backdrop-blur-xl",
    item: "relative flex cursor-pointer select-none items-center rounded-md px-2 py-1.5 text-sm outline-none transition-colors hover:bg-[var(--color-text-100)]/10 data-[disabled]:pointer-events-none",
    itemDisabled: "opacity-50",
    itemIcon: "mr-2 h-4 w-4",
    separator: "-mx-1 my-1 h-px bg-[var(--color-text-100)]/10",
  },
  material: {
    panel:
      "fixed z-50 min-w-[200px] overflow-hidden rounded-md border border-[var(--color-background-200)] bg-[var(--color-background-500)] p-1 text-[var(--color-text-500)] shadow-lg",
    item: "relative flex cursor-pointer select-none items-center rounded px-2 py-2 text-sm outline-none transition-colors hover:bg-[var(--color-background-100)] data-[disabled]:pointer-events-none",
    itemDisabled: "opacity-50",
    itemIcon: "mr-3 h-5 w-5",
    separator: "my-1 h-px bg-[var(--color-background-200)]",
  },
  bootstrap: {
    panel:
      "fixed z-50 min-w-[180px] overflow-hidden rounded-md border border-[var(--color-background-200)] bg-[var(--color-background-500)] p-1 text-[var(--color-text-900)] shadow-lg",
    item: "relative flex w-full cursor-pointer select-none items-center rounded-sm px-3 py-1.5 text-sm outline-none transition-colors hover:bg-[var(--color-background-100)] data-[disabled]:pointer-events-none",
    itemDisabled: "opacity-50",
    itemIcon: "mr-2 h-4 w-4",
    separator: "my-1 h-px bg-[var(--color-background-200)]",
  },
  windows: {
    panel:
      "fixed z-50 min-w-[180px] overflow-hidden rounded-sm border border-[var(--color-secondary-300)] bg-[var(--color-background-500)] p-1 text-[var(--color-text-900)] shadow-md",
    item: "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-[var(--color-background-100)] data-[disabled]:pointer-events-none",
    itemDisabled: "opacity-50",
    itemIcon: "mr-2 h-4 w-4",
    separator: "-mx-1 my-1 h-px bg-[var(--color-background-200)]",
  },
};
