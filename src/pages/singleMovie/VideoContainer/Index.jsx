import ReactPlayer from "react-player/youtube";
import { CiBookmark } from "react-icons/ci";


function SingleMovieVideoContainer({movie}) {


    return <div className="single__movie__video__div">
                    <article className="single__movie__card movie__card">
                          <img src={movie.image} alt="" className="movie__img" />;
                          <div className="bookmark__div">
                            <CiBookmark className="bookmark__icon" />
                          </div>
                </article>
                <ReactPlayer className="react__player"
            url={movie.trailer}
            controls={true}/>
                </div>
}
export default SingleMovieVideoContainer