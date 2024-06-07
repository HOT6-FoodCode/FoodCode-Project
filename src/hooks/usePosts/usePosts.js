import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { selectFollowerIds, selectFollowingIds } from '../../redux/slices/followSlice';
import { fetchPosts } from '../../redux/slices/postsSlice';
import sortPosts from '../../utils/sortPosts';

const POSTS_PER_PAGE = 6;
const selectPosts = (state) => state.posts.posts;
const selectUser = (state) => state.auth.user;

const selectPostsData = createSelector(
  [selectPosts, selectUser, selectFollowingIds, selectFollowerIds],
  (posts, user, followingIds, followerIds) => ({
    posts,
    user,
    followingIds,
    followerIds
  })
);

const usePosts = (sorting, refreshTrigger) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('App useEffect for fetchPosts triggered.');
    dispatch(fetchPosts());
  }, [dispatch, refreshTrigger]);

  const { posts, user, followerIds } = useSelector(selectPostsData);

  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [sorting]);

  const myPosts = useMemo(() => {
    return user ? posts.filter((post) => post.user_id === user.id) : [];
  }, [user, posts]);

  const followingPosts = useMemo(() => {
    return posts.filter((post) => followerIds?.includes(post.user_id) || false);
  }, [posts, followerIds]);

  const visiblePosts = useMemo(() => {
    let postsToShow;
    if (sorting === 'myPost') {
      postsToShow = myPosts;
    } else if (sorting === 'follow') {
      postsToShow = followingPosts;
    } else {
      postsToShow = posts;
    }

    const sortedPosts = sortPosts(postsToShow, sorting);
    const startIndex = (page - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    return sortedPosts.slice(0, endIndex);
  }, [sorting, myPosts, followingPosts, posts, page]);

  const loadMorePosts = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  const totalPosts = useMemo(() => {
    if (sorting === 'myPost') return myPosts.length;
    if (sorting === 'follow') return followingPosts.length;
    return posts.length;
  }, [sorting, myPosts, followingPosts, posts]);

  return { visiblePosts, loadMorePosts, totalPosts };
};

export default usePosts;
