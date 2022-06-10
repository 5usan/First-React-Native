import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {apiRoute} from '../config/configRoute';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiRoute.BASE_URL,
  }),
  endpoints: builder => ({
    getUserDetails: builder.query({
      query: ({id, token}) => {
        return {
          url: apiRoute.getUser + id,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const {useLazyGetUserDetailsQuery} = userApi;
