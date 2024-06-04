import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../../redux/slices/authSlice';
import styled from 'styled-components';
import loginPerson from '../../../assets/icons/user-large-solid.svg';
import loginEmail from '../../../assets/icons/envelope-regular.svg';
import loginPassword from '../../../assets/icons/unlock-keyhole-solid.svg';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePictureFile, setProfilePictureFile] = useState(null);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleSignUp = async () => {
    try {
      await dispatch(signUp({ email, password, username, profilePictureFile })).unwrap();
      setUsername('');
      setPassword('');
      setEmail('');
      setProfilePictureFile(null);
      console.log('회원가입이 완료되었습니다.');
    } catch (error) {
      console.error('회원가입 중 오류 발생:', error.message || error);
    }
  };

  return (
    <StFormWrapper>
      <StLoginH2>Welcome!</StLoginH2>
      <StInputBox>
        <StInputImg src={loginPerson}></StInputImg>
        <StInputField
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </StInputBox>
      <StInputBox>
        <StInputImg src={loginEmail}></StInputImg>
        <StInputField type="email" placeholder="e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
      </StInputBox>
      <StInputBox>
        <StInputImg src={loginPassword}></StInputImg>
        <StInputField
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* {비밀번호 에러 && <p>8자 이상의 영문 대소문자, 숫자, 특수문자(!@#$%^_)만 사용 가능합니다.</p>} */}
        {/* <StInputField type="file" onChange={(e) => setProfilePictureFile(e.target.files[0])} /> */}
      </StInputBox>

      <StLoginBtn type="submit" onClick={handleSignUp}>
        Sign Up
      </StLoginBtn>

      {auth.status === 'loading' && <p>로딩 중...</p>}
      {auth.error && <p>에러가 발생했습니다.</p>}
      {auth.user && <p>환영합니다, {auth.user.email}님!</p>}
    </StFormWrapper>
  );
};

export default SignUpForm;

const StFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 300px;
  height: 100%;
  gap: 10px;
`;

const StLoginH2 = styled.h2`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const StInputBox = styled.div`
  /* width 하드코딩 사이즈 수정 */
  width: 100%;
  border: 1px solid black;
  border-radius: 50px;
  display: flex;
  gap: 12px;
  padding: 0px 20px;
`;

const StInputImg = styled.img`
  width: 17px;
`;

const StInputField = styled.input`
  width: 100%;
  height: 45px;
  border: none;
  font-size: 16px;
  &:focus {
    border-color: none;
    outline: none;
  }
`;

const StLoginBtn = styled.button`
  width: 100%;
  height: 45px;
  font-size: 16px;
  border-radius: 50px;
  background-color: black;
  color: white;
  margin-top: 10px;
`;
