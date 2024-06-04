import supabase from './supabaseAPI';

class PostsAPI {
  async fetchPosts() {
    const { data, error } = await supabase.from('posts').select('*');

    if (error) {
      throw error;
    }

    return data;
  }

  async incrementViewCount(postId) {
    const { data: postData, error: fetchError } = await supabase.from('posts').select('views').eq('id', postId);

    if (fetchError) {
      throw fetchError;
    }

    if (!postData || postData.length === 0) {
      console.error('No post data found for postId:', postId);
      return;
    }

    const currentViews = postData[0].views;
    const updatedViews = currentViews + 1;

    // 데이터 베이스 업데이트
    const { error: updateError } = await supabase.from('posts').update({ views: updatedViews }).eq('id', postId);

    if (updateError) {
      throw updateError;
    }

    return updatedViews;
  }
}

export default PostsAPI;
