import styled from "styled-components"

const StProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 50px;
`

const UserImg  = ({imgUrl}) => {
  return (
    <>
      {imgUrl && 
        <StProfileImg
          src={imgUrl} 
          alt="Profile"   
        />
      }
    </>
    
  )
}

export default UserImg