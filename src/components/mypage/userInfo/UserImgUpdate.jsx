import { createClient } from '@supabase/supabase-js';
import { useEffect, useRef, useState } from 'react';
import UserImg from './UserImg';
import styled from 'styled-components';

const StUserImgUpdateDiv = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  margin-top: 20px;
`
const StUserImgUpdateLabel = styled.label`
  background-color: #eeeae1;
  border-radius: 5px;
  color: #1b4b9c;
  width: 100px;
  height: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 700;
`
const StUserImgUpdateInput = styled.input`
  display: none;
`

const SUPABASE_PROJECT_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(
  SUPABASE_PROJECT_URL,
  SUPABASE_ANON_KEY
);

const UserImgUpdate = () => {
  const [profileUrl, setProfileUrl] = useState('');
  const fileInputRef = useRef(null);

  const checkProfile = () => {
    const { data } = supabase.storage
      .from('profile')
      .getPublicUrl('profile_1717230471195.jpg');
    
      setProfileUrl(data.publicUrl);
  }

  const handleFileInputChange = async(files) => {
    const [file] = files;

    if (!file) {
      return;
    }

    const fileExtension = file.name.split('.').pop();
    const filePath = `profile_${Date.now()}.${fileExtension}`;
    const { data } = await supabase.storage
      .from('profile')
      .upload(filePath, file);

    setProfileUrl(
      `https://xnztnztnezrtcqcdoiob.supabase.co/storage/v1/object/public/profile/${data.path}`
    );
    }


  const handleFileUpdateChange = async(files) => {
    const [file] = files;

    if (!file) {
      return;
    }

    const fileExtension = file.name.split('.').pop();
    const filePath = `profile_${Date.now()}.${fileExtension}`;

    // 기존 이미지 삭제
    await supabase.storage
      .from('profile')
      .remove([`profile_${Date.now()}.png`]);

    // 새 이미지 업로드
    const { data, error } = await supabase.storage
      .from('profile')
      .upload(filePath, file);

    if (error) {
      console.error('파일 업로드 오류:', error.message);
      return;
    }

    setProfileUrl(
      `https://xnztnztnezrtcqcdoiob.supabase.co/storage/v1/object/public/profile/${data.path}`
    );
  }


  useEffect(() => {
    checkProfile();

  }, []);

  return (
    <>
      <UserImg profileUrl={profileUrl} />
        <StUserImgUpdateDiv>
        <StUserImgUpdateLabel htmlFor='hiddenFileInput'>이미지 등록</StUserImgUpdateLabel>
          <StUserImgUpdateInput
          onChange={(e) => handleFileInputChange(e.target.files)}
          type="file"
          ref={fileInputRef}
          id="hiddenFileInput"
        />
        <StUserImgUpdateLabel htmlFor='hiddenFileInput'>이미지 수정</StUserImgUpdateLabel>
        <StUserImgUpdateInput
          onChange={(e) => handleFileUpdateChange(e.target.files)}
            type="file"
            ref={fileInputRef}
            id="hiddenFileInput"
          />
        </StUserImgUpdateDiv>
    </>
  );
};

export default UserImgUpdate;
