import { useEffect, type RefObject } from "react";
import type { TimelineYearRange } from "../utils/timelineYears";

const DEFAULT_YEAR_WIDTH = 96;
const ITEM_OFFSET = 80;
const TIMELINE_HIDE_DELAY = 720;
const MULTI_YEAR_SPAN_RATIO = 0.72;
const YEAR_HOLD_RATIO = 0.18;

type UseRoadMapTimelineParams = {
  containerRef: RefObject<HTMLElement | null>;
  timelineRef: RefObject<HTMLElement | null>;
  thumbRef: RefObject<HTMLDivElement | null>;
  yearListRef: RefObject<HTMLDivElement | null>;
  rowRefs: RefObject<Array<HTMLElement | null>>;
  timelineYearRanges: TimelineYearRange[];
  timelineActiveClassName: string;
};

export const useRoadMapTimeline = ({
  containerRef,
  timelineRef,
  thumbRef,
  yearListRef,
  rowRefs,
  timelineYearRanges,
  timelineActiveClassName,
}: UseRoadMapTimelineParams) => {
  useEffect(() => {
    let frameId: number | null = null;
    let hideTimeoutId: number | null = null;

    const getViewportAnchor = () => window.innerHeight * 0.55;

    const getTimelineVisibilityAnchor = () => {
      const timeline = timelineRef.current;

      if (!timeline) {
        return 0;
      }

      return timeline.getBoundingClientRect().top;
    };

    const isContainerAtTimelineAnchor = () => {
      const container = containerRef.current;

      if (!container) {
        return false;
      }

      const rect = container.getBoundingClientRect();
      const timelineAnchor = getTimelineVisibilityAnchor();

      return rect.top <= 0 && rect.bottom >= timelineAnchor;
    };

    const clearHideTimeout = () => {
      if (hideTimeoutId === null) {
        return;
      }

      window.clearTimeout(hideTimeoutId);
      hideTimeoutId = null;
    };

    const hideTimeline = () => {
      timelineRef.current?.classList.remove(timelineActiveClassName);
    };

    const showTimelineWhileScrolling = () => {
      const timeline = timelineRef.current;

      if (!timeline) {
        return;
      }

      if (!isContainerAtTimelineAnchor()) {
        clearHideTimeout();
        hideTimeline();
        return;
      }

      timeline.classList.add(timelineActiveClassName);
      clearHideTimeout();

      hideTimeoutId = window.setTimeout(() => {
        hideTimeline();
        hideTimeoutId = null;
      }, TIMELINE_HIDE_DELAY);
    };

    const getHeldYearPosition = (position: number) => {
      const lowerYearPosition = Math.floor(position);
      const transitionProgress = position - lowerYearPosition;

      if (transitionProgress <= YEAR_HOLD_RATIO) {
        return lowerYearPosition;
      }

      if (transitionProgress >= 1 - YEAR_HOLD_RATIO) {
        return lowerYearPosition + 1;
      }

      return (
        lowerYearPosition +
        (transitionProgress - YEAR_HOLD_RATIO) / (1 - YEAR_HOLD_RATIO * 2)
      );
    };

    const getSegmentYearPosition = (
      currentRange: TimelineYearRange,
      nextRange: TimelineYearRange,
      segmentProgress: number,
    ) => {
      if (currentRange.start === currentRange.end) {
        return (
          currentRange.start +
          (nextRange.start - currentRange.start) * segmentProgress
        );
      }

      if (segmentProgress <= MULTI_YEAR_SPAN_RATIO) {
        const rangeProgress = segmentProgress / MULTI_YEAR_SPAN_RATIO;

        return (
          currentRange.start +
          (currentRange.end - currentRange.start) * rangeProgress
        );
      }

      const nextYearProgress =
        (segmentProgress - MULTI_YEAR_SPAN_RATIO) / (1 - MULTI_YEAR_SPAN_RATIO);

      return (
        currentRange.end +
        (nextRange.start - currentRange.end) * nextYearProgress
      );
    };

    const updateSlider = () => {
      const timeline = timelineRef.current;
      const thumb = thumbRef.current;
      const yearList = yearListRef.current;

      if (!timeline || !thumb || !yearList) {
        return;
      }

      const rows = rowRefs.current.filter(Boolean) as HTMLElement[];

      if (rows.length < 2) {
        return;
      }

      const viewportAnchor = getViewportAnchor();
      const points = rows.map((row) => {
        const rect = row.getBoundingClientRect();

        return {
          viewportTop: rect.top + ITEM_OFFSET,
        };
      });

      const firstPoint = points[0];
      const lastPoint = points[points.length - 1];
      let progress = 0;
      let yearPosition = timelineYearRanges[0]?.start ?? 0;

      if (viewportAnchor <= firstPoint.viewportTop) {
        progress = 0;
        yearPosition = timelineYearRanges[0]?.start ?? 0;
      } else if (viewportAnchor >= lastPoint.viewportTop) {
        progress = 1;
        const lastRange = timelineYearRanges[timelineYearRanges.length - 1];
        yearPosition = lastRange?.end ?? lastRange?.start ?? 0;
      } else {
        for (let index = 0; index < points.length - 1; index += 1) {
          const current = points[index];
          const next = points[index + 1];
          const isCurrentSegment =
            viewportAnchor >= current.viewportTop &&
            viewportAnchor <= next.viewportTop;

          if (!isCurrentSegment) {
            continue;
          }

          const segmentProgress =
            (viewportAnchor - current.viewportTop) /
            (next.viewportTop - current.viewportTop);

          progress = (index + segmentProgress) / (points.length - 1);

          const currentRange = timelineYearRanges[index] ?? {
            start: 0,
            end: 0,
          };
          const nextRange = timelineYearRanges[index + 1] ?? currentRange;

          yearPosition = getSegmentYearPosition(
            currentRange,
            nextRange,
            segmentProgress,
          );

          break;
        }
      }

      const timelineHeight = timeline.offsetHeight;
      const thumbHeight = thumb.offsetHeight;
      const maxThumbTop = Math.max(timelineHeight - thumbHeight, 0);
      const thumbTop = progress * maxThumbTop;

      thumb.style.transform = `translate(-50%, ${thumbTop}px)`;

      const firstYear = yearList.firstElementChild;
      const yearWidth =
        firstYear instanceof HTMLElement
          ? firstYear.offsetWidth
          : DEFAULT_YEAR_WIDTH;
      const yearOffset = getHeldYearPosition(yearPosition) * yearWidth;
      yearList.style.transform = `translateX(-${yearOffset}px)`;
    };

    const requestSliderUpdate = () => {
      if (frameId !== null) {
        return;
      }

      frameId = requestAnimationFrame(() => {
        updateSlider();
        frameId = null;
      });
    };

    const handleScroll = () => {
      showTimelineWhileScrolling();
      requestSliderUpdate();
    };

    const handleResize = () => {
      hideTimeline();
      requestSliderUpdate();
    };

    updateSlider();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      clearHideTimeout();

      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [
    containerRef,
    rowRefs,
    thumbRef,
    timelineActiveClassName,
    timelineRef,
    timelineYearRanges,
    yearListRef,
  ]);
};
