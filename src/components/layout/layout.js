import MainNavigation from './main-navigation';
import classes from '@css/layout/layout.module.css';

export default function Layout({ children }) {
	return (
		<div>
			<MainNavigation />
			<main className={classes.main}>{children}</main>
		</div>
	);
}
