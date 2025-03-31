import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import TrendingSlider from "./slider/Index";
import TrendingHeader from "./header/Index";
import { fetchTrendingMovies } from "../../../api/movies";
import Button from "../../../components/Button";
function TrendingSection(props) {
  const [moveIndex, setMoveIndex] = useState(0);
  const [trendingMovies, setTrendingMovies] = useState([]);

  function handleSlide(side) {
    if (side === "left") {
      setMoveIndex((prevIndex) => (prevIndex === 0 ? 4 - 1 : prevIndex - 1));
    } else if (side === "right") {
      setMoveIndex((prevIndex) => (prevIndex === 4 - 1 ? 0 : prevIndex + 1));
    }
  }

  useEffect(() => {
    const fetchedMovies = async () => {
      const data = await fetchTrendingMovies();
      setTrendingMovies(data);
    };
    fetchedMovies();
  }, []);

  return (
    <section className="slider__section">
      <TrendingHeader moveIndex={moveIndex}></TrendingHeader>
      <TrendingSlider
        moveIndex={moveIndex}
        trendingMovies={trendingMovies}
      ></TrendingSlider>
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
