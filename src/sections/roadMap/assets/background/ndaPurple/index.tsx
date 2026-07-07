import Cube1Image from "./cube1.png";
import Cube2Image from "./cube2.png";
import Cube3Image from "./cube3.png";
import Cube4Image from "./cube4.png";
import Cube5Image from "./cube5.png";
import styles from "./styles.module.scss";
import cn from "classnames";

export const NdaPurpleBackground = () => {
  return (
    <>
      <img
        src={Cube1Image}
        alt="cube"
        width={200}
        className={cn(styles.cube, styles.cube1)}
      />
      <img
        src={Cube2Image}
        alt="cube"
        width={200}
        className={cn(styles.cube, styles.cube2)}
      />
      <img
        src={Cube3Image}
        alt="cube"
        width={250}
        className={cn(styles.cube, styles.cube3)}
      />
      <img
        src={Cube4Image}
        alt="cube"
        width={200}
        className={cn(styles.cube, styles.cube4)}
      />
      <img
        src={Cube5Image}
        alt="cube"
        width={150}
        className={cn(styles.cube, styles.cube5)}
      />
    </>
  );
};
