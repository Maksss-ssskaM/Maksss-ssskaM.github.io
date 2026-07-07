import { Content } from "@/components/content";
import { useI18n } from "@/i18n";
import styles from "./styles.module.scss";
import Video1 from "@/sections/roadMap/assets/media/ndaPurple/video1.mp4";
import VideoPoster from "@/sections/roadMap/assets/media/ndaPurple/img.png";
import Image1 from "@/sections/roadMap/assets/media/ndaPurple/img1.png";
import Image2 from "@/sections/roadMap/assets/media/ndaPurple/img2.png";
import Image3 from "@/sections/roadMap/assets/media/ndaPurple/img3.png";
import Image4 from "@/sections/roadMap/assets/media/ndaPurple/img4.png";
import Image5 from "@/sections/roadMap/assets/media/ndaPurple/img5.png";
import Image6 from "@/sections/roadMap/assets/media/ndaPurple/img6.png";
import Image7 from "@/sections/roadMap/assets/media/ndaPurple/img7.png";
import Image8 from "@/sections/roadMap/assets/media/ndaPurple/img8.png";

export const NDAPurple = () => {
  const { t } = useI18n();
  const headings = t.roadMap.blocks.headings;
  const block = t.roadMap.blocks.ndaPurple;

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
        <video src={Video1} poster={VideoPoster} />
        <img src={Image1} alt="img1" />
        <img src={Image2} alt="img2" />
        <img src={Image3} alt="img3" />
        <img src={Image4} alt="img4" />
        <img src={Image5} alt="img5" />
        <img src={Image6} alt="img6" />
        <img src={Image7} alt="img7" />
        <img src={Image8} alt="img8" />
      </Content.Media>
    </Content>
  );
};
