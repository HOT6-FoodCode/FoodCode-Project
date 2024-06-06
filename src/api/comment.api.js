import { supabase } from './supabaseAPI';

class CommentAPI {
  async getComments(postId) {
    try {
      const { data, error } = await supabase.from('comments').select('*').eq('id', postId);

      if (error) {
        throw error;
      }
      console.log('data입니다.', data);
      return data[0];
    } catch (error) {
      throw new Error(`Failed to fetch my posts: ${error.message}`);
    }
  }

  async createComment(post) {
    try {
      const { postId, userId, comment } = post;
      // 닉네임 가져오기
      const { data: userData, error: userError } = await supabase.from('users').select('nickname').eq('id', userId);

      if (userError) {
        throw userError;
      }

      if (!userData || userData.length === 0) {
        throw new Error('User not found');
      }

      const nickname = userData[0].nickname;

      console.log(nickname, userData);
      // posts 테이블에 등록
      const { data, error } = await supabase.from('comments').insert([{ post_id: postId, user_id: userId, comment }]);

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      throw new Error(`Failed to create post: ${error.message}`);
    }
  }

  async deleteComment(commentId) {
    try {
      const { error } = await supabase.from('comments').delete().eq('id', commentId);

      if (error) throw error;
    } catch (error) {
      throw new Error(`Failed to delete post: ${error.message}`);
    }
  }

  async editComment(commentId, updatedComment) {
    try {
      const { title, content, image, rating } = updatedComment;
      const { error } = await supabase.from('posts').update({ title, content, image, rating }).eq('id', commentId);

      if (error) throw error;
    } catch (error) {
      throw new Error(`Failed to edit post: ${error.message}`);
    }
  }
}
export default CommentAPI;
