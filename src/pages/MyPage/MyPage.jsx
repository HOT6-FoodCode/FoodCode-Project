import {
  StMyPageWrapper,
  StPostDiv,
  StDivProfile,
  StTitle,
  StAccount,
  StPostListTitle,
  StPostListDiv,
  CenteredMessage
} from './MyPage.styled';
import PostList from '../../components/posts/PostList';
import UserInfo from '../../components/ui/UserInfo';
import { useSelector } from 'react-redux';
import { Message } from '../../components/posts/PostList/PostList.styled';

const MyPage = () => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return (
      <CenteredMessage>
        <Message style={{ lineHeight:'30px' }}>
          <p>로그인이 필요합니다!
            <br />
          상단의 로그인 페이지로 이동해 주세요.
          </p>
        </Message>
      </CenteredMessage>
    );
  }

  const userId = user.id;
  //console.log('userId', userId);

  return (
    <StMyPageWrapper>
      <StDivProfile>
        <StTitle>Profile</StTitle>
        <StAccount>
          <UserInfo userId={userId} user={user} />
        </StAccount>
      </StDivProfile>
      <StPostDiv>
        <StPostListTitle>내가 쓴 게시물</StPostListTitle>
          <StPostListDiv>
            <PostList sorting='myPost' userId={userId} />
          </StPostListDiv>
      </StPostDiv>
    </StMyPageWrapper>
  );
};

export { MyPage };
