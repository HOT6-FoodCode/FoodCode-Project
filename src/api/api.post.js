import supabase from './supabaseAPI';

export const fetchPosts = async () => {
  const { data, error } = await supabase.from('posts').select('*');

  if (error) {
    console.error('Error fetching posts: ', error);
    return [];
  }

  return data;
};

export const incrementViewCount = async (postId) => {
  // Fetch the current views value
  const { data: postData, error: fetchError } = await supabase.from('posts').select('views').eq('id', postId);

  if (fetchError) {
    console.error('Error fetching post data:', fetchError);
    return;
  }

  if (!postData || postData.length === 0) {
    console.error('No post data found for postId:', postId);
    return;
  }

  const currentViews = postData[0].views;

  // Increment views value by 1
  const updatedViews = currentViews + 1;

  // Update views field in the database
  const { error: updateError } = await supabase.from('posts').update({ views: updatedViews }).eq('id', postId);

  if (updateError) {
    console.error('Error incrementing views:', updateError);
    return;
  }

  console.log('조회수 증가 확인 :', updatedViews);
};
