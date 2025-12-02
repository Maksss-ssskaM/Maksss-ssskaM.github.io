import { styled } from "@linaria/react";
import { Pic } from "./components/pic";
import { Text, Card, Switch } from "@/ui/components";
import { Contacts } from "./components/contacts";
import { useTranslation } from "react-i18next";
import { Dropdown } from "@/ui/components/dropdown.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useSettings } from "@/hooks/useSettings.ts";

export const Header = () => {
  const { lang, theme, setLang, setTheme } = useSettings();

  return (
    <Main>
      <Desktop>
        <Pic />
        <Card id="contacts">
          <Content />
          <Contacts />
        </Card>
      </Desktop>

      <Mobile>
        <Pic />
        <Content />
        <Dropdown
          content={
            <>
              <Switch
                value={lang === "en"}
                onChange={(checked) => setLang(checked ? "en" : "ru")}
                leftLabel={"Рус"}
                rightLabel={"Eng"}
              />
              <Switch
                value={theme === "dark"}
                onChange={(checked) => setTheme(checked ? "dark" : "light")}
                leftLabel={<FontAwesomeIcon icon={faSun} />}
                rightLabel={<FontAwesomeIcon icon={faMoon} />}
              />
            </>
          }
        />
        <Contacts />
      </Mobile>
    </Main>
  );
};

const Content = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Text as={"h1"} size={"lg"} children={t("about-myself.name")} />
      <Text children={t("about-myself.position")} color="secondary" />
      <Text children="26.02.2002" />
    </Wrapper>
  );
};

const Main = styled.header``;

const Desktop = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 16px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Mobile = styled.div`
  display: none;
  grid-template-columns: max-content 1fr max-content;
  gap: 16px;
  align-items: start;
  & > :nth-child(4) {
    grid-column: 1 / -1;
  }

  @media (max-width: 768px) {
    display: grid;
  }
`;

const Wrapper = styled.div`
  display: grid;
`;
