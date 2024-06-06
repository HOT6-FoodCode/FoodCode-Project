import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import api from '../../../api/api';
import { userDataUpdate } from '../../../redux/slices/userSlice';
import { profileDefaultUrl } from '../../../api/supabaseAPI';
import {
  StUserContents,
  StUserImgUpdateDiv,
  StUserImgUpdateInput,
  StUserImgUpdateLabel,
  StUserInfo,
  StUserInfoContainer,
  StUserLabel,
  StUserValue
} from '../UserInfo/UserInfo.styled';
import UserImg from './UserImg';

const UserInfo = ({ userId, user }) => {
  const fileInputRef = useRef(null);
  const userProfileData = useSelector((state) => state.user.userProfile);
  const dispatch = useDispatch();

  const fetchUserProfilePicture = async () => {
    try {
      const userInfo = await api.user.getUserProfile(userId);
      dispatch(userDataUpdate(userInfo));
    } catch (error) {
      toast.error('프로필 사진 업로드 및 사용자 데이터 업데이트 오류:', error.message);
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

  const imageUrl = userProfileData?.profilePictureUrl ?? profileDefaultUrl;

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
          <StUserLabel>닉네임</StUserLabel>
          <StUserValue>{userProfileData && userProfileData.nickname}</StUserValue>
        </StUserContents>
        <StUserContents>
          <StUserLabel>이메일</StUserLabel>
          <StUserValue>{user && user.email}</StUserValue>
        </StUserContents>
      </StUserInfo>
    </StUserInfoContainer>
  );
};

export default UserInfo;
