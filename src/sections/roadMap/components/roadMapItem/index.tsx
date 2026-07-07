import cn from "classnames";
import type { RoadMapItemType } from "./types";
import styles from "./styles.module.scss";

type Props = {
  item: RoadMapItemType;
  setRef: (element: HTMLElement | null) => void;
};

export const RoadMapItem = ({ item, setRef }: Props) => {
  const { eyebrow, title, subtitle, text, chips, theme, decoration } = item;

  return (
    <section className={styles.row} ref={setRef}>
      <div
        data-road-map-card
        className={cn(styles.card, styles[theme], styles.projectCard)}
      >
        {decoration && <div className={styles.decoration}>{decoration}</div>}

        <div className={styles.cardContent}>
          {(eyebrow || title || subtitle) && (
            <div className={styles.wrapper}>
              {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
              {title && <h3 className={styles.cardTitle}>{title}</h3>}
              {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
          )}

          <div className={styles.text}>{text}</div>

          {chips && (
            <div className={styles.chips}>
              {chips.map((chip) => (
                <span className={styles.chip} key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
