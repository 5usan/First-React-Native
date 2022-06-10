import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {apiRoute} from '../config/configRoute';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiRoute.BASE_URL,
    // prepareHeaders: async headers => {
    //   const token = JSON.parse(
    //     await JSON.parse(AsyncStorage.getItem('user')),
    //   ).accessToken;
    //   headers.set('Authorization', `Bearer ${token}`);
    //   return headers;
    // },
  }),
  endpoints: builder => ({
    login: builder.mutation({
      query: data => {
        return {
          url: apiRoute.login,
          method: 'POST',
          body: data,
        };
      },
    }),
  }),
});

export const {useLoginMutation} = loginApi;
