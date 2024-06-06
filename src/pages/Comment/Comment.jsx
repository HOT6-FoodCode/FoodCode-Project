import { useState, useEffect, useRef } from 'react';
//import { Link } from 'react-router-dom';
import api from '../../api';
import {
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
    StCommnetInput,
    StCommentTitle
} from './Comment.styled';
import supabase from '../../api/supabaseAPI';
import { useSelector } from 'react-redux';



/*supabase에서 user_id 컬럼 추가 -> 댓글을 추가 시 로그인한 user id도 넣기 */
function Comment({postId, user}) {
    const [comment, setComment] = useState("");
    const [commentList, setCommentList] = useState([]);
    const [isLoading, setLoading] = useState(false); 
    const userProfileData = useSelector((state) => state.user.userProfile);
    console.log('userProfileData>>',userProfileData)
    const myImgUrl = userProfileData && userProfileData.profilePictureUrl;

    const getComments = async () => {
        const data = await api.comment.getComment(postId);
        setCommentList(data)
        
    }
    
    useEffect(() => {
        
        getComments();
    }, [isLoading, postId]);


   // console.log(commentList);

    //console.log(postId);

    if (!postId) {
        console.error("postId is required");
        return null;
    }
    

    const imgUserId = commentList.map((comment) => comment.user_id);
    console.log(imgUserId)

    const userId = user && user.id;
    console.log(userId)

    
    // 작성
    const handleWriteChange = (e) => {
        setComment(e.target.value);
       // console.log(comment);
    };

    // console.log("userId:", userId);
    // console.log("postId:", postId);
    // console.log("comment:", comment);

    
    const handleWriteComment = async (e) => {
        e.preventDefault();
        if (!comment) {
            return alert("댓글을 입력하세요!");
        }
        // const id = Date.now();
        const newComment = {
            commentText: comment,
            postId : postId,
            userId : userId,
            created_at: new Date().toISOString(),
            // username: "이가현", // 로그인한 username 넣기
        };
        // const { data, error } = await supabase.from("comments").insert(newComment);
        try {
            await api.comment.createComment(newComment);
            setCommentList([...commentList, newComment]);
            setComment("");
            await getComments(); // createComment 후에 getComments를 호출하여 새로운 댓글을 포함하여 댓글 목록을 갱신합니다.
        } catch (error) {
            console.error("Failed to add comment:", error.message);
        }
    };


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
            .eq('post_id', postId)
            

        setCommentList(data);
        setLoading(false);
    }


    // 수정
    // async function updateComment(id) {
    //     const { data } = await supabase
    //         .from('comments')
    //         .update({comment: prompt("수정할 댓글을 입력하세요!")})
    //         .eq('id', id)

    //         const [updatedComment] = {data};
    //         const updatedAddComment = commentList.map((comment) =>
    //             comment.id === updatedComment.id ? updatedComment : comment
    //         );
        
    //         setCommentList(updatedAddComment);
    // }
    async function updateComment(commentId, updatedText) {
        
        try {
            // 댓글을 업데이트합니다.
            await api.comment.editComment(commentId, { commentText: updatedText, created_at: new Date().toISOString() });
            
            // 댓글 목록을 다시 가져옵니다.
            await getComments();
        } catch (error) {
            console.error("Failed to edit comment:", error.message);
        }
    }

    if(isLoading) return <h1>Loading</h1>
    return (
        <>
        {/* <Link to='/comment'></Link> */}
        <StDetailPage>
            <StCommentWrapper>
                <StCommentTitle>Comment</StCommentTitle>
                    <StCommentForm onSubmit={handleWriteComment}>
                        <StUserProfileImg>
                        {/* user 프로필 사진 들어가야함 */}
                            <img src={myImgUrl} />
                        </StUserProfileImg>
                        <StCommentWrite>
                            <StCommnetInput
                                type="text"
                                placeholder="댓글을 입력하세요."
                                value={comment}
                                onChange={handleWriteChange}
                            ></StCommnetInput>
                            <StCommentButton type="submit">등록</StCommentButton>
                        </StCommentWrite>
                    </StCommentForm>
                <StCommentListContainer>
                {commentList && commentList.map((comment, index) => {
                    return (
                        <StCommentLists key={index}>
                            <StCommentListForm>
                                <StCommentUserImg>
                                    {/* user 프로필 사진 들어가야함 */}
                                    <img />
                                </StCommentUserImg>
                                <StCommentItem>
                                    <div key={comment.id} />
                                    <StCommentUsername>{comment.username}</StCommentUsername>
                                    <StUserComment>{comment.comment}</StUserComment>
                                </StCommentItem>
                                <StCommentButton type="submit" onClick={() =>deleteComment(comment.id)}>삭제</StCommentButton>
                                <StCommentButton type='button' onClick={() =>updateComment(comment.id)}>수정</StCommentButton>
                            </StCommentListForm>
                        </StCommentLists>
                    );
                })}    
                </StCommentListContainer>
            </StCommentWrapper>
        </StDetailPage>
        </>
    );
}

export default Comment;
