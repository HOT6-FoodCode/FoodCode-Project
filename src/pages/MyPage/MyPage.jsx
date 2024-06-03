//import { useNavigate } from 'react-router-dom';
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
} from './MyPage.styled';
// import FetchData from '../../components/posts/FetchData';
import UserPostList from '../../components/mypage/userPost/userPostList/UserPostList';



const MyPage = () => {
  //const navigate = useNavigate();


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
        {/* <StMyPostdiv> */}
          
          {/* <FetchData /> */}
          {/* <UserPostList />
        </StMyPostdiv> */}
        <StMyPostdiv>
          
          <UserPostList myPost={true} />
          <UserPostList myPost={false} />
        </StMyPostdiv>
      </StPostDiv>
    </StMyPageWrapper>
  );
};

export { MyPage };
