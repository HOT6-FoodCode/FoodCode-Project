import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import api from '../../api';
import ImageUpload from '../../components/writepage/ImageUpload';
import StarRating from '../../components/writepage/StarRating';
import {
  StButton,
  StButtonDiv,
  StDescription,
  StForm,
  StInputForm,
  StNickname,
  StRestaurantName,
  StTopForm,
  StWriteWrapper
} from '../WritePage/WritePage.styled';

const PostDetailPage = () => {
  //supabase에 저장되있는 데이터 가져오기
  //바로 수정할 수 있도록 input 창에 데이터 그대로 가져오기
  // 수정, 삭제 기능 추가하기
  const { id: postId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const {images: initialImages, title, content, rating} = location.state || {};

  const [editedPost, setEditedPost] = useState({
    title: title || '',
    content: content || '',
    images: initialImages || [],
    rating: rating || 0,
  });
  
  

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      await api.posts.editPost(postId, editedPost);
    } catch (error) {
      console.error('Failed to edit post:', error);
    }
  };


  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      api.posts.deletePost(postId);
      navigate('/');
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  };

  return (
    <div>
      <StWriteWrapper>
        <ImageUpload images={editedPost.images} setImages={(images) => setEditedPost(...editedPost, images)} />

        <StForm>
          <StNickname>
            <h2>Nickname</h2>
          </StNickname>

          <StInputForm>
            <StTopForm>
              <StRestaurantName
                type="text"
                placeholder="매장 이름"
                value={editedPost.title}
                onChange={(e) => setEditedPost({ ...editedPost, title: e.target.value })}
              />
              <StarRating
                rating={editedPost.rating}
                setRating={(rating) => setEditedPost({ ...editedPost, rating })}
              />
            </StTopForm>
            <StDescription
              type="text"
              placeholder="맛, 분위기, 추천 이유 등을 적어주세요"
              value={editedPost.content}
              onChange={(e) => setEditedPost({ ...editedPost, content: e.target.value })}
            />
          </StInputForm>

          <StButtonDiv>
            <StButton onClick={handleUpdate}>수정</StButton>
            <StButton onClick={handleDelete}>삭제</StButton>
          </StButtonDiv>
        </StForm>
      </StWriteWrapper>
    </div>
  );
};

export default PostDetailPage;
