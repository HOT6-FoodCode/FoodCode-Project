import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchFollowerIds } from './redux/slices/followSlice';
import { fetchPosts } from './redux/slices/postsSlice';
import router from './router/router';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    console.log('App useEffect for fetchPosts triggered.');
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      console.log('App useEffect for fetchFollowerIds triggered. User ID:', user.id);
      dispatch(fetchFollowerIds(user.id));
    }
  }, [user, dispatch]);
  return (
    <>
      <ToastContainer closeOnClick />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
