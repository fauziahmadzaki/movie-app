import { useEffect, useState } from "react";
import useSearch from "../contexts/SearchContext";
import useDebounce from "../hooks/useDebounce";
import { searchMovies } from "../lib/api";
import MovieCard from "./MovieCard";
import type { Movie } from "../types/type";
import MovieSkeleton from "./skeletons/MovieCardSkeleton";

const SearchResult = () => {
  const [searchResult, setSearchResult] = useState<Movie[]>([]);
  const { query } = useSearch();
  const [isLoading, setIsLoading] = useState(true);
  const debounceValue = useDebounce(query, 600);
  useEffect(() => {
    if (debounceValue.length > 0) {
      searchMovies(debounceValue)
        .then((data) => setSearchResult(data.results))
        .finally(() => setIsLoading(false));
    }else{
      setIsLoading(true)
    }
  }, [debounceValue]);

  return (
    <>
      {" "}
      {debounceValue.length > 0 && (
        <div key={debounceValue} className="px-10 w-fit max-w-full mt-5 bg-neutral-900 text-white">
          <h1 className="text-xl font-semibold">
            Search Result For: {debounceValue}
          </h1>
          <div className="flex gap-4 max-w-full flex-wrap justify-center bg-neutral-800 p-5 shadow-md mt-4 rounded-md">

            {isLoading &&
              Array.from({ length: 10 }).map((_, idx) => (
                <MovieSkeleton key={idx} />
              ))}
            {searchResult &&
              searchResult.map((movie: Movie) => {
                return <MovieCard key={movie.id} movie={movie} />;
              })}
            {debounceValue && searchResult.length < 1 && <div className="w-screen flex flex-col justify-center items-center font-semibold">{"Movies not found:("}</div>}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchResult;
