export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  backdrop_path: string;
  tagline: string
  production_companies: ProductionCompany[]
}


export interface MovieList {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface Genre {
  id: number;
  name: string
}