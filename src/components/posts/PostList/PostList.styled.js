import styled from 'styled-components';

export const PostGrid = styled.div`
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

export const Message = styled.div`
  display: flex;
  width: 100vh;
  height: 50vh;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    padding: 20px;

    background-color: #bbd3eb;
    color: #194a95;
    border: 1px solid #194a95;
    border-radius: 4px;

    font-size: 16px;
  }
`;
