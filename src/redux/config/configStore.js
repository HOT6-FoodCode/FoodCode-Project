import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import userSlice from '../slices/userSlice';
import followReducer from '../slices/followSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userSlice,
    follow: followReducer
  }
});

export default store;
