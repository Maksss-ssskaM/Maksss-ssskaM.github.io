import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Language, type Messages } from "./translations";

const DEFAULT_LANGUAGE: Language = "en";
const STORAGE_KEY = "site-language";

const isLanguage = (value: string | null): value is Language => {
  return value === "ru" || value === "en";
};

const getBrowserLanguage = (): Language => {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  const browserLanguages = window.navigator.languages?.length
    ? window.navigator.languages
    : [window.navigator.language];

  const matchedLanguage = browserLanguages.find((language) => {
    const normalizedLanguage = language.toLowerCase();

    return (
      normalizedLanguage === "ru" ||
      normalizedLanguage.startsWith("ru-") ||
      normalizedLanguage === "en" ||
      normalizedLanguage.startsWith("en-")
    );
  });

  if (!matchedLanguage) {
    return DEFAULT_LANGUAGE;
  }

  return matchedLanguage.toLowerCase().startsWith("ru") ? "ru" : "en";
};

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: Messages;
};

const I18nContext = createContext<I18nContextValue | null>(null);

type Props = {
  children: ReactNode;
};

export const I18nProvider: React.FC<Props> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return DEFAULT_LANGUAGE;
    }

    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);

    if (isLanguage(storedLanguage)) {
      return storedLanguage;
    }

    return getBrowserLanguage();
  });

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const value = useMemo<I18nContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () =>
        setLanguage((current) => (current === "ru" ? "en" : "ru")),
      t: translations[language],
    }),
    [language],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }

  return context;
};

export type { Language, Messages } from "./translations";
