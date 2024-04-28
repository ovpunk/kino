import { TOKEN } from "../utils/constants";

export const fetchFilms = (page: number) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  };
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ru-RU&page=${page}&sort_by=popularity.desc`,
    options
  );
};

export const fetchCurrentFilm = (id: number) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  };
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=ru-RU`,
    options
  );
};

export const fetchSimilarFilms = (id: number) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  };
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?language=ru-RU&page=1`,
    options
  );
};
