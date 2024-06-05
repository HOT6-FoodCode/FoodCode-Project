import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import api from '../../api';
import { postImageDefault } from '../../api/supabaseAPI';
import FollowButton from '../../components/common/FollowButton';
import ImageUpload from '../../components/writepage/ImageUpload';
import StarRating from '../../components/writepage/StarRating';
import {
  StButton,
  StButtonDiv,
  StDescription,
  StDiv,
  StForm,
  StImage,
  StImageWrapper,
  StInputForm,
  StNameFollowWrapDiv,
  StNickname,
  StRestaurantName,
  StWriteWrapper
} from './PostDetailPage.styled';

const PostDetailPage = () => {
  const { postId } = useParams();
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const location = useLocation();
  const { images: initialImages, title, content, rating } = location.state || {};

  const [post, setPost] = useState(null);
  const [editedPost, setEditedPost] = useState({
    title: title || '',
    content: content || '',
    images: initialImages || '',
    rating: rating || 0
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await api.posts.getPost(postId);
        setPost(fetchedPost);
        setEditedPost({
          title: fetchedPost.title || '',
          content: fetchedPost.content || '',
          images: fetchedPost.images || '',
          rating: fetchedPost.rating || 0
        });
      } catch (error) {
        console.error('Failed to fetch post:', error);
      }
    };

    fetchPost();
  }, [postId]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      console.log(postId);
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

  const handleGoBack = (event) => {
    event.preventDefault();
    try {
      const confirmed = confirm('뒤로 가시겠습니까?');
      if (confirmed) {
        navigate(-1);
      }
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  };
  const userId = post ? post.user_id : null;

  const isOwner = user && user.id === userId;
  console.log('userId:', userId);

  return (
    <div>
      <StWriteWrapper>
        {isOwner ? (
          <ImageUpload
            images={editedPost.images.length > 0 ? editedPost.images : [postImageDefault]}
            setImages={(images) => setEditedPost({ ...editedPost, images })}
          />
        ) : (
          <StImageWrapper>
            <div>
              {editedPost.images.length > 0 ? (
                editedPost.images.map((image, index) => <StImage key={index} src={image} alt={`Image ${index}`} />)
              ) : (
                <StImage src={postImageDefault} alt="Default" />
              )}
            </div>
          </StImageWrapper>
        )}
        <StForm>
          <StNickname>{post ? <h2>{post.nickname}</h2> : <h2>Loading...</h2>}</StNickname>

          <StInputForm>
            <StDiv>
              <StNameFollowWrapDiv>
                <StRestaurantName
                  type="text"
                  placeholder="매장 이름"
                  value={editedPost.title}
                  onChange={(e) => setEditedPost({ ...editedPost, title: e.target.value })}
                  disabled={!isOwner}
                />
                {user && user.id !== userId && <FollowButton followerId={userId} />}
              </StNameFollowWrapDiv>
              <StarRating
                rating={editedPost.rating}
                setRating={(rating) => setEditedPost({ ...editedPost, rating })}
                disabled={!isOwner}
              />
            </StDiv>
            <StDescription
              type="text"
              placeholder="맛, 분위기, 추천 이유 등을 적어주세요"
              value={editedPost.content}
              onChange={(e) => setEditedPost({ ...editedPost, content: e.target.value })}
              disabled={!isOwner}
            />
          </StInputForm>

          {isOwner ? (
            <StButtonDiv>
              <StButton onClick={handleUpdate}>수정</StButton>
              <StButton onClick={handleDelete}>삭제</StButton>
            </StButtonDiv>
          ) : (
            <StButtonDiv>
              <StButton onClick={handleGoBack}>뒤로가기</StButton>
            </StButtonDiv>
          )}
        </StForm>
      </StWriteWrapper>
    </div>
  );
};

export default PostDetailPage;
