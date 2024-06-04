import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import FollowIcon from '../../assets/icons/follow.svg';
import RecentIcon from '../../assets/icons/recent.svg';
import TrendingIcon from '../../assets/icons/trending.svg';
import LinkButton from '../../components/common/LinkButton';
import PostList from '../../components/posts/PostList';

function MainPage() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path || (location.pathname === '/' && path === '/trending');

  return (
    <MainContainer>
      <StrLinkWrapDiv>
        <LinkButton
          className={isActive('/trending') ? 'active' : ''}
          to="/trending"
          label="트렌딩"
          icon={TrendingIcon}
        />
        <LinkButton className={isActive('/recent') ? 'active' : ''} to="/recent" label="최신" icon={RecentIcon} />
        <LinkButton className={isActive('/follow') ? 'active' : ''} to="/follow" label="팔로우" icon={FollowIcon} />
      </StrLinkWrapDiv>
      <StrDiv>{location.pathname === '/' ? <PostList sorting="trending" /> : <Outlet />}</StrDiv>
    </MainContainer>
  );
}

export default MainPage;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StrLinkWrapDiv = styled.div`
  display: flex;
  margin: 60px 0px 40px 115px;
  gap: 10px;
`;

const StrDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
