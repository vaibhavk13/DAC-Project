
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload;
    },
    clearUser: (state) => {
      state.username = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
