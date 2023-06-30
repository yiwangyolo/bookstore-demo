'use client';

import { configureStore } from '@reduxjs/toolkit';

import { bookSlice } from './app/book-slice';

export const store = configureStore({
	reducer: {
		book: bookSlice.reducer,
	},
});
