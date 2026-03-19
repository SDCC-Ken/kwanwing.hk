import { z } from "zod";
import type { AuiStyleName } from "../types";

// Zod schema for type validation
export const StyleConfig = z.object({
  root: z.string(),
  list: z.object({
    horizontal: z.string(),
    vertical: z.string(),
    mobile: z.string().optional(),
  }),
  item: z.string(),
  link: z.string(),
  linkActive: z.string(),
});
export type StyleConfig = z.infer<typeof StyleConfig>;

// REFACTORED: Now using semantic Tailwind classes mapped in tailwind.css
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    root: "w-full",
    list: {
      horizontal:
        "flex items-center gap-2 p-2 rounded-full border border-nav-border bg-nav-bg backdrop-blur-md",
      vertical: "flex flex-col gap-1",
    },
    item: "relative",
    link: "flex items-center gap-1 px-4 py-2 pl-6 rounded-full text-sm font-medium text-nav-item-text hover:bg-main/10 hover:text-main transition-all",
    linkActive:
      "bg-nav-item-active-bg text-main shadow-md",
  },
  material: {
    root: "w-full",
    list: {
      horizontal: "flex items-center gap-2",
      vertical: "flex flex-col gap-1",
    },
    item: "relative",
    link: "flex items-center gap-1 px-4 py-2 pl-6 rounded-md text-sm font-medium text-nav-item-text hover:bg-background-200 transition-colors",
    linkActive: "text-primary-600",
  },
  bootstrap: {
    root: "w-full border-b border-nav-border",
    list: {
      horizontal: "flex items-center -mb-px",
      vertical: "flex flex-col",
    },
    item: "relative",
    link: "flex items-center gap-1 px-4 py-3 text-sm font-medium text-nav-item-text hover:text-text-700 hover:border-background-400 border-b-2 border-transparent",
    linkActive:
      "text-primary-600 border-primary-600",
  },
  windows: {
    root: "w-full",
    list: {
      horizontal: "flex items-center gap-1",
      vertical: "flex flex-col",
    },
    item: "relative",
    link: "flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-nav-item-text hover:bg-background-200",
    linkActive: "bg-nav-item-active-bg",
  },
};
