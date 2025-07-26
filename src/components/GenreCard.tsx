import { useEffect, useState } from "react";
import type { Genre } from "../types/type";
import { getKeywords } from "../lib/api";
import { Link } from "react-router-dom";

const GenreCard = ({ movieId }: { movieId: number }) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  useEffect(() => {
    getKeywords(`${movieId}`).then((data) => setGenres(data.keywords));
  }, [movieId]);
  return (
    <div>
      <h1 className="text-sm font-semibold">Keywords</h1>
      <div className="flex gap-2 flex-wrap mt-1">
        {genres.slice(0, 6).map((genre: Genre) => (

          <Link
            to={`/genre/${encodeURI(genre.name.split(" ").join("-"))}`}
            state={{id: genre.id}}
            className="text-sm text-yellow-400 px-2 border-yellow-400 border-1 rounded-full"
            key={genre.id}
          >
            {genre.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GenreCard;
