import { z } from "zod";
import type { AuiStyleName } from "../types";

// Zod schema for type validation
export const StyleConfig = z.object({
  root: z.string(),
  monthsContainer: z.string(),
  header: z.string(),
  headerLabel: z.string(),
  navButton: z.string(),
  headerSelect: z.string(),
  grid: z.string(),
  weekday: z.string(),
  day: z.string(),
  dayStates: z.object({
    selected: z.string(),
    today: z.string(),
    outside: z.string(),
    disabled: z.string(),
    rangeStart: z.string(),
    rangeEnd: z.string(),
    inRange: z.string(),
  }),
});
export type StyleConfig = z.infer<typeof StyleConfig>;

// REFACTORED: All hardcoded colors have been replaced with CSS variables.
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    root: "w-full p-4 rounded-lg border border-[var(--color-text-100)]/10 bg-[var(--color-background-900)]/30 text-[var(--color-text-100)]/90 shadow-2xl backdrop-blur-xl",
    monthsContainer: "flex flex-col sm:flex-row gap-8",
    header: "flex items-center justify-between pb-2",
    headerLabel: "text-lg font-semibold",
    navButton:
      "p-1 rounded-md hover:bg-[var(--color-text-100)]/10 transition-colors",
    headerSelect:
      "appearance-none bg-transparent border-none text-lg font-semibold text-[var(--color-text-100)]/80 hover:text-[var(--color-text-100)] focus:outline-none focus:ring-0",
    grid: "grid grid-cols-7 gap-1",
    weekday:
      "text-center text-xs font-medium text-[var(--color-text-100)]/50 py-2",
    day: "min-h-10 min-w-10 flex items-center justify-center rounded-lg transition-colors duration-150",
    dayStates: {
      selected:
        "bg-[var(--color-primary-500)]/50 text-white font-bold border border-[var(--color-primary-400)]/50",
      today: "border border-[var(--color-text-100)]/30",
      outside: "text-[var(--color-text-100)]/40",
      disabled: "text-[var(--color-text-100)]/30 cursor-not-allowed",
      rangeStart: "bg-[var(--color-primary-500)]/60 rounded-r-none",
      rangeEnd: "bg-[var(--color-primary-500)]/60 rounded-l-none",
      inRange: "bg-[var(--color-primary-500)]/30 rounded-none",
    },
  },
  material: {
    root: "p-3 rounded-lg bg-[var(--color-background-500)] text-[var(--color-text-500)] shadow-xl",
    monthsContainer: "flex flex-col sm:flex-row gap-6",
    header: "flex items-center justify-between mb-2",
    headerLabel: "text-base font-medium",
    navButton:
      "p-1.5 rounded-full hover:bg-[var(--color-background-200)] transition-colors",
    headerSelect:
      "appearance-none bg-transparent border-none p-1 rounded-md text-base font-medium hover:bg-[var(--color-background-200)] focus:outline-none focus:ring-0",
    grid: "grid grid-cols-7",
    weekday:
      "text-center text-sm font-semibold text-[var(--color-secondary-500)] py-1",
    day: "min-h-10 min-w-10 flex items-center justify-center rounded-full transition-colors duration-150",
    dayStates: {
      selected:
        "bg-[var(--color-primary-600)] text-[var(--color-text-100)] hover:bg-[var(--color-primary-700)]",
      today: "bg-[var(--color-primary-100)] text-[var(--color-primary-700)]",
      outside: "text-[var(--color-secondary-400)]",
      disabled: "text-[var(--color-secondary-300)] cursor-not-allowed",
      rangeStart:
        "bg-[var(--color-primary-600)] text-[var(--color-text-100)] rounded-r-none",
      rangeEnd:
        "bg-[var(--color-primary-600)] text-[var(--color-text-100)] rounded-l-none",
      inRange:
        "bg-[var(--color-primary-100)] rounded-none text-[var(--color-primary-800)]",
    },
  },
  bootstrap: {
    root: "p-2 rounded-lg border border-[var(--color-background-300)] bg-[var(--color-background-500)]",
    monthsContainer: "flex flex-col sm:flex-row gap-4",
    header: "flex items-center justify-between px-2 py-1",
    headerLabel: "text-lg font-semibold",
    navButton: "p-1 rounded hover:bg-[var(--color-background-100)]",
    headerSelect:
      "appearance-none bg-transparent border border-[var(--color-secondary-300)] rounded px-2 py-0.5 text-lg font-semibold focus:outline-none focus:ring-1 focus:ring-[var(--color-primary-500)]",
    grid: "grid grid-cols-7 gap-px",
    weekday:
      "text-center text-sm font-bold text-[var(--color-secondary-600)] py-2",
    day: "min-h-10 min-w-10 flex items-center justify-center transition-colors duration-150 border border-transparent hover:bg-[var(--color-background-100)]",
    dayStates: {
      selected:
        "bg-[var(--color-primary-500)] text-[var(--color-text-100)] hover:bg-[var(--color-primary-600)]",
      today: "bg-[var(--color-background-200)] font-bold",
      outside: "text-[var(--color-secondary-400)]",
      disabled:
        "text-[var(--color-secondary-300)] cursor-not-allowed bg-[var(--color-background-100)]",
      rangeStart:
        "bg-[var(--color-primary-500)] text-[var(--color-text-100)] rounded-r-none",
      rangeEnd:
        "bg-[var(--color-primary-500)] text-[var(--color-text-100)] rounded-l-none",
      inRange:
        "bg-[var(--color-primary-200)] text-[var(--color-primary-800)] font-medium rounded-none",
    },
  },
  windows: {
    root: "p-2 bg-[var(--color-background-500)] border border-[var(--color-secondary-300)] rounded",
    monthsContainer: "flex flex-col sm:flex-row gap-4",
    header: "flex items-center justify-between mb-1",
    headerLabel: "font-semibold",
    navButton: "p-1 hover:bg-[var(--color-background-100)] rounded-sm",
    headerSelect:
      "appearance-none bg-[var(--color-background-100)] border-none rounded-sm px-2 font-semibold hover:bg-[var(--color-background-200)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary-600)]",
    grid: "grid grid-cols-7",
    weekday: "text-center text-sm text-[var(--color-secondary-500)] py-1",
    day: "min-h-10 min-w-10 flex items-center justify-center transition-colors duration-100 hover:bg-[var(--color-background-100)]",
    dayStates: {
      selected:
        "bg-[var(--color-primary-600)] text-[var(--color-text-100)] hover:bg-[var(--color-primary-700)]",
      today:
        "border-2 border-[var(--color-primary-600)] text-[var(--color-primary-700)] font-semibold",
      outside: "text-[var(--color-secondary-400)]",
      disabled: "text-[var(--color-secondary-300)] cursor-not-allowed",
      rangeStart:
        "bg-[var(--color-primary-600)] text-[var(--color-text-100)] rounded-r-none",
      rangeEnd:
        "bg-[var(--color-primary-600)] text-[var(--color-text-100)] rounded-l-none",
      inRange:
        "bg-[var(--color-primary-100)] text-[var(--color-primary-800)] rounded-none",
    },
  },
};
