import { createBrowserRouter } from 'react-router-dom';
import PostList from '../components/posts/PostList';
import MainLayout from '../layouts/MainLayout';
import MainPage from '../pages/MainPage/MainPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import LoginForm from '../components/ui/LoginForm/LoginForm';
import RegisterForm from '../components/ui/RegisterForm/RegisterForm';

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
      // {
      //   path: '/loginpage',
      //   element: <LoginPage />
      //   children: [
      //     {
      //       path: '/login',
      //       element: <LoginForm />
      //     },
      //     {
      //       path: '/signup',
      //       element: <RegisterForm />
      //     }
      //   ]
      // }
      {
        path: '/login',
        element: <LoginForm />
      },
      {
        path: '/signup',
        element: <RegisterForm />
      }
    ]
  }
]);

export default router;
