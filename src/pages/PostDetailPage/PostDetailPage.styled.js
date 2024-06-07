import styled from 'styled-components';

const StWriteWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 35px;
  margin: 25px 30px 0px 25px;
  flex-direction: row;
`;

const StNickname = styled.div`
  font-size: 20px;
  font-weight: bolder;
`;
const StForm = styled.form`
  width: 50%;
`;
const StDiv = styled.div`
  width: 100%;
`;

const StTopForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const StRestaurantName = styled.input`
  padding: 15px;
  font-size: 15px;
  border-radius: 30px;
  border: 1px solid gray;
`;
const StDescription = styled.textarea`
  padding: 20px;
  border-radius: 20px;
  border: 1px solid gray;

  font-size: 14px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  height: auto;
  min-height: 100px;
  resize: vertical;
  display: block;
`;

const StInputForm = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;

  border: 1px solid gray;
  border-radius: 10px;
  padding: 20px;
`;
const StButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  gap: 10px;

  button:last-child {
    color: #e32227;
  }
`;
const StButton = styled.button`
  border-radius: 26px;
  border: none;
  color: #194a95;
  font-weight: bolder;
  font-size: 15px;
  background: #eeeae1;
  padding: 10px 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background: #cccccc;
    text-decoration: none;
  }
`;
const StNameStarWrapDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  margin-bottom: 20px;
`;
const StImageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 360px;
  height: 360px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
  margin-right: 30px;
  padding: 10px;
`;

const StImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  margin-right: 10px;
`;

const StNameWrapdIv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
`;

export {
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
  StTopForm,
  StWriteWrapper
};
