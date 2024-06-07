import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../common/Footer';
import Header from '../common/Header';

function MainLayout() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Outlet />
        <Footer />
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  height: 100%;
`;

export default MainLayout;
