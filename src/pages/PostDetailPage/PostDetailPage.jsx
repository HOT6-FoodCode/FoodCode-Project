import { useEffect, useState } from 'react';
import supabase from '../../api/supabaseAPI';
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
} from '../WritePage/WritePage.styled';
import { useNavigate, useParams } from 'react-router-dom';
import StarRating from '../../components/writepage/StarRating';
import ImageUpload from '../../components/writepage/ImageUpload';

const PostDetailPage = () => {
  //supabase에 저장되있는 데이터 가져오기
  //바로 수정할 수 있도록 input 창에 데이터 그대로 가져오기
  // 수정, 삭제 기능 추가하기
  const [post, setPost] = useState(null);
  const [restaurantName, setRestaurantName] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
  const [images, setImages] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchPostDetail = async () => {
      const { data, error } = await supabase.from('posting').select('*').eq('id', id).single();
      if (error) {
        console.log('error==> ', error);
      } else {
        setPost(data);
        setRestaurantName(data.restaurantName);
        setDescription(data.description);
        setRating(data.star);
        setImages(data.images);
      }
    };
    fetchPostDetail();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from('posting')
      .update({
        restaurantName,
        description,
        rating,
        images
      })
      .eq('id', id);

    if (error) {
      console.log('error==> ', error);
    } else {
      alert('수정되었습니다.');
      navigate('/');
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('posting').delete().eq('id', id);

    if (error) {
      console.log('error==> ', error);
    } else {
      alert('삭제되었습니다.');
      navigate('/');
    }
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <StWriteWrapper>
        <ImageUpload images={images} setImages={setImages} />

        <StForm>
          <StNickname>
            <h2>Nickname</h2>
          </StNickname>

          <StInputForm>
            <StTopForm>
              <StRestaurantName
                type="text"
                placeholder="매장 이름"
                value={restaurantName}
                onChange={(e) => {
                  setRestaurantName(e.target.value);
                }}
              />
              <StarRating rating={rating} setRating={setRating} />
            </StTopForm>
            <StDescription
              type="text"
              placeholder="맛, 분위기, 추천 이유 등을 적어주세요"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </StInputForm>

          <StButtonDiv>
            <StButton onClick={handleUpdate}>수정</StButton>
            <StButton onClick={handleDelete}>삭제</StButton>
          </StButtonDiv>
        </StForm>
      </StWriteWrapper>
    </div>
  );
};

export default PostDetailPage;
