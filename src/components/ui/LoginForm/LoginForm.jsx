import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signOut } from '../../../redux/slices/authSlice';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleSignIn = () => {
    dispatch(signIn({ email, password }));
    alert('로그인 되었습니다.');
  };

  const handleSignOut = () => {
    dispatch(signOut());
    alert('로그아웃 되었습니다.');
  };

  return (
    <div>
      <h2>Welcome</h2>
      <input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
      <div>
        <button onClick={handleSignIn}>로그인</button>
        <button onClick={handleSignOut}>로그아웃</button>
      </div>
      {auth.status === 'loading' && <p>로딩 중...</p>}
      {auth.error && <p>에러: {auth.error}</p>}
      {auth.user && <p>환영합니다, {auth.user.email}님!</p>}
    </div>
  );
};

export default Auth;
