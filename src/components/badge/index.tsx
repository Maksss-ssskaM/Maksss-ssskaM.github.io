import type { ReactNode } from "react";
import styles from "./styles.module.scss";

type Props = {
  children: ReactNode;
  color?: string;
  background?: string;
};

export const Badge: React.FC<Props> = ({
  children,
  background = "#fff",
  color = "#000",
}) => {
  return (
    <div className={styles.container} style={{ background, color }}>
      {children}
    </div>
  );
};
