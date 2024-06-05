import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userProfile: null,
  loading: false,
  error: null,
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
    },
  },
});

export const { userDataUpdate, setLoading, setError } = userSlice.actions;
export default userSlice.reducer;