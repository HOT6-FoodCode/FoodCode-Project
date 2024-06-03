import React from 'react';
import {Link} from 'react-router-dom';
import {
    StCommentForm,
    DetailForm,
    StCommentWrite,
} from './Comment.styled';

function comment ( ) {
    return (
        <>
            <Link to='./comment'></Link>
            <StCommentForm>
                <DetailForm> 상세페이지 입니다.</DetailForm>
                <StCommentWrite>댓글 창 입니다.</StCommentWrite>
            </StCommentForm>
        </>
    );
}

export default comment;
