import styled from 'styled-components';
import uploadIcon from '../../assets/upload.png';

function ImageUpload({ image, setImage }) {
  const handleAddImage = (event) => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setImage(imageUrl);
  };

  // 이미지 삭제
  const handleDeleteImage = () => {
    setImage('');
  };


  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <StImageGroup>
        <StImageUpload>
          {image ? (
            <>
              <StDeleteBtn>
                <StDeleteImage onClick={handleDeleteImage} />
              </StDeleteBtn>
              <StPreviewImage src={image} alt={`uploaded-image`} />
            </>
          ) : (
            <label htmlFor="input-file" style={{ cursor: 'pointer' }}>
              <StUploadBtn src={uploadIcon} />
              <input
                type="file"
                id="input-file"
                style={{ display: 'none' }}
                onChange={handleAddImage}
              />
            </label>
          )}
        </StImageUpload>
      </StImageGroup>
      <h5 style={{ fontSize: '14px', color: 'gray', margin: '10px' }}>* 이미지는 최대 1장까지 가능합니다</h5>
    </div>
  );
}

export default ImageUpload;

const StImageGroup = styled.div`
  width: 360px;
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StImageUpload = styled.div`
  width: 150px;
  height: 150px;
  border: 2px solid gray;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StUploadBtn = styled.img`
  max-width: 50px;
  max-height: 50px;
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