import { useSelector } from 'react-redux';
import usePosts from '../../../hooks/usePosts/usePosts';
import Skeleton from '../../../layouts/common/Skeleton';

import { selectFollowerIds } from '../../../redux/slices/followSlice';
import PostItem from '../PostItem';
import { Message, PostGrid, StButton, StButtonDiv } from './PostList.styled';

const PostList = ({ sorting }) => {
  const { visiblePosts, loadMorePosts, totalPosts } = usePosts(sorting);
  const loading = useSelector((state) => state.posts.loading);
  const user = useSelector((state) => state.auth.user);
  const followerIds = useSelector(selectFollowerIds);

  console.log(followerIds);

  if (!user && sorting === 'follow') {
    return (
      <Message>
        <p>로그인이 필요합니다. 로그인을 해주세요.</p>
      </Message>
    );
  }

  if (sorting === 'follow' && (!followerIds || followerIds.length === 0)) {
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

export default PostList;
