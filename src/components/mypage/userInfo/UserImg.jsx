import styled from "styled-components"

const StProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 30px;
`

const UserImg  = ({profileUrl}) => {
  return (
    <>
      {profileUrl && 
        <StProfileImg
          src={profileUrl} 
          alt="Profile"   
        />
      }
    </>
    
  )
}

export default UserImg