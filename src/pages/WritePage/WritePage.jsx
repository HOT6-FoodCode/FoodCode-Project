import { useState } from 'react';
import ImageUpload from '../../components/writepage/ImageUpload';
import StarRating from '../../components/writepage/StarRating';
import {
  StWriteWrapper,
  StNickname,
  StForm,
  StRestaurantName,
  StDescription,
  StInputForm,
  StTopForm,
  StButtonDiv,
  StButton
} from './WritePage.styled';
import supabase from '../../api/supabaseAPI';
import { useNavigate } from 'react-router-dom';

function WritePage() {
  const [restaurantName, setRestaurantName] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
  const [images, setImages] = useState([]);
  // 이미지 상대경로 저장
  const navigator = useNavigate();

  const handlerAdd = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from('posting').insert({
      restaurantName,
      description,
      images,
      rating
    });
    if (error) {
      console.log('error==>', error);
    } else {
      alert('게시물이 저장되었습니다!');
      console.log(data);
    }
    navigator('/');
  };
  return (
    <StWriteWrapper>
      <ImageUpload images={images} setImages={setImages} />

      <StForm>
        <StNickname>
          <h2>Nickname</h2>
        </StNickname>

        <StInputForm>
          <StTopForm>
            <StRestaurantName
              type="text"
              placeholder="매장 이름"
              value={restaurantName}
              onChange={(e) => {
                setRestaurantName(e.target.value);
              }}
            />
            <StarRating rating={rating} setRating={setRating} />
          </StTopForm>
          <StDescription
            type="text"
            placeholder="맛, 분위기, 추천 이유 등을 적어주세요"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </StInputForm>

        <StButtonDiv>
          <StButton onClick={handlerAdd}>등록하기</StButton>
        </StButtonDiv>
      </StForm>
    </StWriteWrapper>
  );
}

export default WritePage;
