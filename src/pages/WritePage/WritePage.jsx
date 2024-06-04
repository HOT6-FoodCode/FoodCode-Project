import ImageUpload from '../../components/writepage/ImageUpload';
import StarRating from '../../components/writepage/StarRating';
import {
  StWriteWrapper,
  StNickname,
  StForm,
  StRestaurantName,
  StDescription,
  StInputForm,
  StTopForm,
  StButtonDiv,
  StButton
} from './WritePage.styled';

function WritePage() {
  return (
    <StWriteWrapper>
      <ImageUpload />

      <StForm>
        <StNickname>
          <h2>Nickname</h2>
        </StNickname>

        <StInputForm>
          <StTopForm>
            <StRestaurantName type="text" placeholder="매장 이름" />
            <StarRating />
          </StTopForm>
          <StDescription />
        </StInputForm>

        <StButtonDiv>
          <StButton>등록하기</StButton>
        </StButtonDiv>
      </StForm>
    </StWriteWrapper>
  );
}

export default WritePage;
