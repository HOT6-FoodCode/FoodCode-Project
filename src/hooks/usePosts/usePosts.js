import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../../api';
import sortPosts from '../../utils/sortPosts';

const POSTS_PER_PAGE = 6;

const usePosts = (sorting) => {
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [followingIds, setFollowingIds] = useState([]);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      try {
        const fetchedPosts = await api.posts.getAllPosts();
        setAllPosts(fetchedPosts);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
        setAllPosts([]);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  useEffect(() => {
    const getFollowingIds = async () => {
      if (user) {
        try {
          const ids = await api.follow.getFollowingIds(user.id);
          setFollowingIds(ids);
        } catch (error) {
          console.error('Failed to fetch following IDs:', error);
          setFollowingIds([]);
        }
      }
    };

    getFollowingIds();
  }, [user]);

  const myPosts = useMemo(() => {
    return user ? allPosts.filter((post) => post.user_id === user.id) : [];
  }, [user, allPosts]);

  const followingPosts = useMemo(() => {
    return allPosts.filter((post) => followingIds.includes(post.user_id));
  }, [allPosts, followingIds]);

  const visiblePosts = useMemo(() => {
    let postsToShow;
    if (sorting === 'myPost') {
      postsToShow = myPosts;
    } else if (sorting === 'follow') {
      postsToShow = followingPosts;
    } else {
      postsToShow = allPosts;
    }

    return sortPosts(postsToShow, sorting).slice(0, page * POSTS_PER_PAGE);
  }, [sorting, myPosts, followingPosts, allPosts, page]);

  const loadMorePosts = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  const totalPosts = useMemo(() => {
    if (sorting === 'myPost') return myPosts.length;
    if (sorting === 'follow') return followingPosts.length;
    return allPosts.length;
  }, [sorting, myPosts, followingPosts, allPosts]);

  return { visiblePosts, loading, loadMorePosts, user, followingIds, totalPosts };
};

export default usePosts;
