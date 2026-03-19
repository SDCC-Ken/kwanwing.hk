// aui-dial./theme
import { z } from "zod";
import type { AuiStyleName } from "../types";

// Zod schema for type validation
export const StyleConfig = z.object({
  backdrop: z.string(),
  panel: z.string(),
  header: z.string(),
  body: z.string(),
  footer: z.string(),
  closeButton: z.string(),
});
export type StyleConfig = z.infer<typeof StyleConfig>;

// Theme definitions for all supported styles
// REFACTORED: All hardcoded colors are replaced with CSS variables.
// This simplifies the classes and removes the need for dark: prefixes.
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    backdrop:
      "backdrop:bg-[var(--color-background-900)]/50 backdrop:backdrop-blur-sm",
    panel:
      "m-auto rounded-xl border border-[ var(--color-background-100)]/10 bg-[var(--color-background-900)]/60 text-[var(--color-text-100)]/90 shadow-2xl backdrop-blur-2xl max-w-lg w-full",
    header:
      "p-4 border-b border-[var(--color-background-100)]/10 flex items-center justify-between flex-shrink-0",
    body: "p-4 overflow-y-auto flex-1",
    footer:
      "p-4 border-t border-[var(--color-background-100)]/10 mt-auto flex-shrink-0",
    closeButton:
      "p-1 rounded-full hover:bg-[var(--color-background-100)]/10 transition-colors",
  },
  material: {
    backdrop: "backdrop:bg-[var(--color-background-900)]/40",
    panel:
      "m-auto rounded-lg bg-[var(--color-background-500)] text-[var(--color-text-500)] shadow-2xl max-w-lg w-full",
    header:
      "p-5 border-b border-[var(--color-background-700)] flex items-center justify-between flex-shrink-0",
    body: "p-5 overflow-y-auto flex-1",
    footer:
      "p-4 bg-[var(--color-background-600)] border-t border-[var(--color-background-700)] flex items-center justify-end gap-3 flex-shrink-0",
    closeButton:
      "p-1.5 rounded-full hover:bg-[var(--color-background-600)] transition-colors",
  },
  bootstrap: {
    backdrop: "backdrop:bg-[var(--color-background-900)]/50",
    panel:
      "m-auto rounded-lg bg-[var(--color-background-500)] shadow-xl max-w-lg w-full",
    header:
      "p-4 border-b border-[var(--color-background-700)] flex items-center justify-between flex-shrink-0",
    body: "p-4 overflow-y-auto flex-1",
    footer:
      "p-3 border-t border-[var(--color-background-700)] bg-[var(--color-background-600)] flex items-center justify-end gap-2 flex-shrink-0",
    closeButton: "opacity-60 hover:opacity-100",
  },
  windows: {
    backdrop: "backdrop:bg-[var(--color-background-900)]/20",
    panel:
      "m-auto rounded-none bg-[var(--color-background-400)] border border-[var(--color-secondary-400)] shadow-2xl max-w-lg w-full",
    header:
      "p-2 bg-[var(--color-background-300)] border-b border-[var(--color-secondary-300)] flex items-center justify-between flex-shrink-0",
    body: "p-4 overflow-y-auto flex-1",
    footer:
      "p-3 bg-[var(--color-background-300)] border-t border-[var(--color-secondary-300)] flex items-center justify-end gap-2 flex-shrink-0",
    closeButton: "p-1 hover:bg-[var(--color-background-200)]",
  },
};
