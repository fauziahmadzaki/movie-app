/* eslint-disable react-refresh/only-export-components */
import { useState, createContext, useContext } from "react";

interface SearchContextType {
  query: string;
  setSearch: (search: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, setSearch] = useState("");
  return (
    <SearchContext.Provider value={{ query, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

export default useSearch;
