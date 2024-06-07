import { supabase } from './supabaseAPI';

class FollowAPI {
  // 팔로우 상태 확인 프라이빗 메서드
  async _checkFollowStatus(followingId, followerId) {
    if (!followingId || !followerId) {
      throw new Error('Invalid user IDs');
    }

    const { data: existingFollow, error: checkError } = await supabase
      .from('follows')
      .select('*')
      .eq('following_id', followingId)
      .eq('follower_id', followerId)
      .limit(1);

    if (checkError) {
      throw new Error(checkError.message);
    }

    return existingFollow.length > 0 ? existingFollow[0] : null;
  }
  // 팔로우 상태 토글 메서드
  async toggleFollowUser(followingId, followerId) {
    if (!followingId || !followerId) {
      throw new Error('Invalid user IDs');
    }

    if (followingId === followerId) {
      throw new Error('Cannot follow yourself');
    }

    try {
      const existingFollow = await this._checkFollowStatus(followingId, followerId);
      if (existingFollow) {
        const { data, error } = await supabase
          .from('follows')
          .delete()
          .eq('following_id', followingId)
          .eq('follower_id', followerId);

        console.log('existingFollow가 있다면 data', data);
        if (error) {
          throw new Error(error.message);
        }
        return { action: 'unfollow', data };
      } else {
        const { data, error } = await supabase
          .from('follows')
          .insert([{ following_id: followingId, follower_id: followerId }]);

        if (error) {
          throw new Error(error.message);
        }
        return { action: 'follow', data };
      }
    } catch (error) {
      throw new Error(`Failed to toggle follow status: ${error.message}`);
    }
  }
  // 팔로우 상태 확인 메서드
  async isFollowing(followingId, followerId) {
    console.log(`isFollowing에서 followingId: ${followingId} followerId: ${followerId}`);
    try {
      const existingFollow = await this._checkFollowStatus(followingId, followerId);
      return existingFollow !== null;
    } catch (error) {
      throw new Error(`Failed to check follow status: ${error.message}`);
    }
  }

  async getFollowerIds(userId) {
    try {
      const { data, error } = await supabase.from('follows').select('follower_id').eq('following_id', userId);

      if (error) throw new Error(error.message);
      console.log('Raw data from getFollowerIds:', data);
      return data.map((follow) => follow.follower_id);
    } catch (error) {
      throw new Error(`Failed to get follower ids: ${error.message}`);
    }
  }

  async getFollowingIds(userId) {
    try {
      const { data, error } = await supabase.from('follows').select('following_id').eq('follower_id', userId);

      if (error) throw new Error(error.message);
      console.log('Raw data from getFollowingIds:', data);
      return data.map((follow) => follow.following_id);
    } catch (error) {
      throw new Error(`Failed to get following ids: ${error.message}`);
    }
  }
}

export default FollowAPI;
