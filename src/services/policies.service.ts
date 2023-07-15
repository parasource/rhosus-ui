import { createApi, FetchArgs } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '.';
import { TPoliciesList, TPolicy, TPolicyPath } from '@/types/policies.types';
import { emitErrorResponse } from '@/utils/toastifyActions';
import { strict } from 'assert';

export const policiesAPI = createApi({
	reducerPath: 'policiesAPI',
	baseQuery,
	endpoints: (builder) => ({
		createPolicy: builder.mutation<{ success: boolean }, { name: string, body: object }>({
			query: ({ name, body }: { name: string, body: object }): string | FetchArgs => ({
				method: 'POST',
				url: `/sys/policies/${name}`,
				body,
			}),
			transformErrorResponse: (response: { err: string | [] }): void => {
				emitErrorResponse(response);
			},
		}),
		editPolicy: builder.mutation<{ success: boolean }, { name: string, body: object }>({
			query: ({ name, body }: { name: string, body: object }): string | FetchArgs => ({
				method: 'PUT',
				url: `/sys/policies/${name}`,
				body,
			}),
			transformErrorResponse: (response: { err: string | [] }): void => {
				emitErrorResponse(response);
			},
		}),
		getPoliciesList: builder.mutation<TPoliciesList, string>({
			query: (value: string): string | FetchArgs => ({
				method: 'LIST',
				url: '/sys/policies',
			}),
			transformResponse: (resp: TPoliciesList) => resp,
			transformErrorResponse: (response: { err: string | [] }): void => {
				emitErrorResponse(response);
			},
		}),
		getCurrentPolicy: builder.query<TPolicy, string>({
			query: (value) => `/sys/policies/${value}`
		}),
		removePolicy: builder.mutation<any, string>({
			query: (value): string | FetchArgs => ({
				method: 'DELETE',
				url: `/sys/policies/${value}`
			})
		})
	}),
});

export const useCreatePolicy = policiesAPI.endpoints.createPolicy.useMutation;
export const useGetPoliciesList = policiesAPI.endpoints.getPoliciesList.useMutation;
export const useGetCurrentPolicy = policiesAPI.endpoints.getCurrentPolicy.useQuery;
export const useRemovePolicy = policiesAPI.endpoints.removePolicy.useMutation;
export const useEditPolicy = policiesAPI.endpoints.editPolicy.useMutation;