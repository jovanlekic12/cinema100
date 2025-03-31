import TrendingMovieCard from "./trendingMovieCard/Index";

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
            return <TrendingMovieCard {...movie}></TrendingMovieCard>;
          })}
      </div>
    </div>
  );
}
export default TrendingSlider;
