import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'userDetails',
  initialState: {
    userDetails: null,
  },
  reducers: {
    getUserData(state, actions) {
      state.address = actions.payload;
      console.log(state.userDetails, 'payload');
    },
  },
});

export const {getUserData} = userSlice.actions;

export default userSlice;
