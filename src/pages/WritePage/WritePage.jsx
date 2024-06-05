import { useState } from 'react';
import ImageUpload from '../../components/writepage/ImageUpload';
import StarRating from '../../components/writepage/StarRating';
import {
  StWriteWrapper,
  StNickname,
  StDiv,
  StTitle,
  StContent,
  StInputForm,
  StTopForm,
  StButtonDiv,
  StButton
} from './WritePage.styled';
import supabase from '../../api/supabaseAPI';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function WritePage() {
  const userProfileData = useSelector((state) => state.user.userProfile);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(0);
  const [images, setImages] = useState([]);
  // 이미지 상대경로 저장
  const navigator = useNavigate();

  const handlerAdd = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from('posts').insert({
      title,
      content,
      images,
      rating
    });
    if (error) {
      console.log('error==>', error);
    } else {
      alert('게시물이 저장되었습니다!');
      console.log(data);
    }
    navigator('/mypage');
  };
  return (
    <StWriteWrapper>
      <ImageUpload images={images} setImages={setImages} />

      <StDiv>
        <StNickname>
          <h2>{userProfileData.nickname}</h2>
        </StNickname>

        <StInputForm>
          <StTopForm>
            <StTitle
              type="text"
              placeholder="매장 이름"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <StarRating rating={rating} setRating={setRating} />
          </StTopForm>
          <StContent
            type="text"
            placeholder="맛, 분위기, 추천 이유 등을 적어주세요"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </StInputForm>

        <StButtonDiv>
          <StButton onClick={handlerAdd}>등록하기</StButton>
        </StButtonDiv>
      </StDiv>
    </StWriteWrapper>
  );
}

export default WritePage;
