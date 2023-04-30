import { createApi, FetchArgs } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '.';
import { TPoliciesList, TPolicyPath } from '@/types/policies.types';

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
		}),
		getPoliciesList: builder.mutation<TPoliciesList, null>({
			query: (): string | FetchArgs => ({
				method: 'LIST',
				url: '/sys/policies',
			}),
			transformResponse: (rawResult: { result: { data: TPoliciesList } }) => {
				return rawResult.result.data;
			},
		}),
	}),
});

export const useCreatePolicy = policiesAPI.endpoints.createPolicy.useMutation;
export const useGetPoliciesList = policiesAPI.endpoints.getPoliciesList.useMutation;