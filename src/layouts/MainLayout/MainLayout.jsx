import { Outlet } from 'react-router-dom';
import Footer from '../common/Footer';
import Header from '../common/Header';

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
