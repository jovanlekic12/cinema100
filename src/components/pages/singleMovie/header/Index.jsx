
import { IoMdStar } from "react-icons/io";

function SingleMovieHeader(props) {

const {movie} = props

    return <div className="single__movie__header">
    <div className="single__movie__header__div">
        <h2 className="single__movie__title">{movie.title}</h2>
        <span className="single__movie__year">({movie.year})</span>
    </div>
    <div className="single__movie__right__div">
        <div className="single__movie__rating__div">
            <h2 className="single__movie__rating__heading">Imdb rating</h2>
            <span><IoMdStar className="movie__card__star"/></span>
            <span className="single__movie__left__span">{movie.rating} </span>
            <span className="single__movie__right__span">/ 10</span>
        </div>
        <div className="single__movie__rating__div">
        <h2 className="single__movie__rating__heading">Rank</h2>
        <span className="single__movie__left__span">{movie.rank} </span>
        <span className="single__movie__right__span">/ 100</span>
        </div>
    </div>
</div>
}

export default SingleMovieHeader;