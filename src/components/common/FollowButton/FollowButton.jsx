import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import api from '../../../api';
import { toggleFollowUser } from '../../../redux/slices/followSlice';

function FollowButton({ followerId }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;
    const checkFollowStatus = async () => {
      if (user && followerId) {
        const followingId = user.id;

        if (followingId === followerId) {
          toast.warn('자기 자신을 팔로우할 수 없습니다.');
          return;
        }

        try {
          const isFollowing = await api.follow.isFollowing(followingId, followerId);
          if (isMounted) {
            setIsFollowing(isFollowing);
          }
        } catch (error) {
          if (isMounted) {
            toast.error('팔로우 상태를 확인할 수 없습니다.');
          }
        }
      }
    };

    checkFollowStatus();

    return () => {
      isMounted = false;
    };
  }, [user, followerId]);
  const handleToggleFollow = async (event) => {
    event.preventDefault();
    if (user && followerId) {
      const followingId = user.id;

      if (followingId === followerId) {
        toast.warn('자기 자신을 팔로우할 수 없습니다.');
        return;
      }
      try {
        const result = await dispatch(toggleFollowUser({ followingId, followerId })).unwrap();
        setIsFollowing(result.action === 'follow');
        toast.success(result.action === 'follow' ? '팔로우되었습니다.' : '언팔로우 되었습니다.');
      } catch (error) {
        toast.error('팔로우 상태를 변경할 수 없습니다.');
      }
    } else {
      toast.error('사용자 또는 팔로워 ID가 정의되지 않았습니다.');
      // console.log 팝업으로 바꿀 예정
    }
  };
  if (!user) {
    return null;
  }

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
`;
