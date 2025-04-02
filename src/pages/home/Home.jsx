import SearchSection from "./SearchSection/Index";
import TrendingSection from "./TrendingSection/Index";
import VideosSection from "./VideosSection/Index";
import { fetchMovies } from "../../api/movies";
import { useEffect, useState } from "react";
import { moviesPerPage } from "../../utils/constants";
function Home() {
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

  return (
    <main className="main__container">
      <TrendingSection />
      <SearchSection></SearchSection>
      <VideosSection
        movies={movies}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </main>
  );
}

export default Home;
