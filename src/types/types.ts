type Tgenres = {
  id: number;
  name: string;
};

type Tcountries = {
  name: string;
  iso_3166_1: string;
};

export interface IFilm {
  adult: boolean;
  backdrop_path: string;
  genres: Tgenres[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  budget: number;
  runtime: number;
  production_countries: Tcountries[];
}

export interface IFilms {
  page: number;
  results: IFilm[];
  total_pages: number;
  total_results: number;
}
