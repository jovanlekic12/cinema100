import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleMovieHeader from "./header/Index";
import SingleMovieInfoContainer from "./InfoContainer/Index";
import SingleMovieVideoContainer from "./VideoContainer/Index";
import { supabase } from "../../supabase/supabase";
import { fetchMovie } from "../../api/movies";
import { useFetchData } from "../../api/useFetchData";
import Loader from "../../components/Loader";
function SingleMovie(props) {
  let params = useParams();
  const fetchPage = useCallback(() => fetchMovie(params.id), [params.id]);

  const { isLoading, data: movie } = useFetchData(fetchPage);

  return (
    <section className="single__movie__section">
      {isLoading && <Loader />}
      {movie && (
        <main className="single__movie__container">
          <SingleMovieHeader movie={movie} />
          <SingleMovieVideoContainer movie={movie} />
          <SingleMovieInfoContainer movie={movie} />
        </main>
      )}
    </section>
  );
}
export default SingleMovie;
