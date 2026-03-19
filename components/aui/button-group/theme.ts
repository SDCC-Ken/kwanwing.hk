import { z } from "zod";
import type { AuiStyleName } from "../types";

// Zod schema for type validation
export const StyleConfig = z.object({
  base: z.string(),
  variants: z.object({
    attached: z.string(),
    separate: z.string(),
  }),
});
export type StyleConfig = z.infer<typeof StyleConfig>;

// This theme file defines layout (spacing and child element modifications)
// and does not require color variables. The buttons inside the group
// will derive their colors from their own theme.
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    base: "inline-flex items-center",
    variants: {
      attached:
        "[&>:not(:first-child)]:-ml-px [&>:first-child]:rounded-r-none [&>:not(:first-child):not(:last-child)]:rounded-none [&>:last-child]:rounded-l-none",
      separate: "gap-2",
    },
  },
  material: {
    base: "inline-flex items-center",
    variants: {
      attached:
        // This variant for material needs to adjust the radius of the inner buttons to 0
        // and only apply rounding to the first and last.
        "[&>:first-child]:rounded-r-none [&>:last-child]:rounded-l-none [&>:not(:first-child):not(:last-child)]:rounded-none",
      separate: "gap-2",
    },
  },
  bootstrap: {
    base: "inline-flex items-center",
    variants: {
      attached:
        "[&>:not(:first-child)]:-ml-px [&>:first-child]:rounded-r-none [&>:not(:first-child):not(:last-child)]:rounded-none [&>:last-child]:rounded-l-none",
      separate: "gap-2",
    },
  },
  windows: {
    base: "inline-flex items-center",
    variants: {
      attached:
        "[&>:not(:first-child)]:-ml-px [&>:first-child]:rounded-r-none [&>:not(:first-child):not(:last-child)]:rounded-none [&>:last-child]:rounded-l-none",
      separate: "gap-1",
    },
  },
};
