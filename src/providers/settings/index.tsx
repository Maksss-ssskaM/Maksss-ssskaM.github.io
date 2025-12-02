import { type ReactNode, useLayoutEffect, useState } from "react";
import i18n from "i18next";
import { type LangType, type ThemeType, SettingsContext } from "./context";

export { SettingsContext } from "./context";
export const SettingsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [lang, setLang] = useState<LangType>(
    (localStorage.getItem("lang") as LangType | null) ?? "ru",
  );
  const [theme, setTheme] = useState<ThemeType>(() => {
    const local = localStorage.getItem("theme") as ThemeType | null;
    if (local) return local;

    const prefersDark = window.matchMedia?.(
      "(prefers-color-scheme: dark)",
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const editLang = async (next: LangType) => {
    setLang(next);
    await i18n.changeLanguage(next);
    localStorage.setItem("lang", next);
  };

  const editTheme = (next: ThemeType) => {
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <SettingsContext.Provider
      value={{ lang, theme, setLang: editLang, setTheme: editTheme }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
