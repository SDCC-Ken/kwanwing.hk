import { z } from "zod";
import type { AuiStyleName, AuiSize } from "../types";

const pinInputSize = {
  xs: "h-8 w-8 text-sm",
  sm: "h-10 w-10 text-base",
  md: "h-12 w-12 text-lg",
  lg: "h-14 w-14 text-xl",
  xl: "h-16 w-16 text-2xl",
};

// Zod schema for type validation
export const StyleConfig = z.object({
  root: z.string(),
  labelWrapper: z.string(),
  label: z.string(),
  optional: z.string(),
  inputWrapper: z.string(),
  input: z.string(),
});
export type StyleConfig = z.infer<typeof StyleConfig>;

// REFACTORED: All hardcoded colors have been replaced with CSS variables.
export const styleMapping = (size: AuiSize) =>
  ({
    "liquid-glass": {
      root: "flex flex-col gap-2",
      labelWrapper: "flex justify-between items-center",
      label: "text-sm font-medium text-[var(--color-text-200)]",
      optional: "text-xs text-[var(--color-text-400)]",
      inputWrapper: "flex items-center gap-2",
      input: `${pinInputSize[size]} text-center font-bold rounded-lg border-2 border-[var(--color-text-100)]/20 bg-[var(--color-background-900)]/30 text-[var(--color-text-100)]/90 placeholder:text-[var(--color-text-100)]/40 backdrop-blur-sm transition-colors duration-200 focus:outline-none focus:border-[var(--color-primary-500)]/50 focus:ring-2 focus:ring-[var(--color-primary-400)]`,
    },
    material: {
      root: "flex flex-col gap-2",
      labelWrapper: "flex justify-between items-center",
      label: "text-base font-medium text-[var(--color-text-800)]",
      optional: "text-sm text-[var(--color-text-500)]",
      inputWrapper: "flex items-center gap-2",
      input: `${pinInputSize[size]} text-center font-medium rounded-md border border-[var(--color-secondary-300)] bg-[var(--color-background-100)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]`,
    },
    bootstrap: {
      root: "flex flex-col gap-2",
      labelWrapper: "flex justify-between items-center",
      label: "text-base font-semibold text-[var(--color-text-700)]",
      optional: "text-sm text-[var(--color-text-500)]",
      inputWrapper: "flex items-center gap-2",
      input: `${pinInputSize[size]} text-center rounded-md border border-[var(--color-secondary-300)] shadow-sm transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]`,
    },
    windows: {
      root: "flex flex-col gap-1",
      labelWrapper: "flex justify-between items-center",
      label: "text-sm text-[var(--color-text-800)]",
      optional: "text-xs text-[var(--color-text-600)]",
      inputWrapper: "flex items-center gap-1.5",
      input: `${pinInputSize[size]} text-center rounded-none border-b-2 border-[var(--color-secondary-400)] bg-[var(--color-background-100)] transition-colors duration-200 focus:outline-none focus:border-[var(--color-primary-600)]`,
    },
  } as Record<AuiStyleName, StyleConfig>);
