import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import { Card } from '../layout/card';
import { addBookData } from '@redux/app/book-actions';

import classes from '@css/books/new-book-form.module.css';

export const NewBookForm = (props) => {
	const router = useRouter();
	const dispatch = useDispatch();

	const titleRef = useRef('');
	const authorRef = useRef('');
	const categoryRef = useRef('');
	const priceRef = useRef('');
	const descriptionRef = useRef('');

	const submitHandler = (event) => {
		event.preventDefault();

		const uniqueId = uuidv4();
		const book = {
			id: uniqueId,
			title: titleRef.current.value,
			author: authorRef.current.value,
			category: categoryRef.current.value,
			price: priceRef.current.value,
			description: descriptionRef.current.value,
		};

		dispatch(addBookData(book));
		router.push('/');
	};

	return (
		<Card>
			<form onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor='title'>Book Title</label>
					<input
						type='text'
						required
						id='title'
						ref={titleRef}
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor='author'>Author</label>
					<input
						type='text'
						required
						id='author'
						ref={authorRef}
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor='category'>Category</label>
					<input
						type='text'
						required
						id='category'
						ref={categoryRef}
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor='price'>price</label>
					<input
						type='number'
						required
						id='price'
						step='0.01'
						ref={priceRef}
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor='description'>Description</label>
					<textarea
						id='description'
						required
						rows='5'
						ref={descriptionRef}
					></textarea>
				</div>
				<div className={classes.actions}>
					<button>Add Book</button>
				</div>
			</form>
		</Card>
	);
};
