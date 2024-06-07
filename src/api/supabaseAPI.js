import { createClient } from '@supabase/supabase-js';

const SUPABASE_PROJECT_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY);

// 사진 URL 생성
const profileDefaultUrl = `${
  import.meta.env.VITE_SUPABASE_URL
}/storage/v1/object/public/profile-pictures/default-profile.jpg`;

const postImageDefault = `${
  import.meta.env.VITE_SUPABASE_URL
}/storage/v1/object/public/post-Image/default-post-image.png?t=2024-06-05T08%3A49%3A47.575Z`;

export { postImageDefault, profileDefaultUrl, supabase };
