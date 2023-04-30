import { BaseQueryFn, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { FetchArgs } from '@reduxjs/toolkit/query/react';

export const baseQuery: BaseQueryFn<string | FetchArgs> = fetchBaseQuery({
	baseUrl: process.env.REACT_APP_BASE_URL,
	prepareHeaders: (headers: Headers) => {
		return headers.set('X-Rhosus-Token', 'db504fe62fb5b025465b822b1a68bdc3c1609a956715ff3de94accdecc0d4d9a');
	},
});