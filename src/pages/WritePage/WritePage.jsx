import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import ImageUpload from '../../components/writepage/ImageUpload';
import StarRating from '../../components/writepage/StarRating';
import {
  StButton,
  StButtonDiv,
  StDescription,
  StForm,
  StInputForm,
  StRestaurantName,
  StTopForm,
  StWriteWrapper,
  StNickname
} from './WritePage.styled';

function WritePage() {
  const [post, setPost] = useState({
    title: '',
    content: '',
    image: '',
    rating: 0
  });
  const user = useSelector((state) => state.auth.user);

  // 이미지 상대경로 저장
  const navigator = useNavigate();

  const handlerAdd = async (e) => {
    e.preventDefault();
    try {
      await api.posts.createPost({ userId: user.id, ...post });
      navigator(-1);
    } catch (error) {
      console.error('Failed to edit post:', error);
    }
  };
  // useEffect(() => {
  //   if (!user) {
  //     alert('로그인이 필요합니다.');
  //     navigator('/auth/login');
  //   }
  // }, [user]);

  return (
    <StWriteWrapper>
      <ImageUpload image={post.image} setImage={(image) => setPost({ ...post, image })} />

      <StForm>
        <StInputForm>
          <StTopForm>
            <StRestaurantName
              type="text"
              placeholder="매장 이름"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
            />
            <StarRating rating={post.rating} setRating={(rating) => setPost({ ...post, rating })} />
          </StTopForm>
          <StDescription
            type="text"
            placeholder="맛, 분위기, 추천 이유 등을 적어주세요"
            value={post.content}
            onChange={(e) => setPost({ ...post, content: e.target.value })}
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
