import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authSlice = createSlice({
  name: 'Authentication',
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
