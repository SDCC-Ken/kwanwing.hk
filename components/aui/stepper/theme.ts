import { z } from "zod";
import type { AuiStyleName } from "../types";

// Zod schema for type validation
export const StyleConfig = z.object({
  root: z.string(),
  step: z.string(),
  content: z.string(),
  connector: z.string(),
  indicator: z.string(),
  label: z.string(),
  description: z.string(),
  orientations: z.object({
    horizontal: z.string(),
    vertical: z.string(),
  }),
  sizes: z.object({
    xs: z.object({
      indicator: z.string(),
      label: z.string(),
      description: z.string(),
    }),
    sm: z.object({
      indicator: z.string(),
      label: z.string(),
      description: z.string(),
    }),
    md: z.object({
      indicator: z.string(),
      label: z.string(),
      description: z.string(),
    }),
    lg: z.object({
      indicator: z.string(),
      label: z.string(),
      description: z.string(),
    }),
    xl: z.object({
      indicator: z.string(),
      label: z.string(),
      description: z.string(),
    }),
  }),
  states: z.object({
    inactive: z.object({
      indicator: z.string(),
      label: z.string(),
      description: z.string(),
      connector: z.string(),
    }),
    active: z.object({
      indicator: z.string(),
      label: z.string(),
      description: z.string(),
      connector: z.string(),
    }),
    completed: z.object({
      indicator: z.string(),
      label: z.string(),
      description: z.string(),
      connector: z.string(),
    }),
    disabled: z.string(),
  }),
});
export type StyleConfig = z.infer<typeof StyleConfig>;

