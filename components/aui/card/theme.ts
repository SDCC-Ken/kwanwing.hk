import { z } from "zod";
import type { AuiStyleName } from "../types";

// Zod schema for type validation
export const StyleConfig = z.object({
  root: z.string(),
  header: z.string(),
  body: z.string(),
  footer: z.string(),
});
export type StyleConfig = z.infer<typeof StyleConfig>;

// REFACTORED: Now using semantic Tailwind classes mapped in tailwind.css
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    root: "overflow-hidden rounded-card border-card bg-card shadow-2xl backdrop-blur-xl",
    header: "p-4 border-b border-card",
    body: "p-4",
    footer:
      "p-4 border-t border-card bg-card/20",
  },
  material: {
    root: "overflow-hidden rounded-card bg-card shadow-md",
    header: "p-4 border-b border-background-200",
    body: "p-4",
    footer:
      "p-4 bg-background-100 border-t border-background-200",
  },
  bootstrap: {
    root: "overflow-hidden rounded-card border-card bg-card",
    header:
      "p-3 text-lg font-medium bg-background-100 border-b border-background-200",
    body: "p-4",
    footer:
      "p-3 bg-background-100 border-t border-background-200",
  },
  windows: {
    root: "overflow-hidden rounded-card border-card bg-card",
    header:
      "p-3 font-semibold bg-background-100 border-b border-card",
    body: "p-4",
    footer: "p-3 border-t border-card",
  },
};
