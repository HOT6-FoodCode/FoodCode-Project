import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import PostDetailPage from '../pages/PostDetailPage/PostDetailPage';
import { MyPage } from '../pages/MyPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import MainLayout from '../layouts/MainLayout/MainLayout';
import PostList from '../components/posts/PostList';
import WritePage from '../pages/WritePage/WritePage';

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
        path: '/mypage',
        element: <MyPage />
      },
      {
        path: '/writepage',
        element: <WritePage />
      }
    ]
  }
]);

export default router;
