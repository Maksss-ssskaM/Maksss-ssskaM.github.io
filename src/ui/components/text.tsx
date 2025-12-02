import * as React from "react";
import { styled } from "@linaria/react";

type TextTag = "p" | "h1" | "h2" | "h3" | "h4" | "span";
type Color = "primary" | "secondary" | string;
type Size = "sm" | "md" | "lg";

type Props = {
  as?: TextTag;
  children?: React.ReactNode;
  className?: string;
  color?: Color;
  size?: Size | number;
  weight?: "normal" | "bold";
};

export const Text: React.FC<Props> = ({
  as = "p",
  color = "primary",
  size = "md",
  weight = "normal",
  ...props
}) => {
  return <Main as={as} color={color} size={size} weight={weight} {...props} />;
};

const Main = styled.p<Required<Pick<Props, "color" | "size" | "weight">>>`
  margin: 0;
  color: ${(props) => {
    switch (props.color) {
      case "secondary":
        return "var(--color-secondary)";
      case "primary":
        return "var(--color-primary)";
      default:
        return props.color;
    }
  }};
  font-weight: ${(props) => {
    switch (props.weight) {
      case "bold":
        return "bold";
      default:
        return "normal";
    }
  }};

  font-size: ${(props) => {
    switch (props.size) {
      case "sm":
        return "12px";
      case "md":
        return "16px";
      case "lg":
        return "24px";
      default:
        return `${props.size}px`;
    }
  }};

  white-space: pre-line;
`;
