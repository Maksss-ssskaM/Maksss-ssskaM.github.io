import { LanguageSwitcher } from "./components/languageSwitcher";
import { AboutMe } from "./sections/aboutMe";
import { HardSkills } from "./sections/hardSkills";
import { RoadMap } from "./sections/roadMap";
import { SoftSkills } from "@/sections/softSkills";

export const App = () => {
  return (
    <main className="container">
      <LanguageSwitcher />
      <AboutMe />
      <HardSkills />
      <RoadMap />
      <SoftSkills />
    </main>
  );
};
