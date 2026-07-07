import type { ReactNode } from "react";

export type Theme =
  | "neutral"
  | "evercode"
  | "oxygen"
  | "ndaPurple"
  | "ndaBlack"
  | "ndaBlue";

export type RoadMapItemType = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  text: ReactNode | string;
  chips?: string[];
  theme: Theme;
  decoration?: ReactNode;
};
