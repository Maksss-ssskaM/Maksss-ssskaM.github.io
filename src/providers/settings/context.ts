import { createContext } from "react";

export type ThemeType = "light" | "dark";
export type LangType = "ru" | "en";
type SettingsValue = {
  theme: ThemeType;
  lang: LangType;
  setLang: (lang: LangType) => void;
  setTheme: (theme: ThemeType) => void;
};

export const SettingsContext = createContext<SettingsValue | null>(null);
