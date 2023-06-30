import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@redux/index';

export default function MyApp(props) {
	const { Component, pageProps } = props;
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}
