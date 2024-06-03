import styled from 'styled-components';

const StMyPageWrapper = styled.div`
  padding: 30px;
  margin: 0 30px;
`;

const StBtnDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 10px;
`;
const StBtn = styled.button`
  cursor: pointer;
  flex: 0.5 0.5 0;
  max-width: 60px;
  width: 100%;
  height: 32px;
  border-radius: 6px;
  border: none;
  background-color: #3b82f6;
  color: white;
  &:hover {
    background-color: #2563eb;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StPostDiv = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  gap: 1rem;
  margin-top: 30px;
  justify-content: space-around;
  padding: 20px;
`;

const StMyPostdiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const StDivProfile = styled.div`
  display: flex;
  flex-direction: column;
`;

const StTitle = styled.div`
  background-color: #eeeae1;
  border-radius: 5px;
  color: #1b4b9c;
  width: 160px;
  height: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  margin-left: 20px;
`;
const StAccount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const StUserInfoImg = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  width: 200px;
  height: 200px;
  margin: 0px 50px 10px 30px;
  align-items: center;
  justify-content: center;
`;
const StUserImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid black;
  margin-bottom: 20px;
  margin-left: 20px;
`;

// const StUserImgUpdateBtn = styled.button`
//   width: 150px;
//   height: 30px;
//   background-color: #eeeae1;
//   border-radius: 5px;
//   margin-left: 20px;
//   border: none;
// `;
const StUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 30px;
  letter-spacing: 2px;
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

const StPostListTitle = styled.p`
  font-size: 1.5rem;
  width: 180px;
  border-bottom: 2px solid ${(props) => props.color || '#BBD3EB'};;
  padding-bottom: 10px;
  font-weight: 700;
`;


export {
  StMyPageWrapper,
  StBtnDiv,
  StBtn,
  StPostDiv,
  StMyPostdiv,
  StDivProfile,
  StUserImg,
  StTitle,
  StAccount,
  StUserInfoImg,
  StUserInfo,
  // StUserImgUpdateBtn,
  StUserContents,
  StUserLabel,
  StUserValue,
  StPostListTitle,
};
