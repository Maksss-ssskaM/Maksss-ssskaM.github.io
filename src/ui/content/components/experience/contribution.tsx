import { styled } from "@linaria/react";
import { Text } from "@/ui/components";
import { useTranslation } from "react-i18next";
import type { Contribution } from "@/ui/content/components/experience/config.ts";

type Props = {
  contribution: Contribution;
};

export const ContributionBlock: React.FC<Props> = ({ contribution }) => {
  const { t } = useTranslation("sections");
  return (
    <Main>
      <Text
        as="h4"
        weight={"bold"}
        children={t("experience.labels.contribution")}
      />
      <RootList>
        {contribution.map((item, index) => {
          const rootKey = `root-${index}`;

          if (typeof item === "string") {
            return (
              <RootItem key={rootKey}>
                <Text>{item}</Text>
              </RootItem>
            );
          }

          return (
            <RootItemNoMarker key={rootKey}>
              <List>
                {item.map((child, key) => {
                  return (
                    <Item key={`${rootKey}-${key}`}>
                      <Text>{child}</Text>
                    </Item>
                  );
                })}
              </List>
            </RootItemNoMarker>
          );
        })}
      </RootList>
    </Main>
  );
};

const Main = styled.div`
  display: grid;
  gap: 2px;
`;

const RootList = styled.ul`
  padding-left: 10px;
  list-style: "• ";
`;

const RootItem = styled.li``;
const RootItemNoMarker = styled(RootItem)`
  list-style: none;
`;

const List = styled.ul`
  padding-left: 20px;
  list-style: "- ";
`;

const Item = styled.li``;
