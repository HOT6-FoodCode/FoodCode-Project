import styled from 'styled-components';
import uploadIcon from '../../assets/upload.png';

const ImageUpload = ({ image, setImage }) => {
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <StImageGroup>
      <StPreviewWrapper>
        {image ? <StPreviewImage src={image} alt="uploaded" /> : <StUploadIcon src={uploadIcon} alt="upload" />}
      </StPreviewWrapper>
      <StInputWrapper>
        <StUploadLabel htmlFor="input-file">
          Choose Image
          <StInput type="file" id="input-file" onChange={handleImageChange} />
        </StUploadLabel>
      </StInputWrapper>
    </StImageGroup>
  );
};

export default ImageUpload;

const StImageGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 300px;
  margin-right: 30px;
  gap: 20px;
`;

const StPreviewWrapper = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StPreviewImage = styled.img`
  max-width: 80%;
  max-height: 80%;
  margin-bottom: 30px;
`;

const StUploadIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const StInputWrapper = styled.div`
  margin-left: 20px;
`;

const StUploadLabel = styled.label`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const StInput = styled.input`
  display: none;
`;
