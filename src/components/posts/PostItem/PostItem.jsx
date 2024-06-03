import api from '../../../api/api';
import { CardImage, Content, ContentWrapDiv, PostCard, Rating, Title } from './PostItem.styled';

const PostItem = ({ postId, image, title, content, rating }) => {
  const handleClick = () => {
    console.log('선택된 postId', postId);

    api.posts.incrementViewCount(postId);
  };
  return (
    <PostCard onClick={handleClick}>
      <CardImage src={image} alt={title} />
      <ContentWrapDiv>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <div>
          <Rating>⭐ {rating}</Rating>
        </div>
      </ContentWrapDiv>
    </PostCard>
  );
};

export default PostItem;
