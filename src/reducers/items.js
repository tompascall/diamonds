export function itemsHasErrored (state = false, action) {
	switch (action.type) {
		case 'ITEMS_HAS_ERRORED:
			return action.hasErrored;
			break;
		default:
			return state;
	}
}

export function itemsIsLoading (state = false, action) {
	switch (action.type) {
		case 'ITEMS_IS_LOADING':
			return action.isLoading;
			break;
		default:
			return state;
	}
}

export function items (state = [], action) {
	switch (action.type) {
		case 'ITEMS_FETCH_DATA_SUCCESS':
			return action.items;
			break;
		default:
			return state;
	}
}
