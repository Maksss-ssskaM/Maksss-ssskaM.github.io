import { Card } from "@/ui/components";
import { Badge, Text } from "@/ui/components";
import { styled } from "@linaria/react";
import config from "@/ui/content/components/hardSkills/config";

export type Skill = {
  name: string;
  backgroundColor: string;
  color: string;
};

export type HardSkillsConfig = {
  core: Skill[];
  backend: Skill[];
  frontend: Skill[];
  tools: Skill[];
};

export const HardSkills = () => {
  return (
    <Card id="hard-skills">
      <Text as="h2" size={20} children="Hard Skills" weight="bold" />
      <Skills>
        <Text as="h3" size={18} children="Core Languages:" />
        <Wrapper>
          {config.core.map(({ name, backgroundColor, color }) => (
            <Badge
              key={name}
              children={name}
              background={backgroundColor}
              color={color}
            />
          ))}
        </Wrapper>

        <Text as="h3" size={18} children="Backend Development:" />
        <Wrapper>
          {config.backend.map(({ name, backgroundColor, color }) => (
            <Badge
              key={name}
              children={name}
              background={backgroundColor}
              color={color}
            />
          ))}
        </Wrapper>

        <Text as="h3" size={18} children="Frontend Development:" />
        <Wrapper>
          {config.frontend.map(({ name, backgroundColor, color }) => (
            <Badge
              key={name}
              children={name}
              background={backgroundColor}
              color={color}
            />
          ))}
        </Wrapper>

        <Text as="h3" size={18} children="Tools:" />
        <Wrapper>
          {config.tools.map(({ name, backgroundColor, color }) => (
            <Badge
              key={name}
              children={name}
              background={backgroundColor}
              color={color}
            />
          ))}
        </Wrapper>
      </Skills>
    </Card>
  );
};

const Skills = styled.div`
  display: grid;
  gap: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;
