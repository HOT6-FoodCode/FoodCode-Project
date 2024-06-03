import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hbzoodprxcglhqabrzvo.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhiem9vZHByeGNnbGhxYWJyenZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0MDIwNjgsImV4cCI6MjAzMjk3ODA2OH0.RNt9QEbXWi49yxG5FSLLAPBTf_PLmtpxkqNFMGnWKNQ';

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
