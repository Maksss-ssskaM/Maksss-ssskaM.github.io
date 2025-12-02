import { styled } from "@linaria/react";
import { type ReactNode } from "react";

type Props = {
  value: boolean;
  onChange: (value: boolean) => void;
  leftLabel?: ReactNode;
  rightLabel?: ReactNode;
};

export const Switch: React.FC<Props> = ({
  value,
  onChange,
  leftLabel,
  rightLabel,
}) => {
  return (
    <Main>
      {leftLabel && <Side $active={!value}>{leftLabel}</Side>}
      <Checkbox
        type="checkbox"
        checked={value}
        onChange={(e) => {
          onChange(e.target.checked);
        }}
      />
      <Track $active={value}>
        <Thumb $active={value} />
      </Track>
      {rightLabel && <Side $active={value}>{rightLabel}</Side>}
    </Main>
  );
};

const Main = styled.label`
  display: grid;
  grid-auto-flow: column;
  width: fit-content;
  cursor: pointer;
  gap: 8px;
  align-items: center;

  input:focus-visible + span {
    box-shadow: 0 0 0 2px var(--focus-color);
  }
`;

const Checkbox = styled.input`
  opacity: 0;
  position: absolute;
  pointer-events: none;
`;

const Side = styled.span<{ $active: boolean }>`
  color: ${({ $active }) =>
    $active ? "var(--color-primary)" : "var(--color-secondary)"};
`;

const Track = styled.span<{ $active: boolean }>`
  width: 32px;
  height: 18px;
  border-radius: 9999px;
  transition: background-color 0.2s;

  position: relative;
  background-color: ${({ $active }) =>
    $active ? "var(--background-inverse)" : "var(--switch-disable)"};
`;

const Thumb = styled.span<{ $active: boolean }>`
  position: absolute;
  width: 14px;
  height: 14px;
  top: 2px;
  left: 2px;
  border-radius: 50%;
  background-color: var(--background-color);
  transition: transform 0.2s;
  transform: ${({ $active }) =>
    $active ? "translateX(14px)" : "translateX(0)"};
`;
