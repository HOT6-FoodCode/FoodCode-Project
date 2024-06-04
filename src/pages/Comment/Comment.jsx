import React from 'react';
import {Link} from 'react-router-dom';
import {
    StDetailPage,
    StDetailForm,
    StCommentWrapper,
    StCommentTitle,
    StUserProfileImg,
    StCommentWrite,
    StWriteButton,
    StCommentList,
} from './Comment.styled';

function comment ( ) {


    return (
        <>
            <Link to='./comment'></Link>
            <StDetailPage>
                <StDetailForm> 상세페이지 입니다.</StDetailForm>
                <StCommentWrapper> 
                    <h1>Comment</h1>
                    <StCommentTitle>
                        <StUserProfileImg>
                            {/* user 프로필 사진 들어가야함 */}
                        </StUserProfileImg>
                        <StCommentWrite>
                            <p style={{fontSize: "20px"}}>username</p>
                            <input 
                            type="text" 
                            placeholder="댓글을 입력하세요."
                            style={{textAlign:"left", width: "90%", height: "80%", border: "none", outline: "none"}}>
                            </input>
                            <StWriteButton>등록</StWriteButton>
                        </StCommentWrite>
                    </StCommentTitle>
                    <StCommentList>댓글 리스트 보여지는 곳</StCommentList>
                </StCommentWrapper>
            </StDetailPage>
        </>
    );
}

export default comment;
