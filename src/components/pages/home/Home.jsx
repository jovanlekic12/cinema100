import SearchSection from "./SearchSection/Index";
import TrendingSection from "./TrendingSection/Index";
import VideosSection from "./VideosSection/Index";

function Home({ trendingMovies, movies, postsPerPage, setCurrentPage }) {
  return (
    <main className="main__container">
      <TrendingSection trendingMovies={trendingMovies} />
      <SearchSection></SearchSection>
      <VideosSection
        movies={movies}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
}

export default Home;
