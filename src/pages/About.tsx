import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
export const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-neutral-900 min-h-screen flex flex-col pt-20 items-center gap-5">
        <h1 className="text-4xl font-bold text-yellow-400">About Us</h1>
        <p className="text-lg font-semibold text-center text-white w-6/10">
          Layar kaca selikur are website that provide information about various
          movies around the world. We also provide information about the movie's
          genre, release date, and rating. The data that displayed on this
          website is using API from TMDB.com. 
        </p>
        <p className="text-2xl font-bold text-white text-center">Credit for API : <Link className="underline" target="_blank" to={'https://www.themoviedb.org'}>https://www.themoviedb.org</Link></p>
      </div>
    </>
  );
};
