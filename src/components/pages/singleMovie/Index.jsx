import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleMovieHeader from "./header/Index";
import SingleMovieInfoContainer from "./InfoContainer/Index";
import SingleMovieVideoContainer from "./VideoContainer/Index";


function SingleMovie(props){

    const {supabase} = props

    let params = useParams()
    const [movie,setMovie]=useState(null)

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
    if(!movie){

        fetchMovie()
        console.log('etest')
    }
},[])

    console.log(movie)

    return <section className="single__movie__section">
        {movie&&
        <main className="single__movie__container">
            <SingleMovieHeader movie={movie} />
            <SingleMovieVideoContainer movie={movie}/>
            <SingleMovieInfoContainer movie={movie}/>
        </main>
        }
    </section>
}
export default SingleMovie;