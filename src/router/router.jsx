import { createBrowserRouter } from 'react-router-dom';
import PostList from '../components/posts/PostList';
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
        path: '/comment',
        element: <Comment />
      }
    ]
  }
]);

export default router;
