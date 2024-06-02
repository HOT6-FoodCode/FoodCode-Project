import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import LinkButton from '../../components/common/LinkButton';
import PostList from '../../components/posts/PostList';

function MainPage() {
  const location = useLocation();
  console.log('메인');
  return (
    <div>
      <div>
        <LinkButton to="/trending" label="트렌드" />
        <LinkButton to="/recent" label="최신" />
        <LinkButton to="/follow" label="팔로우" />
      </div>
      <StrDiv>{location.pathname === '/' ? <PostList sorting="trending" /> : <Outlet />}</StrDiv>
    </div>
  );
}

export default MainPage;

const StrDiv = styled.div`
  display: grid;
  place-items: center;
  height: calc(100vh - 65px);
`;
