import { Book } from './book';
import classes from '@css/books/book-list.module.css';

const BookList = (props) => {
	return (
		<ul className={classes.list}>
			{props.books.map((book) => (
				<Book
					key={book.id}
					id={book.id}
					title={book.title}
					author={book.author}
					category={book.category}
					price={book.price}
					description={book.description}
				/>
			))}
		</ul>
	);
};

export default BookList;
