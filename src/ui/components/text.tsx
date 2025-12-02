import * as React from "react";
import { styled } from "@linaria/react";

type TextTag = "p" | "h1" | "h2" | "h3" | "h4" | "span";
type Color = "primary" | "secondary" | string;
type Size = "sm" | "md" | "lg" | number;
type Weight = "regular" | "bold";

type Props = {
  as?: TextTag;
  children?: React.ReactNode;
  className?: string;
  color?: Color;
  size?: Size | number;
  weight?: "regular" | "bold";
};

export const Text: React.FC<Props> = ({
  as = "p",
  color = "primary",
  size = "md",
  weight = "regular",
  ...props
}) => {
  return (
    <Main as={as} $color={color} $size={size} $weight={weight} {...props} />
  );
};

const Main = styled.p<{
  $color: Color;
  $weight: Weight;
  $size: Size;
}>`
  margin: 0;
  color: ${({ $color }) => {
    switch ($color) {
      case "secondary":
        return "var(--color-secondary)";
      case "primary":
        return "var(--color-primary)";
      default:
        return $color;
    }
  }};
  font-weight: ${({ $weight }) => $weight};

  font-size: ${({ $size }) => {
    switch ($size) {
      case "sm":
        return "12px";
      case "md":
        return "16px";
      case "lg":
        return "24px";
      default:
        return `${$size}px`;
    }
  }};

  white-space: pre-line;
`;
