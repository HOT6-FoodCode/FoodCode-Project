import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { signIn, signUp } from '../../redux/slices/authSlice';

function LoginForm() {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      await dispatch(signUp({ email, password, nickname })).unwrap();
      setNickname('');
      setPassword('');
      setEmail('');

      console.log('회원가입이 완료되었습니다.');
    } catch (error) {
      console.error('회원가입 중 오류 발생:', error.message || error);
    }
  };

  const handleSignIn = async () => {
    try {
      await dispatch(signIn({ email, password })).unwrap();
    } catch (error) {
      console.error('로그인 중 오류 발생:', error);
    }
  };

  return (
    <StFormWrapper>
      <h2>Welcome</h2>
      <StInputBox>
        <StInputField
          type="text"
          placeholder="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <StInputField type="email" placeholder="e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <StInputField
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </StInputBox>
      <div>
        <button onClick={handleSignUp}>Sign Up</button>
        <button onClick={handleSignIn}>Login</button>
      </div>
      {auth.status === 'loading' && <p>로딩 중...</p>}
      {auth.error && <p>{getUserErrorMessage(auth.error)}</p>}
      {auth.user && <p>환영합니다, {auth.user.email}님!</p>}
    </StFormWrapper>
  );
}

const getUserErrorMessage = (error) => {
  if (error.includes('User already registered')) {
    return console.log('중복된 이메일입니다.');
  } else if (error.includes('duplicate key value violates unique constraint "unique_nickname"')) {
    return '중복된 닉네임입니다.';
  } else if (error.includes('Unable to validate email address: invalid format')) {
    return '이메일 형식에 맞게 제출해주세요.';
  } else if (error.includes('Anonymous sign-ins are disabled')) {
    return '입력창에 내용을 모두 입력해주세요.';
  } else if (error.includes('Password should be at least 6 characters.')) {
    return '비밀번호는 최소 6글자 이상 입력해주세요.';
  } else {
    return '잘못된 이메일 또는 비밀번호를 입력했습니다.';
  }
};

export default LoginForm;

const StFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 50px 100px;
  height: 80%;
  gap: 10px;
`;

const StInputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StInputField = styled.input`
  width: 100%;
`;
