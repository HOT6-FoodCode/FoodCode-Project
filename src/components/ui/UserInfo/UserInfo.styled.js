import styled from 'styled-components';

const StUserInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  column-gap: 20px;
`;
const StUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 30px;
  letter-spacing: 2px;
  margin-top: 10px;
`;
const StUserContents = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const StUserLabel = styled.label`
  margin-left: 20px;
  width: 100px;
  font-weight: 700;
`;
const StUserValue = styled.p`
  margin-left: 10px;
`;

const StUserImgUpdateDiv = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  margin-top: 20px;
`
const StUserImgUpdateLabel = styled.label`
  background-color: #eeeae1;
  border-radius: 5px;
  color: #1b4b9c;
  width: 100px;
  height: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 700;
  margin-top: 10px;
`
const StUserImgUpdateInput = styled.input`
  display: none;
`

export { StUserImgUpdateDiv, StUserImgUpdateLabel, StUserImgUpdateInput, StUserInfoContainer, StUserContents, StUserInfo, StUserLabel, StUserValue }