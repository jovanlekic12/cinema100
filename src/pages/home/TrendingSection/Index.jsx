import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import TrendingSlider from "./slider/Index";
import TrendingHeader from "./header/Index";
import Button from "../../../components/Button";
import { useFetchData } from "../../../api/useFetchData";
import { fetchTrendingMovies } from "../../../api/movies";
import Loader from "../../../components/Loader";

function TrendingSection({ bookmarks, getBookmarks, displayedMovies }) {
  const [moveIndex, setMoveIndex] = useState(0);
  const { isLoading, data: trendingMovies } = useFetchData(fetchTrendingMovies);

  function handleSlide(side) {
    if (side === "left") {
      setMoveIndex((prevIndex) => (prevIndex === 0 ? 4 - 1 : prevIndex - 1));
    } else if (side === "right") {
      setMoveIndex((prevIndex) => (prevIndex === 4 - 1 ? 0 : prevIndex + 1));
    }
  }

  return (
    <section className="slider__section">
      <TrendingHeader moveIndex={moveIndex}></TrendingHeader>
      {isLoading ? (
        <Loader />
      ) : (
        <TrendingSlider
          moveIndex={moveIndex}
          trendingMovies={trendingMovies}
          bookmarks={bookmarks}
          getBookmarks={getBookmarks}
          displayedMovies={displayedMovies}
        ></TrendingSlider>
      )}
      <Button className="arrow arrow__left" onClick={() => handleSlide("left")}>
        <FaArrowLeftLong />
      </Button>
      <Button
        className="arrow arrow__right"
        onClick={() => handleSlide("right")}
      >
        <FaArrowRightLong />
      </Button>
    </section>
  );
}
export default TrendingSection;
