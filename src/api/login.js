import { supabase } from "../supabase/supabase";

export async function logInUser(userEmail, userPassword) {
  try {
    const { data, err } = await supabase.auth.signInWithPassword({
      email: userEmail,
      password: userPassword,
    });
    return { data, err };
  } catch (err) {
    console.log("mjau", err);
  }
}
