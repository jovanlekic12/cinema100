import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleMovieHeader from "./header/Index";
import { CiBookmark } from "react-icons/ci";
import ReactPlayer from "react-player/youtube";


function SingleMovie(props){

    const {supabase} = props

    let params = useParams()
    const [movie,setMovie]=useState({})

    async function fetchMovie() {
        try {
          let { data: fetchedMovie, error } = await supabase
            .from("movies")
            .select("*")
            .eq('imdbid', `${params.id}`)
          if (error) {
            console.error("Error fetching movies:", error);
            return;
          }
          setMovie(fetchedMovie[0]);
        } catch (error) {
          console.error("Unexpected error:", error);
        }
      }

useEffect(()=>{
    fetchMovie()
},[])

    console.log(movie)

    return <section className="single__movie__section">
        {movie&&
        <main className="single__movie__container">
            <SingleMovieHeader movie={movie} />
            <div className="single__movie__video__div">
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
            <div className="single__movie__info__container">

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
        </main>
        }
    </section>
}

export default SingleMovie;