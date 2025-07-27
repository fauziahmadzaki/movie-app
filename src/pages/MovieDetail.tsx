import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Movie } from "../types/type";
import { getMovieById } from "../lib/api";
import { Star } from "lucide-react";
import { SimilarSection } from "../components/MovieSection";
import GenreCard from "../components/GenreCard";
import { formatDate } from "../lib/formatDate";
import { MovieDetailSkeleton } from "../components/skeletons/MovieDetailSkeleton";
import MovieSkeleton from "../components/skeletons/MovieCardSkeleton";
import Navbar from "../components/Navbar";

const MovieDetailPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  useEffect(() => {
    getMovieById(id as string)
      .then((data) => setMovie(data))
      .finally(() => setIsLoading(false));
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div
        key={id}
        className="bg-neutral-900 min-h-screen text-white flex flex-col items-center lg:gap-20"
      >
        {isLoading && (
          <>
            <MovieDetailSkeleton />
            <div className="grid-cols-4 gap-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <MovieSkeleton key={i} />
              ))}
            </div>
          </>
        )}
        {!isLoading && (
          <>
            <div className={`hidden lg:block flex-0  w-full  bg-neutral-600 `}>
              <div className="relative w-full ">
                <img
                  src={`https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}`}
                  alt=""
                  className="brightness-50 w-full h-[600px] object-cover"
                />
                {movie?.production_companies[0].logo_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w154/${movie?.production_companies[0].logo_path}`}
                    alt=""
                    className="absolute z-50 top-5 right-10  p-2 rounded-full"
                  />
                )}

                <h1 className="absolute top-5 left-5 font-bold text-2xl after:content-[''] after:block after:w-20 after:h-1 after:bg-yellow-400">
                  Movie Details
                </h1>
                <div className="absolute flex w-6/10 top-20 left-1/2 -translate-x-1/2 rounded-xl overflow-hidden">
                  <div className="flex-1 relative">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex-1 bg-neutral-800 p-5">
                    <h1 className="font-bold text-2xl text-yellow-400">
                      {movie?.title}
                    </h1>
                    <h3 className="font-semibold text-lg">{movie?.tagline}</h3>
                    <p className="text-sm">
                      Release On:{" "}
                      {movie?.release_date && formatDate(movie?.release_date)}
                    </p>
                    <p className="font-semibold text-yellow-400 capitalize">
                      By {movie?.production_companies[0].name}
                    </p>
                    <div className="mt-3">
                      <p className="font-semibold">Overview</p>
                      <p className="text-sm">{movie?.overview}</p>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold">Rate</h4>
                      <div className="flex gap-2 items-center">
                        <p className="font-semibold text-yellow-400 text-3xl p-1 rounded-full">
                          {movie?.vote_average.toFixed(1)}
                        </p>
                        {Array.from({ length: 5 }, (_, index) => (
                          <Star
                            key={index}
                            className={`${
                              index <
                              Math.floor((movie?.vote_average as number) / 2)
                                ? "text-yellow-400"
                                : "text-neutral-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    {movie?.id && <GenreCard movieId={movie.id} />}
                  </div>
                </div>
              </div>
            </div>

            <div className={` lg:hidden flex-0  w-full  bg-neutral-600 `}>
              <div className="relative w-full ">
                <img
                  src={`https://image.tmdb.org/t/p/w780/${movie?.backdrop_path}`}
                  alt=""
                  className="brightness-50 w-full h-[400px] object-cover"
                />
                {movie?.production_companies[0].logo_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w92/${movie?.production_companies[0].logo_path}`}
                    alt=""
                    className="absolute z-50 top-5 right-10  p-2 rounded-full"
                  />
                )}

                <h1 className="absolute top-5 left-5 font-bold text-2xl after:content-[''] after:block after:w-20 after:h-1 after:bg-yellow-400">
                  Movie Details
                </h1>

                <img
                  src={`https://image.tmdb.org/t/p/w154/${movie?.poster_path}`}
                  alt=""
                  className="absolute left-10 top-45"
                />

                <div className=" overflow-hidden">
                  <div className="flex-1 bg-neutral-800 p-5">
                    <h1 className="font-bold text-2xl text-yellow-400">
                      {movie?.title}
                    </h1>
                    <h3 className="font-semibold text-lg">{movie?.tagline}</h3>
                    <p className="text-sm">
                      Release On:{" "}
                      {movie?.release_date && formatDate(movie?.release_date)}
                    </p>
                    <p className="font-semibold text-yellow-400 capitalize">
                      By {movie?.production_companies[0].name}
                    </p>
                    <div className="mt-3">
                      <p className="font-semibold">Overview</p>
                      <p className="text-sm">{movie?.overview}</p>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold">Rate</h4>
                      <div className="flex gap-2 items-center">
                        <p className="font-semibold text-yellow-400 text-3xl p-1 rounded-full">
                          {movie?.vote_average.toFixed(1)}
                        </p>
                        {Array.from({ length: 5 }, (_, index) => (
                          <Star
                            key={index}
                            className={`${
                              index <
                              Math.floor((movie?.vote_average as number) / 2)
                                ? "text-yellow-400"
                                : "text-neutral-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    {movie?.id && <GenreCard movieId={movie.id} />}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-0 flex flex-col gap-4 mt-5">
              <h1 className=" font-bold text-2xl text-yellow-400 text-center">
                Similar Movies
              </h1>
              {movie?.id && <SimilarSection id={movie.id} />}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieDetailPage;
