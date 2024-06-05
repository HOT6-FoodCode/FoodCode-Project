import styled from 'styled-components';
import usePosts from '../../../hooks/usePosts/usePosts';
import Skeleton from '../../../layouts/common/Skeleton';
import PostItem from '../PostItem';
import { Message, PostGrid } from './PostList.styled';

const PostList = ({ sorting }) => {
  const { posts, visiblePosts, loading, loadMorePosts, user } = usePosts(sorting);

  if (!user && sorting === 'follow') {
    return (
      <Message>
        <p>로그인이 필요합니다. 로그인을 해주세요.</p>
      </Message>
    );
  }

  if (sorting === 'follow' && posts.length === 0) {
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
        <>
          <PostGrid>
            {visiblePosts.map((post, index) => (
              <PostItem
                key={index}
                postId={post.id}
                images={post.images}
                title={post.title}
                content={post.content}
                rating={post.rating}
              />
            ))}
          </PostGrid>
          {visiblePosts.length < posts.length && <StButton onClick={loadMorePosts}>더보기</StButton>}
        </>
      )}
    </>
  );
};

export default PostList;

const StButton = styled.button`
  padding: 20px;
  border: 1px solid #ccc;
  margin-top: 20px;
  cursor: pointer;
`;
