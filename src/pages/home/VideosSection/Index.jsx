import { useCallback, useState } from "react";
import { fetchMovies } from "../../../api/movies";
import { useFetchData } from "../../../api/useFetchData";
import { moviesPerPage } from "../../../utils/constants";
import H4 from "../../../components/h4";
import MovieCard from "../../../components/MovieCard";
import Pagination from "./Pagination/Index";
import { IoMdStar } from "react-icons/io";
import Loader from "../../../components/Loader";
function VideosSection({ searchTerm, category }) {
  const [currentPage, setCurrentPage] = useState(1);

  const lastMovieIndex = currentPage * moviesPerPage;
  const firstMovieIndex = lastMovieIndex - moviesPerPage;

  const fetchPage = useCallback(() => {
    return fetchMovies({
      firstMovieIndex,
      lastMovieIndex,
      searchTerm,
      category,
    });
  }, [firstMovieIndex, lastMovieIndex, searchTerm, category]);

  const { isLoading, data: movies } = useFetchData(fetchPage);

  return (
    <section className="videos__section">
      <H4>Top 100</H4>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className="videos__list">
          {movies &&
            movies.map((movie) => {
              return (
                <div>
                  <MovieCard {...movie} />
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
      <Pagination
        movies={movies}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
}
export default VideosSection;
