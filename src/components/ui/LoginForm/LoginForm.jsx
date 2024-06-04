import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signOut } from '../../../redux/slices/authSlice';
import styled from 'styled-components';
import loginEmail from '../../../assets/icons/envelope-regular.svg';
import loginPassword from '../../../assets/icons/unlock-keyhole-solid.svg';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      await dispatch(signIn({ email, password })).unwrap();
      setPassword('');
      setEmail('');
      alert('로그인 되었습니다.');
      navigate('/');
    } catch (error) {
      console.error('로그인 중 오류 발생:', error);
      console.log(auth.user);
      // 유효성 검사
      // (1) 유저 이메일 맞지 않는 경우
      // (2) 유저 비밀번호 맞지 않는 경우
      alert('로그인 도중 오류가 발생했습니다.');
    }
  };

  // header 로그아웃 부분에 사용
  const handleSignOut = () => {
    dispatch(signOut());
    alert('로그아웃 되었습니다.');
  };

  return (
    <StFormWrapper>
      <StLoginH2>Welcome!</StLoginH2>
      <StInputBox>
        <StInputImg src={loginEmail}></StInputImg>
        <StInputField type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </StInputBox>
      <StInputBox>
        <StInputImg src={loginPassword}></StInputImg>
        <StInputField
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </StInputBox>
      <StLoginBtn type="submit" onClick={handleSignIn}>
        Login
      </StLoginBtn>
      {auth.status === 'loading' && <p>로딩 중...</p>}
      {auth.user && <p>환영합니다, {auth.user.email}님!</p>}
    </StFormWrapper>
  );
};

export default LoginForm;

const StFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 300px;
  height: 100%;
  gap: 10px;
  color: black;
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
  ::placeholder {
    color: black;
  }
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
