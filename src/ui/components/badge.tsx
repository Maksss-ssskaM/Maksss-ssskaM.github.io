import { styled } from "@linaria/react";
import { Text } from "@/ui/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Props = {
  icon?: IconDefinition;
  color?: string;
  background?: string;
  children?: React.ReactNode;
};

export const Badge: React.FC<Props> = ({
  color = "var(--color-primary)",
  background = "#e4e4e4",
  icon,
  children,
  ...props
}) => {
  return (
    <Main background={background}>
      {icon && <FontAwesomeIcon icon={icon} color={color} size="xs" />}
      <Text
        children={children}
        size={14}
        color={color}
        weight={"bold"}
        {...props}
      />
    </Main>
  );
};

const Main = styled.div<{ background: string }>`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 4px;
  justify-content: center;
  width: fit-content;
  padding: 5px 10px;
  border-radius: 4px;
  background-color: ${({ background }) => background};
`;
