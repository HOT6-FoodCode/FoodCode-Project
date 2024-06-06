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
  StDiv,
  StInputForm,
  StRestaurantName,
  StTopForm,
  StWriteWrapper,
  StNickname
} from './WritePage.styled';

function WritePage() {
  const user = useSelector((state) => state.auth.user);
  const navigator = useNavigate();

  const [post, setPost] = useState({
    title: '',
    content: '',
    image: '',
    rating: 0
  });

  const handlerAdd = async (e) => {
    e.preventDefault();
    try {
      await api.posts.createPost({ userId: user.id, ...post });
      navigator('/mypage');
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
      <StDiv>
        <ImageUpload image={post.image} setImage={(image) => setPost({ ...post, image })} />
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
      </StDiv>
    </StWriteWrapper>
  );
}

export default WritePage;
