import { useMemo, useRef } from "react";
import styles from "./styles.module.scss";
import { createRoadMapItems } from "@/sections/roadMap/config/timeline";
import { RoadMapItem } from "./components/roadMapItem";
import { TimelineRail } from "./components/timelineRail";
import { useRoadMapTimeline } from "./hooks/useRoadMapTimeline";
import { useI18n } from "@/i18n";
import {
  createTimelineYearRanges,
  createTimelineYears,
} from "@/sections/roadMap/utils/timelineYears";

export const RoadMap = () => {
  const { t } = useI18n();
  const containerRef = useRef<HTMLElement | null>(null);
  const timelineRef = useRef<HTMLElement | null>(null);
  const thumbRef = useRef<HTMLDivElement | null>(null);
  const yearListRef = useRef<HTMLDivElement | null>(null);
  const rowRefs = useRef<Array<HTMLElement | null>>([]);

  const roadMapItems = useMemo(() => createRoadMapItems(t), [t]);
  const timelineYears = useMemo(
    () => createTimelineYears(roadMapItems),
    [roadMapItems],
  );
  const timelineYearRanges = useMemo(
    () => createTimelineYearRanges(roadMapItems, timelineYears),
    [roadMapItems, timelineYears],
  );

  useRoadMapTimeline({
    containerRef,
    timelineRef,
    thumbRef,
    yearListRef,
    rowRefs,
    timelineYearRanges,
    timelineActiveClassName: styles.timelineActive,
  });

  return (
    <section className={styles.container} ref={containerRef}>
      <TimelineRail
        years={timelineYears}
        timelineRef={timelineRef}
        thumbRef={thumbRef}
        yearListRef={yearListRef}
      />

      <div className={styles.content}>
        {roadMapItems.map((item, index) => (
          <RoadMapItem
            key={item.id}
            item={item.data}
            setRef={(element) => {
              rowRefs.current[index] = element;
            }}
          />
        ))}
      </div>
    </section>
  );
};
