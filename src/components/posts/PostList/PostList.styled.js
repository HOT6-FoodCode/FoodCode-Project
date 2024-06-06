import styled from 'styled-components';

const PostGrid = styled.div`
  padding: 20px;
  display: grid;
  width: 1240px;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  grid-column-gap: 90px;
  grid-row-gap: 40px;
  justify-items: center;
  @media (max-width: 1240px) {
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  }
  @media (max-width: 940px) {
    grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
  }
`;

const StButton = styled.button`
  padding: 20px;
  border: 1px solid #ccc;
  margin-top: 20px;
  cursor: pointer;
  width: 100px;
`;
const StButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: 18px;
  color: #333;
`;

export { Message, PostGrid, StButton, StButtonDiv };
