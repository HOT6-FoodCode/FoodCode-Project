import { supabase } from './supabaseAPI';

class CommentsAPI {
  async getAllComments() {
    try {
      const { data, error } = await supabase.from('comments').select('*');

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      throw new Error(`Failed to fetch comments: ${error.message}`);
    }
  }

  async getMyComments(userId) {
    try {
      const { data, error } = await supabase.from('comments').select('*').eq('user_id', userId);

      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch my comments: ${error.message}`);
    }
  }

  async getComment(postId) {
    try {
      const { data, error } = await supabase.from('comments').select('*').eq('post_id', postId);

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      throw new Error(`Failed to fetch comment: ${error.message}`);
    }
  }

  async createComment(comment) {
    try {
      const { userId, postId, commentText, created_at } = comment;

      if (!userId || !postId || !commentText) {
        throw new Error('User ID, Post ID, and Comment text are required');
      }

      const { data, error } = await supabase
        .from('comments')
        .insert([{ user_id: userId, post_id: postId, comment: commentText, created_at }]);

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      throw new Error(`Failed to create comment: ${error.message}`);
    }
  }
  async editComment(commentId, updatedText) {
    try {
      if (typeof updatedText !== 'object' || !updatedText.commentText) {
        throw new Error('Invalid updated text format');
      }

      const { commentText, created_at } = updatedText;

      const { data, error } = await supabase
        .from('comments')
        .update({ comment: commentText, created_at })
        .eq('id', commentId);

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      throw new Error(`Failed to edit comment: ${error.message}`);
    }
  }
  async deleteComment(commentId) {
    try {
      const { error } = await supabase.from('comments').delete().eq('id', commentId);

      if (error) {
        throw error;
      }

      return true; // 삭제 성공을 나타내는 값 반환
    } catch (error) {
      throw new Error(`Failed to delete comment: ${error.message}`);
    }
  }
}

export default CommentsAPI;
