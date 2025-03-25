import { useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

function Home({ trendingMovies }) {
  const [moveIndex, setMoveIndex] = useState(0);

  const array = ["", "", "", ""];

  function handleSlide(side) {
    if (side === "left") {
      setMoveIndex((prevIndex) => (prevIndex === 4 - 1 ? 0 : prevIndex + 1));
    } else if (side === "right") {
      setMoveIndex((prevIndex) => (prevIndex === 0 ? 4 - 1 : prevIndex - 1));
    }
  }
  return (
    <main className="main__container">
      <section className="slider__section">
        <div className="trending__header">
          <h4 className="trending__heading">Currently trending</h4>
          <div className="trending__selection__div">
            {array.map((item, index) => {
              return (
                <div
                  className={
                    index === moveIndex
                      ? "trending__selection active__selection"
                      : "trending__selection"
                  }
                ></div>
              );
            })}
          </div>
        </div>
        <div className="slider">
          <div
            className="trending__movies__list"
            style={{ transform: `translateX(-${moveIndex * 25}%)` }}
          >
            {trendingMovies &&
              trendingMovies.map((movie) => {
                return (
                  <article className="trending__movie__card">
                    <img
                      src={movie.image}
                      alt=""
                      className="trending__movie__img"
                    />
                    ;
                  </article>
                );
              })}
          </div>
        </div>
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
