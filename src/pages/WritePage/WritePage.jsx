import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import ImageUpload from '../../components/writepage/ImageUpload';
import StarRating from '../../components/writepage/StarRating';
import { StWriteWrapper, StNickname, StDiv, StTitle, StContent, StInputForm, StTopForm } from './WritePage.styled';

function WritePage() {
  const userProfileData = useSelector((state) => state.user.userProfile);
  const [post, setPost] = useState({
    title: '',
    content: '',
    images: [],
    rating: 0
  });

  // 이미지 상대경로 저장
  const navigator = useNavigate();

  const handlerAdd = async (e) => {
    e.preventDefault();
    try {
      await api.posts.createPost(post);
      navigator('/mypage');
    } catch (error) {
      console.error('Failed to edit post:', error);
    }
  };
  return (
    <StWriteWrapper>
      <ImageUpload images={post.images} setImages={(images) => setPost(...post, images)} />

      <StDiv>
        <StNickname>
          <h2>{userProfileData.nickname}</h2>
        </StNickname>

        <StInputForm>
          <StTopForm>
            <StTitle
              type="text"
              placeholder="매장 이름"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
            />
            <StarRating rating={post.rating} setRating={(rating) => setPost({ ...post, rating })} />
          </StTopForm>
          <StContent
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
