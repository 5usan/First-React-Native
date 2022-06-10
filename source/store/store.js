import {configureStore} from '@reduxjs/toolkit';
import {loginApi} from '../services/loginApi';
import authSlice from './authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(loginApi.middleware),
});
