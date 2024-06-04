import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../../../api';

function FollowButton({ followerId }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const checkFollowStatus = async () => {
      if (user && followerId) {
        const followingId = user.id;

        try {
          const isFollowing = await api.follow.isFollowing(followingId, followerId);
          setIsFollowing(isFollowing);
        } catch (error) {
          console.error('Failed to check follow status:', error);
        }
      }
    };

    checkFollowStatus();
  }, [user, followerId]);

  const handleToggleFollow = async () => {
    if (user && followerId) {
      const followingId = user.id;

      if (followingId === followerId) {
        console.log('Cannot follow yourself');
        return;
      }
      try {
        const result = await api.follow.toggleFollowUser(followingId, followerId);
        setIsFollowing(result.action === 'follow');
      } catch (error) {
        console.error('Failed to toggle follow status:', error);
      }
    } else {
      console.log('user or followerId is not defined');
      // console.log 팝업으로 바꿀 예정
    }
  };
  if (!user) {
    return null;
  }
  return <button onClick={handleToggleFollow}>{isFollowing ? 'Unfollow' : 'Follow'}</button>;
}

export default FollowButton;
