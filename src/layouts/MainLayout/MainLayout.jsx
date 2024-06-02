import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../common/Footer';
import Header from '../common/Header';

function MainLayout() {
  return (
    <Wrapper>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default MainLayout;
