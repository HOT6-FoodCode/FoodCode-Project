import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import StarRating from '../../components/writepage/StarRating';
import ImageUpload from '../../components/writepage/ImageUpload';
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
} from '../WritePage/WritePage.styled';

const PostDetailPage = () => {
  const user = useSelector((state) => state.auth.user);
  const userProfileData = useSelector((state) => state.user.userProfile);
  const { id: postId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { images: initialImages, title, content, rating } = location.state || {};

  const [editedPost, setEditedPost] = useState({
    title: title || '',
    content: content || '',
    images: initialImages || [],
    rating: rating || 0
  });

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      await api.posts.editPost(postId, editedPost);
      navigate('/mypage');
    } catch (error) {
      console.error('Failed to edit post:', error);
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      api.posts.deletePost(postId);
      navigate('/mypage');
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  };

  return (
    <div>
      <StWriteWrapper>
        {user ? (
          <>
            <ImageUpload images={editedPost.images} setImages={(images) => setEditedPost({ ...editedPost, images })} />

            <StDiv>
              <StNickname>
                <h2>{userProfileData.nickname}</h2>
              </StNickname>

              <StInputForm>
                <StTopForm>
                  <StTitle
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
                <StContent
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
            </StDiv>
          </>
        ) : (
          <>
            <ImageUpload images={editedPost.images} />
            <StDiv>
              <StNickname>
                <h2>Nickname</h2>
              </StNickname>

              <StInputForm>
                <StTopForm>
                  <StRestaurantName type="text" value={editedPost.title} />
                  <StarRating rating={editedPost.rating} />
                </StTopForm>
                <StDescription type="text" value={editedPost.content} />
              </StInputForm>

              <StButtonDiv>
                <StButton onClick={() => navigate(-1)}>목록</StButton>
              </StButtonDiv>
            </StDiv>
          </>
        )}
      </StWriteWrapper>
    </div>
  );
};

export default PostDetailPage;
