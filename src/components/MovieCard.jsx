import { CiBookmark, CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router";
import Button from "./Button";
import { toggleBookmark } from "../api/toogleBookmark";
import { useEffect, useState } from "react";
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
  let rootClass = type === "highlight" ? "trending__movie" : "movie";

  return (
    <article className={`${rootClass}__card`}>
      <img src={image} alt="" className={`${rootClass}__img`} />;
      <Button
        position="up-right"
        variant="ghost"
        type="round"
        color="black"
        size="sd"
        isActive={isBookmarked ? "btn-bookmarked" : ""}
        onClick={bookmarkHandler}
      >
        <CiBookmark
          className={
            isBookmarked ? "bookmarked__icon bookmark__icon" : "bookmark__icon"
          }
        />
      </Button>
      <Button
        position="center"
        variant="ghost"
        color="black"
        type="squared"
        size="md"
        onClick={() => navigate(`/movie/${imdbid}`)}
      >
        See more
        <CiSearch className="search__icon" />
      </Button>
    </article>
  );
}

export default MovieCard;
