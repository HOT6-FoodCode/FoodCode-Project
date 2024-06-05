import styled from "styled-components";

const StDetailPage = styled.div`
    padding: 30px;
    margin: 30px;
    background-color: pink;
`;

const StDetailForm = styled.div`
    height: 200px;
    padding: 30px;
    margin: 30px;
    background-color: skyblue;
`;

// 여기서부터 comment
const StCommentWrapper = styled.div`
    width: 40%;
    height: 40%;
    padding: 15px;
    margin: 10px;
    font-size: 40px;
    font-weight: Bold;
    border: 3px solid #C3C3C3;
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
    border: 2px solid #C3C3C3;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    padding: 10px;
    margin-left: 60px;
`;

const StCommentWrite = styled.div`
    border: 2px solid #C3C3C3;
    border-radius: 10px;
    width: 70%;
    height: 100px;
    padding: 15px;
    margin-left: 50px;
`;

const StCommentButton = styled.button`
    float: right;
    cursor: pointer;
    border: 1px solid #C3C3C3;
    border-radius: 2px;
    padding: 5px;
    margin: 20px auto auto 5px;
`;

const StCommentLists = styled.div` 
    width: 80%; 
    padding: 10px;
    margin: 30px 30px auto 70px;
    border: 3px solid #C3C3C3;
    border-radius: 10px;    
`;

const StCommentListForm = styled.form`
    display: flex;
    align-items: center;    
    padding: 10px;
    margin: 10px;
    border: none;
`;

const StCommentUserImg = styled.div`
    border: 2px solid #C3C3C3;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    padding: 10px;
    margin-left: 35px;
`;

const StCommentItem = styled.div`
    align-items: center;    
    font-Size: 20px;
    border: 2px solid #C3C3C3;
    border-radius: 10px;
    width: 70%;
    height: 100px;
    padding: 10px;
    margin-left: 50px;
`;


export {
    StDetailPage,
    StDetailForm,
    StCommentWrapper,
    StUserProfileImg,
    StCommentForm,
    StCommentWrite,
    StCommentButton,
    StCommentLists,
    StCommentListForm,
    StCommentUserImg,
    StCommentItem,
};