// REFACTORED: Now using semantic Tailwind classes mapped in tailwind.css
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    root: "grid w-full",
    step: "grid place-items-center",
    content: "",
    connector: "transition-colors",
    indicator:
      "flex-shrink-0 rounded-full flex items-center justify-center font-bold border-2 transition-colors",
    label: "font-semibold transition-colors",
    description: "transition-colors",
    orientations: {
      horizontal: "grid-flow-col auto-cols-fr",
      vertical: "grid-flow-row auto-rows-fr",
    },
    sizes: {
      xs: {
        indicator: "w-5 h-5",
        label: "text-[10px]",
        description: "text-[10px]",
      },
      sm: { indicator: "w-6 h-6", label: "text-xs", description: "text-xs" },
      md: { indicator: "w-8 h-8", label: "text-sm", description: "text-xs" },
      lg: {
        indicator: "w-10 h-10",
        label: "text-base",
        description: "text-sm",
      },
      xl: {
        indicator: "w-12 h-12",
        label: "text-lg",
        description: "text-base",
      },
    },
    states: {
      inactive: {
        indicator:
          "border-stepper-indicator-inactive bg-card/30 text-text-muted/40",
        label: "text-text-muted/40",
        description: "text-text-muted/30",
        connector: "bg-stepper-connector",
      },
      active: {
        indicator:
          "border-stepper-indicator-active bg-stepper-indicator-active text-white",
        label: "text-white",
        description: "text-text-main/70",
        connector: "bg-stepper-connector",
      },
      completed: {
        indicator:
          "border-stepper-indicator-completed bg-stepper-indicator-completed text-btn-success-text",
        label: "text-text-main/80",
        description: "text-text-main/50",
        connector: "bg-success-500/40",
      },
      disabled: "opacity-50 cursor-not-allowed",
    },
  },
  material: {
    root: "grid w-full",
    step: "grid place-items-center",
    content: "",
    connector: "transition-colors",
    indicator:
      "flex-shrink-0 rounded-full flex items-center justify-center font-semibold border-2 transition-colors bg-card",
    label: "font-medium transition-colors",
    description: "transition-colors text-xs",
    orientations: {
      horizontal: "grid-flow-col auto-cols-fr items-center",
      vertical: "grid-flow-row auto-rows-fr !justify-start",
    },
    sizes: {
      xs: {
        indicator: "w-5 h-5",
        label: "text-[10px]",
        description: "text-[10px]",
      },
      sm: { indicator: "w-6 h-6", label: "text-xs", description: "text-xs" },
      md: { indicator: "w-8 h-8", label: "text-sm", description: "text-xs" },
      lg: {
        indicator: "w-10 h-10",
        label: "text-base",
        description: "text-sm",
      },
      xl: {
        indicator: "w-12 h-12",
        label: "text-lg",
        description: "text-base",
      },
    },
    states: {
      inactive: {
        indicator:
          "border-stepper-indicator-inactive text-secondary-400",
        label: "text-secondary-400",
        description: "text-secondary-400",
        connector: "bg-stepper-connector",
      },
      active: {
        indicator:
          "border-stepper-indicator-active bg-stepper-indicator-active text-white",
        label: "text-primary-600",
        description: "text-secondary-500",
        connector: "bg-stepper-connector",
      },
      completed: {
        indicator:
          "border-stepper-indicator-completed text-primary-600",
        label: "text-text-800",
        description: "text-secondary-500",
        connector: "bg-primary-600",
      },
      disabled: "opacity-60 cursor-not-allowed",
    },
  },
  bootstrap: {
    root: "grid w-full",
    step: "grid place-items-center",
    content: "",
    connector: "transition-colors",
    indicator:
      "flex-shrink-0 rounded-full flex items-center justify-center font-bold border-2 transition-colors z-10",
    label: "font-bold transition-colors",
    description: "transition-colors text-xs",
    orientations: {
      horizontal: "grid-flow-col auto-cols-fr items-center",
      vertical: "grid-flow-row auto-rows-fr !justify-start",
    },
    sizes: {
      xs: {
        indicator: "w-6 h-6 text-[10px]",
        label: "text-[10px]",
        description: "text-[10px]",
      },
      sm: {
        indicator: "w-7 h-7 text-xs",
        label: "text-xs",
        description: "text-xs",
      },
      md: {
        indicator: "w-9 h-9 text-sm",
        label: "text-sm",
        description: "text-xs",
      },
      lg: {
        indicator: "w-11 h-11 text-base",
        label: "text-base",
        description: "text-sm",
      },
      xl: {
        indicator: "w-12 h-12 text-lg",
        label: "text-lg",
        description: "text-base",
      },
    },
    states: {
      inactive: {
        indicator:
          "border-stepper-indicator-inactive bg-background-100 text-secondary-500",
        label: "text-secondary-500",
        description: "text-secondary-400",
        connector: "bg-stepper-connector",
      },
      active: {
        indicator:
          "border-stepper-indicator-active bg-stepper-indicator-active text-white",
        label: "text-primary-600",
        description: "text-secondary-600",
        connector: "bg-stepper-connector",
      },
      completed: {
        indicator:
          "border-stepper-indicator-completed bg-stepper-indicator-completed text-white",
        label: "text-text-900",
        description: "text-secondary-500",
        connector: "bg-success-500",
      },
      disabled: "opacity-65 cursor-not-allowed",
    },
  },
  windows: {
    root: "grid w-full",
    step: "grid place-items-center",
    content: "",
    connector: "transition-colors",
    indicator:
      "flex-shrink-0 rounded-full flex items-center justify-center font-semibold border-2 transition-colors z-10 bg-white",
    label: "font-medium transition-colors",
    description: "transition-colors text-xs",
    orientations: {
      horizontal: "grid-flow-col auto-cols-fr items-center",
      vertical: "grid-flow-row auto-rows-fr !justify-start",
    },
    sizes: {
      xs: {
        indicator: "w-4 h-4 text-[10px]",
        label: "text-[10px]",
        description: "text-[10px]",
      },
      sm: {
        indicator: "w-5 h-5 text-xs",
        label: "text-xs",
        description: "text-xs",
      },
      md: {
        indicator: "w-6 h-6 text-sm",
        label: "text-sm",
        description: "text-xs",
      },
      lg: {
        indicator: "w-8 h-8 text-base",
        label: "text-sm",
        description: "text-sm",
      },
      xl: {
        indicator: "w-10 h-10 text-lg",
        label: "text-base",
        description: "text-base",
      },
    },
    states: {
      inactive: {
        indicator:
          "border-stepper-indicator-inactive text-secondary-400",
        label: "text-secondary-400",
        description: "text-secondary-400",
        connector: "bg-stepper-connector",
      },
      active: {
        indicator:
          "border-stepper-indicator-active bg-stepper-indicator-active text-white",
        label: "text-primary-600 font-bold",
        description: "text-secondary-700",
        connector: "bg-stepper-connector",
      },
      completed: {
        indicator:
          "border-stepper-indicator-completed text-primary-600",
        label: "text-text-800",
        description: "text-secondary-500",
        connector: "bg-primary-600",
      },
      disabled: "opacity-70 cursor-not-allowed",
    },
  },
};
