import { Module } from "@/components/module";
import { Badge } from "@/components/badge";
import styles from "./styles.module.scss";
import { HARD_SKILLS } from "./config/hardSkills";
import { useI18n } from "@/i18n";

export const HardSkills = () => {
  const { t } = useI18n();

  return (
    <Module
      tag={"section"}
      title={<h2>{t.hardSkills.title}</h2>}
      contentClassName={styles.content}
    >
      <h3>{t.hardSkills.coreLanguages}</h3>
      <div className={styles.wrapper}>
        {HARD_SKILLS.core.map(({ name, background, color }, index) => (
          <Badge key={index} background={background} color={color}>
            {name}
          </Badge>
        ))}
      </div>
      <h3>{t.hardSkills.frontendDevelopment}</h3>
      <div className={styles.wrapper}>
        {HARD_SKILLS.frontend.map(({ name, background, color }, index) => (
          <Badge key={index} background={background} color={color}>
            {name}
          </Badge>
        ))}
      </div>
      <h3>{t.hardSkills.backendDevelopment}</h3>
      <div className={styles.wrapper}>
        {HARD_SKILLS.backend.map(({ name, background, color }, index) => (
          <Badge key={index} background={background} color={color}>
            {name}
          </Badge>
        ))}
      </div>
      <h3>{t.hardSkills.tools}</h3>
      <div className={styles.wrapper}>
        {HARD_SKILLS.tools.map(({ name, background, color }, index) => (
          <Badge key={index} background={background} color={color}>
            {name}
          </Badge>
        ))}
      </div>
    </Module>
  );
};
