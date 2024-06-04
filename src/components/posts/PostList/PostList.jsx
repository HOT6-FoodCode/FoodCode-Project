import { Suspense, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import api from '../../../api/api';

import PostItem from '../PostItem';
import { PostGrid } from './PostList.styled';
import Skeleton from './Skeleton';

const POSTS_PER_PAGE = 12;

const PostList = ({ sorting }) => {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState([]);

  const [page, setPage] = useState(1);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const getPosts = async () => {
      let fetchedPosts = await api.posts.fetchPosts();
      let sortedPosts = [...fetchedPosts];

      if (sorting === 'recent') {
        sortedPosts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      } else if (sorting === 'follow' && auth.user) {
        const followingIds = await api.follow.getFollowingIds(auth.user.id);

        sortedPosts = sortedPosts
          .filter((post) => followingIds.includes(post.user_id))
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      } else if (sorting === 'trending') {
        sortedPosts.sort((a, b) => b.views * 0.5 + b.rating * 1.5 - (a.views * 0.5 + a.rating * 1.5));
      }

      setPosts(sortedPosts);
      setVisiblePosts(sortedPosts.slice(0, page * POSTS_PER_PAGE));
    };

    getPosts();
  }, [sorting, auth.user, page]);

  const loadMorePosts = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <PostGrid>
      <Suspense fallback={<Skeleton length={6} />}>
        {visiblePosts.map((post, index) => (
          <PostItem
            key={index}
            postId={post.id}
            image={post.image}
            title={post.title}
            content={post.content}
            rating={post.rating}
          />
        ))}
      </Suspense>
      {visiblePosts.length < posts.length && <button onClick={loadMorePosts}>더보기</button>}
    </PostGrid>
  );
};

export default PostList;
