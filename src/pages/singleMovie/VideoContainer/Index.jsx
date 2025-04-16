import ReactPlayer from "react-player/youtube";
import { CiBookmark } from "react-icons/ci";
import Button from "../../../components/Button";

function SingleMovieVideoContainer({ movie }) {
  return (
    <div className="single__movie__video__div">
      <article className="single__movie__card movie__card">
        <img src={movie.image} alt="" className="movie__img" />;
        <Button type="bookmark">
          <CiBookmark className="bookmark__icon" />
        </Button>
      </article>
      <ReactPlayer
        className="react__player"
        url={movie.trailer}
        controls={true}
      />
    </div>
  );
}
export default SingleMovieVideoContainer;
