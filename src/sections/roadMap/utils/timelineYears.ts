import type { RoadMapItem, RoadMapYear } from "../types";

export type TimelineYear = {
  id: string;
  value: string;
};

export type TimelineYearRange = {
  start: number;
  end: number;
};

export const getRoadMapYears = (year: RoadMapYear): string[] => {
  if (typeof year === "string") {
    return [year];
  }

  return [...year];
};

const findYearIndex = (years: TimelineYear[], year: string): number => {
  const index = years.findIndex((item) => item.value === year);

  return index === -1 ? 0 : index;
};

export const createTimelineYears = (items: RoadMapItem[]): TimelineYear[] => {
  return items.reduce<TimelineYear[]>((years, item) => {
    getRoadMapYears(item.year).forEach((year) => {
      const previousYear = years[years.length - 1];

      if (previousYear?.value === year) {
        return;
      }

      years.push({
        id: `${item.id}-${year}`,
        value: year,
      });
    });

    return years;
  }, []);
};

export const createTimelineYearRanges = (
  items: RoadMapItem[],
  years: TimelineYear[],
): TimelineYearRange[] => {
  return items.map((item) => {
    const itemYears = getRoadMapYears(item.year);
    const startYear = itemYears[0];
    const endYear = itemYears[itemYears.length - 1] ?? startYear;

    return {
      start: findYearIndex(years, startYear),
      end: findYearIndex(years, endYear),
    };
  });
};
