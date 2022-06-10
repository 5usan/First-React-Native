import {configureStore} from '@reduxjs/toolkit';
import {loginApi} from '../services/loginApi';
import {userApi} from '../services/userApi';
import authSlice from './slice/authSlice';
import userSlice from './slice/userSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([loginApi.middleware, userApi.middleware]),
});
