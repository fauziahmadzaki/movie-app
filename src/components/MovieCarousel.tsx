import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import type { Movie } from "../types/type";
import { getMovies } from "../lib/api";
import SkeletonCarousel from "./skeletons/CaraouselSkeleton";
import { Link } from "react-router-dom";

const MovieCaraousel = () => {
  const [movieIndex, setMovieIndex] = useState(0);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMovies("upcoming").then((data) => setMovies(data.results)).finally(()=> setIsLoading(false));
  
  }, []);
  const showNext = () => {
    setMovieIndex((index) => {
      if (index === movies.length - 1) return 0;
      return index + 1;
    });
  };
  const showPrev = () => {
    setMovieIndex((index) => {
      if (index === 0) {
        return movies.length - 1;
      }
      return index - 1;
    });
  };

  if (isLoading) {
    return <SkeletonCarousel />;
  }
  return (
    <div className="p-5">
      <div className="rounded-lg w-full h-[400px] relative text-white">
        <h1 className="text-xl lg:text-4xl font-bold absolute top-5 left-5 z-40">
          Upcoming Movies
        </h1>
        <div className="w-full h-full flex overflow-hidden">
          {movies.length > 0 &&
            movies.map((movie: Movie, index: number) => {
              return (
                <Link
                to={`/movie/${movie.id}`}
                key={index}
                  className="group  w-full h-full transition-all duration-1000 ease-in-out shrink-0 grow-0 relative"
                  style={{ translate: `-${movieIndex * 100}%` }}
                >
                  <img
                    
                    src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                    alt=""
                    className={`w-full h-full object-cover object-center lg:object-left-top brightness-75 hover:brightness-100`}
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black to-transparent px-5 py-4">
                    <h4 className="  text-2xl font-semibold">{movie.title}</h4>
                    <p className="text-sm hidden  lg:group-hover:block  transition-all ease-in">{movie.overview}</p>
                    {/* <button className="px-4 py-2 bg-yellow-500 text-black rounded-lg font-semibold text-sm mt-2">
                      Details
                    </button> */}
                  </div>
                </Link>
              );
            })}
        </div>
        <button
          onClick={showPrev}
          className="absolute text-black top-1/2 left-5 p-2 rounded-full bg-white/50"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={showNext}
          className="absolute text-black top-1/2 right-5 p-2 rounded-full bg-white/50"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default MovieCaraousel;
