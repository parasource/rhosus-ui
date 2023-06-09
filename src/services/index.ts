import { BaseQueryFn, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { FetchArgs } from '@reduxjs/toolkit/query/react';

export const baseQuery: BaseQueryFn<string | FetchArgs> = fetchBaseQuery({
	baseUrl: process.env.REACT_APP_BASE_URL,
	prepareHeaders: (headers: Headers) => {
		headers.set('X-Rhosus-Token', '590d1b5aae4c6bdbc189690746e9074874e69113902941b3b732e34de72179ff');
		return headers;
	},
	
});