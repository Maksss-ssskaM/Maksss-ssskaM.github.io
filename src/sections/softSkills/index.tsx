import { Module } from "@/components/module";
import styles from "./styles.module.scss";
import { useI18n } from "@/i18n";

export const SoftSkills = () => {
  const { t } = useI18n();

  return (
    <Module
      tag={"section"}
      title={<h2>{t.softSkills.title}</h2>}
      contentClassName={styles.content}
    >
      {t.softSkills.items.map((item, i) => (
        <div key={i} className={styles.wrapper}>
          <h3>{item.label}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </Module>
  );
};
