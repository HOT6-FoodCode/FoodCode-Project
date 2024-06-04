import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
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
import { useSelector } from 'react-redux';
import api from '../../../api';

function Header() {
  console.log('헤더');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const userData = useSelector((state) => state.auth.user);
  const [user, setUser] = useState(null);
  console.log(userData);
  const id = userData ? userData.id : null;

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
        setIsLoggedIn(true);
        setUser(userProfile);
      } catch (error) {
        console.error('Failed to fetch user profile:', error.message);
      }
    };

    if (id) {
      fetchUserProfile();
    }
  }, [id]);

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
                    src={user && user.profilePictureUrl || 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg'}
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
