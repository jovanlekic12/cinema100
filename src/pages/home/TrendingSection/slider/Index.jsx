import MovieCard from "../../../../components/MovieCard";

function TrendingSlider(props) {
  const { moveIndex, trendingMovies } = props;

  return (
    <div className="slider">
      <div
        className="trending__movies__list"
        style={{ transform: `translateX(-${moveIndex * 25}%)` }}
      >
        {trendingMovies &&
          trendingMovies.map((movie) => {
            return <MovieCard {...movie}></MovieCard>;
          })}
      </div>
    </div>
  );
}
export default TrendingSlider;
