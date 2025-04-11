import { supabase } from "../supabase/supabase";

export async function SignUpUser(email, password, name, lastName) {
  const { data, err } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        name: name,
        lastName: lastName,
      },
    },
  });
  return data, err;
}
