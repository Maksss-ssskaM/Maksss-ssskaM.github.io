import { Module } from "@/components/module";
import { useI18n } from "@/i18n";
import styles from "./styles.module.scss";

export const AboutMe = () => {
  const { t } = useI18n();

  return (
    <Module
      tag={"section"}
      eyebrow={<div>{t.aboutMe.role}</div>}
      title={<h1>{t.aboutMe.name}</h1>}
      rightImage={
        <img src="/images/me.jpg" alt={t.aboutMe.imageAlt} className={styles.me} />
      }
    >
      {t.aboutMe.description}
    </Module>
  );
};
