import { useEffect, useState, useRef } from "react";
import { createClient } from "@supabase/supabase-js";
import "./App.css";

function App() {
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
  const supabaseUrl = "https://igugbxgrjkjwxmvpesde.supabase.co";
  const supabase = createClient(supabaseUrl, supabaseKey);
  const [movies, setMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  async function fetchMovies() {
    try {
      let { data: fetchedMovies, error } = await supabase
        .from("movies")
        .select("*");
      if (error) {
        console.error("Error fetching movies:", error);
        return;
      }
      setMovies(fetchedMovies);
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  }

  async function fetchTrendingMovies() {
    try {
      const { data, error } = await supabase.from("trendingMovies").select("*");
      setTrendingMovies(data);
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  }

  useEffect(() => {
    fetchMovies();
    fetchTrendingMovies();
  }, []);

  console.log(trendingMovies);
  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbid}>
            {movie.rank}. {movie.title} ({movie.year})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
