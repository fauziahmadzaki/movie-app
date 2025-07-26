import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
export const AboutPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="bg-neutral-900 min-h-screen flex flex-col pt-20 items-center gap-5">
        <h1 className="text-4xl font-bold text-yellow-400">About Us</h1>
        <p className="text-lg font-semibold text-center text-white w-6/10">
          Layar Kaca Selikur is a website that provides information about
          various movies from around the world. We offer details such as genres,
          release dates, and ratings for each film. All the data displayed on
          this website is sourced through the API provided by TMDB. Our goal is
          to help movie enthusiasts discover and explore films from different
          countries and cultures, all in one place. Whether you're searching for
          the latest blockbuster or a hidden gem, we've got you covered. We are
          continuously updating our content to ensure you get the most accurate
          and up-to-date movie information available.
        </p>
        <p className="text-2xl font-bold text-white text-center">
          Credit for API :{" "}
          <Link
            className="underline"
            target="_blank"
            to={"https://www.themoviedb.org"}
          >
            https://www.themoviedb.org
          </Link>
        </p>
      </div>
    </div>
  );
};
