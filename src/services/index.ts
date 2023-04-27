import { fetchBaseQuery } from '@reduxjs/toolkit/query';

export const baseQuery = fetchBaseQuery({
	baseUrl: process.env.REACT_APP_BASE_URL,
	prepareHeaders: (headers) => {
		return headers.set('X-Rhosus-Token', 'fd39d867c81dea90e7fe91a6f092594e2ec180e72863c57a20a2b6f6f9590fa7');
	} 
});