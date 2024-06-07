import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../api';
import { postImageDefault } from '../../api/supabaseAPI';
import ImageUpload from '../../components/writepage/ImageUpload';
import StarRating from '../../components/writepage/StarRating';
import { fetchPosts } from '../../redux/slices/postsSlice';
import { StNotLogInView, StNotLogInViewText } from '../MyPage/MyPage.styled';
import {
  StButton,
  StButtonDiv,
  StDescription,
  StForm,
  StInputForm,
  StRestaurantName,
  StTopForm,
  StWriteWrapper
} from './WritePage.styled';

function WritePage() {
  const [post, setPost] = useState({
    title: '',
    content: '',
    image: postImageDefault,
    rating: 0
  });
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  if (!user) {
    return (
      <StNotLogInView>
        <StNotLogInViewText>
          로그인이 필요합니다!
          <br />
          상단의 로그인 페이지로 이동해 주세요 😆
        </StNotLogInViewText>
      </StNotLogInView>
    );
  }

  const handlerAdd = async (e) => {
    e.preventDefault();
    if (!post.title || !post.content || !post.rating) {
      toast.error('모든 필드를 입력해주세요.');
      return;
    }
    try {
      await api.posts.createPost({ userId: user.id, ...post });
      dispatch(fetchPosts());
      setRefreshTrigger(!refreshTrigger);
      navigator(-1);
    } catch (error) {
      console.error('Failed to create post:', error);
    }
  };

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
