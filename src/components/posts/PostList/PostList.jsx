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
      } else if (sorting === 'myPost') {
        sortedPosts = sortedPosts.filter(post => post.id === 6); // 임시 조건 부여
        //console.log(sortedPosts);
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