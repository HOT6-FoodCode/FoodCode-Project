import styled from 'styled-components';

const StWriteWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 35px;
  margin: 25px 30px;
  height: 75vh;
`;

const StNickname = styled.div`
  padding: 0 0 12px 12px;
  font-size: 20px;
  font-weight: bolder;
`;
const StDiv = styled.div`
  width: 50%;
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
`;
const StButton = styled.button`
  border-radius: 26px;
  border: none;
  color: #194A95;
  font-weight: bolder;
  font-size: 15px;
  background: #EEEAE1;
  padding: 10px 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background: #cccccc;
    text-decoration: none;
  }
`;
export {
  StButton, StButtonDiv, StDescription, StDiv, StInputForm, StNickname, StRestaurantName, StTopForm, StWriteWrapper
};

