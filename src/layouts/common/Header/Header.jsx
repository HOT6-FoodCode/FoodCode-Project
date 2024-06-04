import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import api from '../../../api';
import mainLogo from '../../../assets/logo.png';
import {
  DropdownButton,
  DropdownMenu,
  DropdownMenuItem,
  HeaderWrapDiv,
  LogoImg,
  StrBtn,
  StrNavWrapDiv,
  UserImg
} from './Header.styled';
import { userDataUpdate } from '../../../redux/slices/userSlice';


function Header() {
  console.log('헤더');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const userProfileData = useSelector((state) => state.user.userProfile);
  console.log('상태확인, Header', userProfileData);
  const dispatch  = useDispatch();
  const id = userProfileData ? userProfileData.id : null;
  //const user = useSelector((state) => state.auth.user);
  //const [userData, setUserData] = useState(null);
  //console.log(userData);
  //const id = user ? user.id : null;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userProfile = await api.user.getUserProfile(id);
        dispatch(userDataUpdate(userProfile));
        setIsLoggedIn(true);
      } catch (error) {
        console.error('Failed to fetch user profile:', error.message);
      }
    };

    if (id && userProfileData && userProfileData.profilePictureUrl) { // 여기를 수정했습니다.
      fetchUserProfile();
    }
  }, [id, dispatch]); 


  return (
    <header>
      <HeaderWrapDiv>
        <h1>
          <Link to="/">
            <LogoImg src={mainLogo} alt="logo" />
          </Link>
        </h1>
        {/* 지울 내용 */}
        <StrBtn onClick={() => setIsLoggedIn((prevState) => !prevState)}>토글</StrBtn>

        <nav>
          <StrNavWrapDiv>
            {isLoggedIn ? (
              <>
                <Link to="/login">
                  <StrBtn>Write</StrBtn>
                </Link>

                <Link to="/mypage">
                  <UserImg
                    src={userProfileData ? userProfileData.profilePictureUrl : 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg'}
                    alt="User"
                  />
                </Link>

                <div ref={dropdownRef}>
                  <DropdownButton onClick={toggleDropdown}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15L6 9H18L12 15Z" fill="currentColor" />
                    </svg>
                  </DropdownButton>
                  {isDropdownOpen && (
                    <DropdownMenu isOpen={isDropdownOpen}>
                      <DropdownMenuItem>
                        <Link to="/mypage">My Page</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>Log Out</DropdownMenuItem>
                    </DropdownMenu>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link to="/auth/login">
                  <StrBtn>Login</StrBtn>
                </Link>

                <Link to="/auth/signup">
                  <StrBtn>Sign up</StrBtn>
                </Link>
              </>
            )}
          </StrNavWrapDiv>
        </nav>
      </HeaderWrapDiv>
    </header>
  );
}

export default Header;
