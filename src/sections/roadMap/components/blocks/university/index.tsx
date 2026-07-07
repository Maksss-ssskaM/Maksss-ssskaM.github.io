import ItmoImage from "@/sections/roadMap/assets/media/itmo.jpg";
import styles from "./styles.module.scss";
import { Content } from "@/components/content";
import { useI18n } from "@/i18n";

export const University = () => {
  const { t } = useI18n();
  const block = t.roadMap.blocks.university;

  return (
    <Content className={styles.container}>
      <Content.Media>
        <img src={ItmoImage} alt={block.imageAlt} className={styles.img} />
      </Content.Media>
      <Content.Wrapper>
        <h3>{block.educationFocus}</h3>
        <ul>
          {block.focusItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h3>{block.internships}</h3>
        <p>{block.internshipCompany}</p>
        <p>{block.internshipDescription}</p>
      </Content.Wrapper>
    </Content>
  );
};
