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

            </StCommentForm>
        </>
    );
}

export default comment;
