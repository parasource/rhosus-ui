import { createApi, FetchArgs } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '.';
import { TPoliciesList, TPolicyPath } from '@/types/policies.types';
import { emitErrorResponse } from '@/utils/toastifyActions';

export const policiesAPI = createApi({
	reducerPath: 'policiesAPI',
	baseQuery,
	endpoints: (builder) => ({
		createPolicy: builder.mutation<{ success: boolean }, { name: string, body: Array<TPolicyPath> }>({
			query: ({ name, ...body }: { name: string, body: Array<TPolicyPath> }): string | FetchArgs => ({
				method: 'POST',
				url: `/sys/policies/${name}`,
				body,
			}),
			transformErrorResponse: (response: { err: string | [] }): void => {
				emitErrorResponse(response);
			},
		}),
		getPoliciesList: builder.mutation<TPoliciesList, null>({
			query: (): string | FetchArgs => ({
				method: 'LIST',
				url: '/sys/policies',
			}),
			transformResponse: (rawResult: { result: { data: TPoliciesList } }) => {
				return rawResult.result.data;
			},
			transformErrorResponse: (response: { err: string | [] }): void => {
				emitErrorResponse(response);
			},
		}),
	}),
});

export const useCreatePolicy = policiesAPI.endpoints.createPolicy.useMutation;
export const useGetPoliciesList = policiesAPI.endpoints.getPoliciesList.useMutation;