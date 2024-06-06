import styled from 'styled-components';

const StDetailPage = styled.div`
  /* padding: 30px;
    display: flex;
    justify-content: flex-end;
    margin-right: 200px; */
  padding: 30px;
  display: flex;
  justify-content: center;
`;

const StDetailForm = styled.div`
  height: 200px;
  padding: 30px;
  margin: 30px;
  background-color: skyblue;
`;

// 여기서부터 comment
const StCommentWrapper = styled.div`
  /* float: right;
    width: 50%;
    height: 40%;
    padding: 15px;
    margin: 10px;
    font-size: 40px;
    font-weight: Bold;
    border: 1px solid #C3C3C3;
    border-radius: 10px;
    background-color: white; */

  width: 75%;
  height: 40%;
  padding: 15px;
  margin: 10px;
  font-size: 40px;
  font-weight: Bold;
  border: 1px solid #c3c3c3;
  border-radius: 10px;
  background-color: white;
`;

const StCommentForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 30px;
`;

const StUserProfileImg = styled.img`
  border: 1px solid #c3c3c3;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-left: 60px;
  object-fit: cover;
`;

const StCommentWrite = styled.div`
  /* display: flex;
    align-items: center; 
    border: 1px solid #C3C3C3;
    border-radius: 10px;
    width: 70%;
    height: 100px;
    padding: 15px;
    margin-left: 50px; */
  display: flex;
  align-items: center;
  border: 1px solid #c3c3c3;
  border-radius: 20px;
  width: 70%;
  height: 100px;
  padding: 15px;
  margin-left: 50px;
`;

const StCommentButton = styled.button`
  float: right;
  cursor: pointer;
  border: 1px solid #c3c3c3;
  border-radius: 5px;
  padding: 5px;
  margin: auto 10px auto 5px;
  width: 70px;
  height: 50px;
`;

const StCommentLists = styled.div`
  /* ; 
    padding: 10px;
    margin: 30px 30px auto 70px;
    border: 1px solid #C3C3C3;
    border-radius: 10px;     */
  width: 85%;
  padding: 10px;
  margin: 30px 30px auto 70px;
  border: 1px solid #c3c3c3;
  border-radius: 20px;
`;

const StCommentListForm = styled.form`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px;
  border: none;
`;

const StCommentUserImg = styled.img`
  border: 1px solid #c3c3c3;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  object-fit: cover;
`;

const StCommentItem = styled.div`
  align-items: center;
  font-size: 20px;
  border: 1px solid #c3c3c3;
  border-radius: 10px;
  width: calc(100% - 250px);
  height: 100px;
  padding: 10px;
  margin-left: 50px;
  margin-right: 10px;
  padding-top: 0px;
`;

const StCommentUsername = styled.div`
  font-size: 18px;
  padding: 10px;
  margin: 5px;
`;

const StUserComment = styled.div`
  font-size: 13px;
  font-weight: 400;
  padding: 10px;
  margin: 5px;
`;
const StCommentListContainer = styled.div`
  max-height: 400px;
  overflow-y: auto; /* 세로 스크롤 표시 */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StCommnetInput = styled.input`
  text-align: left;
  width: 90%;
  border: none;
  outline: none;
  font-size: 15px;
`;
const StCommentTitle = styled.h1`
  margin-top: 20px;
  margin-left: 20px;
`;
const StWrapDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const StBtnWrapDiv = styled.div`
  display: flex;
  margin-left: 45px;
  margin-top: 10px;

  button {
    background-color: #28a745;
    color: white;
    border-radius: 18px;
    padding: 8px 12px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #218838;
    }
    &:last-child {
      background-color: #dc3545;
      &:hover {
        background-color: #c82333;
      }
    }
  }
`;

export {
  StBtnWrapDiv,
  StCommentButton,
  StCommentForm,
  StCommentItem,
  StCommentListContainer,
  StCommentListForm,
  StCommentLists,
  StCommentTitle,
  StCommentUserImg,
  StCommentUsername,
  StCommentWrapper,
  StCommentWrite,
  StCommnetInput,
  StDetailForm,
  StDetailPage,
  StUserComment,
  StUserProfileImg,
  StWrapDiv
};
