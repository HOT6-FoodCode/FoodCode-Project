import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { signUp } from '../redux/slices/authSlice';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleSignUp = () => {
    dispatch(signUp({ email, password, username }));
    setUsername('');
    setPassword('');
    setEmail('');
    console('회원가입이 완료되었습니다.');
  };

  return (
    <StFormWrapper>
      <h2>Welcome</h2>
      <StInputBox>
        <StInputField
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        <button onClick={handleSignUp}>Login</button>
      </div>
      {auth.status === 'loading' && <p>로딩 중...</p>}
      {auth.error && <p>에러: {auth.error}</p>}
      {auth.user && <p>환영합니다, {auth.user.email}님!</p>}
    </StFormWrapper>
  );
}

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
  /* width 하드코딩 사이즈 수정 */
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StInputField = styled.input`
  width: 100%;
`;