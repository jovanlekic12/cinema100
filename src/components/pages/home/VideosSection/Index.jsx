import Pagination from "./Pagination/Index";
import MovieCard from "./VideoCard/Index";

function VideosSection(props) {
  const { movies, setCurrentPage, postsPerPage,currentPage } = props;
  console.log(currentPage)

  return (
    <section className="videos__section">
      <h4 className="videos__section__heding">Top 100</h4>
      <ul className="videos__list">
        {movies &&
          movies.map((movie) => {
            return <MovieCard {...movie} />;
          })}
      </ul>
      <Pagination
        movies={movies}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
}
export default VideosSection;
