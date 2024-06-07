import styled from 'styled-components';

export const StFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 380px;
  height: 100%;
  gap: 10px;
  font-size: 16px;
`;

export const StLoginH2 = styled.h2`
  font-size: 55px;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const StInputBox = styled.div`
  width: 100%;
  border: 1px solid black;
  border-radius: 50px;
  display: flex;
  gap: 12px;
  padding: 0px 25px;
  ::placeholder {
    color: black;
  }
`;

export const StInputImg = styled.img`
  width: 22px;
`;

export const StInputField = styled.input`
  width: 100%;
  height: 60px;
  border: none;
  font-size: 20px;
  &:focus {
    border-color: none;
    outline: none;
  }
`;

export const StLoginBtn = styled.button`
  width: 100%;
  height: 60px;
  font-size: 20px;
  border-radius: 50px;
  background-color: black;
  color: white;
  margin-top: 15px;
  cursor: pointer;
`;

export const StErrorMsg = styled.p`
  color: #a4a4a4;
  font-size: 14px;
`;
