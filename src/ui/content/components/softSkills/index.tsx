import { Card, Text } from "@/ui/components";
import { styled } from "@linaria/react";
import { useTranslation } from "react-i18next";

type SoftSkillItem = {
  label: string;
  description: string;
};

export const SoftSkills = () => {
  const { t } = useTranslation("sections");

  const title = t("soft-skills.title");
  const items = t("soft-skills.items", {
    returnObjects: true,
  }) as SoftSkillItem[];

  return (
    <Card id="soft-skills">
      <Text as="h2" size={20} weight={"bold"} children={title} />

      <List>
        {items.map((item, key) => (
          <Item key={key}>
            <Text as="h3" size={18} weight={"bold"}>
              {item.label}
            </Text>
            <Text>{item.description}</Text>
          </Item>
        ))}
      </List>
    </Card>
  );
};

const List = styled.ul`
  display: grid;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;
`;
const Item = styled.li`
  display: grid;
  gap: 4px;
`;
