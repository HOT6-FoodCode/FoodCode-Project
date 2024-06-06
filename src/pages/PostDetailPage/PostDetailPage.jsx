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
import Comment from '../Comment/Comment';

const PostDetailPage = () => {
  const { postId } = useParams();
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const location = useLocation();
  const {image: initialImage, title, content, rating} = location.state || {};

  const [post, setPost] = useState(null);
  const [editedPost, setEditedPost] = useState({
    title: title || '',
    content: content || '',
    image: initialImage || '',
    rating: rating || 0,
  });
  
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await api.posts.getPost(postId);
        setPost(fetchedPost);
        console.log("fetchedPost", fetchedPost[0].image)
        setEditedPost({
          title: fetchedPost[0].title || '',
          content: fetchedPost[0].content || '',
          image: fetchedPost[0].image || '',
          rating: fetchedPost[0].rating || 0,
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
      navigate('/');
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

  const handleGoack = (event) => {
    event.preventDefault();
    try {
      const confirmed  = confirm("뒤로 가시겠습니까?")
      if (confirmed) {
        navigate(-1);
      }
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  }
  const userId = post ? post.user_id : null;
  
  const isOwner = user && user.id === userId;
  console.log("userId:", userId);
  

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      
      <StWriteWrapper>
        
        {isOwner ? (
          <ImageUpload
            image={editedPost.image.length > 0 ? editedPost.image : [postImageDefault]}
            setImage={(image) => setEditedPost({ ...editedPost, image })}
          />
        ) : (
          <StImageWrapper>
            <div>
            {editedPost.image.length > 0 ? (
              
                <StImage src={editedPost.image} alt={editedPost.image} />
              
            ) : (
              <StImage src={postImageDefault} alt="Default" />
            )}
            </div>
          </StImageWrapper>
        )}
        <StForm>
        <StNickname>
          {post ? <h2>{post.nickname}</h2> : <h2>Loading...</h2>}
        </StNickname>
        
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
              <StButton onClick={handleGoack}>뒤로가기</StButton>
            </StButtonDiv>
          )}
        </StForm>
      
       <Comment />
      
      </StWriteWrapper>
      
    </div>
  );
};

export default PostDetailPage;