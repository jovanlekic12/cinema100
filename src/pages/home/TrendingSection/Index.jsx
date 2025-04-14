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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth > 581) setMoveIndex(0);
  }, [windowWidth]);

  let number = windowWidth < 581 ? 8 : 4;

  function handleSlide(side) {
    console.log(number);
    if (side === "left") {
      setMoveIndex((prevIndex) =>
        prevIndex === 0 ? number - 1 : prevIndex - 1
      );
    } else if (side === "right") {
      setMoveIndex((prevIndex) =>
        prevIndex === number - 1 ? 0 : prevIndex + 1
      );
    }
    console.log(moveIndex);
  }

  return (
    <section className="slider__section">
      <TrendingHeader
        moveIndex={moveIndex}
        windowWidth={windowWidth}
      ></TrendingHeader>
      {isLoading ? (
        <Loader />
      ) : (
        <TrendingSlider
          moveIndex={moveIndex}
          trendingMovies={trendingMovies}
          bookmarks={bookmarks}
          getBookmarks={getBookmarks}
          displayedMovies={displayedMovies}
          windowWidth={windowWidth}
        ></TrendingSlider>
      )}
      <Button
        type="round"
        size="hd"
        position="left"
        onClick={() => handleSlide("left")}
      >
        <FaArrowLeftLong />
      </Button>
      <Button
        type="round"
        size="hd"
        position="right"
        onClick={() => handleSlide("right")}
      >
        <FaArrowRightLong />
      </Button>
    </section>
  );
}
export default TrendingSection;
