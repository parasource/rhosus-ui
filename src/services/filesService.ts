import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '.';

export const filesAPI = createApi({
	reducerPath: 'filesAPI',
	baseQuery,
	endpoints: (builder) => ({
		getFilesList: builder.query<Array<any>, null>({
			query: () => '/sys/list/',
		}),
	})
});

export const useGetFilesList = filesAPI.endpoints.getFilesList.useQuery;