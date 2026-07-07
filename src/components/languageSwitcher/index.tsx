import cn from "classnames";
import { useI18n, type Language } from "@/i18n";
import styles from "./styles.module.scss";

const LANGUAGES: Language[] = ["en", "ru"];

export const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useI18n();

  return (
    <div className={styles.container} aria-label={t.languageSwitcher.ariaLabel}>
      <span className={styles.label}>{t.common.language}</span>
      <div className={styles.buttons}>
        {LANGUAGES.map((item) => (
          <button
            key={item}
            type="button"
            className={cn(styles.button, item === language && styles.active)}
            onClick={() => setLanguage(item)}
            aria-pressed={item === language}
          >
            {t.languageSwitcher[item]}
          </button>
        ))}
      </div>
    </div>
  );
};
