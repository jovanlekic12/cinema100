import { useCallback, useState } from "react";
import SearchSection from "./SearchSection/Index";
import TrendingSection from "./TrendingSection/Index";
import VideosSection from "./VideosSection/Index";
import { useFetchData } from "../../api/useFetchData";
import { fetchBookmarks } from "../../api/movies";
function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [displayedMovies, setDisplayedMovies] = useState("Home");

  const getBookmarks = useCallback(() => {
    return fetchBookmarks();
  }, [displayedMovies]);

  const { data: bookmarks } = useFetchData(getBookmarks);

  return (
    <main className="main__container">
      <TrendingSection />
      <SearchSection
        setSearchTerm={setSearchTerm}
        setCategory={setCategory}
        category={category}
        displayedMovies={displayedMovies}
        setDisplayedMovies={setDisplayedMovies}
      ></SearchSection>
      <VideosSection
        bookmarks={bookmarks}
        searchTerm={searchTerm}
        displayedMovies={displayedMovies}
        category={category}
      />
    </main>
  );
}

export default Home;
