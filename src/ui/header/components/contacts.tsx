import { styled } from "@linaria/react";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Contacts = () => {
  return (
    <Main>
      <Item>
        <FontAwesomeIcon icon={faPhone} color="var(--color-primary)" />
        <a href="tel:+79523945912">+7(952)-394-59-12</a>
      </Item>
      <Item>
        <FontAwesomeIcon icon={faEnvelope} color="var(--color-primary)" />
        <a href="mailto:maks.shein@outlook.com">maks.shein@outlook.com</a>
      </Item>
      <Item>
        <FontAwesomeIcon icon={faTelegram} color="var(--color-primary)" />
        <a
          href="https://t.me/maksss_ssskam"
          target="_blank"
          rel="noopener noreferrer"
        >
          @maksss_ssskam
        </a>
      </Item>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const Item = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  justify-content: start;
  align-items: center;
`;
