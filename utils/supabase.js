import { createClient } from "@supabase/supabase-js";
const { SUPABASE_URL, SUPABASE_PUBLIC_KEY } = process.env;
export const client = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY);
