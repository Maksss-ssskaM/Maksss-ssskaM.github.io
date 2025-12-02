import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    load: "languageOnly",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "cookie", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "lang",
    },
    pluralSeparator: "_",
    contextSeparator: "_",
    backend: {
      loadPath: (lng: string, ns: string) => {
        return `/locales/${lng}/${ns}.json`;
      },
    },
  });
