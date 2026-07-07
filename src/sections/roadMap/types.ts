import type { RoadMapItemType } from "@/sections/roadMap/components/roadMapItem/types";

export type RoadMapYear = string | readonly [string, ...string[]];

export type RoadMapItem = {
  id: string;
  year: RoadMapYear;
  data: RoadMapItemType;
  left?: never;
  right?: never;
};
