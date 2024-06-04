import { createClient } from '@supabase/supabase-js';

// const SUPABASE_PROJECT_URL = import.meta.env.VITE_SUPABASE_URL;
//'https://otslhlwfllaklzwbdmcl.supabase.co';
const SUPABASE_PROJECT_URL = 'https://ikyihgpsyyzhelqvpunj.supabase.co';

// const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_KEY;
// const SUPABASE_ANON_KEY =
//  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90c2xobHdmbGxha2x6d2JkbWNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxNDY4ODIsImV4cCI6MjAzMjcyMjg4Mn0.ModtB3oRhMUNiL_88V6_lFm_J-yhYIZaanBUSKWRzdA';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlreWloZ3BzeXl6aGVscXZwdW5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0NTMxMjcsImV4cCI6MjAzMjAyOTEyN30.kMdey2-FNiWhyktnHT4d09Z-nsjNiQY92k-h0JTqW6w';
const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY);

export default supabase;
