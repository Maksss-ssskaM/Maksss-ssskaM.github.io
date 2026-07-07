import { University } from "@/sections/roadMap/components/blocks/university";
import { Oxygen } from "@/sections/roadMap/components/blocks/oxygen";
import { Evercode } from "@/sections/roadMap/components/blocks/evercode";
import { NDAPurple } from "@/sections/roadMap/components/blocks/ndaPurple";
import { NDABlack } from "@/sections/roadMap/components/blocks/ndaBlack";
import { NDABlue } from "@/sections/roadMap/components/blocks/ndaBlue";
import LineSvg from "@/sections/roadMap/assets/background/evercode/line.svg";
import type { Messages } from "@/i18n";
import type { RoadMapItem } from "../types";
import styles from "./decorations.module.scss";
import { NdaBlueBackground } from "@/sections/roadMap/assets/background/ndaBlue";
import { EvercodeBackground } from "@/sections/roadMap/assets/background/oxygen/background";
import { NdaPurpleBackground } from "@/sections/roadMap/assets/background/ndaPurple";
import { NdaBlackBackground } from "@/sections/roadMap/assets/background/ndaBlack";

export const createRoadMapItems = (t: Messages): RoadMapItem[] => [
  {
    id: "university",
    year: "2024",
    data: {
      eyebrow: t.roadMap.items.university.eyebrow,
      title: t.roadMap.items.university.title,
      subtitle: t.roadMap.items.university.subtitle,
      text: <University />,
      theme: "neutral",
    },
  },
  {
    id: "oxygen",
    year: ["2024", "2025"],
    data: {
      eyebrow: t.roadMap.items.oxygen.eyebrow,
      title: t.roadMap.items.oxygen.title,
      subtitle: t.roadMap.items.oxygen.subtitle,
      text: <Oxygen />,
      chips: [
        "TypeScript",
        "Vite",
        "React",
        "React Router",
        "React Hook Form",
        "Zod",
        "Linaria",
        "SWR",
        "NestJS",
        "Prisma",
        "PostgreSQL",
        "MinIO",
        "Docker",
        "grammY",
      ],
      theme: "oxygen",
      decoration: <EvercodeBackground className={styles.oxygenDecoration} />,
    },
  },
  {
    id: "hr-portal",
    year: ["2025", "2026"],
    data: {
      eyebrow: t.roadMap.items.evercode.eyebrow,
      title: t.roadMap.items.evercode.title,
      subtitle: t.roadMap.items.evercode.subtitle,
      text: <Evercode />,
      chips: [
        "TypeScript",
        "Next 16",
        "React",
        "Zod",
        "Zustand",
        "Strapi",
        "PostgreSQL",
        "Docker",
      ],
      theme: "evercode",
      decoration: (
        <img
          src={LineSvg}
          alt=""
          width={359}
          height={322}
          className={styles.evercodeDecoration}
        />
      ),
    },
  },
  {
    id: "node-provider",
    year: "2026",
    data: {
      eyebrow: t.roadMap.items.nodeProvider.eyebrow,
      title: t.roadMap.items.nodeProvider.title,
      subtitle: t.roadMap.items.nodeProvider.subtitle,
      text: <NDAPurple />,
      chips: [
        "TypeScript",
        "Next 12 / 15",
        "React",
        "Zod",
        "Zustand",
        "NestJS",
        "Prisma",
        "Strapi",
        "Keystone",
        "PostgreSQL",
        "Docker",
      ],
      theme: "ndaPurple",
      decoration: <NdaPurpleBackground />,
    },
  },
  {
    id: "crypto-wallet",
    year: "2026",
    data: {
      eyebrow: t.roadMap.items.cryptoWallet.eyebrow,
      title: t.roadMap.items.cryptoWallet.title,
      subtitle: t.roadMap.items.cryptoWallet.subtitle,
      text: <NDABlack />,
      chips: [
        "TypeScript",
        "Webpack 5",
        "React",
        "React Router",
        "Redux",
        "Redux Toolkit",
        "React Hook Form",
        "Zod",
      ],
      theme: "ndaBlack",
      decoration: <NdaBlackBackground />,
    },
  },
  {
    id: "treasury-platform",
    year: "2026",
    data: {
      eyebrow: t.roadMap.items.treasuryPlatform.eyebrow,
      title: t.roadMap.items.treasuryPlatform.title,
      subtitle: t.roadMap.items.treasuryPlatform.subtitle,
      text: <NDABlue />,
      chips: [
        "TypeScript",
        "Electron",
        "Vite",
        "React",
        "React Router",
        "Zustand",
        "Tailwind 4",
        "React Hook Form",
        "Zod",
        "Docker",
      ],
      theme: "ndaBlue",
      decoration: <NdaBlueBackground />,
    },
  },
];
