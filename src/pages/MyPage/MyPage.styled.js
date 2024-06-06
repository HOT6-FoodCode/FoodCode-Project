import styled from 'styled-components';

const StMyPageWrapper = styled.div`
  padding: 30px;
  margin: 0 30px;
  min-width: 1470px;
`;

const StPostDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 50px;
  margin-left: 30px;
  padding: 20px;
`;
const StPostListDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StMyPostdiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: gray;
  width: 100%;
  align-items: center;
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
  margin-left: 50px;
  margin-top: 20px;
`;

const StUserImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid black;
  margin-bottom: 20px;
  margin-left: 20px;
`;
const StUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 30px;
  letter-spacing: 2px;
`;

const StPostList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const StPostItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 250px;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 20px 20px 10px 20px;
`;
const StPostListTitle = styled.p`
  font-size: 1.5rem;
  width: 180px;
  border-bottom: 3px solid #ecc8ca;
  padding-bottom: 10px;
  font-weight: 700;
`;
const StPostItemText = styled.div`
  padding: 15px;
  line-height: 30px;
  margin-left: 13px;
`;
const StPostItemTextStarCategory = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`;
const StPostItemReview = styled.p`
  width: 230px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
const StPostItemImg = styled.img`
  height: 50%;
`;

const StNotLogInView = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  background-color: #f8f9fa;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin: 100px auto 164px;
  border-radius: 20px;
`;
const StNotLogInViewText = styled.p`
  font-size: 1.3rem;
  line-height: 30px;
  text-align: center;
`;

export {
  StMyPageWrapper,
  StPostDiv,
  StMyPostdiv,
  StDivProfile,
  StUserImg,
  StTitle,
  StAccount,
  StPostList,
  StPostItem,
  StPostListTitle,
  StPostItemText,
  StPostItemTextStarCategory,
  StPostItemReview,
  StPostItemImg,
  StUserInfo,
  StNotLogInView,
  StNotLogInViewText,
  StPostListDiv
};
