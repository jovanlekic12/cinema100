import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useState } from "react";
import TrendingSlider from "./slider/Index";
import TrendingHeader from "./header/Index";

function TrendingSection(props) {
  const { trendingMovies } = props;
  const [moveIndex, setMoveIndex] = useState(0);

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
      <TrendingSlider
        moveIndex={moveIndex}
        trendingMovies={trendingMovies}
      ></TrendingSlider>
      <button className="arrow arrow__left" onClick={() => handleSlide("left")}>
        <FaArrowLeftLong />
      </button>
      <button
        className="arrow arrow__right"
        onClick={() => handleSlide("right")}
      >
        <FaArrowRightLong />
      </button>
    </section>
  );
}
export default TrendingSection;
