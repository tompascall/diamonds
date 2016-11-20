import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import ItemList from './components/ItemList';

const store = configureStore();
ReactDOM.render(
	<Provider store={store}>
		<ItemList />
	</Provider>,
	document.getElementById('app')
)
