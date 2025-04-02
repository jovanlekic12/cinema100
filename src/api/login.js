import { supabase } from "../supabase/supabase";

export async function logInUser(userEmail, userPassword) {
  try {
    const { data, err } = await supabase.auth.signInWithPassword({
      email: userEmail,
      password: userPassword,
    });
    return data;
  } catch (err) {
    console.error(err);
  }
}
