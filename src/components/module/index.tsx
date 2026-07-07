import cn from "classnames";
import type { ElementType, ReactNode } from "react";
import styles from "./styles.module.scss";

type Props<E extends ElementType = "div"> = {
  tag?: E;
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  chips?: string[];
  containerClassName?: string;
  contentClassName?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  leftImage?: ReactNode;
  rightImage?: ReactNode;
};

export const Module = <E extends ElementType = "div">({
  tag,
  eyebrow,
  title,
  subtitle,
  children,
  chips = [],
  containerClassName,
  contentClassName,
  eyebrowClassName,
  titleClassName,
  leftImage,
  rightImage,
}: Props<E>) => {
  const Tag = tag || "div";

  return (
    <Tag className={cn(styles.card, containerClassName)}>
      {leftImage && <div className={styles.media}>{leftImage}</div>}

      <div className={styles.cardContent}>
        {(eyebrow || title || subtitle) && (
          <div className={styles.wrapper}>
            {eyebrow && (
              <div className={cn(styles.eyebrow, eyebrowClassName)}>
                {eyebrow}
              </div>
            )}
            <div className={cn(styles.cardTitle, titleClassName)}>{title}</div>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        )}

        <div className={cn(styles.text, contentClassName)}>{children}</div>

        {chips.length > 0 && (
          <div className={styles.chips}>
            {chips.map((chip) => (
              <span className={styles.chip} key={chip}>
                {chip}
              </span>
            ))}
          </div>
        )}
      </div>

      {rightImage && <div className={styles.media}>{rightImage}</div>}
    </Tag>
  );
};
