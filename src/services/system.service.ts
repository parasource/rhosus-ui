import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '.';
import { TLoginResponse, TLoginUser } from '@/types/system.types';

export const systemAPI = createApi({
	reducerPath: 'systemAPI',
	baseQuery,
	endpoints: (builder) => ({
		makeDir: builder.mutation<{success: boolean}, string>({
			query: (path) => ({
				method: 'POST',
				url: '/sys/mkdir',
				body: {path: path}
			})
		}),
		login: builder.mutation<TLoginResponse, TLoginUser>({
			query: (body) => ({
				method: 'POST',
				url: '/sys/loging',
				body
			}),
			transformResponse: (rawResult: { result: { data: TLoginResponse } }) => {
				return rawResult.result.data;
			},
		}),
	})
});

export const useMakeDir = systemAPI.endpoints.makeDir.useMutation;
export const useLogin = systemAPI.endpoints.login.useMutation;