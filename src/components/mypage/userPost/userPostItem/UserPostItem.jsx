import {
  StPostItem,
  StPostItemReview,
  StPostItemImg,
  StPostItemText,
  StPostItemTextStarCategory
} from './UserPostItem.styled';

const UserPostItem = ({ post }) => {
  return (
    <>
      <StPostItem>
        <StPostItemImg
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAThtaI-VpgoY-GD9BjegKCmHDPcSt2BYeAQ&s"
          alt=""
        />
        {/* <StPostItemText>
          <h2>{post.업소명}</h2>
          <StPostItemReview>굳</StPostItemReview>
          <StPostItemTextStarCategory>
            <p>⭐️ 평점</p>
            <p>
              {post.분류}, {post.주소.slice(6, 10)}
            </p>
          </StPostItemTextStarCategory>
        </StPostItemText> */}
        <StPostItemText>
          <h2>쥬안</h2>
          <StPostItemReview>텐바라 솥밥으로 유명한 갓포요리집</StPostItemReview>
          <StPostItemTextStarCategory>
            <p>⭐️ 4.8</p>
            <p>
              일식, 청담
            </p>
          </StPostItemTextStarCategory>
        </StPostItemText>
      </StPostItem>
    </>
  );
};

export default UserPostItem;
