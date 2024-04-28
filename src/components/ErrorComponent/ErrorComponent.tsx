import { FC } from "react";
import styles from "./ErrorComponent.module.scss";
import { useNavigate } from "react-router-dom";

export const ErrorComponent: FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.error_wrapper}>
      <h1>Произошла ошибка...</h1>
      <button onClick={() => navigate("/")}>На главную страницу</button>
    </div>
  );
};
