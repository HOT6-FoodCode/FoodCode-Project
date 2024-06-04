import { useEffect, useState } from 'react';

import api from '../../../api/api';
import PostItem from '../PostItem';
import { PostGrid } from './PostList.styled';

const PostList = ({ sorting }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const fetchedPosts = await api.posts.fetchPosts();
      let sortedPosts = [...fetchedPosts];
      if (sorting === 'recent') {
        sortedPosts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      } else if (sorting === 'follow') {
        // 로그인한 사용자가 팔로잉한 followerId를 필터링해서 최신순
      } else if (sorting === 'trending') {
        sortedPosts.sort((a, b) => b.views * 0.5 + b.rating * 1.5 - (a.views * 0.5 + a.rating * 1.5));
      }
      setPosts(sortedPosts);
    };

    getPosts();
  }, [sorting]);

  return (
    <PostGrid>
      {posts.map((post, index) => (
        <PostItem
          key={index}
          postId={post.id}
          image={post.image}
          title={post.title}
          content={post.content}
          rating={post.rating}
        />
      ))}
    </PostGrid>
  );
};

export default PostList;
