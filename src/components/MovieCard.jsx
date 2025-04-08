import { CiBookmark, CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router";
import Button from "./Button";
import { toggleBookmark } from "../api/toogleBookmark";
import { useState } from "react";
function MovieCard(props) {
  const { image, imdbid, type } = props;

  let navigate = useNavigate();

  return (
    <article
      className={type === "highlight" ? "trending__movie__card" : "movie__card"}
    >
      <img
        src={image}
        alt=""
        className={type === "highlight" ? "trending__movie__img" : "movie__img"}
      />
      ;
      <Button
        className={"bookmark__btn"}
        onClick={() => {
          toggleBookmark(imdbid);
        }}
      >
        <CiBookmark className={"bookmark__icon"} />
      </Button>
      <Button
        className="see__more__btn"
        onClick={() => navigate(`/movie/${imdbid}`)}
      >
        See more
        <CiSearch className="search__icon" />
      </Button>
    </article>
  );
}

export default MovieCard;
