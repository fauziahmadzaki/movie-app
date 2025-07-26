import { useState, useEffect } from "react";
import type { Movie, MovieList } from "../types/type";
import { getMovies } from "../lib/api";
import MovieSkeleton from "./skeletons/MovieCardSkeleton";
import MovieCard from "../components/MovieCard";

export const RecomendationSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<MovieList | null>(null);
  useEffect(() => {
    getMovies().then((data) => setMovies(data)).finally(()=> setIsLoading(false));

  }, []);

  return (
    <>
      <h1 className="text-xl font-semibold">Recomendations</h1>
      <div className="flex gap-4 max-w-full overflow-x-scroll bg-neutral-800 p-5 shadow-md mt-4 rounded-md">
        {isLoading &&
          Array.from({ length: 10 }).map((_, idx) => (
            <MovieSkeleton key={idx} />
          ))}
        {movies &&
          movies.results.map((movie: Movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
      </div>
    </>
  );
};
export const PopularSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<MovieList | null>(null);
  useEffect(() => {
    getMovies('top_rated').then((data) => setMovies(data)).finally(()=> setIsLoading(false));

  }, []);

  return (
    <>
      <h1 className="text-xl font-semibold">Top Rated</h1>
      <div className="flex gap-4 max-w-full overflow-x-scroll bg-neutral-800 p-5 shadow-md mt-4 rounded-md">
        {isLoading &&
          Array.from({ length: 10 }).map((_, idx) => (
            <MovieSkeleton key={idx} />
          ))}
        {movies &&
          movies.results.map((movie: Movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
      </div>
    </>
  );
};

export const SimilarSection = ({id} : { id: number }) => {
  const [movies, setMovies] = useState<MovieList| null>(null)
  useEffect(()=>{
    getMovies(`${id}/similar`).then((data) => setMovies(data));
  }, [id])
  return <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
    {movies?.results.map((movie: Movie) => <MovieCard key={movie.id} movie={movie} />)}
  </div>;
};
