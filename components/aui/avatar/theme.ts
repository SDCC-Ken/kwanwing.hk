import { z } from "zod";
import type { AuiStyleName } from "../types";

// Zod schema for type validation of the theme structure
export const StyleConfig = z.object({
  root: z.string(),
  sizes: z.object({
    xs: z.string(),
    sm: z.string(),
    md: z.string(),
    lg: z.string(),
    xl: z.string(),
  }),
  shapes: z.object({
    rounded: z.string(),
    square: z.string(),
  }),
  fallback: z.string(),
  image: z.string(),
});
export type StyleConfig = z.infer<typeof StyleConfig>;

// REFACTORED: All hardcoded colors have been replaced with CSS variables.
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    root: "inline-flex items-center justify-center align-middle overflow-hidden select-none font-medium text-[var(--color-text-100)]/90 border border-[var(--color-text-100)]/20",
    sizes: {
      xs: "h-6 w-6 text-xs",
      sm: "h-8 w-8 text-xs",
      md: "h-12 w-12 text-base",
      lg: "h-16 w-16 text-xl",
      xl: "h-20 w-20 text-2xl",
    },
    shapes: {
      rounded: "rounded-full",
      square: "rounded-lg",
    },
    fallback: "bg-[var(--color-background-900)]/20 backdrop-blur-xl",
    image: "h-full w-full object-cover",
  },
  material: {
    root: "inline-flex items-center justify-center align-middle overflow-hidden select-none font-medium text-[var(--color-text-100)]",
    sizes: {
      xs: "h-6 w-6 text-xs",
      sm: "h-8 w-8 text-sm",
      md: "h-10 w-10 text-base",
      lg: "h-14 w-14 text-lg",
      xl: "h-18 w-18 text-xl",
    },
    shapes: {
      rounded: "rounded-full",
      square: "rounded-md",
    },
    fallback: "bg-[var(--color-secondary-500)]",
    image: "h-full w-full object-cover",
  },
  bootstrap: {
    root: "inline-flex items-center justify-center align-middle overflow-hidden select-none font-medium bg-[var(--color-background-200)] text-[var(--color-text-700)] border border-[var(--color-background-300)]",
    sizes: {
      xs: "h-7 w-7 text-xs",
      sm: "h-9 w-9 text-sm",
      md: "h-12 w-12 text-lg",
      lg: "h-16 w-16 text-xl",
      xl: "h-20 w-20 text-2xl",
    },
    shapes: {
      rounded: "rounded-full",
      square: "rounded",
    },
    fallback: "",
    image: "h-full w-full object-cover",
  },
  windows: {
    root: "inline-flex items-center justify-center align-middle overflow-hidden select-none font-semibold bg-[var(--color-background-100)] text-[var(--color-text-800)]",
    sizes: {
      xs: "h-6 w-6 text-xs",
      sm: "h-8 w-8 text-xs",
      md: "h-11 w-11 text-base",
      lg: "h-16 w-16 text-xl",
      xl: "h-20 w-20 text-2xl",
    },
    shapes: {
      rounded: "rounded-full",
      square: "rounded-md",
    },
    fallback: "border border-[var(--color-background-300)]",
    image: "h-full w-full object-cover",
  },
};
