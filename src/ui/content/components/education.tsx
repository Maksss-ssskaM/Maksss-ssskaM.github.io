import { Card, Text } from "@/ui/components";
import { styled } from "@linaria/react";
import { useTranslation } from "react-i18next";

export const Education = () => {
  const { t } = useTranslation();
  return (
    <Card id="education">
      <Text as="h2" size={20} children={t("education.title")} weight="bold" />
      <Item>
        <Text children="2020-2024" />
        <Details>
          <Text children={t("education.university")} weight={"bold"} />
          <Text children={t("education.faculty")} color="secondary" />
        </Details>
      </Item>
    </Card>
  );
};

const Item = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: unset;
    gap: 4px;
  }
`;

const Details = styled.div`
  display: grid;
`;
