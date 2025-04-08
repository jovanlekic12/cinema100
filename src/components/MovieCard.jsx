import { CiBookmark, CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router";
import Button from "./Button";
import { toggleBookmark } from "../api/toogleBookmark";
import { useState } from "react";
function MovieCard(props) {
  const { image, imdbid, type } = props;
  const [isBookmarked, setIsBookmarked] = useState(false);

  let navigate = useNavigate();
  const handleToggleBookmark = async () => {
    const result = await toggleBookmark(imdbid);
    setIsBookmarked(result);
  };
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
        className={
          isBookmarked ? "bookmarked__btn bookmark__btn" : "bookmark__btn"
        }
        onClick={handleToggleBookmark}
      >
        <CiBookmark
          className={
            isBookmarked ? "bookmarked__icon bookmark__icon" : "bookmark__icon"
          }
        />
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
