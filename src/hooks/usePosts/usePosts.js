import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../../api';
import sortPosts from '../../utils/sortPosts';

const POSTS_PER_PAGE = 12;

const usePosts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      try {
        const fetchedPosts = await api.posts.getAllPosts();
        setAllPosts(fetchedPosts);
        setVisiblePosts(fetchedPosts.slice(0, POSTS_PER_PAGE));
      } catch (error) {
        console.error('Failed to fetch posts:', error);
        setAllPosts([]);
        setVisiblePosts([]);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  const filterAndSortPosts = useCallback(
    (sorting) => {
      let filteredPosts = allPosts;

      if (sorting === 'follow' && user) {
        const followingIds = (user.following || []).map((f) => f.id);
        filteredPosts = allPosts.filter((post) => followingIds.includes(post.user_id));
      } else if (sorting === 'myPost' && user) {
        filteredPosts = allPosts.filter((post) => post.user_id === user.id);
      }

      const sortedPosts = sortPosts(filteredPosts, sorting);
      setVisiblePosts(sortedPosts.slice(0, page * POSTS_PER_PAGE));
    },
    [allPosts, user, page]
  );

  const loadMorePosts = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  return { allPosts, visiblePosts, loading, filterAndSortPosts, loadMorePosts, user };
};

export default usePosts;
