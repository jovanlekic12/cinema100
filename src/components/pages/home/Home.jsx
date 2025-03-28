import SearchSection from "./SearchSection/Index";
import TrendingSection from "./TrendingSection/Index";
import VideosSection from "./VideosSection/Index";

function Home({ trendingMovies, movies, setCurrentPage,currentPage }) {


  return (
    <main className="main__container">
      <TrendingSection trendingMovies={trendingMovies} />
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
