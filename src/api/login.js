import { supabase } from "../supabase/supabase";

export async function logInUser(userEmail, userPassword) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: userEmail,
    password: userPassword,
  });

  return { data, error };
}
