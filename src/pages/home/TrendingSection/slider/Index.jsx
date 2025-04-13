import { useEffect, useState } from "react";
import MovieCard from "../../../../components/MovieCard";

function TrendingSlider(props) {
  const {
    moveIndex,
    trendingMovies,
    bookmarks,
    getBookmarks,
    displayedMovies,
    windowWidth,
  } = props;

  console.log(window.innerWidth);

  const [translateWidth, setTranslateWidth] = useState(0);

  useEffect(() => {
    windowWidth < 581
      ? setTranslateWidth(moveIndex * 12.5)
      : setTranslateWidth(moveIndex * 25);
  }, [moveIndex]);

  return (
    <div className="slider">
      <div
        className="trending__movies__list"
        style={{
          transform: `translateX(-${translateWidth}%)`,
        }}
      >
        {trendingMovies &&
          trendingMovies.map((movie) => {
            return (
              <MovieCard
                {...movie}
                key={movie.imdbid}
                bookmarks={bookmarks}
                getBookmarks={getBookmarks}
                displayedMovies={displayedMovies}
                type="highlight"
              ></MovieCard>
            );
          })}
      </div>
    </div>
  );
}
export default TrendingSlider;
