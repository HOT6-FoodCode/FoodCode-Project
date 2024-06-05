import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import loginEmail from '../../../assets/icons/envelope-regular.svg';
import loginPassword from '../../../assets/icons/unlock-keyhole-solid.svg';
import { signIn } from '../../../redux/slices/authSlice';
import { getUserLoginErrorMessage } from '../../auth/getUserLoginErrorMessage';
import {
  StErrorMsg,
  StFormWrapper,
  StInputBox,
  StInputField,
  StInputImg,
  StLoginBtn,
  StLoginH2
} from '../LoginSignUpForm.styled';

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
    }
  };

  return (
    <StFormWrapper onSubmit={handleSignIn}>
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
      {auth.error && <StErrorMsg>{getUserLoginErrorMessage(auth.error)}</StErrorMsg>}
      <StLoginBtn>Login</StLoginBtn>
    </StFormWrapper>
  );
};

export default LoginForm;
