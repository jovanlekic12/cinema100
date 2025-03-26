import { useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import TrendingHeader from "./header/Index";
import TrendingSlider from "../../slider/Index";
function Home({ trendingMovies }) {
  const [moveIndex, setMoveIndex] = useState(0);

  function handleSlide(side) {
    if (side === "left") {
      setMoveIndex((prevIndex) => (prevIndex === 0 ? 4 - 1 : prevIndex - 1));
    } else if (side === "right") {
      setMoveIndex((prevIndex) => (prevIndex === 4 - 1 ? 0 : prevIndex + 1));
    }
  }
  return (
    <main className="main__container">
      <section className="slider__section">
        <TrendingHeader moveIndex={moveIndex}></TrendingHeader>
        <TrendingSlider
          moveIndex={moveIndex}
          trendingMovies={trendingMovies}
        ></TrendingSlider>
        <button
          className="arrow arrow__left"
          onClick={() => handleSlide("left")}
        >
          <FaArrowLeftLong />
        </button>
        <button
          className="arrow arrow__right"
          onClick={() => handleSlide("right")}
        >
          <FaArrowRightLong />
        </button>
      </section>
    </main>
  );
}

export default Home;
