import { FC, useEffect, useState } from "react";
import { useFetchFilms } from "../../hooks/queries";
import styles from "./Films.module.scss";
import { FilmCard } from "../../components/FilmCard/FilmCard";
import { Spinner } from "../../components/UI/Spinner/Spinner";
import { Pagination } from "../../components/UI/Pagination/Pagination";
import { ErrorComponent } from "../../components/ErrorComponent/ErrorComponent";

export const Films: FC = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { films, isLoadingFilms, isFilmsError } = useFetchFilms(pageNumber);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageNumber]);
  if (isLoadingFilms) return <Spinner />;
  if (isFilmsError) return <ErrorComponent />;
  const { total_pages } = films!;

  return (
    <div className={styles.films}>
      <div className="container">
        {!!films && <h1 className={styles.title}>Популярные фильмы</h1>}
        <div className={styles.cards_wrapper}>
          {films?.results.map((film) => (
            <FilmCard key={film.id} film={film} />
          ))}
        </div>
        <Pagination
          total_pages={Math.ceil(total_pages / 100)} //Уменьшение количества страниц для избежания ошибок с сервера
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>
    </div>
  );
};
