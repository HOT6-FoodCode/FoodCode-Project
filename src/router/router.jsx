import { createBrowserRouter } from 'react-router-dom';

import PostList from '../components/posts/PostList';
import LoginForm from '../components/ui/LoginForm';
import MainLayout from '../layouts/MainLayout';
import MainPage from '../pages/MainPage/MainPage';

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
      }
    ]
  }
]);

export default router;
