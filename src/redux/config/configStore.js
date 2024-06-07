import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import followReducer from '../slices/followSlice';
import postsReducer from '../slices/postsSlice';
import userReducer from '../slices/userSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    follow: followReducer,
    posts: postsReducer
  }
});

export default store;
