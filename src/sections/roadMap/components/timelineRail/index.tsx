import type { RefObject } from "react";
import type { TimelineYear } from "@/sections/roadMap/utils/timelineYears";
import styles from "../../styles.module.scss";

type Props = {
  years: TimelineYear[];
  timelineRef: RefObject<HTMLElement | null>;
  thumbRef: RefObject<HTMLDivElement | null>;
  yearListRef: RefObject<HTMLDivElement | null>;
};

export const TimelineRail = ({
  years,
  timelineRef,
  thumbRef,
  yearListRef,
}: Props) => {
  return (
    <aside className={styles.timeline} ref={timelineRef}>
      <div className={styles.track} />

      <div className={styles.thumb} ref={thumbRef}>
        <div className={styles.yearLabel}>Year</div>

        <div className={styles.yearWrap}>
          <div className={styles.yearList} ref={yearListRef}>
            {years.map((year) => (
              <div className={styles.year} key={year.id}>
                {year.value}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.dotOuter}>
          <div className={styles.dotInner} />
        </div>
      </div>
    </aside>
  );
};
