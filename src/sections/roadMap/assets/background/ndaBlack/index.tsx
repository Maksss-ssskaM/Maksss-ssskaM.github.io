import Wallet1Image from "./wallet1.svg";
import Wallet2Image from "./wallet2.svg";
import Wallet3Image from "./wallet3.svg";
import cn from "classnames";
import styles from "./styles.module.scss";

const wallets = [
  { src: Wallet1Image, width: 200 },
  { src: Wallet2Image, width: 200 },
  { src: Wallet3Image, width: 250 },
];

export const NdaBlackBackground = () => (
  <>
    {wallets.map(({ src, width }, index) => (
      <img
        key={src}
        src={src}
        alt=""
        width={width}
        className={cn(styles.wallet, styles[`wallet${index + 1}`])}
      />
    ))}
  </>
);
