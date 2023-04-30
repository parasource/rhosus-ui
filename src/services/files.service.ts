import { createApi, FetchArgs } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '.';
import { TFilesList } from '@/types/files.types';

export const filesAPI = createApi({
	reducerPath: 'filesAPI',
	baseQuery,
	endpoints: (builder) => ({
		getFilesList: builder.mutation<TFilesList, string | null>({
			query: (path: string): string | FetchArgs => ({
				method: 'LIST',
				url: `/${path}`,
			}),
			transformResponse: (rawResult: { result: { data: TFilesList } }) => {
				return rawResult.result.data;
			},
		}),
		getFile: builder.query<any, string | null>({
			query: (path: string): string | FetchArgs => ({
				url: `/${path}`,
			}),
		}),
		deleteFile: builder.mutation<{ success: boolean }, string | null>({
			query: (path: string): string | FetchArgs => ({
				method: 'DELETE',
				url: `/${path}`,
			}),
		}),
		putFile: builder.mutation<{ success: boolean }, { path: string, file: object }>({
			query: ({ path, ...file }: { path: string, file: object }) => ({
				method: 'POST',
				url: `/${path}`,
				formData: true,
				body: file,
			}),
		}),
	}),
});

export const usePutFile = filesAPI.endpoints.putFile.useMutation;
export const useGetFile = filesAPI.endpoints.getFile.useQuery;
export const useGetFilesList = filesAPI.endpoints.getFilesList.useMutation;