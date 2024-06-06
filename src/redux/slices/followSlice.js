import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api';

export const toggleFollowUser = createAsyncThunk(
  'follow/toggleFollowUser',
  async ({ followingId, followerId }, { rejectWithValue }) => {
    console.log('toggleFollowUser thunk called with followingId:', followingId, 'and followerId:', followerId);
    try {
      const result = await api.follow.toggleFollowUser(followingId, followerId);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const checkFollowStatus = createAsyncThunk(
  'follow/checkFollowStatus',
  async ({ followingId, followerId }, { rejectWithValue }) => {
    console.log('checkFollowStatus thunk called with followingId:', followingId, 'and followerId:', followerId);
    try {
      const isFollowing = await api.follow.isFollowing(followingId, followerId);
      return isFollowing;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const followSlice = createSlice({
  name: 'follow',
  initialState: { status: 'idle', isFollowing: false, error: null },
  reducers: {
    setFollowingStatus: (state, action) => {
      state.isFollowing = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(toggleFollowUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(toggleFollowUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isFollowing = action.payload.action === 'follow';
      })
      .addCase(toggleFollowUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(checkFollowStatus.fulfilled, (state, action) => {
        state.isFollowing = action.payload;
      })
      .addCase(checkFollowStatus.rejected, (state, action) => {
        state.error = action.payload;
      });
  }
});

export const { setFollowingStatus } = followSlice.actions;

export default followSlice.reducer;