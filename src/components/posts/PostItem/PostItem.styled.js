import styled from 'styled-components';

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
  transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1240px) {
    width: 380px;
  }
  @media (max-width: 940px) {
    width: 480px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentWrapDiv = styled.div`
  padding: 10px 30px 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40%;
  gap: 10px;
`;

const Title = styled.h3`
  font-size: 1.2em;
  font-weight: 600;

  text-overflow: ellipsis;
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  height: 100%;
`;

const Content = styled.p`
  color: black;
  font-size: 0.9em;
  text-overflow: ellipsis;
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  height: 100%;
`;

const Rating = styled.div`
  font-size: 0.9em;
  color: #777;
`;

export { CardImage, Content, ContentWrapDiv, PostCard, Rating, Title };
