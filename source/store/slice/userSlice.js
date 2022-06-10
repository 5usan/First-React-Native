import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'userDetails',
  initialState: {
    userDetails: null,
  },
  reducers: {
    getUserData(state, actions) {
      state.userDetails = actions.payload;
    },
  },
});

export const {getUserData} = userSlice.actions;

export default userSlice;
