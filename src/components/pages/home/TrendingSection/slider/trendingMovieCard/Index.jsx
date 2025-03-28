import { CiBookmark, CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router";

function TrendingMovieCard(props) {
  const { image,imdbid } = props;
let navigate = useNavigate()
  return (
    <article className="trending__movie__card">
      <img src={image} alt="" className="trending__movie__img" />;
      <div className="bookmark__div">
        <CiBookmark className="bookmark__icon" />
      </div>
      <button className="see__more__btn" onClick={()=>navigate(`movie/${imdbid}`)}>
        See more
        <CiSearch className="search__icon" />
      </button>
    </article>
  );
}

export default TrendingMovieCard;
