import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SearchProvider } from "./contexts/SearchContext.tsx";
import MovieDetailPage from "./pages/MovieDetail.tsx";
import GenresPage from "./pages/MoviesGenre.tsx";
import ErrorPage from "./pages/404.tsx";
import { AboutPage } from "./pages/About.tsx";
import Footer from "./components/Footer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>
  },
  {
    path: "/about",
    element: <AboutPage/>
  }
  ,
  {
    path: "/movie/:id",
    element: <MovieDetailPage />
  },
  {
    path: "/genre/:genre",
    element: <GenresPage />
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SearchProvider>
      <RouterProvider router={router}></RouterProvider>
      <Footer />
    </SearchProvider>
  </StrictMode>
);
