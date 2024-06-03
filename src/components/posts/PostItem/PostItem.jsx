import styled from 'styled-components';

const PostItem = ({ imageSrc, title, description, rating, tag, place }) => {
  return (
    <PostCard>
      <Image src={imageSrc} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <div>
          <Rating>
            ⭐ {rating} {tag} {place}
          </Rating>
        </div>
      </Content>
    </PostCard>
  );
};

export default PostItem;
const PostCard = styled.div`
  width: 330px;
  height: 310px;
  border-radius: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background: white;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  @media (max-width: 1240px) {
    width: 380px;
  }
  @media (max-width: 940px) {
    width: 480px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40%;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Description = styled.p`
  margin: 5px 0;
  color: black;
  font-size: 0.9em;
  margin-bottom: 10px;
`;

const Rating = styled.div`
  font-size: 0.9em;
  color: #777;
`;
