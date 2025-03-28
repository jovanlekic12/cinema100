function SingleMovieInfoContainer(props) {
const {movie} = props
return <div className="single__movie__info__container">
<div className="single__movie__info__div">
    <h2 className="single__movie__info__heading">{movie.genre.join(', ')}</h2>
    <p className="single__movie__info__p">{movie.description}</p>
</div>
<div className="single__movie__info__div">
<h2 className="single__movie__info__heading">Director</h2>
<p className="single__movie__info__p">{movie.director.join(', ')}</p>
</div>
<div className="single__movie__info__div">
<h2 className="single__movie__info__heading">Writers</h2>
<p className="single__movie__info__p">{movie.writers.join(', ')}</p>
</div>
</div>
}


export default SingleMovieInfoContainer