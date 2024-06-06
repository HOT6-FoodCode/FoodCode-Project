import { useEffect, useState } from 'react';
import api from '../../api';
import {
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
  StDetailPage,
  StUserComment,
  StUserProfileImg,
  StWrapDiv
} from './Comment.styled';

import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { profileDefaultUrl, supabase } from '../../api/supabaseAPI';

function Comment({ postId, user }) {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [editCommentId, setEditCommentId] = useState(null);
  const [editCommentText, setEditCommentText] = useState('');
  const userProfileData = useSelector((state) => state.user.userProfile);
  const myImgUrl = (userProfileData && userProfileData.profilePictureUrl) ?? profileDefaultUrl;

  const getComments = async () => {
    try {
      const comments = await api.comment.getComment(postId);
      const commentsWithUserProfile = await Promise.all(
        comments.map(async (comment) => {
          if (comment.user_id) {
            const userProfileData = await api.user.getUserProfile(comment.user_id);
            return { ...comment, userProfileData };
          } else {
            return comment;
          }
        })
      );
      setCommentList(commentsWithUserProfile);
    } catch (error) {
      console.error('Failed to fetch comments:', error.message);
    }
  };
  useEffect(() => {
    getComments();
  }, [isLoading, postId]);

  if (!postId) {
    console.error('postId is required');
    return null;
  }

  const userId = user && user.id;

  const handleWriteChange = (e) => {
    setComment(e.target.value);
  };

  const handleWriteComment = async (e) => {
    e.preventDefault();
    if (!user) {
      // 로그인되어 있지 않은 경우 팝업 표시
      toast.warn('댓글을 작성하려면 먼저 로그인하세요.');
      return;
    }
    if (!comment) {
      return toast.warn('댓글을 입력하세요!');
    }
    const newComment = {
      commentText: comment,
      postId: postId,
      userId: userId,
      created_at: new Date().toISOString()
    };

    try {
      await api.comment.createComment(newComment);
      setCommentList([...commentList, newComment]);
      setComment('');
      await getComments(); // 댓글 목록 갱신
    } catch (error) {
      console.error('Failed to add comment:', error.message);
    }
  };

  async function deleteComment(event, id) {
    event.preventDefault(); // 폼 제출 방지
    setLoading(true);
    const { error } = await supabase.from('comments').delete().eq('id', id);

    if (error) {
      console.error('Failed to delete comment:', error.message);
    } else {
      const { data } = await supabase.from('comments').select('*').eq('post_id', postId);
      setCommentList(data);
    }

    setLoading(false);
  }

  async function updateComment(event, commentId) {
    event.preventDefault(); // 폼 제출 방지
    if (!editCommentText.trim()) {
      // 수정창이 비어있을 때
      toast.warn('내용을 입력해주세요!');
      return;
    }
    try {
      await api.comment.editComment(commentId, { commentText: editCommentText, created_at: new Date().toISOString() });
      await getComments();
      setEditCommentId(null); // 수정 완료 후 상태 초기화
      setEditCommentText(''); // 수정 완료 후 텍스트 초기화
    } catch (error) {
      console.error('Failed to edit comment:', error.message);
    }
  }

  const handleEditChange = (e) => {
    setEditCommentText(e.target.value);
  };

  const handleEditCancel = (event) => {
    event.preventDefault();
    setEditCommentId(null); // 수정 취소 시 수정 상태 초기화
    setEditCommentText(''); // 수정 취소 시 텍스트 초기화
  };

  if (isLoading) return <h1>Loading</h1>;
  return (
    <>
      <StDetailPage>
        <StCommentWrapper>
          <StCommentTitle>Comment</StCommentTitle>
          <StCommentForm onSubmit={handleWriteComment}>
            <StUserProfileImg src={myImgUrl} />
            <StCommentWrite>
              <StCommnetInput
                type="text"
                placeholder="댓글을 입력하세요."
                value={comment}
                onChange={handleWriteChange}
              />
              <StCommentButton type="submit">등록</StCommentButton>
            </StCommentWrite>
          </StCommentForm>
          <StCommentListContainer>
            {commentList &&
              commentList.map((comment, index) => {
                return (
                  <StCommentLists key={index}>
                    <StCommentListForm>
                      <StCommentUserImg
                        src={comment.userProfileData?.profilePictureUrl ?? profileDefaultUrl}
                        alt="User Profile"
                      />
                      <StWrapDiv>
                        <StCommentItem>
                          <StCommentUsername>{comment.userProfileData?.nickname}</StCommentUsername>
                          {editCommentId === comment.id ? (
                            <StCommnetInput type="text" value={editCommentText} onChange={handleEditChange} />
                          ) : (
                            <StUserComment>{comment.comment}</StUserComment>
                          )}
                        </StCommentItem>
                        {user && comment.user_id === user.id ? (
                          <StBtnWrapDiv>
                            {editCommentId === comment.id ? (
                              <>
                                <StCommentButton type="submit" onClick={(event) => updateComment(event, comment.id)}>
                                  등록
                                </StCommentButton>
                                <StCommentButton type="button" onClick={handleEditCancel}>
                                  취소
                                </StCommentButton>
                              </>
                            ) : (
                              <>
                                <StCommentButton
                                  type="button"
                                  onClick={(event) => {
                                    event.preventDefault();
                                    setEditCommentId(comment.id);
                                  }}
                                >
                                  수정
                                </StCommentButton>
                                <StCommentButton type="submit" onClick={(event) => deleteComment(event, comment.id)}>
                                  삭제
                                </StCommentButton>
                              </>
                            )}
                          </StBtnWrapDiv>
                        ) : null}
                      </StWrapDiv>
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