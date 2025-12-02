import { styled } from "@linaria/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Container: React.FC<Props> = ({ children }) => {
  return <Main>{children}</Main>;
};

const Main = styled.div`
  display: grid;
  align-content: start;
  gap: 16px;
  max-width: 2200px;
  min-height: 100dvh;
  padding: 20px;
  margin-left: 200px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-left: unset;
  }
`;
