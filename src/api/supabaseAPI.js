import { createClient } from '@supabase/supabase-js';

const SUPABASE_PROJECT_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_KEY;
export const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY);

// 사진 URL 생성
export const profileDefaultUrl = `${
  import.meta.env.VITE_SUPABASE_URL
}/storage/v1/object/public/profile-pictures/default-profile.jpg`;
export const postImageDefault =`${
  import.meta.env.VITE_SUPABASE_URL
}/storage/v1/object/public/post-Image/default-post-image.png?t=2024-06-05T08%3A49%3A47.575Z`;

export default supabase
