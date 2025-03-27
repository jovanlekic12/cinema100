import { CiBookmark, CiSearch } from "react-icons/ci";

function MovieCard(props) {
  const { image, title } = props;

  return (
    <article className="movie__card">
      <img src={image} alt="" className="movie__img" />;
      <div className="bookmark__div">
        <CiBookmark className="bookmark__icon" />
      </div>
      <button className="see__more__btn">
        See more
        <CiSearch className="search__icon" />
      </button>
      <h6 className="movie__card__title">{title}</h6>
    </article>
  );
}

export default MovieCard;
