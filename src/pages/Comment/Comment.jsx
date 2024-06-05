import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import supabase from '../../api/supabaseAPI';
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://efxiyqhlunmdhtxszzum.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmeGl5cWhsdW5tZGh0eHN6enVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0Njc5NzgsImV4cCI6MjAzMzA0Mzk3OH0.HZdIxo2oeEg6VzajvQPNWtrShLQN5iHNcv9h-CyCC9o'
const supabase = createClient(supabaseUrl, supabaseKey)

import {
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
    StCommentUsername,
    StUserComment,

} from './Comment.styled';

/*supabase에서 user_id 컬럼 추가 -> 댓글을 추가 시 로그인한 user id도 넣기 */
function Comment(props) {
    console.log(props.currentPostId);
    const [write, setWrite] = useState("");
    const [CommentList, setCommentList] = useState([]);
    const [isLoading, setLoading] = useState(false);
    console.log(CommentList);

    // 작성
    const handleWriteChange = (e) => {
        setWrite(e.target.value);
        console.log(write);
    };

    const handleWriteComment = async (e) => {
        e.preventDefault();
        if (!write) {
            return alert("댓글을 입력하세요!");
        }
        const id = Date.now();
        const newComment = {
            id: id,
            comment: write,
            post_id: props.currentPostId,
            username: "이가현", // 로그인한 username 넣기
        };
        const { data, error } = await supabase.from("comments").insert(newComment);
    
        setCommentList([...CommentList, newComment]);
        setWrite("");
    };

    useEffect(() => {
        const getComments = async () => {
            const {data} = await supabase.from('comments').select("*").eq('post_id', props.currentPostId)
            setCommentList(data)
        }
        getComments();
    }, [isLoading]);


    // 삭제
    async function deleteComment(id) {
        setLoading(true);

        const {error} = await supabase
            .from('comments')
            .delete()
            .eq('id', id)

        const {data} = await supabase
            .from('comments')
            .select("*")
            .eq('post_id', props.currentPostId)

        setCommentList(data);
        setLoading(false);
    };

    // 수정
    async function updateComment(id) {
        
        const { data } = await supabase
            .from('comments')
            .update({comment: prompt("수정할 댓글을 입력하세요!")})
            .eq('id', id)

            const [updatedComment] = {data};
            const updatedAddComment = CommentList.map((comment) =>
                comment.id === updatedComment.id ? updatedComment : comment
            );
        
        setPosts(updatedAddComment);
        };

    if(isLoading) return <h1>Loading</h1>
    return (
        <>
            <Link to='/comment'></Link>
            <StDetailPage>
                <StDetailForm> detail page </StDetailForm>
                <StCommentWrapper>
                    <h1>Comment</h1>
                        <StCommentForm onSubmit={handleWriteComment}>
                            <StUserProfileImg>
                            {/* user 프로필 사진 들어가야함 */}
                            </StUserProfileImg>
                            <StCommentWrite>
                                <input
                                    type="text"
                                    placeholder="댓글을 입력하세요."
                                    style={{ textAlign: "left", width: "90%", height: "100%", border: "none", outline: "none", fontSize: "15px" }}
                                    value={write}
                                    onChange={handleWriteChange}
                                ></input>
                                <StCommentButton type="submit">등록</StCommentButton>
                            </StCommentWrite>
                        </StCommentForm>
                    {CommentList.length !== 0 && CommentList.map((comment) => {
                        return (
                            <StCommentLists>
                                <StCommentListForm>
                                    <StCommentUserImg>
                                        {/* user 프로필 사진 들어가야함 */}
                                    </StCommentUserImg>
                                    <StCommentItem>
                                        <div key={comment.id} />
                                        <StCommentUsername>{comment.username}</StCommentUsername>
                                        <StUserComment>{comment.comment}</StUserComment>
                                    </StCommentItem>
                                    <StCommentButton type="submit" onClick={() =>{deleteComment(comment.id);}}>삭제</StCommentButton>
                                    <StCommentButton type="submit" onClick={() =>{updateComment(comment.id);}}>수정</StCommentButton>
                                </StCommentListForm>
                            </StCommentLists>
                        );
                    })}    
                </StCommentWrapper>
            </StDetailPage>
        </>
    );
}

export default Comment;
