import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import loginEmail from '../../../assets/icons/envelope-regular.svg';
import loginPassword from '../../../assets/icons/unlock-keyhole-solid.svg';
import loginPerson from '../../../assets/icons/user-large-solid.svg';
import { signUp } from '../../../redux/slices/authSlice';
import { getUserErrorMessage } from '../../auth/getUserErrorMessage';
import {
  StErrorMsg,
  StFormWrapper,
  StInputBox,
  StInputField,
  StInputImg,
  StLoginBtn,
  StLoginH2
} from '../LoginSignUpForm.styled';

const SignUpForm = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const validatePassword = (pwd) => {
    const isValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^_]).{8,}$/.test(pwd);
    if (!isValid) {
      setError('하나 이상의 영문 대소문자, 숫자, 특수문자를 사용해주세요.');
    } else {
      setError('');
    }
    return isValid;
  };

  const handleChangePassword = (e) => {
    const { value } = e.target;
    setPassword(value);

    if (value) {
      validatePassword(value);
    } else if (!value) {
      setError('');
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      if (!email || !password || !nickname) {
        toast.error('모든 필드를 입력해주세요.');
        return;
      }
      await dispatch(signUp({ email, password, nickname })).unwrap();
      setNickname('');
      setPassword('');
      setEmail('');
      toast.warn('회원가입이 완료되었습니다.');
      navigate('/auth/login'); // 회원가입 후 로그인 페이지로 이동
    } catch (error) {
      toast.error(getUserErrorMessage(error));
    }
  };

  return (
    <StFormWrapper onSubmit={handleSignUp}>
      <StLoginH2>Welcome!</StLoginH2>
      <StInputBox>
        <StInputImg src={loginPerson}></StInputImg>
        <StInputField
          type="text"
          placeholder="username"
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
          }}
        />
      </StInputBox>
      <StInputBox>
        <StInputImg src={loginEmail}></StInputImg>
        <StInputField type="email" placeholder="e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
      </StInputBox>
      <StInputBox>
        <StInputImg src={loginPassword}></StInputImg>
        <StInputField type="password" placeholder="password" value={password} onChange={handleChangePassword} />
      </StInputBox>
      {error && <StErrorMsg>{error}</StErrorMsg>}
      {auth.error && <StErrorMsg>{getUserErrorMessage(auth.error)}</StErrorMsg>}
      <StLoginBtn>Sign Up</StLoginBtn>
    </StFormWrapper>
  );
};

export default SignUpForm;
