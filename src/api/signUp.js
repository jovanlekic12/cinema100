import { supabase } from "../supabase/supabase";

export async function SignUpUser() {
  try {
    const { data, err } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          name: formData.name,
          lastName: formData.lastName,
        },
      },
    });
    alert("Check your email for verification link");
  } catch (err) {
    console.error(err);
  }
}
