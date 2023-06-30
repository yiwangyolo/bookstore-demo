import { db } from '@components/firebase/init-firebase';
import { ref, remove, update } from 'firebase/database';

import { bookActions } from './book-slice';

export const fetchBookData = () => {
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await fetch(
				'https://bookstore-demo-14477-default-rtdb.firebaseio.com/books.json'
			);

			if (!response.ok) {
				throw new Error('Could not fetch book data.');
			}

			const data = await response.json();

			return data;
		};

		try {
			let booksList = [];
			const data = await fetchData();

			for (const key in data) {
				booksList.push({
					id: key,
					title: data[key].title,
					author: data[key].author,
					category: data[key].category,
					price: data[key].price,
					description: data[key].description,
				});
			}

			dispatch(
				bookActions.loadBooks({
					books: booksList || [],
				})
			);
		} catch (error) {
			console.error('Your request failed: ', error);
		}
	};
};

export const addBookData = (book) => {
	return async (dispatch) => {
		const addBook = async () => {
			const response = await fetch(
				'https://bookstore-demo-14477-default-rtdb.firebaseio.com/books.json',
				{
					method: 'POST',
					body: JSON.stringify(book),
					headers: { 'Content-Type': 'Application/json' },
				}
			);

			if (!response.ok) {
				throw new Error('Could not add book data.');
			}

			const data = await response.json();

			return data;
		};

		try {
			await addBook();
			dispatch(bookActions.addBook());
		} catch (error) {
			console.error('Your request failed: ', error);
		}
	};
};

export const deleteBookData = (id) => {
	return async (dispatch) => {
		try {
			await remove(ref(db, 'books/' + id));
			dispatch(bookActions.deleteBook());
		} catch (error) {
			console.error('Your request failed: ', error);
		}
	};
};

export const editBookData = (id, book) => {
	return async (dispatch) => {
		try {
			const { title, author, category, price, description } = book;
			await update(ref(db, 'books/' + id), {
				title,
				author,
				category,
				price,
				description,
			});
			dispatch(bookActions.editBook());
		} catch (error) {
			console.error('Your request failed: ', error);
		}
	};
};
