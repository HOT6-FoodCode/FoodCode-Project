import styled from "styled-components";

// 예진님 상세페이지 들어가야함
const StDetailPage = styled.div`
    padding: 30px;
    margin: 30px;
    background-color: pink;
`;

const StDetailForm = styled.div`
    height: 1000px;
    padding: 30px;
    margin: 30px;
    background-color: skyblue;
`;

// 여기서부터 comment
const StCommentWrapper = styled.div`
    width: 60%;
    padding: 30px;
    margin: 30px;
    font-size: 40px;
    font-weight: Bold;
    border: 3px solid #C3C3C3;
    border-radius: 10px;
    background-color: white;
`;

const StCommentTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 30px;
    border: 3px solid #C3C3C3;
    border-radius: 10px;
`;

const StUserProfileImg = styled.div`
    border: 2px solid #C3C3C3;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    padding: 10px;
    margin: 10px;
`;

const StCommentWrite = styled.div`
    border: 2px solid #C3C3C3;
    border-radius: 10px;
    width: 80%;
    height: 100px;
    padding: 10px;
    margin: 10px;
`;

const StWriteButton = styled.button`
    border: 1px solid #C3C3C3;
    border-radius: 2px;
    padding: 5px;
`;

const StCommentList = styled.div`
    padding: 10px;
    margin: 30px;
    border: 3px solid #C3C3C3;
    border-radius: 10px;    
`;
export {
    StDetailPage,
    StDetailForm,
    StCommentWrapper,
    StCommentTitle,
    StUserProfileImg,
    StCommentWrite,
    StWriteButton,
    StCommentList,
};