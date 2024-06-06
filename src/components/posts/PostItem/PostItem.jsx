import { Link } from 'react-router-dom';
import api from '../../../api/api';
import { postImageDefault } from '../../../api/supabaseAPI';
import { CardImage, Content, ContentWrapDiv, PostCard, Rating, Title } from './PostItem.styled';

const PostItem = ({ postId, image, title, content, rating }) => {
  const handleClick = () => {
    console.log('선택된 postId', postId);
    api.posts.incrementViewCount(postId);
  };

  return (
    <Link to={{pathname: `/post/${postId}`}}>
      <PostCard onClick={handleClick}>
        <CardImage src={image ?? `${postImageDefault}`} alt={title} />
        <ContentWrapDiv>
          <Title>{title}</Title>
          <Content>{content}</Content>
          <div>
            <Rating>⭐ {rating}</Rating>
          </div>
        </ContentWrapDiv>
      </PostCard>
    </Link>
  );
};

export default PostItem;