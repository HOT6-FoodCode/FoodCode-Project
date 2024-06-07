import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import api from '../../api';

const selectPosts = (state) => state.posts.posts;
const selectUser = (state) => state.auth.user;
const selectFollowState = (state) => state.follow;

export const selectFollowingIds = createSelector([selectFollowState], (follow) => follow.followingIds || []);

export const selectFollowerIds = createSelector([selectFollowState], (follow) => follow.followerIds || []);

export const selectIsFollowing = createSelector([selectFollowState], (follow) => follow.isFollowing || []);

export const selectPostsData = createSelector(
  [selectPosts, selectUser, selectFollowingIds],
  (posts, user, followingIds) => ({
    posts,
    user,
    followingIds
  })
);

export const toggleFollowUser = createAsyncThunk(
  'follow/toggleFollowUser',
  async ({ followingId, followerId }, { rejectWithValue }) => {
    console.log('toggleFollowUser thunk called with followingId:', followingId, 'and followerId:', followerId);
    try {
      const result = await api.follow.toggleFollowUser(followingId, followerId);
      return { followingId, action: result.action };
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
export const fetchFollowerIds = createAsyncThunk('follow/fetchFollowerIds', async (userId, { rejectWithValue }) => {
  try {
    const followerIds = await api.follow.getFollowerIds(userId);
    console.log('Fetched followerIds:', followerIds);
    return followerIds;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const fetchFollowingIds = createAsyncThunk('follow/fetchFollowingIds', async (userId, { rejectWithValue }) => {
  try {
    const followingIds = await api.follow.getFollowingIds(userId);
    console.log('Fetched followingIds:', followingIds);
    return followingIds;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const followSlice = createSlice({
  name: 'follow',
  initialState: {
    status: 'idle',
    isFollowing: false,
    error: null,
    followingIds: [],
    followerIds: []
  },
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
        const { followingId } = action.payload;
        if (action.payload.action === 'follow') {
          state.followingIds.push(followingId);
        } else {
          state.followingIds = state.followingIds.filter((id) => id !== followingId);
        }
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
      })
      .addCase(fetchFollowerIds.fulfilled, (state, action) => {
        state.followerIds = action.payload;
      })
      .addCase(fetchFollowerIds.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchFollowingIds.fulfilled, (state, action) => {
        state.followingIds = action.payload;
      })
      .addCase(fetchFollowingIds.rejected, (state, action) => {
        state.error = action.payload;
      });
  }
});

export const { setFollowingStatus } = followSlice.actions;

export default followSlice.reducer;
