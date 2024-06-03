import React from 'react';
import {Link} from 'react-router-dom';
import {
    StCommentForm,
} from './Comment.styled';

function comment ( ) {
    return (
        <>
            <Link to='./comment'></Link>
            <StCommentForm>
                <div> 상세페이지 입니다.</div>
            </StCommentForm>
        </>
    );
}

export default comment;
