import {
  StMyPageWrapper,
  StPostDiv,
  StMyPostdiv,
  StDivProfile,
  StTitle,
  StAccount,
  StPostListTitle,
  StNotLogInView,
  StNotLogInViewText
} from './MyPage.styled';
import PostList from '../../components/posts/PostList';
import UserInfo from '../../components/ui/UserInfo';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const MyPage = () => {
  const user = useSelector((state) => state.auth.user);

  console.log('user', user);

  useEffect(() => {
    if (!user) {
      //console.log('로그인이 필요합니다.');
    }
  }, [user]);

  if (!user) {
    return (
      <StNotLogInView>
        <StNotLogInViewText>
          로그인이 필요합니다!
          <br />
          상단의 로그인 페이지로 이동해 주세요 😆
        </StNotLogInViewText>
      </StNotLogInView>
    );
  }

  const userId = user.id;
  console.log('userId', userId);

  return (
    <StMyPageWrapper>
      <StDivProfile>
        <StTitle>Profile</StTitle>
        <StAccount>
          <UserInfo userId={userId} user={user} />
        </StAccount>
      </StDivProfile>
      <StPostDiv>
        <StMyPostdiv>
          <StPostListTitle>내가 쓴 게시물</StPostListTitle>
          <PostList sorting="myPost" userId={userId} />
        </StMyPostdiv>
      </StPostDiv>
    </StMyPageWrapper>
  );
};

export { MyPage };
