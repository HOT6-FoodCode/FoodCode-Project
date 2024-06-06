import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import router from './router/router';

function App() {
  return (
    <>
      <ToastContainer closeOnClick />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
