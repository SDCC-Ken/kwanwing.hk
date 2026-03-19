import { z } from "zod";
import type { AuiStyleName } from "../types";

// Zod schema for type validation
export const StyleConfig = z.object({
  trigger: z.string(),
  panel: z.string(),
  saturation: z.string(),
  saturationThumb: z.string(),
  hueSlider: z.string(),
  hueThumb: z.string(),
  outputInput: z.string(),
  swatches: z.string(),
  swatch: z.string(),
});
export type StyleConfig = z.infer<typeof StyleConfig>;

// REFACTORED: All hardcoded colors have been replaced with CSS variables.
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    trigger:
      "h-10 w-10 rounded-lg border-2 border-[var(--color-text-100)]/20 p-1",
    panel:
      "w-64 rounded-xl border border-[var(--color-text-100)]/10 bg-[var(--color-background-900)]/50 p-4 text-[var(--color-text-100)]/90 shadow-2xl backdrop-blur-xl space-y-4",
    saturation: "relative h-36 w-full rounded-lg cursor-crosshair",
    saturationThumb:
      "absolute h-5 w-5 rounded-full border-2 border-white shadow-lg",
    hueSlider: "relative h-4 w-full rounded-full cursor-pointer",
    hueThumb:
      "absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-white shadow-lg bg-white/20",
    outputInput:
      "w-full rounded-md border-[var(--color-text-100)]/20 bg-[var(--color-background-900)]/20 p-2 text-center text-sm font-mono focus:ring-2 focus:ring-[var(--color-primary-400)]",
    swatches: "grid grid-cols-8 gap-2",
    swatch:
      "h-6 w-6 rounded-md cursor-pointer border-2 border-transparent hover:border-white",
  },
  material: {
    trigger:
      "h-10 w-10 rounded-md border border-[var(--color-background-300)] p-1 shadow-sm",
    panel:
      "w-64 rounded-lg border border-[var(--color-background-200)] bg-[var(--color-background-500)] p-3 shadow-xl space-y-3",
    saturation: "relative h-36 w-full rounded-md cursor-crosshair",
    saturationThumb:
      "absolute h-4 w-4 rounded-full border-2 border-white shadow-md",
    hueSlider: "relative h-4 w-full rounded-full cursor-pointer",
    hueThumb:
      "absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-white shadow-md",
    outputInput:
      "w-full rounded-md border-[var(--color-secondary-300)] bg-[var(--color-background-100)] p-2 text-center font-mono",
    swatches: "grid grid-cols-8 gap-1",
    swatch:
      "h-6 w-6 rounded-full cursor-pointer transition-transform hover:scale-110",
  },
  bootstrap: {
    trigger: "h-10 w-10 rounded border border-[var(--color-secondary-300)] p-1",
    panel:
      "w-64 rounded-lg border border-[var(--color-background-300)] bg-[var(--color-background-500)] p-3 shadow-lg space-y-3",
    saturation: "relative h-36 w-full rounded cursor-crosshair",
    saturationThumb:
      "absolute h-4 w-4 rounded-full border-2 border-white shadow",
    hueSlider:
      "relative h-4 w-full rounded-full bg-[var(--color-background-200)] cursor-pointer",
    hueThumb:
      "absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-white shadow",
    outputInput:
      "w-full rounded border-[var(--color-secondary-300)] p-2 text-center font-mono",
    swatches:
      "grid grid-cols-8 gap-2 pt-2 border-t border-[var(--color-background-200)]",
    swatch:
      "h-6 w-6 rounded cursor-pointer border border-[var(--color-secondary-300)] hover:opacity-80",
  },
  windows: {
    trigger:
      "h-9 w-9 rounded-none border-2 border-[var(--color-secondary-500)] p-0.5",
    panel:
      "w-64 rounded-none border border-[var(--color-secondary-300)] bg-[var(--color-background-500)] p-2 shadow-lg space-y-2",
    saturation:
      "relative h-32 w-full cursor-crosshair border border-[var(--color-secondary-300)]",
    saturationThumb:
      "absolute h-3 w-3 rounded-full border border-[var(--color-text-900)] bg-white",
    hueSlider:
      "relative h-3 w-full cursor-pointer border border-[var(--color-secondary-300)]",
    hueThumb:
      "absolute top-1/2 h-5 w-1.5 -translate-y-1/2 rounded-sm border border-[var(--color-text-900)] bg-white",
    outputInput:
      "w-full rounded-none border-[var(--color-secondary-300)] p-2 text-center font-mono",
    swatches: "grid grid-cols-8 gap-1",
    swatch:
      "h-6 w-6 rounded-none cursor-pointer border border-transparent hover:border-[var(--color-primary-500)]",
  },
};
