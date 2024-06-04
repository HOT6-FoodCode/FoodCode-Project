import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../../api';
import sortPosts from '../../utils/sortPosts';

const POSTS_PER_PAGE = 12;

const usePosts = (sorting) => {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      try {
        let fetchedPosts = [];

        if (sorting === 'follow') {
          if (!auth.user) {
            setLoading(false);
            return;
          }
          fetchedPosts = await api.posts.fetchFollowingPosts(auth.user.id);
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
  }, [sorting, auth.user, page]);

  const loadMorePosts = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return { posts, visiblePosts, loading, loadMorePosts, auth };
};

export default usePosts;
