import MovieCaraousel from "./components/MovieCarousel";
import Navbar from "./components/Navbar";
import { PopularSection, RecomendationSection } from "./components/MovieSection";
import useSearch from "./contexts/SearchContext";
import useDebounce from "./hooks/useDebounce";
import SearchResult from "./components/SearchResult";



export default function App() {

  const { query } = useSearch();
  const debounceValue = useDebounce(query, 500);

  return (
    <main className="min-h-screen bg-neutral-900 pb-10 overflow-x-hidden">
      <Navbar />
      {debounceValue.length === 0 && (
        <>
          <MovieCaraousel />
          <div className="px-10 w-full  bg-neutral-900 text-white space-y-5">
            <RecomendationSection />
            <PopularSection/>
          </div>
        </>
      )}

      {debounceValue.length > 0 && <SearchResult />}

    </main>
  );
}
