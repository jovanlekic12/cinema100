import { CiBookmark, CiSearch } from "react-icons/ci";
import { IoMdStar } from "react-icons/io";
import { useNavigate } from "react-router";
function MovieCard(props) {
  const { image, title, year, rating, genre, imdbid } = props;
  const navigate = useNavigate();
  return (
    <article className="movie__card">
      <img src={image} alt="" className="movie__img" />;
      <div className="bookmark__div">
        <CiBookmark className="bookmark__icon" />
      </div>
      <button
        className="see__more__btn"
        onClick={() => navigate(`movie/${imdbid}`)}
      >
        See more
        <CiSearch className="search__icon" />
      </button>
      <h6 className="movie__card__title">{title}</h6>
      <div className="movie__card__info__div">
        <p className="movie__card__p">{year}</p>
        <div className="movie__card__rating__div">
          <IoMdStar className="movie__card__star" />
          <p className="movie__card__p">{rating}</p>
        </div>
        <p className="movie__card__p">{genre.join(", ")}</p>
      </div>
    </article>
  );
}

export default MovieCard;

//To DO:
//napraviti reusable moviecard komponentu /
//vidjet sta jos moze da bude reusable
