// src/supabaseClient.js

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dypvjgohtjuzttevfmds.supabase.co";
const supabaseAnonKey = "sb_publishable_Kko7Ijmp4d7UfhuERLpnYg_FvjPT_3o";

// export const supabase = createClient(
//   supabaseUrl,
//   supabaseAnonKey
// );

// import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);
