import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api';

// 사용자 프로필 가져오기 비동기 작업 정의
export const fetchUserProfile = createAsyncThunk('user/fetchUserProfile', async (userId, { rejectWithValue }) => {
  try {
    const userProfileData = await api.user.getUserProfile(userId);
    return userProfileData;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const initialState = {
  userProfile: null,
  loading: false,
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userDataUpdate(state, action) {
      state.userProfile = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.userProfile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { userDataUpdate, setLoading, setError } = userSlice.actions;
export default userSlice.reducer;
