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
import UserInfo from '../../components/ui/UserInfo/UserInfo';
import { useParams } from 'react-router-dom';

const MyPage = () => {
  const params = useParams();
  console.log('params', params);
  //const userId = 'b3a9af59-c376-4036-b98d-718661a3c7cc';

  return (
    <StMyPageWrapper>
      <StDivProfile>
        <StTitle>Profile</StTitle>
        <StAccount>
            <UserInfo userId={params.userId} />
        </StAccount>
      </StDivProfile>
      <StPostDiv>
        <StMyPostdiv>
          <StPostListTitle>내가 쓴 게시물</StPostListTitle>
          <PostList sorting='myPost' userId={params.userId}/>
        </StMyPostdiv>
      </StPostDiv>
    </StMyPageWrapper>
  );
};

export { MyPage };
