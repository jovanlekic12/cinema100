import { CiBookmark, CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router";
import Button from "./Button";
import { toggleBookmark } from "../api/toogleBookmark";
import { useCallback, useEffect, useState } from "react";
import { fetchBookmarks } from "../api/movies";
import { useFetchData } from "../api/useFetchData";
function MovieCard(props) {
  const { image, imdbid, type, bookmarks, getBookmarks } = props;
  const [isBookmarked, setIsBookmarked] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    if (bookmarks) {
      const contains = bookmarks.some((bookmark) => bookmark.imdbid === imdbid);
      setIsBookmarked(contains);
    }
  }, [bookmarks]);

  function bookmarkHandler() {
    toggleBookmark(imdbid);
    setTimeout(() => {
      getBookmarks();
    }, 500);
  }
  // const rootClass = (type = "highlight"
  //   ? "trending__movie__card"
  //   : "movie__card");
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
        onClick={bookmarkHandler}
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
