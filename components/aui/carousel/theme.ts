// aui-carousel/theme
import { z } from "zod";
import type { AuiStyleName } from "../types";

// Zod schema for type validation
export const StyleConfig = z.object({
  root: z.string(),
  scrollContainer: z.string(),
  slide: z.string(),
  navButton: z.string(),
  navButtonPrev: z.string(),
  navButtonNext: z.string(),
  pagination: z.string(),
  paginationDot: z.string(),
  paginationDotActive: z.string(),
});
export type StyleConfig = z.infer<typeof StyleConfig>;

// REFACTORED: Now using semantic Tailwind classes mapped in tailwind.css
export const styleMapping: Record<AuiStyleName, StyleConfig> = {
  "liquid-glass": {
    root: "relative w-full h-full",
    scrollContainer:
      "flex w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide",
    slide: "flex-shrink-0 w-full h-full snap-center",
    navButton:
      "absolute top-1/2 -translate-y-1/2 z-10 p-2 rounded-full border border-nav-border bg-carousel-nav-bg text-carousel-nav-text hover:bg-nav-bg backdrop-blur-sm transition-colors",
    navButtonPrev: "left-4",
    navButtonNext: "right-4",
    pagination:
      "absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2",
    paginationDot:
      "w-2 h-2 rounded-full bg-carousel-dot transition-all",
    paginationDotActive: "w-4 bg-carousel-dot-active",
  },
  material: {
    root: "relative w-full h-full",
    scrollContainer:
      "flex w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide rounded-lg",
    slide: "flex-shrink-0 w-full h-full snap-center",
    navButton:
      "absolute top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-carousel-nav-bg text-carousel-nav-text shadow-lg hover:bg-background-400 transition-colors",
    navButtonPrev: "left-3",
    navButtonNext: "right-3",
    pagination:
      "absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5",
    paginationDot:
      "w-2.5 h-2.5 rounded-full bg-carousel-dot opacity-75 transition-colors",
    paginationDotActive: "opacity-100 bg-carousel-dot-active",
  },
  bootstrap: {
    root: "relative w-full h-full",
    scrollContainer:
      "flex w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide rounded",
    slide: "flex-shrink-0 w-full h-full snap-center",
    navButton:
      "absolute top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-carousel-nav-bg text-carousel-nav-text hover:opacity-75 transition-opacity",
    navButtonPrev: "left-2",
    navButtonNext: "right-2",
    pagination:
      "absolute bottom-2 left-0 right-0 flex items-center justify-center gap-2",
    paginationDot: "w-3 h-3 rounded-full bg-carousel-dot opacity-50",
    paginationDotActive: "opacity-100",
  },
  windows: {
    root: "relative w-full h-full",
    scrollContainer:
      "flex w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide border border-secondary-300",
    slide: "flex-shrink-0 w-full h-full snap-center",
    navButton:
      "absolute top-1/2 -translate-y-1/2 z-10 p-1 bg-carousel-nav-bg text-carousel-nav-text border border-secondary-300 hover:bg-background-100 transition-colors",
    navButtonPrev: "-left-px",
    navButtonNext: "-right-px",
    pagination: "absolute bottom-3 right-3 flex items-center gap-1.5",
    paginationDot: "w-1.5 h-1.5 rounded-full bg-carousel-dot",
    paginationDotActive: "scale-150 bg-carousel-dot-active",
  },
};
