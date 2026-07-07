import { Content } from "@/components/content";
import { useI18n } from "@/i18n";
import styles from "./styles.module.scss";

export const NDABlue = () => {
  const { t } = useI18n();
  const headings = t.roadMap.blocks.headings;
  const block = t.roadMap.blocks.ndaBlue;

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
      </Content.Wrapper>
    </Content>
  );
};
