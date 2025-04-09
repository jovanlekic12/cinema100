import { useCallback, useEffect, useState } from "react";
import SearchSection from "./SearchSection/Index";
import TrendingSection from "./TrendingSection/Index";
import VideosSection from "./VideosSection/Index";
import { useFetchData } from "../../api/useFetchData";
import { fetchBookmarks } from "../../api/movies";
function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [displayedMovies, setDisplayedMovies] = useState("Home");
  const [bookmarks, setBookmarks] = useState([]);

  const getBookmarks = async () => {
    try {
      const movies = await fetchBookmarks();
      setBookmarks(movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookmarks();
  }, []);

  return (
    <main className="main__container">
      <TrendingSection
        bookmarks={bookmarks}
        getBookmarks={getBookmarks}
        displayedMovies={displayedMovies}
      />
      <SearchSection
        setSearchTerm={setSearchTerm}
        setCategory={setCategory}
        category={category}
        displayedMovies={displayedMovies}
        setDisplayedMovies={setDisplayedMovies}
      ></SearchSection>
      <VideosSection
        getBookmarks={getBookmarks}
        bookmarks={bookmarks}
        searchTerm={searchTerm}
        displayedMovies={displayedMovies}
        category={category}
      />
    </main>
  );
}

export default Home;
