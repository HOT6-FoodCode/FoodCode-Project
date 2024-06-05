import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import api from '../../../api';
import { profileDefaultUrl } from '../../../api/supabaseAPI';
import mainLogo from '../../../assets/logo.png';
import useDropdown from '../../../hooks/useDropdown/useDropdown';
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
import { userDataUpdate } from '../../../redux/slices/userSlice';


function Header() {
  console.log('헤더');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [profilePictureUrl, setProfilePictureUrl] = useState(null);
  const { isOpen, ref, toggle } = useDropdown();


  const userProfileData = useSelector((state) => state.user.userProfile);
  console.log('상태확인, Header', userProfileData);
  const id = userProfileData ? userProfileData.id : null;



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

  useEffect(() => {
    if (user) {
      const fetchUserProfile = async () => {
        try {
          const userProfile = await api.user.getUserProfile(user.id);
          setProfilePictureUrl(userProfile.profilePictureUrl);
        } catch (error) {
          console.error('Failed to fetch user profile', error);
        }
      };

      fetchUserProfile();
    }
  }, [user]);

  const handleLogout = async () => {
    dispatch(signOut());
  };

  const handleWrite = () => {
    // const userId = user?.id;
    // const title = '테스트3';
    // const content = '내용3';
    // const image = 'url';
    // const rating = '1.2';
    // if (userId) {
    //   const data = api.posts.createPost(userId, title, content, image, rating);
    //   console.log(data);
    // } else {
    //   console.error('User ID is undefined');
    // }
  };


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
                  {/* 우선, 둘 다 수락 */}
                  <UserImg
                    src={userProfileData ? userProfileData.profilePictureUrl : 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg'}
                    alt="User"
                  />
                  <UserImg src={profilePictureUrl ?? `${profileDefaultUrl}`} alt="User" />
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
