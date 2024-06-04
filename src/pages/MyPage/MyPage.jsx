import {
  StMyPageWrapper,
  StPostDiv,
  StMyPostdiv,
  StDivProfile,
  StTitle,
  StAccount,
  StPostListTitle
} from './MyPage.styled';
import PostList from '../../components/posts/PostList';
import UserInfo from '../../components/ui/UserInfo';
import { useSelector } from 'react-redux';


const MyPage = () => {
  const user = useSelector((state) => state.auth.user);

  console.log('user', user);

  if (!user) {
    return <p>로그인이 필요합니다.</p>;
  }

  const userId = user.id;
  console.log('userId', userId);

  return (
    
    <StMyPageWrapper>
      <div>
        <h1>{user.email}님의 페이지</h1>
        <p>사용자 UUID: {user.id}</p>
      </div>
      <StDivProfile>
        <StTitle>Profile</StTitle>
        <StAccount>
            <UserInfo userId={userId} />
        </StAccount>
      </StDivProfile>
      <StPostDiv>
        <StMyPostdiv>
          <StPostListTitle>내가 쓴 게시물</StPostListTitle>
          <PostList sorting='myPost' userId={userId} />
        </StMyPostdiv>
      </StPostDiv>
    </StMyPageWrapper>
  );
};

export { MyPage };
