import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';

export const followUser = createAsyncThunk(
  'follow/followUser',
  async ({ followingId, followerId }, { rejectWithValue }) => {
    try {
      const data = await api.follow.followUser(followingId, followerId);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
