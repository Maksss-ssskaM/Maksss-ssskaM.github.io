export type Contribution = (string | string[])[];

type ExperienceItem = {
  company: "oxygen" | "gazprom";
  date: {
    from: Date;
    to?: Date;
  };
  logo: string;
  name: string;
  position: string;
  description: string;
  companyDescription?: string;
  contribution?: string;
  stack: string;
  team?: string;
};

export type ExperienceConfig = {
  title: string;
  items: ExperienceItem[];
};

const config: ExperienceConfig = {
  title: "experience.title",

  items: [
    {
      company: "oxygen",
      date: {
        from: new Date("2002-02-27"),
      },
      logo: `/images/companies/oxygen.png`,

      name: "experience.oxygen.name",
      position: "experience.oxygen.position",
      description: "experience.oxygen.description",
      companyDescription: "experience.oxygen.company-description",

      contribution: "experience.oxygen.contribution",

      stack: "experience.oxygen.stack",
      team: "experience.oxygen.team",
    },

    {
      company: "gazprom",
      date: {
        from: new Date("2002-02-26"),
        to: new Date("2002-02-26"),
      },
      logo: `/images/companies/gazprom.png`,

      name: "experience.gazprom.name",
      position: "experience.gazprom.position",
      description: "experience.gazprom.description",
      stack: "experience.gazprom.stack",
    },
  ],
};

export default config;
