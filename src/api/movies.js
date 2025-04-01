import { supabase } from "../supabase/supabase";

export async function fetchMovies(firstIndex, lastIndex) {
  try {
    let { data: fetchedMovies, error } = await supabase
      .from("movies")
      .select("*")
      .range(firstIndex, lastIndex);
    if (error) {
      console.error("Error fetching movies:", error);
      return;
    }
    return fetchedMovies;
  } catch (error) {
    console.error("Unexpected error:", error);
  }
}

export async function fetchTrendingMovies() {
  try {
    const { data, error } = await supabase.from("trendingMovies").select("*");
    return data;
  } catch (err) {
    console.error("Unexpected error:", err);
  }
}

export async function fetchCategories() {
  try {
    const { data, err } = await supabase.from("categories").select("*");
    return data;
  } catch (err) {
    console.error(err);
  }
}
