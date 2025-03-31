import { createClient } from "@supabase/supabase-js";

const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabaseUrl = "https://igugbxgrjkjwxmvpesde.supabase.co";
export const supabase = createClient(supabaseUrl, supabaseKey);
