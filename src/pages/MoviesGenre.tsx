import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom"
import type { Movie, MovieList } from "../types/type";
import { filterMovies } from "../lib/api";
import MovieCard from "../components/MovieCard";
import MovieSkeleton from "../components/skeletons/MovieCardSkeleton";
import Navbar from "../components/Navbar";

const GenresPage = ()=>{
    const [isLoading, setIsLoading]  = useState(true)
    const [movies, setMovies] = useState<MovieList| null>(null)
    const { genre} = useParams();
    const location = useLocation()
    const state = location.state as {id: number}
    useEffect(()=>{
        filterMovies(`&with_keywords=${state.id}`).then((data) => setMovies(data)).finally(()=> setIsLoading(false));
    }, [state])

    const title  = genre?.split("-").join(" ")
    return (
        <div className="overflow-x-hidden">
        <Navbar/>
        <div className="bg-neutral-900 min-h-screen text-white flex flex-col items-center gap-5 py-5">
            <h1 className="text-2xl font-bold">More from {title} keyword</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {isLoading? (Array.from({length: 10}).map((_, i)=> <MovieSkeleton key={i}/>)): (movies?.results.map((movie: Movie) => <MovieCard key={movie.id} movie={movie} />))}
            </div>
        </div>
        </div>
    )
}

export default GenresPage