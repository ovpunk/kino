import { FC } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <Link to={"/"}>
            <p className={styles.logo}>
              <span>К</span>ино
            </p>
          </Link>
        </div>
      </div>
    </header>
  );
};
