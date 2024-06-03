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
      </Main>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.div`
  min-height: 70vh;
`;

export default MainLayout;
