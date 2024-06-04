import { createBrowserRouter } from 'react-router-dom';

import LoginForm from '../components/LoginForm';
import PostList from '../components/posts/PostList';
import WritePage from '../pages/WritePage/WritePage';
import MainLayout from '../layouts/MainLayout';
import MainPage from '../pages/MainPage/MainPage';
import PostDetailPage from '../pages/PostDetailPage/PostDetailPage';

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
        path: '/write',
        element: <WritePage />
      },
      {
        path: '/postDetail/:id',
        element: <PostDetailPage />
      }
    ]
  }
]);

export default router;
