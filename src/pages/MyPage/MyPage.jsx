//import UserImgUpdate from '../../components/mypage/userInfo/UserImgUpdate';
import {
  StMyPageWrapper,
  StPostDiv,
  StMyPostdiv,
  StDivProfile,
  StTitle,
  StAccount,
  StUserInfoImg,
  StUserInfo,
  StUserContents,
  StUserLabel,
  StUserValue,
  StPostListTitle
} from './MyPage.styled';
import PostList from '../../components/posts/PostList';


const MyPage = () => {

  return (
    <StMyPageWrapper>
      <StDivProfile>
        <StTitle>Profile</StTitle>
        <StAccount>
          <StUserInfoImg>
            {/* <UserImgUpdate /> */}
          </StUserInfoImg>
          <StUserInfo>
            <StUserContents>
              <StUserLabel>닉네임</StUserLabel>
              <StUserValue>nickname</StUserValue>
            </StUserContents>
            <StUserContents>
              <StUserLabel>아이디</StUserLabel>
              <StUserValue>id</StUserValue>
            </StUserContents>
            <StUserContents>
              <StUserLabel>비밀번호</StUserLabel>
              <StUserValue>******</StUserValue>
            </StUserContents>
          </StUserInfo>
        </StAccount>
      </StDivProfile>
      <StPostDiv>
        <StMyPostdiv>
          <StPostListTitle>내가 쓴 게시물</StPostListTitle>
          <PostList sorting='myPost' />
        </StMyPostdiv>
      </StPostDiv>
    </StMyPageWrapper>
  );
};

export { MyPage };
