import { useRef } from 'react';
import { Card } from '../layout/card';

import classes from '@css/books/book-detail.module.css';

export const BookDetail = (props) => {
	const titleRef = useRef('');
	const authorRef = useRef('');
	const categoryRef = useRef('');
	const priceRef = useRef('');
	const descriptionRef = useRef('');

	const editBookHandler = (event) => {
		event.preventDefault();

		const updatedBook = {
			title: titleRef.current.value,
			author: authorRef.current.value,
			category: categoryRef.current.value,
			price: priceRef.current.value,
			description: descriptionRef.current.value,
		};

		props.onEditBook(props.props.id, updatedBook);
	};
	return (
		<Card>
			<section className={classes.detail}>
				<div className={classes.popup}>
					<form onSubmit={editBookHandler}>
						<div className={classes.control}>
							<label htmlFor='title'>Book Title</label>
							<input
								type='text'
								required
								id='title'
								defaultValue={props.props.title}
								ref={titleRef}
							/>
						</div>
						<div className={classes.control}>
							<label htmlFor='author'>Author</label>
							<input
								type='text'
								required
								id='author'
								defaultValue={props.props.author}
								ref={authorRef}
							/>
						</div>
						<div className={classes.control}>
							<label htmlFor='category'>Category</label>
							<input
								type='text'
								required
								id='category'
								defaultValue={props.props.category}
								ref={categoryRef}
							/>
						</div>
						<div className={classes.control}>
							<label htmlFor='price'>Price</label>
							<input
								type='number'
								required
								id='price'
								step='0.01'
								defaultValue={props.props.price}
								ref={priceRef}
							/>
						</div>
						<div className={classes.control}>
							<label htmlFor='description'>Description</label>
							<textarea
								id='description'
								required
								rows='5'
								defaultValue={props.props.description}
								ref={descriptionRef}
							></textarea>
						</div>
						<div className={classes.actions}>
							<button onClick={props.onClose}>Close</button>
							<button>Save</button>
						</div>
					</form>
				</div>
			</section>
		</Card>
	);
};
