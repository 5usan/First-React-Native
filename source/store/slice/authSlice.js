import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    login(state, actions) {
      state.isLoggedIn = true;
      state.user = actions.payload;
    },
  },
});

export const {login} = authSlice.actions;

export default authSlice;
