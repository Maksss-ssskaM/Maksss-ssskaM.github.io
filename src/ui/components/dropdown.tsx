import { type ReactNode, useEffect, useRef, useState } from "react";
import { styled } from "@linaria/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

type Props = {
  content: ReactNode;
};

export const Dropdown: React.FC<Props> = ({ content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!menuRef.current) return;

      if (!menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", onClick);

    return () => {
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  return (
    <Main ref={menuRef}>
      <Icon
        icon={isOpen ? faXmark : faBars}
        onClick={() => setIsOpen(!isOpen)}
        color={"var(--color-primary)"}
      />
      {isOpen && <Menu>{content}</Menu>}
    </Main>
  );
};

const Main = styled.div`
  position: relative;
  display: inline-block;
`;

const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

const Menu = styled.div`
  display: grid;
  justify-items: center;
  gap: 8px;
  padding: 16px;
  border: 1px solid var(--border-default);
  border-radius: 4px;
  background-color: var(--background-color);

  position: absolute;
  top: calc(100% + 6px);
  right: 0;
`;
