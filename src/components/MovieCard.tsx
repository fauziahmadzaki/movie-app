import { formatDate } from "../lib/formatDate";
import type { Movie } from "../types/type";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div className="group relative flex-none w-64 overflow-hidden  rounded-xl bg-neutral-900 flex flex-col items-center text-white hover:scale-105 transition-all cursor-pointer">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
          className="overflow-hidden rounded-t-xl w-full brightness-65 hover:brightness-100"
        />
      </Link>

      <div className=" bg-gradient-to-t pb-5 from-black to-transparent absolute bottom-0 left-0 mt-5 w-full px-4 flex flex-col justify-between">
        <p
          className=" font-semibold  text-sm "
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
        >
          {movie.title}
        </p>
        <div>
          <p className="text-sm ">{formatDate(movie.release_date)}</p>
          <p className="text-lg  font-semibold px-2 w-fit bg-yellow-400 text-black rounded-sm mt-1">
            <span className="">{movie.vote_average.toFixed(1)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
