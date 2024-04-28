import { useQuery } from "@tanstack/react-query";
import { fetchCurrentFilm, fetchFilms, fetchSimilarFilms } from "../API/api";
import { IFilm, IFilms } from "../types/types";

export const useFetchFilms = (page: number) => {
  const {
    data: films,
    isLoading: isLoadingFilms,
    isError: isFilmsError,
  } = useQuery<IFilms>({
    queryKey: ["getFilms", page],
    queryFn: async () => {
      const res = await fetchFilms(page);
      if (!res.ok) {
        throw new Error("Failed to fetch films");
      }
      const response = await res.json();
      return response;
    },
  });
  return { films, isLoadingFilms, isFilmsError };
};

export const useFetchCurrentFilm = (id: number) => {
  const {
    data: currentFilm,
    isLoading: isLoadingCurrentFilm,
    isError: isCurrentFilmError,
  } = useQuery<IFilm>({
    queryKey: ["getCurrentFilm", id],
    queryFn: async () => {
      const res = await fetchCurrentFilm(id);
      if (!res.ok) {
        throw new Error("Failed to fetch current film");
      }
      const response = await res.json();
      return response;
    },
  });
  return { currentFilm, isLoadingCurrentFilm, isCurrentFilmError };
};

export const useFetchSimilarFilms = (id: number) => {
  const {
    data: similarFilms,
    isLoading: isLoadingSimilarFilms,
    isError: isSimilarFilmsError,
  } = useQuery<IFilms>({
    queryKey: ["getSimilarFilms", id],
    queryFn: async () => {
      const res = await fetchSimilarFilms(id);
      if (!res.ok) {
        throw new Error("Failde to fetch similar films");
      }
      const response = await res.json();
      return response;
    },
  });
  return { similarFilms, isLoadingSimilarFilms, isSimilarFilmsError };
};
