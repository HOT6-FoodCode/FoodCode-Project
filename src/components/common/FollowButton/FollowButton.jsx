import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import api from '../../../api';


function FollowButton({ followerId }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    let isMounted = true;
  
    const checkFollowStatus = async () => {
      if (user && followerId) {
        const followingId = user.id;
  
        try {
          const isFollowing = await api.follow.isFollowing(followingId, followerId);
          if (isMounted) {
            setIsFollowing(isFollowing);
          }
        } catch (error) {
          if (isMounted) {
            console.error('Failed to check follow status:', error);
          }
        }
      }
    };
  
    checkFollowStatus();
  
    return () => {
      isMounted = false;
    };
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
  console.log(followerId);
  return <StFollowBtn onClick={handleToggleFollow}>{isFollowing ? 'Unfollow' : 'Follow'}</StFollowBtn>;
}

export default FollowButton;

const StFollowBtn = styled.button`
  background-color: #1b4b9c;
    color: white;
    border-radius: 30px;
    padding: 12px 20px;
    font-size: 18px;
    width: 120px;
    height: 48px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
    background-color: #3b6fbf;
  }
`