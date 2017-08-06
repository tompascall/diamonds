import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index.js';

export default function configureStore (initialState) {
	return createStore(
		reducers,
		initialState,
		applyMiddleware(thunk)
	);
};
