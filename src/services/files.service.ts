import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '.';
import { TFilesList } from '@/types/file.types';

export const filesAPI = createApi({
	reducerPath: 'filesAPI',
	baseQuery,
	endpoints: (builder) => ({
		getFilesList: builder.mutation<TFilesList, string | null>({
			query: (path) => ({
				method: 'LIST',
				url: `/${path}`,
			}),
			transformResponse: (rawResult: { result: { data: TFilesList } }) => {
				return rawResult.result.data;
			},
		}),
		getFile: builder.query<any, string | null>({
			query: (path) => ({
				url: `/${path}`,
			}),
		}),
		deleteFile: builder.mutation<{success: boolean}, string | null>({
			query: (path) => ({
				method: 'DELETE',
				url: `/${path}`,
			}),
		}),
		putFile: builder.mutation<{success: boolean}, {path: string, file: object}>({
			query: ({path, ...file}) => ({
				method: 'POST',
				url: `/${path}`,
				formData: true,
				body: file
			}),
		}),
	})
});

export const usePutFile = filesAPI.endpoints.putFile.useMutation;
export const useGetFile = filesAPI.endpoints.getFile.useQuery;
export const useGetFilesList = filesAPI.endpoints.getFilesList.useMutation;