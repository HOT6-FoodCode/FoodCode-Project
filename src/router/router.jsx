import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
//import PostDetailPage from '../pages/PostDetailPage/PostDetailPage';
import { MyPage } from '../pages/MyPage';
import MainLayout from '../layouts/MainLayout/MainLayout';
import PostList from '../components/posts/PostList';
import LoginForm from '../components/ui/LoginForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <MainPage />,
        children: [
          {
            path: 'trending',
            element: <PostList sorting="trending" />
          },
          {
            path: 'recent',
            element: <PostList sorting="recent" />
          },
          {
            path: 'follow',
            element: <PostList sorting="follow" />
          }
        ]
      },
      {
        path: '/login',
        element: <LoginForm />
      },
      {
        path: '/mypage',
        element: <MyPage />,
        children: [
          {
            path: '',
            element: <PostList sorting="myPost" />
          }
        ]
      }
    ]
  }
]);

export default router;
