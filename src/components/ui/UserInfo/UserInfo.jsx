import { useEffect, useRef, useState } from 'react';
import api from '../../../api/api';
import { StUserImgUpdateDiv, StUserImgUpdateLabel, StUserImgUpdateInput,
  StUserInfoContainer, StUserInfo, StUserContents, StUserLabel, StUserValue } from '../UserInfo/UserInfo.styled';
import UserImg from './UserImg';
const UserImgUpdate = ({userId}) => {
  const [userData, setUserData] = useState(null);
  const fileInputRef = useRef(null);
  

  const fetchUserProfilePicture = async () => {
    try {
      const userInfo = await api.user.getUserProfile(userId);
        console.log(userInfo)
        setUserData(userInfo);
    } catch (error) {
      console.error('프로필 사진 업로드 및 사용자 데이터 업데이트 오류:', error.message);
    }
  };
  
  const imageUrl = userData && userData.profilePictureFile;
  //console.log(imageUrl);

  const handleFileInputChange = async (files) => {
    if (files.length === 0) return;

    const profilePictureFile = files[0];

    try {
      await api.user.updateUserProfile(userId, profilePictureFile);
      await fetchUserProfilePicture();
    } catch (error) {
      console.error('프로필 사진 업로드 및 사용자 데이터 업데이트 오류:', error.message);
    }
  };


  useEffect(() => {
    fetchUserProfilePicture();
    
  }, []);

  
  return (
    <StUserInfoContainer>
      <div>
      {imageUrl && <UserImg imgUrl={imageUrl}/>}
        <StUserImgUpdateDiv>
          <StUserImgUpdateLabel htmlFor='hiddenFileInput'>이미지 등록</StUserImgUpdateLabel>
          <StUserImgUpdateInput
            onChange={(e) => handleFileInputChange(e.target.files)}
            type="file"
            ref={fileInputRef}
            id="hiddenFileInput"
          />
        </StUserImgUpdateDiv>
      </div> 
      <StUserInfo>
        <StUserContents>
          <StUserLabel>닉네임</StUserLabel>
          <StUserValue>{userData && userData.nickname}</StUserValue>
        </StUserContents>
        <StUserContents>
          <StUserLabel>이메일</StUserLabel>
          <StUserValue>{userData && userData.email}</StUserValue>
        </StUserContents>
      </StUserInfo>
    </StUserInfoContainer>
  )
}

export default UserImgUpdate