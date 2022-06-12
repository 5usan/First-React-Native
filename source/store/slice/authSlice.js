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
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const {login, logout} = authSlice.actions;

export default authSlice;
