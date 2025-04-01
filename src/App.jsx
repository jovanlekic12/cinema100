import { useEffect, useState, useRef } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import SingleMovie from "./pages/singleMovie/Index";
import { supabase } from "./supabase/supabase";
import { moviesPerPage } from "./utils/constants";
import { fetchMovies } from "./api/movies";
function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const lastMovieIndex = currentPage * moviesPerPage;
  const firstMovieIndex = lastMovieIndex - moviesPerPage;

  const getMovies = async () => {
    const data = await fetchMovies(firstMovieIndex, lastMovieIndex);
    setMovies(data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    getMovies();
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
