import { createApi, FetchArgs } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '.';
import { TLoginResponse, TLoginUser } from '@/types/system.types';
import { emitErrorResponse } from '@/utils/toastifyActions';

export const systemAPI = createApi({
	reducerPath: 'systemAPI',
	baseQuery,
	endpoints: (builder) => ({
		makeDir: builder.mutation<{ success: boolean }, string>({
			query: (path: string): string | FetchArgs => ({
				method: 'POST',
				url: '/sys/mkdir',
				body: { path: path },
			}),
			transformErrorResponse: (response: { err: string | [] }): void => {
				emitErrorResponse(response);
			},
		}),
		login: builder.mutation<TLoginResponse, TLoginUser>({
			query: (body: TLoginUser): string | FetchArgs => ({
				method: 'POST',
				url: '/sys/login',
				body,
			}),
			transformResponse: (rawResult: { result: { data: TLoginResponse } }) => {
				return rawResult.result.data;
			},
			transformErrorResponse: (response: { err: string | [] }): void => {
				emitErrorResponse(response);
			},
		}),
	}),
});

export const useMakeDir = systemAPI.endpoints.makeDir.useMutation;
export const useLogin = systemAPI.endpoints.login.useMutation;