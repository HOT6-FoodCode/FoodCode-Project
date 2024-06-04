import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import mainLogo from '../../../assets/logo.png';
import { signOut } from '../../../redux/slices/authSlice';
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

function Header() {
  console.log('헤더');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prevState) => !prevState);
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  const handleLogout = async () => {
    dispatch(signOut());
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  console.log('user', user);

  return (
    <header>
      <HeaderWrapDiv>
        <h1>
          <Link to="/">
            <LogoImg src={mainLogo} alt="logo" />
          </Link>
        </h1>

        <nav>
          <StrNavWrapDiv>
            {user ? (
              <>
                <Link to="/login">
                  <StrBtn>Write</StrBtn>
                </Link>

                <Link to="/mypage">
                  <UserImg
                    src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
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
                      <DropdownMenuItem onClick={handleLogout}>Log Out</DropdownMenuItem>
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
