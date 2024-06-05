import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../../api';
import sortPosts from '../../utils/sortPosts';

const POSTS_PER_PAGE = 12;

const usePosts = (sorting) => {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      try {
        let fetchedPosts = [];

        if (sorting === 'follow') {
          if (!user) {
            setLoading(false);
            return;
          }
          // 팔로워 ID 가져오기
          const followingIds = await api.follow.getFollowingIds(user.id);
          // 팔로워 ID 배열로 순회해서 데이터에 추가
          fetchedPosts = await api.posts.fetchFollowingPosts(followingIds);
        } else {
          fetchedPosts = await api.posts.fetchPosts();
        }

        const sortedPosts = sortPosts(fetchedPosts, sorting);
        setPosts(sortedPosts);
        setVisiblePosts(sortedPosts.slice(0, page * POSTS_PER_PAGE));
      } catch (error) {
        console.error('Failed to fetch posts:', error);
        setPosts([]);
        setVisiblePosts([]);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, [sorting, user, page]);

  const loadMorePosts = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  return { posts, visiblePosts, loading, loadMorePosts, user };
};

export default usePosts;
