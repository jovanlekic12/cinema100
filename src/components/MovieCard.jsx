import { CiBookmark, CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router";
import Button from "./Button";

function MovieCard(props) {
  const { image, imdbid } = props;
  let navigate = useNavigate();
  return (
    <article className="trending__movie__card">
      <img src={image} alt="" className="trending__movie__img" />;
      <div className="bookmark__div">
        <CiBookmark className="bookmark__icon" />
      </div>
      <Button
        className="see__more__btn"
        onClick={() => navigate(`movie/${imdbid}`)}
      >
        See more
        <CiSearch className="search__icon" />
      </Button>
    </article>
  );
}

export default MovieCard;
