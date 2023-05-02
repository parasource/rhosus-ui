import { createApi, FetchArgs } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '.';
import { TFilesList } from '@/types/files.types';
import { emitErrorResponse } from '@/utils/toastifyActions';

export const filesAPI = createApi({
	reducerPath: 'filesAPI',
	baseQuery,
	endpoints: (builder) => ({
		getFilesList: builder.mutation<TFilesList, string | null>({
			query: (path: string): string | FetchArgs => ({
				method: 'LIST',
				url: `/${path}`,
			}),
		}),
		getFile: builder.query<any, string | null>({
			query: (path: string): string | FetchArgs => ({
				url: `/${path}`,
			}),
			transformErrorResponse: (response: { err: string | [] }): void => {
				emitErrorResponse(response);
			},
		}),
		deleteFile: builder.mutation<{ success: boolean }, string | null>({
			query: (path: string): string | FetchArgs => ({
				method: 'DELETE',
				url: `/${path}`,
			}),
			transformErrorResponse: (response: { err: string | [] }): void => {
				emitErrorResponse(response);
			},
		}),
		putFile: builder.mutation<{ success: boolean }, { path: string, file: object }>({
			query: ({ path, ...file }: { path: string, file: object }) => ({
				method: 'POST',
				url: `/${path}`,
				formData: true,
				body: file,
			}),
			transformErrorResponse: (response: { err: string | [] }): void => {
				emitErrorResponse(response);
			},
		}),
	}),
});

export const usePutFile = filesAPI.endpoints.putFile.useMutation;
export const useGetFile = filesAPI.endpoints.getFile.useQuery;
export const useGetFilesList = filesAPI.endpoints.getFilesList.useMutation;