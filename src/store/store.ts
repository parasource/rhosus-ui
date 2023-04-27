import { filesAPI } from '@/services/filesService';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
	reducer: {
		[filesAPI.reducerPath]: filesAPI.reducer
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(filesAPI.middleware),
});

setupListeners(store.dispatch);