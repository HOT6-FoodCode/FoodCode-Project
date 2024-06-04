import { createBrowserRouter } from 'react-router-dom';

import PostList from '../components/posts/PostList';
// import LoginForm from '../components/ui/LoginForm';
import MainLayout from '../layouts/MainLayout';
import LoginPage from '../pages/LoginPage/LoginPage';
import MainPage from '../pages/MainPage/MainPage';
import LoginForm from '../components/ui/LoginForm/LoginForm';
import SignUpForm from '../components/ui/SignUpForm/SignUpForm';

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
        path: 'auth',
        element: <LoginPage />,
        children: [
          {
            path: 'login',
            element: <LoginForm />
          },
          {
            path: 'signup',
            element: <SignUpForm />
          }
        ]
      }
    ]
  }
]);

export default router;