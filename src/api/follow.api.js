import supabase from './supabaseAPI';

class FollowAPI {
  async toggleFollowUser(followingId, followerId) {
    try {
      // 팔로우 확인
      const { data: existingFollow, error: checkError } = await supabase
        .from('follows')
        .select('*')
        .eq('following_id', followingId)
        .eq('follower_id', followerId)
        .single();

      if (checkError && !checkError.message.includes('No rows found')) {
        throw new Error(checkError.message);
      }
      // 언팔로우
      if (existingFollow) {
        const { data, error } = await supabase
          .from('follows')
          .delete()
          .eq('following_id', followingId)
          .eq('follower_id', followerId);
        if (error) {
          throw new Error(error.message);
        }
        return { action: 'unfollow', data };
      } else {
        // 팔로우 추가
        const { data, error } = await supabase
          .from('follows')
          .insert([{ following_id: followingId, follower_Id: followerId }]);
        if (error) {
          throw new Error(error.message);
        }
        return { action: 'follow', data };
      }
    } catch (error) {
      throw new Error(`Failed to follow user: ${error.message}`);
    }
  }
}

export default FollowAPI;
