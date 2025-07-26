import type { Genre, Movie, MovieList } from "../types/type";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

export const getMovies = async (
  query: string = "popular"
): Promise<MovieList> => {
  try {
    const response = await fetch(
      `${API_URL}3/movie/${query}?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch movies");
  }
};

export const searchMovies = async (query: string): Promise<MovieList> => {
  try {
    const response = await fetch(
      `${API_URL}3/search/movie?query=${encodeURI(
        query
      )}&api_key=${API_KEY}&language=en-US&include_adult=false`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch movies");
  }
};

export const getMovieById = async (id: string): Promise<Movie> => {
  const response = await fetch(
    `${API_URL}3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();
  return data;
};

export const getKeywords = async (
  id: string
): Promise<{ id: number; keywords: Genre[] }> => {
  const response = await fetch(
    `${API_URL}3/movie/${id}/keywords?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();
  return data;
};

export const filterMovies = async (query: string): Promise<MovieList> => {
  const response = await fetch(
    `${API_URL}3/discover/movie?&api_key=${API_KEY}&${encodeURI(
      query
    )}&language=en-US&include_adult=false`
  );
  const data = await response.json();
  return data;
};
