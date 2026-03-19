// src/types/schemas.ts
import { z } from "zod";

export const AuiStyleNameSchema = z.enum([
  "liquid-glass",
  "material",
  "bootstrap",
  "windows",
]);
export type AuiStyleName = z.infer<typeof AuiStyleNameSchema>;

export type AuiSize = "xs" | "sm" | "md" | "lg" | "xl";

export type AuiVariant =
  | "error"
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "neutral";

export type CssVariableTheme = Record<string, string>;
