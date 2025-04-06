import { supabase } from "../supabase/supabase";

export async function toggleBookmark(movieId) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: existing, error: fetchError } = await supabase
    .from("bookmarks")
    .select("*")
    .eq("user_id", user.id)
    .eq("imdbid", movieId)
    .single();

  if (!existing) {
    const { error: insertError } = await supabase
      .from("bookmarks")
      .insert([{ user_id: user.id, imdbid: movieId }]);
  } else {
    const { error: deleteError } = await supabase
      .from("bookmarks")
      .delete()
      .eq("imdbid", existing.imdbid);
  }
}
