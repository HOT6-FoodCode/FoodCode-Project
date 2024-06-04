import { createBrowserRouter } from 'react-router-dom';

import PostList from '../components/posts/PostList';
import LoginForm from '../components/ui/LoginForm';
import MainLayout from '../layouts/MainLayout';
import MainPage from '../pages/MainPage/MainPage';
import Comment from '../pages/Comment/Comment';

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
<<<<<<< HEAD
        path: '/comment',
        element: <Comment />
=======
        path: '/login',
        element: <LoginForm />
>>>>>>> 0550d2eb9253d805e4fd9f8e33e6e3975942c2de
      }
    ]
  }
]);

export default router;
