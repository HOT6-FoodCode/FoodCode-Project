import MainPage from '../../pages/MainPage/MainPage';
import Footer from '../common/Footer';
import Header from '../common/Header';

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <MainPage />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
