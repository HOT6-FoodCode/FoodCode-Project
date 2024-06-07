import React from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import api from '../../../api/api';
import { postImageDefault } from '../../../api/supabaseAPI';
import { CardImage, Content, ContentWrapDiv, PostCard, Rating, Title } from './PostItem.styled';

// 컴포넌트 이름을 추가하여 함수 선언식으로 정의합니다.
function PostItem({ postId, image, title, content, rating }) {
  const handleClick = () => {
    console.log('선택된 postId', postId);
    api.posts.incrementViewCount(postId);
  };

  return (
    <Link to={{ pathname: `/post/${postId}` }}>
      <PostCard onClick={handleClick}>
        <LazyLoad style={{ height: '200px' }} width={380} offset={186} once>
          <CardImage src={image ?? `${postImageDefault}`} alt={title} />
        </LazyLoad>
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
}

export default React.memo(PostItem);
