import { styled } from "@linaria/react";
import config from "@/ui/sidebar/config.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { type MouseEvent } from "react";
import { Switch } from "@/ui/components";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useSettings } from "@/hooks/useSettings.ts";

export const Sidebar = () => {
  const { t } = useTranslation("sidebar");
  const { lang, theme, setLang, setTheme } = useSettings();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, slug: string) => {
    e.preventDefault();

    const el = document.getElementById(slug);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Nav>
      <Links>
        {config.map(({ slug, icon }) => (
          <Link
            key={slug}
            href={`#${slug}`}
            onClick={(e) => handleClick(e, slug)}
          >
            <FontAwesomeIcon icon={icon} /> {t(slug)}
          </Link>
        ))}
      </Links>
      <Controls>
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
      </Controls>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  border-right: 1px solid var(--border-default);
  background-color: var(--background-color);

  display: grid;
  align-content: space-between;
  padding: 20px 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Link = styled.a`
  padding: 10px 20px;
  color: var(--color-primary);
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: var(--hover-background);
  }
`;

const Links = styled.div`
  display: grid;
  grid-auto-rows: max-content;
`;

const Controls = styled.div`
  display: grid;
  justify-items: center;
  justify-content: start;
  gap: 16px;
  padding: 10px 20px;
`;
