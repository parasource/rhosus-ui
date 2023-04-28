import { filesAPI } from '@/services/files.service';
import { policiesAPI } from '@/services/policies.service';
import { systemAPI } from '@/services/system.service';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
	reducer: {
		[filesAPI.reducerPath]: filesAPI.reducer,
		[systemAPI.reducerPath]: systemAPI.reducer,
		[policiesAPI.reducerPath]: policiesAPI.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(filesAPI.middleware)
			.concat(systemAPI.middleware)
			.concat(policiesAPI.middleware)
});

setupListeners(store.dispatch);