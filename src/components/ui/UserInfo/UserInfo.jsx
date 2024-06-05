import { useEffect, useRef } from 'react';
import api from '../../../api/api';
import {
  StUserImgUpdateDiv,
  StUserImgUpdateLabel,
  StUserImgUpdateInput,
  StUserInfoContainer,
  StUserInfo,
  StUserContents,
  StUserLabel,
  StUserValue
} from '../UserInfo/UserInfo.styled';
import UserImg from './UserImg';
import { useSelector, useDispatch } from 'react-redux';
import { userDataUpdate } from '../../../redux/slices/userSlice';
const UserImgUpdate = ({ userId, user }) => {
  const fileInputRef = useRef(null);
  const userProfileData = useSelector((state) => state.user.userProfile);
  //console.log('상태확인, UserInfo', userProfileData);
  const dispatch  = useDispatch();

  const fetchUserProfilePicture = async () => {
    try {
      const userInfo = await api.user.getUserProfile(userId);
      //console.log(userInfo);
      dispatch(userDataUpdate(userInfo));
    } catch (error) {
      console.error('프로필 사진 업로드 및 사용자 데이터 업데이트 오류:', error.message);
    }
  };

  const handleFileInputChange = async (file) => {

    try {
      await api.user.updateUserProfile(userId, file);
      await fetchUserProfilePicture();
    } catch (error) {
      console.error('프로필 사진 업로드 및 사용자 데이터 업데이트 오류:', error.message);
    }
  };

  const imageUrl = userProfileData && userProfileData.profilePictureUrl;


  useEffect(() => {
    fetchUserProfilePicture();
  }, [userId, user]);

  return (
    <StUserInfoContainer>
      <div>
        <UserImg imgUrl={imageUrl} />
        <StUserImgUpdateDiv>
          <StUserImgUpdateLabel htmlFor="hiddenFileInput">이미지 등록</StUserImgUpdateLabel>
          <StUserImgUpdateInput
            onChange={(e) => handleFileInputChange(e.target.files[0])}
            type="file"
            ref={fileInputRef}
            id="hiddenFileInput"
          />
        </StUserImgUpdateDiv>
      </div>
      <StUserInfo>
        <StUserContents>
          <StUserLabel>nickname</StUserLabel>
          <StUserValue>{userProfileData && userProfileData.nickname}</StUserValue>
        </StUserContents>
        <StUserContents>
          <StUserLabel>email</StUserLabel>
          <StUserValue>{user && user.email}</StUserValue>
        </StUserContents>
      </StUserInfo>
    </StUserInfoContainer>
  );
};

export default UserImgUpdate;
