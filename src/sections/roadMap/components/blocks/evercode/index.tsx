import { Content } from "@/components/content";
import { useI18n } from "@/i18n";
import styles from "./styles.module.scss";
import MainImage from "@/sections/roadMap/assets/media/evercode/main.png";
import VacanciesImage from "@/sections/roadMap/assets/media/evercode/vacancies.png";
import FormImage from "@/sections/roadMap/assets/media/evercode/form.png";

export const Evercode = () => {
  const { t } = useI18n();
  const headings = t.roadMap.blocks.headings;
  const block = t.roadMap.blocks.evercode;

  return (
    <Content className={styles.container}>
      <Content.Wrapper>
        <h5>{headings.company}</h5>
        <p>{block.company}</p>
      </Content.Wrapper>

      <Content.Wrapper>
        <h5>{headings.contribution}</h5>
        <ul>
          {block.contributions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Content.Media className={styles.customImageWrapper}>
          <img src={MainImage} alt="main" />
          <img src={VacanciesImage} alt="vacancies" />
          <img src={FormImage} alt="form" />
        </Content.Media>
      </Content.Wrapper>
    </Content>
  );
};
