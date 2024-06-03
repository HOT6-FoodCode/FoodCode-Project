//import { useNavigate } from 'react-router-dom';
import UserImgUpdate from '../../components/mypage/userInfo/UserImgUpdate';
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
  StPostList,
  StPostItem,
  StPostListTitle,
  StPostItemText,
  StPostItemTextStarCategory,
  StPostItemReview,
  StPostItemImg
} from './MyPage.styled';
// import FetchData from '../../components/posts/FetchData';

const MyPage = () => {
  //const navigate = useNavigate();

  return (
    <StMyPageWrapper>
      {/* <StBtnDiv>
        <StBtn onClick={() => navigate('/')}>Home</StBtn>
        <StBtn onClick={() => navigate(-1)}>뒤로가기</StBtn>
      </StBtnDiv> */}
      <StDivProfile>
        <StTitle>Profile</StTitle>
        <StAccount>
          <StUserInfoImg>
            <UserImgUpdate />
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
          <StPostListTitle color="#ECC8CA">내가 쓴 게시물</StPostListTitle>
          {/* <FetchData /> */}
          <StPostList>
            <StPostItem>
              <StPostItemImg
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAThtaI-VpgoY-GD9BjegKCmHDPcSt2BYeAQ&s"
                alt="쥬안_음식_사진"
              />
              <StPostItemText>
                <h3>쥬안</h3>
                <StPostItemReview>텐바라 솥밥으로 유명한 갓포요리집</StPostItemReview>
                <StPostItemTextStarCategory>
                  <p>⭐ 4.8</p>
                  <p>일식, 청담</p>
                </StPostItemTextStarCategory>
              </StPostItemText>
            </StPostItem>
            <StPostItem>
              <StPostItemImg
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAThtaI-VpgoY-GD9BjegKCmHDPcSt2BYeAQ&s"
                alt="쥬안_음식_사진"
              />
              <StPostItemText>
                <h3>쥬안</h3>
                <StPostItemReview>텐바라 솥밥으로 유명한 갓포요리집</StPostItemReview>
                <StPostItemTextStarCategory>
                  <p>⭐ 4.8</p>
                  <p>일식, 청담</p>
                </StPostItemTextStarCategory>
              </StPostItemText>
            </StPostItem>
          </StPostList>
        </StMyPostdiv>
        <StMyPostdiv>
          <StPostListTitle $color="blue">팔로우 한 게시물</StPostListTitle>
          <StPostList>
            <StPostItem>
              <StPostItemImg
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAThtaI-VpgoY-GD9BjegKCmHDPcSt2BYeAQ&s"
                alt="쥬안_음식_사진"
              />
              <StPostItemText>
                <h3>쥬안</h3>
                <StPostItemReview>텐바라 솥밥으로 유명한 갓포요리집</StPostItemReview>
                <StPostItemTextStarCategory>
                  <p>⭐ 4.8</p>
                  <p>일식, 청담</p>
                </StPostItemTextStarCategory>
              </StPostItemText>
            </StPostItem>
            <StPostItem>
              <StPostItemImg
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAThtaI-VpgoY-GD9BjegKCmHDPcSt2BYeAQ&s"
                alt="쥬안_음식_사진"
              />
              <StPostItemText>
                <h3>쥬안</h3>
                <StPostItemReview>텐바라 솥밥으로 유명한 갓포요리집</StPostItemReview>
                <StPostItemTextStarCategory>
                  <p>⭐ 4.8</p>
                  <p>일식, 청담</p>
                </StPostItemTextStarCategory>
              </StPostItemText>
            </StPostItem>
          </StPostList>
        </StMyPostdiv>
      </StPostDiv>
    </StMyPageWrapper>
  );
};

export { MyPage };
