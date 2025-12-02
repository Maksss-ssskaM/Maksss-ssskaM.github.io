import { styled } from "@linaria/react";
import { Card, Text } from "@/ui/components";
import { ContributionBlock } from "@/ui/content/components/experience/contribution.tsx";
import { format } from "date-fns";
import config, {
  type Contribution,
} from "@/ui/content/components/experience/config.ts";
import { useTranslation } from "react-i18next";

export const Experience = () => {
  const { t } = useTranslation("sections");

  return (
    <Card id="experience">
      <Text as="h2" size={20} weight="bold">
        {t(config.title)}
      </Text>

      <List>
        {config.items.map((item) => (
          <Item key={item.company}>
            <Text>
              {`${format(item.date.from, "MM.yyyy")} — ${
                item.date.to
                  ? format(item.date.to, "MM.yyyy")
                  : t("sections:experience.labels.till-now")
              }`}
            </Text>

            <Content>
              <Header>
                <InfoBlock>
                  <InfoBlockTitle as="h3" size={18}>
                    {t(item.name)}
                  </InfoBlockTitle>
                  <Text size={16} color="secondary">
                    {t(item.position)}
                  </Text>
                </InfoBlock>

                <CompanyLogo src={item.logo} alt={`${item.company}-logo`} />
              </Header>

              <Text>{t(item.description)}</Text>

              {item.companyDescription && (
                <InfoBlock>
                  <InfoBlockTitle as="h4">
                    {t("experience.labels.about-company")}
                  </InfoBlockTitle>
                  <Text>{t(item.companyDescription)}</Text>
                </InfoBlock>
              )}

              {item.contribution && (
                <ContributionBlock
                  contribution={
                    t(item.contribution, {
                      returnObjects: true,
                    }) as Contribution
                  }
                />
              )}

              <InfoBlock>
                <InfoBlockTitle as="h4">
                  {t("experience.labels.tech-stack")}
                </InfoBlockTitle>
                <Text>{t(item.stack)}</Text>
              </InfoBlock>

              {item.team && (
                <InfoBlock>
                  <InfoBlockTitle as="h4">
                    {t("experience.labels.team")}
                  </InfoBlockTitle>
                  <Text>{t(item.team)}</Text>
                </InfoBlock>
              )}
            </Content>
          </Item>
        ))}
      </List>
    </Card>
  );
};

const List = styled.ul`
  display: grid;
  padding: 0;
  margin: 0;
  list-style: none;
  gap: 60px;
`;

const Item = styled.li`
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 12px;

  @media (max-width: 768px) {
    grid-template-columns: unset;
    gap: 4px;
  }
`;

const Content = styled.article`
  display: grid;
  gap: 12px;
`;

const Header = styled.header`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding-bottom: 16px;
  border-bottom: 1px dashed var(--border-default);

  @media (max-width: 768px) {
    grid-auto-flow: unset;
  }
`;

const InfoBlock = styled.div`
  display: grid;
  gap: 4px;
`;

const InfoBlockTitle = styled(Text)`
  font-weight: 600;
`;

const CompanyLogo = styled.img`
  max-width: 120px;
  max-height: 40px;
`;
