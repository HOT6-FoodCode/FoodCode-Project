import supabase from './supabaseAPI';

class PostsAPI {
  async fetchPosts() {
    try {
      const { data, error } = await supabase.from('posts').select('*');

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      throw new Error(`Failed to fetch posts: ${error.message}`);
    }
  }

  async createPost(userId, title, context, image, rating) {
    try {
      // 닉네임 가져오기
      const { data: userData, error: userError } = await supabase.from('users').select('nickname').eq('id', userId);

      if (userError) {
        throw userError;
      }

      const nickname = userData[0].nickname;

      // posts 테이블에 등록
      const { data, error } = await supabase
        .from('posts')
        .insert([{ user_id: userId, nickname, title, context, image, views: 0, rating }]);

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      throw new Error(`Failed to create post: ${error.message}`);
    }
  }

  async deletePost(postId) {
    try {
      const { error } = await supabase.from('posts').delete().eq('id', postId);

      if (error) throw error;
    } catch (error) {
      throw new Error(`Failed to delete post: ${error.message}`);
    }
  }

  async editPost(postId, title, context, image) {
    try {
      const { error } = await supabase.from('posts').update({ title, context, image }).eq('id', postId);

      if (error) throw error;
    } catch (error) {
      throw new Error(`Failed to edit post: ${error.message}`);
    }
  }
  async incrementViewCount(postId) {
    try {
      const { data: postData, error: fetchError } = await supabase.from('posts').select('views').eq('id', postId);

      if (fetchError) throw fetchError;

      if (!postData || postData.length === 0) {
        console.error('No post data found for postId:', postId);
        return;
      }

      const currentViews = postData[0].views;
      const updatedViews = currentViews + 1;

      const { error: updateError } = await supabase.from('posts').update({ views: updatedViews }).eq('id', postId);

      if (updateError) throw updateError;

      return updatedViews;
    } catch (error) {
      throw new Error(`Failed to increment view count: ${error.message}`);
    }
  }
}

export default PostsAPI;
