import { useState } from "react";
import { supabase } from "../supabase/supabase";

export async function fetchMovies({
  firstMovieIndex,
  lastMovieIndex,
  searchTerm,
  category,
  displayedMovies,
  bookmarks,
}) {
  try {
    let query = supabase
      .from("movies")
      .select("*", { count: "exact" })
      .range(firstMovieIndex, lastMovieIndex);

    if (searchTerm) {
      query = query.ilike("title", `%${searchTerm}%`);
    }

    if (category && category !== "All") {
      query = query.contains("genre", [category]);
    }

    if (displayedMovies === "Bookmarks") {
      const imdbIds = bookmarks.map((bookmark) => bookmark.imdbid);
      query = query.in("imdbid", imdbIds);
    }

    const { data: fetchedMovies, error, count } = await query;
    if (error) {
      console.error("Supabase error:", error);
      return [];
    }
    return { movies: fetchedMovies, count };
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

export async function fetchMovie(id) {
  try {
    let { data, error } = await supabase
      .from("movies")
      .select("*")
      .eq("imdbid", `${id}`)
      .single();
    if (error) {
      console.error("Error fetching movies:", error);
      return;
    }
    return data;
  } catch (error) {
    console.error("Unexpected error:", error);
  }
}

export async function fetchBookmarks() {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data, error: bookmarksError } = await supabase
      .from("bookmarks")
      .select("imdbid")
      .eq("user_id", user.id);
    return data;
  } catch (error) {
    console.error(error);
  }
}
