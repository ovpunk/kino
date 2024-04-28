import { FC } from "react";
import { useParams } from "react-router-dom";
import styles from "./CurrentFilm.module.scss";
import { formatDate } from "../../utils/date";
import { useFetchCurrentFilm, useFetchSimilarFilms } from "../../hooks/queries";
import { SimilarFilms } from "../../components/SimilarFilms/SimilarFilms";
import notfound from "../../assets/notfound.png";
import { BASEURL } from "../../utils/constants";
import { Spinner } from "../../components/UI/Spinner/Spinner";
import { ErrorComponent } from "../../components/ErrorComponent/ErrorComponent";

export const CurrentFilm: FC = () => {
  const { id } = useParams();
  const { currentFilm, isLoadingCurrentFilm, isCurrentFilmError } =
    useFetchCurrentFilm(Number(id));
  const { similarFilms, isLoadingSimilarFilms, isSimilarFilmsError } =
    useFetchSimilarFilms(Number(id));

  if (isLoadingCurrentFilm || isLoadingSimilarFilms) return <Spinner />;
  if (isCurrentFilmError || isSimilarFilmsError) return <ErrorComponent />;

  const {
    title,
    vote_average,
    overview,
    backdrop_path,
    release_date,
    poster_path,
    popularity,
    budget,
    runtime,
    production_countries,
    genres,
  } = currentFilm!;

  const { results } = similarFilms!;

  const rating = vote_average.toFixed(1);
  const date = formatDate(release_date);

  return (
    <div className={styles.film}>
      <div className="container">
        <div className={styles.title}>
          <span>{rating}</span> <h1>{title}</h1>
        </div>
        <div className={styles.info_wrapper}>
          <div className={styles.info}>
            <p className={styles.overview}>{overview}</p>
            {!!runtime && (
              <p className={styles.info_item}>
                Продолжительность: <span>{runtime} мин</span>
              </p>
            )}
            {!!production_countries && (
              <p className={styles.info_item}>
                Страна:{" "}
                {production_countries.map((country) => (
                  <span key={country.iso_3166_1}>{country.name}</span>
                ))}
              </p>
            )}
            {!!date && (
              <p className={styles.info_item}>
                Дата выхода: <span>{date}</span>
              </p>
            )}
            {!!popularity && (
              <p className={styles.info_item}>
                Популярность: <span>{popularity.toFixed(2)}</span>
              </p>
            )}
            {!!budget && (
              <p className={styles.info_item}>
                Бюджет: <span>{budget.toLocaleString("ru-RU")} $</span>
              </p>
            )}
            {!!genres && (
              <p className={styles.info_item}>
                Жанр:{" "}
                {genres.map((genre, index) => (
                  <span key={genre.id}>
                    {genre.name}
                    {index !== genres.length - 1 && ", "}
                  </span>
                ))}
              </p>
            )}
          </div>

          {!!poster_path && (
            <img
              src={BASEURL + poster_path}
              alt={title}
              className={styles.poster}
            />
          )}

          {!poster_path && (
            <img src={notfound} alt="" className={styles.poster} />
          )}
        </div>
        {!!results.length && (
          <div className={styles.similar_films}>
            <SimilarFilms similarFilms={results} />
          </div>
        )}
      </div>
      {!!backdrop_path && (
        <img src={BASEURL + backdrop_path} alt="" className={styles.backdrop} />
      )}
    </div>
  );
};
