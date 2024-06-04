// import React, { useEffect } from 'react';
// import {Link} from 'react-router-dom';

// // import { createClient } from '@supabase/supabase-js'
// // const supabaseUrl = 'https://efxiyqhlunmdhtxszzum.supabase.co'
// // const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmeGl5cWhsdW5tZGh0eHN6enVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0Njc5NzgsImV4cCI6MjAzMzA0Mzk3OH0.HZdIxo2oeEg6VzajvQPNWtrShLQN5iHNcv9h-CyCC9o'
// // const supabase = createClient(supabaseUrl, supabaseKey)

// import {
//     StDetailPage,
//     StDetailForm,
//     StCommentWrapper,
//     StCommentTitle,
//     StUserProfileImg,
//     StCommentWrite,
//     StWriteButton,
//     StCommentList,
//     StCommentItem,
// } from './Comment.styled';

// function comment () {
//     const [write, setWrite] = useState("");

//     const handleWriteChange = (e) => {
//         setWrite(e.target,value);
//     };

//     return (
//         <>
//             <Link to='./comment'></Link>
//             <StDetailPage>
//                 <StDetailForm> 상세페이지 입니다.</StDetailForm>
//                 <StCommentWrapper> 
//                     <h1>Comment</h1>
//                     <StCommentTitle>
//                         <StUserProfileImg>
//                             {/* user 프로필 사진 들어가야함 */}
//                         </StUserProfileImg>
//                         <StCommentWrite>
//                             <input 
//                             type="text" 
//                             placeholder="댓글을 입력하세요."
//                             style={{textAlign:"left", width: "90%", height: "80%", border: "none", outline: "none"}}
//                             // value={write}
//                             // onChange={handleWriteChange}
//                             >
//                             </input>
//                             <StWriteButton>등록</StWriteButton>
//                         </StCommentWrite>
//                     </StCommentTitle>
//                     <StCommentList>
//                         <StUserProfileImg>
//                             {/* user 프로필 사진 들어가야함 */}
//                         </StUserProfileImg>
//                             <StCommentItem>
//                                 <div style={{fontSize: "20px"}}>댓글보이는 곳</div>
//                                 <StWriteButton>수정</StWriteButton>
//                                 <StWriteButton>삭제</StWriteButton>
//                             </StCommentItem>
//                     </StCommentList>
//                 </StCommentWrapper>
//             </StDetailPage>
//         </>
//     );
// }

// export default comment2;
