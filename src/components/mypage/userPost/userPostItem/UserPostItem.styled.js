import styled from 'styled-components';

const StPostItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 250px;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 20px 20px 10px 20px;
`;
const StPostItemText = styled.div`
  padding: 15px;
  line-height: 30px;
  margin-left: 13px;
`;
const StPostItemTextStarCategory = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`;
const StPostItemReview = styled.p`
  width: 230px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
const StPostItemImg = styled.img`
  height: 50%;
`

export {
StPostItemText,
StPostItemTextStarCategory,
StPostItemReview,
StPostItemImg,
StPostItem,
};