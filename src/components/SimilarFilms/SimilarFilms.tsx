import { FC, useEffect, useState } from "react";
import styles from "./SimilarFilms.module.scss";
import { IFilm } from "../../types/types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import notfound from "../../assets/notfound.png";
import { Link } from "react-router-dom";
import { BASEURL } from "../../utils/constants";
interface SimilarFilmsProps {
  similarFilms: IFilm[];
}

export const SimilarFilms: FC<SimilarFilmsProps> = ({ similarFilms }) => {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: pageWidth > 1000 ? 4 : pageWidth > 768 ? 3 : 1,
    slidesToScroll: pageWidth > 768 ? 2 : 1,
    draggable: true,
    rtl: true,
  };

  useEffect(() => {
    const handleResize = () => {
      setPageWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.slider_container}>
      <h2 className={styles.title}>Похожие фильмы</h2>
      <Slider {...settings}>
        {similarFilms.map((film) => (
          <div
            className={styles.film}
            key={film.id}
            onClick={(e) => e.preventDefault()}
          >
            {!!film.poster_path && (
              <img src={BASEURL + film.poster_path} alt={film.title} />
            )}
            {!film.poster_path && (
              <img src={notfound} alt="Изображение не найдено" />
            )}
            <Link to={`/films/${film.id}`}>
              <p>{film.title}</p>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};
