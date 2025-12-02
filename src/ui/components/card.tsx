import { styled } from "@linaria/react";

type Flow = "column" | "row";

type Props = {
  id?: string;
  flow?: Flow;
  className?: string;
  children?: React.ReactNode;
};

export const Card: React.FC<Props> = ({
  children,
  flow = "row",
  id,
  ...props
}) => {
  return (
    <Main id={id} flow={flow} {...props}>
      {children}
    </Main>
  );
};

const Main = styled.section<{ flow: Flow }>`
  display: grid;
  grid-auto-flow: ${(props) => props.flow};
  gap: 16px;
  padding: 20px;
  border: 1px solid var(--border-default);
  border-radius: 4px;
  box-shadow: 2px 2px 2px 1px var(--border-default);
`;
