import { FC } from "react";
import { IFilm } from "../../types/types";
import styles from "./FilmCard.module.scss";
import { formatDate } from "../../utils/date";
import { Link } from "react-router-dom";
import { BASEURL } from "../../utils/constants";

interface FilmCardProps {
  film: IFilm;
}

export const FilmCard: FC<FilmCardProps> = ({ film }) => {
  const { title, poster_path, vote_average, release_date, id } = film;
  const rating = vote_average.toFixed(1);
  const releaseDate = formatDate(release_date);

  return (
    <div className={styles.card_wrapper}>
      <Link to={`/films/${id}`} className={styles.card}>
        <img
          src={BASEURL + poster_path}
          alt={title}
          className={styles.poster}
        />

        <div className={styles.info}>
          <span className={styles.rating}>{rating}</span>
          <div>
            <p className={styles.title}>{title}</p>
            <p className={styles.date}>{releaseDate}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
