import styled from 'styled-components';
import usePosts from '../../../hooks/usePosts/usePosts';
import Skeleton from '../../../layouts/common/Skeleton';
import PostItem from '../PostItem';
import { Message, PostGrid } from './PostList.styled';

const PostList = ({ sorting }) => {
  const { visiblePosts, loading, loadMorePosts, user, followingIds, totalPosts } = usePosts(sorting);

  if (!user && sorting === 'follow') {
    return (
      <Message>
        <p>로그인이 필요합니다. 로그인을 해주세요.</p>
      </Message>
    );
  }

  if (sorting === 'follow' && followingIds.length === 0) {
    return (
      <Message>
        <p>팔로우한 사용자가 없습니다. 다른 사용자를 팔로우해보세요.</p>
      </Message>
    );
  }

  if (sorting === 'myPost' && visiblePosts.length === 0) {
    if (loading) {
      return (
        <Message>
          <p>로딩 중입니다...</p>
        </Message>
      );
    }
    return (
      <Message style={{ height: '50vh' }}>
        <p>작성한 게시물이 없습니다. 게시글을 작성해 주세요!</p>
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
            {visiblePosts.map((post) => (
              <PostItem
                key={post.id}
                postId={post.id}
                image={post.image}
                title={post.title}
                content={post.content}
                rating={post.rating}
              />
            ))}
          </PostGrid>
          {visiblePosts.length < totalPosts && (
            <StButtonDiv>
              <StButton onClick={loadMorePosts}>더보기</StButton>
            </StButtonDiv>
          )}
        </>
      )}
    </>
  );
};

// ... 스타일 컴포넌트 코드 ...

export default PostList;

const StButton = styled.button`
  padding: 20px;
  border: 1px solid #ccc;
  margin-top: 20px;
  cursor: pointer;
  width: 100px;
`;
const StButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;
