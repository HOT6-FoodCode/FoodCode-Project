import styled from 'styled-components';

function ImageUpload({ images, setImages }) {
  const handleAddImages = (event) => {
    const imageLists = event.target.files;
    let imageUrlLists = [...images];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 4) {
      imageUrlLists = imageUrlLists.slice(0, 4);
    }
    setImages(imageUrlLists);
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id) => {
    setImages(images.filter((_, index) => index !== id));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <StImageGroup>
        {/* 고정된 4개의 슬롯 생성 */}
        {[...Array(4)].map((_, index) => (
          <StImageUpload key={index}>
            {images[index] ? (
              <>
                <StDeleteBtn>
                  <StDeleteImage onClick={() => handleDeleteImage(index, images, setImages)} />
                </StDeleteBtn>
                <StPreviewImage src={images[index]} alt={`uploaded-${index}`} />
              </>
            ) : (
              <label htmlFor="input-file" style={{ cursor: 'pointer' }}>
                <StUploadBtn src="./src/assets/upload.png" />
                <input
                  type="file"
                  id="input-file"
                  style={{ display: 'none' }}
                  multiple
                  onChange={(e) => handleAddImages(e, images, setImages)}
                />
              </label>
            )}
          </StImageUpload>
        ))}
      </StImageGroup>
      <h5 style={{ textAlign: 'center', color: 'gray' }}>*최대 4장까지 가능합니다</h5>
    </div>
  );
}
export default ImageUpload;
const StImageGroup = styled.div`
  width: 360px;
  height: 360px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  border: 1px solid black;
  border-radius: 10px;
  margin-right: 30px;
  padding: 10px;
`;
const StImageUpload = styled.div`
  width: 150px;
  height: 150px;
  border: 2px solid gray;
  border-radius: 15px;
  margin: 5px 10px;
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
