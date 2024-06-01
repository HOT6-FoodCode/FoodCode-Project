import MainPage from '../../pages/MainPage/MainPage';
import Header from '../common/Header';

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <MainPage />
      </main>
    </>
  );
}

export default MainLayout;
