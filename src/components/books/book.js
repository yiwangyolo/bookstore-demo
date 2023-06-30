import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { Card } from '../layout/card';
import { BookDetail } from './book-detail';
import { editBookData, deleteBookData } from '@redux/app/book-actions';
import classes from '@css/books/book.module.css';

export const Book = (props) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const [showDetails, setShowDetails] = useState(false);

	const closePopup = () => {
		setShowDetails(false);
	};

	const clickHandler = () => {
		setShowDetails(true);
	};

	// editing book
	const editBookHandler = (id, updatedBook) => {
		// can add validation or alert message here.
		dispatch(editBookData(id, updatedBook));
		router.reload();
	};

	// deleting book
	const deleteBookHandler = (id) => {
		// can add validation or alert message here.
		dispatch(deleteBookData(id));
		router.reload();
	};

	return (
		<li className={classes.item}>
			<Card>
				<div
					className={classes.content}
					onClick={clickHandler}
				>
					<h3>{props.title}</h3>
					<span>by {props.author}</span>
					<p>Category: {props.category}</p>
					<p>${props.price}</p>
					<p>{props.description}</p>
				</div>
				<div className={classes.actions}>
					<button onClick={() => deleteBookHandler(props.id)}>
						Delete Book
					</button>
					{showDetails && (
						<BookDetail
							props={props}
							onClose={closePopup}
							onEditBook={editBookHandler}
						/>
					)}
				</div>
			</Card>
		</li>
	);
};
