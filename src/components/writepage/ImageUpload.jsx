import styled from 'styled-components';
import uploadIcon from '../../assets/upload.png';

function ImageUpload({ images, setImages }) {
  const handleAddImages = (e) => {
    const { files } = e.target;
    const uploadFile = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(uploadFile);
    reader.onloadend = () => {
      setImages(reader.result);
    };
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = () => {
    setImages(null);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <StImageUpload>
        {images ? (
          <>
            <StDeleteBtn>
              <StDeleteImage onClick={handleDeleteImage} />
            </StDeleteBtn>
            <StPreviewImage src={images} alt={'upload-img'} img="img" />
          </>
        ) : (
          <label htmlFor="input-file" style={{ cursor: 'pointer' }}>
            <StUploadBtn src={uploadIcon} />
            <input
              type="file"
              id="input-file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={(e) => handleAddImages(e, images, setImages)}
            />
          </label>
        )}
      </StImageUpload>

      <h5 style={{ fontSize: '14px', color: 'gray', margin: '10px' }}>* 이미지는 1장 올려주세요</h5>
    </div>
  );
}
export default ImageUpload;

const StImageUpload = styled.div`
  width: 300px;
  height: 350px;
  border: 1px solid gray;
  border-radius: 15px;
  margin-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const StUploadBtn = styled.img`
  max-width: 100px;
  max-height: 100px;
`;
const StPreviewImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;
const StDeleteBtn = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;
const StDeleteImage = styled.svg.attrs({
  viewBox: '0 0 24 24',
  children: (
    <>
      <circle cx="12" cy="12" r="12" fill="none" stroke="currentColor" />
      <line x1="8" y1="8" x2="16" y2="16" stroke="currentColor" strokeWidth="2" />
      <line x1="8" y1="16" x2="16" y2="8" stroke="currentColor" strokeWidth="2" />
    </>
  )
})`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
