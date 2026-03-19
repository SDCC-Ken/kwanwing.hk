import { z } from "zod";
import type { AuiStyleName } from "../types";

// Zod schema for type validation
export const StyleConfig = z.object({
  root: z.string(),
  orientations: z.object({
    horizontal: z.string(),
    vertical: z.string(),
  }),
  track: z.string(),
  range: z.string(),
  thumb: z.string(),
  sizes: z.object({
    sm: z.object({ track: z.string(), thumb: z.string() }),
    md: z.object({ track: z.string(), thumb: z.string() }),
    lg: z.object({ track: z.string(), thumb: z.string() }),
  }),
});
export type StyleConfig = z.infer<typeof StyleConfig>;

// REFACTORED: All hardcoded colors have been replaced with CSS variables.
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    root: "relative select-none touch-none cursor-pointer",
    orientations: { horizontal: "w-full h-5", vertical: "h-48 w-5" },
    track:
      "absolute rounded-full bg-[var(--color-background-900)]/30 border border-[var(--color-text-100)]/10 backdrop-blur-sm",
    range: "absolute rounded-full bg-[var(--color-primary-500)]/80",
    thumb:
      "absolute block rounded-full border-2 border-[var(--color-text-100)]/50 bg-[var(--color-text-100)]/30 shadow-lg transform -translate-x-1/2 -translate-y-1/2",
    sizes: {
      sm: {
        track:
          "h-1 w-full top-1/2 -translate-y-1/2 | w-1 h-full left-1/2 -translate-x-1/2",
        thumb: "h-5 w-5",
      },
      md: {
        track:
          "h-2 w-full top-1/2 -translate-y-1/2 | w-2 h-full left-1/2 -translate-x-1/2",
        thumb: "h-6 w-6",
      },
      lg: {
        track:
          "h-3 w-full top-1/2 -translate-y-1/2 | w-3 h-full left-1/2 -translate-x-1/2",
        thumb: "h-7 w-7",
      },
    },
  },
  material: {
    root: "relative select-none touch-none cursor-pointer",
    orientations: { horizontal: "w-full h-4", vertical: "h-48 w-4" },
    track: "absolute rounded-full bg-[var(--color-background-200)]",
    range: "absolute rounded-full bg-[var(--color-primary-600)]",
    thumb:
      "absolute block rounded-full bg-[var(--color-primary-600)] shadow-md transform -translate-x-1/2 -translate-y-1/2",
    sizes: {
      sm: {
        track:
          "h-0.5 w-full top-1/2 -translate-y-1/2 | w-0.5 h-full left-1/2 -translate-x-1/2",
        thumb: "h-4 w-4",
      },
      md: {
        track:
          "h-1 w-full top-1/2 -translate-y-1/2 | w-1 h-full left-1/2 -translate-x-1/2",
        thumb: "h-5 w-5",
      },
      lg: {
        track:
          "h-1.5 w-full top-1/2 -translate-y-1/2 | w-1.5 h-full left-1/2 -translate-x-1/2",
        thumb: "h-6 w-6",
      },
    },
  },
  bootstrap: {
    root: "relative select-none touch-none cursor-pointer",
    orientations: { horizontal: "w-full h-6", vertical: "h-48 w-6" },
    track: "absolute rounded-full bg-[var(--color-background-200)]",
    range: "absolute rounded-full bg-[var(--color-primary-500)]",
    thumb:
      "absolute block rounded-full bg-[var(--color-primary-500)] border-4 border-[var(--color-background-500)] shadow transform -translate-x-1/2 -translate-y-1/2",
    sizes: {
      sm: {
        track:
          "h-1 w-full top-1/2 -translate-y-1/2 | w-1 h-full left-1/2 -translate-x-1/2",
        thumb: "h-5 w-5",
      },
      md: {
        track:
          "h-1.5 w-full top-1/2 -translate-y-1/2 | w-1.5 h-full left-1/2 -translate-x-1/2",
        thumb: "h-6 w-6",
      },
      lg: {
        track:
          "h-2 w-full top-1/2 -translate-y-1/2 | w-2 h-full left-1/2 -translate-x-1/2",
        thumb: "h-7 w-7",
      },
    },
  },
  windows: {
    root: "relative select-none touch-none cursor-pointer",
    orientations: { horizontal: "w-full h-5", vertical: "h-48 w-5" },
    track: "absolute rounded-none bg-[var(--color-secondary-300)]",
    range: "absolute rounded-none bg-[var(--color-primary-600)]",
    thumb:
      "absolute block rounded-full bg-[var(--color-primary-600)] border-2 border-[var(--color-background-500)] shadow-sm transform -translate-x-1/2 -translate-y-1/2",
    sizes: {
      sm: {
        track:
          "h-0.5 w-full top-1/2 -translate-y-1/2 | w-0.5 h-full left-1/2 -translate-x-1/2",
        thumb: "h-4 w-4",
      },
      md: {
        track:
          "h-1 w-full top-1/2 -translate-y-1/2 | w-1 h-full left-1/2 -translate-x-1/2",
        thumb: "h-5 w-5",
      },
      lg: {
        track:
          "h-1.5 w-full top-1/2 -translate-y-1/2 | w-1.5 h-full left-1/2 -translate-x-1/2",
        thumb: "h-6 w-6",
      },
    },
  },
};
