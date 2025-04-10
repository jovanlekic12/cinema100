import { useCallback, useEffect, useState } from "react";
import { fetchBookmarks, fetchMovies } from "../../../api/movies";
import { useFetchData } from "../../../api/useFetchData";
import { moviesPerPage } from "../../../utils/constants";
import H4 from "../../../components/h4";
import MovieCard from "../../../components/MovieCard";
import Pagination from "./Pagination/Index";
import { IoMdStar } from "react-icons/io";
import Loader from "../../../components/Loader";
import { toggleBookmark } from "../../../api/toogleBookmark";
function VideosSection({
  searchTerm,
  category,
  displayedMovies,
  bookmarks,
  getBookmarks,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const lastMovieIndex = currentPage * moviesPerPage;
  const firstMovieIndex = lastMovieIndex - moviesPerPage;

  const fetchPage = useCallback(() => {
    return fetchMovies({
      firstMovieIndex,
      lastMovieIndex,
      searchTerm,
      category,
      displayedMovies,
      bookmarks,
    });
  }, [
    firstMovieIndex,
    lastMovieIndex,
    searchTerm,
    category,
    displayedMovies,
    bookmarks,
  ]);

  const { isLoading, data } = useFetchData(fetchPage);
  const movies = data?.movies ?? [];
  const totalCount = data?.count ?? 0;

  useEffect(() => {
    getBookmarks();
  }, [displayedMovies]);

  return (
    <section className="videos__section">
      <H4>
        {displayedMovies === "Home" && category === "All" && "Top 100"}
        {displayedMovies === "Home" && category !== "All" && category}

        {displayedMovies === "Bookmarks" &&
          category === "All" &&
          "Your bookmarked movies"}
        {displayedMovies === "Bookmarks" &&
          category !== "All" &&
          `Your bookmarked movies (${category})`}
      </H4>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className="videos__list">
          {movies &&
            movies.map((movie) => {
              return (
                <div key={movie.imdbid}>
                  <MovieCard
                    {...movie}
                    bookmarks={bookmarks}
                    getBookmarks={getBookmarks}
                    displayedMovies={displayedMovies}
                  />
                  <h6 className="movie__card__title">{movie.title}</h6>
                  <div className="movie__card__info__div">
                    <p className="movie__card__p">{movie.year}</p>
                    <div className="movie__card__rating__div">
                      <IoMdStar className="movie__card__star" />
                      <p className="movie__card__p">{movie.rating}</p>
                    </div>
                    <p className="movie__card__p">{movie.genre.join(", ")}</p>
                  </div>
                </div>
              );
            })}
        </ul>
      )}
      {movies.length > 0 ? (
        <Pagination
          totalCount={totalCount}
          movies={movies}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      ) : (
        <h1 className="movies__msg">
          {displayedMovies === "Home"
            ? "No movies found"
            : "You have 0 bookmarked movies"}
        </h1>
      )}
    </section>
  );
}
export default VideosSection;
