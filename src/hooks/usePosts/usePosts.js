import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFollowerIds } from '../../redux/slices/followSlice';
import { fetchPosts, getFollowingPosts } from '../../redux/slices/postsSlice';
import sortPosts from '../../utils/sortPosts';

const POSTS_PER_PAGE = 6;
const selectPosts = (state) => state.posts.posts;
const selectFollowingPosts = (state) => state.posts.followingPosts;
const selectUser = (state) => state.auth.user;

const usePosts = (sorting) => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const followingPosts = useSelector(selectFollowingPosts);
  const user = useSelector(selectUser);
  const followerIds = useSelector(selectFollowerIds);

  const [page, setPage] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [visiblePosts, setVisiblePosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (sorting === 'follow') {
        await dispatch(getFollowingPosts(followerIds));
      } else {
        await dispatch(fetchPosts());
      }
    };

    fetchData();
    setPage(0);
  }, [dispatch, sorting, followerIds]);

  const myPosts = useMemo(() => {
    return user ? posts.filter((post) => post.user_id === user.id) : [];
  }, [user, posts]);

  useEffect(() => {
    const data = sorting === 'follow' ? followingPosts : posts;
    let postsToShow;
    if (sorting === 'myPost' && user) {
      postsToShow = myPosts;
    } else if (sorting === 'follow') {
      postsToShow = data;
    } else {
      postsToShow = data;
    }

    const sortedPosts = sortPosts(postsToShow, sorting);
    const startIndex = page * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    setVisiblePosts(sortedPosts.slice(0, endIndex));
    setTotalPosts(sortedPosts.length);
  }, [sorting, page, posts, followingPosts, myPosts, user]);

  const loadMorePosts = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  return { visiblePosts, loadMorePosts, totalPosts };
};
export default usePosts;
