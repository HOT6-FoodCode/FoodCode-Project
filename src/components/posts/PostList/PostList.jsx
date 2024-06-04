import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import api from '../../../api/api';

import Skeleton from '../../../layouts/common/Skeleton';
import PostItem from '../PostItem';
import { Message, PostGrid } from './PostList.styled';

const POSTS_PER_PAGE = 12;

const PostList = ({ sorting }) => {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      try {
        let fetchedPosts = await api.posts.fetchPosts();
        let sortedPosts = [...fetchedPosts];

        if (sorting === 'recent') {
          sortedPosts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        } else if (sorting === 'follow') {
          if (!auth.user) {
            setLoading(false);
            return;
          }
          const followingIds = await api.follow.getFollowingIds(auth.user.id);
          if (followingIds.length === 0) {
            setLoading(false);
            setPosts([]);
            setVisiblePosts([]);
            return;
          }
          sortedPosts = sortedPosts
            .filter((post) => followingIds.includes(post.user_id))
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        } else if (sorting === 'trending') {
          sortedPosts.sort((a, b) => b.views * 0.5 + b.rating * 1.5 - (a.views * 0.5 + a.rating * 1.5));
        }

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
  if (!auth.user && sorting === 'follow') {
    return (
      <Message>
        <p>로그인이 필요합니다. 로그인을 해주세요.</p>
      </Message>
    );
  }

  if (sorting === 'follow' && posts.length === 0 && !loading) {
    return (
      <Message>
        <p>팔로우한 사용자가 없습니다. 다른 사용자를 팔로우해보세요.</p>
      </Message>
    );
  }
  return (
    <>
      {loading ? (
        <Skeleton length={6} />
      ) : (
        <PostGrid>
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
          {visiblePosts.length < posts.length && <button onClick={loadMorePosts}>더보기</button>}
        </PostGrid>
      )}
    </>
  );
};

export default PostList;
