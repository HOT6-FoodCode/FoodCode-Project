import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../../../api';

function FollowButton({ followerId }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const checkFollowStatus = async () => {
      if (auth.user) {
        const followingId = auth.user.id;
        const isFollowing = await api.follow.isFollowing(followingId, followerId);
        setIsFollowing(isFollowing);
      }
    };

    checkFollowStatus();
  }, [auth.user, followerId]);

  const handleToggleFollow = async () => {
    if (auth.user) {
      const followingId = auth.user.id;
      const result = await api.follow.toggleFollowUser(followingId, followerId);
      setIsFollowing(result.action === 'follow');
    } else {
      console.log('링크로 로그인 페이지 이동 or 알림 고민중');
    }
  };
  return <button onClick={handleToggleFollow}> {isFollowing ? 'Unfollow' : 'Follow'}</button>;
}

export default FollowButton;
