import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
	name: 'book',
	initialState: {
		books: [],
		changed: false,
	},
	reducers: {
		loadBooks(state, action) {
			state.books = action.payload.books;
		},
		addBook(state, action) {
			const newBook = action.payload;
		},
		deleteBook(state, action) {
			const id = action.payload;
			state.books = state.books.filter((book) => book.id !== id);
		},
		editBook(state, action) {
			const id = action.payload;
			console.log(id);
		},
	},
});

export const bookActions = bookSlice.actions;
