import { Content } from "@/components/content";
import { useI18n } from "@/i18n";
import styles from "./styles.module.scss";
import Image1 from "@/sections/roadMap/assets/media/ndaBlack/img1.png";
import Image2 from "@/sections/roadMap/assets/media/ndaBlack/img2.png";
import Image3 from "@/sections/roadMap/assets/media/ndaBlack/img3.png";

export const NDABlack = () => {
  const { t } = useI18n();
  const headings = t.roadMap.blocks.headings;
  const block = t.roadMap.blocks.ndaBlack;

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
      <Content.Media className={styles.customImageWrapper}>
        <img src={Image1} alt="img1" />
        <img src={Image2} alt="img2" />
        <img src={Image3} alt="img3" />
      </Content.Media>
    </Content>
  );
};
