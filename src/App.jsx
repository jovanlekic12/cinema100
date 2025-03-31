import { useEffect, useState, useRef } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import SingleMovie from "./pages/singleMovie/Index";
import { supabase } from "./supabase/supabase";
import { moviesPerPage } from "./utils/constants";
function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const lastMovieIndex = currentPage * moviesPerPage;
  const firstMovieIndex = lastMovieIndex - moviesPerPage;

  //napravit folder api i u njega fajl movies.js
  //sve sto je vezano za dohvat filmova prebacit u posebne funkcije unutar toga fajla (getMovies, getSingleMovie...)
  //te funkcije treba da vracu data

  async function fetchMovies() {
    try {
      let { data: fetchedMovies, error } = await supabase
        .from("movies")
        .select("*")
        .range(firstMovieIndex, lastMovieIndex);
      if (error) {
        console.error("Error fetching movies:", error);
        return;
      }
      setMovies(fetchedMovies);
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [currentPage]);

  console.log(movies);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Home
              movies={movies}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          }
        />
        <Route path="movie/:id" element={<SingleMovie supabase={supabase} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
