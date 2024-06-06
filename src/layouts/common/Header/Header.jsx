import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import api from '../../../api';
import { profileDefaultUrl } from '../../../api/supabaseAPI';
import mainLogo from '../../../assets/logo.png';
import useDropdown from '../../../hooks/useDropdown/useDropdown';
import { signOut } from '../../../redux/slices/authSlice';
import { userDataUpdate } from '../../../redux/slices/userSlice'; // 여기에 추가
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
  const dispatch = useDispatch();
  const { isOpen, ref, toggle } = useDropdown();
  const { isOpen, ref, toggle } = useDropdown();
  const user = useSelector((state) => state.auth.user);
  const userProfileData = useSelector((state) => state.user.userProfile);
  console.log(userProfileData)

  useEffect(() => {
    if (user) {
      const fetchUserProfile = async () => {
        try {
          const userProfileData = await api.user.getUserProfile(user.id);
          dispatch(userDataUpdate(userProfileData));
        } catch (error) {
          console.error('Failed to fetch user profile', error);
        }
      };
      fetchUserProfile();
    }
  }, [user, dispatch]);

  const handleLogout = useCallback(async () => {
    dispatch(signOut());
  }, [dispatch]);

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
                <Link to="/write">
                  <StrBtn>Write</StrBtn>
                </Link>

                <Link to="/mypage">
                  <UserImg src={userProfile?.profilePictureUrl ?? profileDefaultUrl} alt="User" />
                </Link>

                <div ref={ref}>
                  <DropdownButton onClick={toggle}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15L6 9H18L12 15Z" fill="currentColor" />
                    </svg>
                  </DropdownButton>
                  {isOpen && (
                    <DropdownMenu $isOpen={isOpen}>
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