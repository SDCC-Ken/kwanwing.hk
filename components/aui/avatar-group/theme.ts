// runtime/components/AvatarGro./theme.ts
import { z } from "zod/v4";
import type { AuiStyleName } from "../types";

// Zod schema for type validation
export const StyleConfig = z.object({
  root: z.string(), // Base styles for the group container
});
export type StyleConfig = z.infer<typeof StyleConfig>;

// Theme definitions for all supported styles
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    // Negative margin to create the overlap effect
    root: "flex items-center -space-x-3",
  },
  material: {
    root: "flex items-center -space-x-2",
  },
  bootstrap: {
    root: "flex items-center -space-x-4",
  },
  windows: {
    root: "flex items-center -space-x-3",
  },
};
