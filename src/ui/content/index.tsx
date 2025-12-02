import { styled } from "@linaria/react";
import {
  Education,
  HardSkills,
  Experience,
  AboutMyself,
  SoftSkills,
} from "@/ui/content/components";

export const Content = () => {
  return (
    <Main>
      <AboutMyself />
      <Education />
      <HardSkills />
      <Experience />
      <SoftSkills />
    </Main>
  );
};

const Main = styled.main`
  display: grid;
  gap: 16px;
`;
