import { supabase } from "../supabase/supabase";

export async function toggleBookmark(movieId) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    console.error("User not authenticated:", userError);
    return;
  }

  try {
    const { data: existing, error: fetchError } = await supabase
      .from("bookmarks")
      .select("*")
      .eq("user_id", user.id)
      .eq("imdbid", movieId)
      .maybeSingle();

    if (fetchError) {
      console.error("Error checking bookmark:", fetchError);
      return;
    }

    if (!existing) {
      const { error: insertError } = await supabase
        .from("bookmarks")
        .insert([{ user_id: user.id, imdbid: movieId }]);
      if (insertError) {
        console.error("Error adding bookmark:", insertError);
      }
    } else {
      const { error: deleteError } = await supabase
        .from("bookmarks")
        .delete()
        .eq("user_id", user.id)
        .eq("imdbid", movieId);
      if (deleteError) {
        console.error("Error removing bookmark:", deleteError);
      }
    }
  } catch (err) {
    console.error("Unexpected error toggling bookmark:", err);
  }
}
