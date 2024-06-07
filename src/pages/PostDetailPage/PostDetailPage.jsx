import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import api from '../../api';
import { postImageDefault } from '../../api/supabaseAPI';
import Comment from '../../components/Comment/Comment';
import FollowButton from '../../components/common/FollowButton';
import ImageUpload from '../../components/writepage/ImageUpload';
import StarRating from '../../components/writepage/StarRating';
import { deletePost, updatePost } from '../../redux/slices/postsSlice';
import {
  StButton,
  StButtonDiv,
  StDescription,
  StDiv,
  StForm,
  StImage,
  StImageWrapper,
  StInputForm,
  StNameStarWrapDiv,
  StNameWrapdIv,
  StNickname,
  StRestaurantName,
  StWriteWrapper
} from './PostDetailPage.styled';

const PostDetailPage = () => {
  const location = useLocation();
  const { postId } = useParams();
  const { title, content, rating, image } = location.state || {};
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(false);
  const [editedPost, setEditedPost] = useState({
    title: title || '',
    content: content || '',
    image: image || '',
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
          image: fetchedPost.image || '',
          rating: fetchedPost.rating || 0
        });
      } catch (error) {
        console.error('Failed to fetch post:', error);
      }
    };

    fetchPost();
  }, [postId, dispatch]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      await dispatch(updatePost({ postId, updatedPost: editedPost }));
      setRefreshTrigger(!refreshTrigger);
      navigate('/');
    } catch (error) {
      console.error('Failed to edit post:', error);
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      await dispatch(deletePost(postId));
      setRefreshTrigger(!refreshTrigger);
      navigate('/');
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  };

  const handleGoBack = (event) => {
    event.preventDefault();
    const confirmed = window.confirm('뒤로 가시겠습니까?');
    if (confirmed) {
      navigate(-1);
    }
  };

  const userId = post ? post.user_id : null;
  const isOwner = user && user.id === userId;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minWidth: '1470px' }}>
      <StWriteWrapper>
        {isOwner ? (
          <ImageUpload image={editedPost.image} setImage={(image) => setEditedPost({ ...editedPost, image })} />
        ) : (
          <StImageWrapper>
            <StImage src={editedPost.image || postImageDefault} alt="Post Image" />
          </StImageWrapper>
        )}
        <StForm>
          <StNameWrapdIv>
            <StNickname>{post ? <h2>{post.nickname}</h2> : <h2>Loading...</h2>}</StNickname>
            {user && user.id !== userId && <FollowButton followerId={userId} />}
          </StNameWrapdIv>
          <StInputForm>
            <StDiv>
              <StNameStarWrapDiv>
                <StRestaurantName
                  type="text"
                  placeholder="매장 이름"
                  value={editedPost.title}
                  onChange={(e) => setEditedPost({ ...editedPost, title: e.target.value })}
                  disabled={!isOwner}
                />
                <StarRating
                  rating={editedPost.rating}
                  setRating={(rating) => setEditedPost({ ...editedPost, rating })}
                  disabled={!isOwner}
                />
              </StNameStarWrapDiv>
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
      <Comment postId={postId} user={user} />
    </div>
  );
};

export default PostDetailPage;
