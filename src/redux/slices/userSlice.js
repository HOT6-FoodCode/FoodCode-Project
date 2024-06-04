import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userProfile: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userDataUpdate: (state, action) => {
      state.userProfile = action.payload;
    }
  },

});

export const { userDataUpdate } = userSlice.actions;
export default userSlice.reducer;