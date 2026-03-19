import { z } from "zod";
import type { AuiStyleName } from "../types";

// Zod schema for type validation
export const StyleConfig = z.object({
  overlay: z.string(),
  panel: z.string(),
  positions: z.object({
    left: z.string(),
    right: z.string(),
    top: z.string(),
    bottom: z.string(),
  }),
  header: z.string(),
  body: z.string(),
  footer: z.string(),
  closeButton: z.string(),
});
export type StyleConfig = z.infer<typeof StyleConfig>;

// REFACTORED: All hardcoded colors have been replaced with CSS variables.
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    overlay:
      "fixed inset-0 bg-[var(--color-background-900)]/50 backdrop-blur-sm",
    panel:
      "fixed z-50 h-full w-full max-w-md bg-[var(--color-background-900)]/60 backdrop-blur-2xl border-[var(--color-text-100)]/10 text-[var(--color-text-100)]/90 shadow-2xl flex flex-col fhd:max-w-xl 2k:max-w-3xl 4k:max-w-6xl 8k:max-w-9xl",
    positions: {
      left: "top-0 left-0 border-r",
      right: "top-0 right-0 border-l",
      top: "left-0 top-0 w-full h-auto max-h-screen max-w-none border-b",
      bottom: "left-0 bottom-0 w-full h-auto max-h-screen max-w-none border-t",
    },
    header:
      "p-4 border-b border-[var(--color-text-100)]/10 flex items-center justify-between",
    body: "p-4 overflow-y-auto flex-1",
    footer: "p-4 border-t border-[var(--color-text-100)]/10 mt-auto",
    closeButton: "p-1 rounded-full hover:bg-[var(--color-text-100)]/10",
  },
  material: {
    overlay: "fixed inset-0 bg-[var(--color-background-900)]/30",
    panel:
      "fixed z-50 h-full w-full max-w-sm bg-[var(--color-background-500)] text-[var(--color-text-500)] shadow-2xl flex flex-col fhd:max-w-lg 2k:max-w-2xl 4k:max-w-5xl 8k:max-w-8xl",
    positions: {
      left: "top-0 left-0",
      right: "top-0 right-0",
      top: "left-0 top-0 w-full h-auto max-h-[80vh] max-w-none rounded-b-2xl",
      bottom:
        "left-0 bottom-0 w-full h-auto max-h-[80vh] max-w-none rounded-t-2xl",
    },
    header:
      "p-4 border-b border-[var(--color-background-200)] flex items-center justify-between",
    body: "p-4 overflow-y-auto flex-1",
    footer:
      "p-4 border-t border-[var(--color-background-200)] mt-auto bg-[var(--color-background-100)]",
    closeButton: "p-1.5 rounded-full hover:bg-[var(--color-background-200)]",
  },
  bootstrap: {
    overlay: "fixed inset-0 bg-[var(--color-background-900)]/50",
    panel:
      "fixed z-50 h-full w-full max-w-sm bg-[var(--color-background-500)] shadow-xl flex flex-col fhd:max-w-lg 2k:max-w-2xl 4k:max-w-5xl 8k:max-w-8xl",
    positions: {
      left: "top-0 left-0",
      right: "top-0 right-0",
      top: "left-0 top-0 w-full h-auto max-h-none max-w-none",
      bottom: "left-0 bottom-0 w-full h-auto max-h-none max-w-none",
    },
    header:
      "p-3 border-b border-[var(--color-background-200)] flex items-center justify-between",
    body: "p-4 overflow-y-auto flex-1",
    footer:
      "p-3 border-t border-[var(--color-background-200)] mt-auto bg-[var(--color-background-100)]",
    closeButton: "opacity-70 hover:opacity-100",
  },
  windows: {
    overlay: "fixed inset-0 bg-[var(--color-background-900)]/20",
    panel:
      "fixed z-50 h-full w-full max-w-xs bg-[var(--color-background-100)] border-[var(--color-secondary-300)] shadow-2xl flex flex-col fhd:max-w-md 2k:max-w-lg 4k:max-w-xl 8k:max-w-2xl",
    positions: {
      left: "top-0 left-0 border-r",
      right: "top-0 right-0 border-l",
      top: "left-0 top-0 w-full h-auto max-h-none max-w-none border-b",
      bottom: "left-0 bottom-0 w-full h-auto max-h-none max-w-none border-t",
    },
    header:
      "p-2 bg-[var(--color-background-200)] border-b border-[var(--color-secondary-300)] flex items-center justify-between",
    body: "p-4 overflow-y-auto flex-1",
    footer: "p-2 border-t border-[var(--color-secondary-300)] mt-auto",
    closeButton: "p-1 hover:bg-[var(--color-background-200)]",
  },
};
