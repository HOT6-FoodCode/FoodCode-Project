import styled from "styled-components";

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
    border: 1px solid #C3C3C3;
    border-radius: 10px;
    background-color: white;
`;

const StCommentForm = styled.form`
    display: flex;
    align-items: center; 
    padding: 10px;
    margin: 30px;
`;

const StUserProfileImg = styled.div`
    border: 1px solid #C3C3C3;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    padding: 10px;
    margin-left: 60px;
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
    border: 1px solid #C3C3C3;
    border-radius: 20px;
    width: 70%;
    height: 100px;
    padding: 15px;
    margin-left: 50px;
`;

const StCommentButton = styled.button`
    float: right;
    cursor: pointer;
    border: 1px solid #C3C3C3;
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
    border: 1px solid #C3C3C3;
    border-radius: 20px;

`;

const StCommentListForm = styled.form`
    display: flex;
    align-items: center;    
    padding: 10px;
    margin: 10px;
    border: none;

`;

const StCommentUserImg = styled.div`
    border: 1px solid #C3C3C3;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    padding: 10px;
    margin-left: 35px;
`;

const StCommentItem = styled.div`
    align-items: center;    
    font-Size: 20px;
    border: 1px solid #C3C3C3;
    border-radius: 10px;
    width: 70%;
    height: 100px;
    padding: 10px;
    margin-left: 50px;
    margin-right: 10px;
`;

const StCommentUsername = styled.div`
font-Size: 18px;
padding: 10px;
margin: 5px;
`

const StUserComment = styled.div`
font-Size: 13px;
font-weight: 400;
padding: 10px;
margin: 5px;
`
const StCommentListContainer = styled.div`
    max-height: 400px; 
    overflow-y: auto; /* 세로 스크롤 표시 */
`
const StCommentInput = styled.input`
    text-align: left;
    width: 90%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 15px;
`;
const StCommentTitle = styled.h1`
    margin-top: 20px;
    margin-left: 20px;
`;

export {
    StDetailPage,
    StCommentWrapper,
    StUserProfileImg,
    StCommentForm,
    StCommentWrite,
    StCommentButton,
    StCommentLists,
    StCommentListForm,
    StCommentUserImg,
    StCommentItem,
    StCommentUsername,
    StUserComment,
    StCommentListContainer,
    StCommentInput,
    StCommentTitle,
};