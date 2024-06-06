import { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import sortPosts from '../../utils/sortPosts';

const POSTS_PER_PAGE = 6;

const usePosts = (sorting) => {
  const { posts, user, followingIds } = useSelector((state) => ({
    posts: state.posts.posts,
    user: state.auth.user,
    followingIds: state.follow.followingIds
  }));
  const [page, setPage] = useState(1);

  const myPosts = useMemo(() => {
    return user ? posts.filter((post) => post.user_id === user.id) : [];
  }, [user, posts]);

  const followingPosts = useMemo(() => {
    // followingIds가 undefined이면 빈 배열로 초기화
    const ids = followingIds || [];
    return posts.filter((post) => ids.includes(post.user_id));
  }, [posts, followingIds]);

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
    return sortedPosts.slice(startIndex, endIndex);
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
