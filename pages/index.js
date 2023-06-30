import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import dynamic from 'next/dynamic';

import Layout from '@components/layout/layout';
import { fetchBookData } from '@redux/app/book-actions';

const BookList = dynamic(() => import('@components/books/book-list'));

export default function HomePage(props) {
	const [books, setBooks] = useState([]);

	const dispatch = useDispatch();
	const book = useSelector((state) => state.book);
	const fetchedBooks = book.books;

	useEffect(() => {
		dispatch(fetchBookData())
			.then(() => setBooks(fetchedBooks))
			.catch((err) => console.error(err));
	}, [dispatch]);

	useEffect(() => {
		setBooks(props.books);
	}, []);

	return (
		<Layout>
			<BookList books={fetchedBooks} />
		</Layout>
	);
}

export const getServerSideProps = async () => {
	try {
		const res = await fetch(
			'https://bookstore-demo-14477-default-rtdb.firebaseio.com/books.json'
		);
		const data = await res.json();

		let booksList = [];

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

		booksList = Array.isArray(booksList) ? booksList : [];

		return {
			props: {
				books: booksList,
			},
		};
	} catch (error) {
		console.error('Error fetching books:', error);

		return {
			props: {
				books: [],
			},
		};
	}
};
