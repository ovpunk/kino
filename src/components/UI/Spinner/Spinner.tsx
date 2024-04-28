import { FC } from "react";
import { BounceLoader } from "react-spinners";
import styles from "./Spinner.module.scss";
export const Spinner: FC = () => {
  return (
    <div className={styles.spinner_wrapper}>
      <BounceLoader color="rgb(221, 57, 57)" />
    </div>
  );
};
