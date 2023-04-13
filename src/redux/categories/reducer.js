export const GET_CATEGORIES_PENDING = 'GET_CATEGORIES_PENDING';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAIL = 'GET_CATEGORIES_FAIL';

const initialState = {
	categories: [],
	isLoading: false,
	hasError: false,
};

export const categoriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CATEGORIES_PENDING:
			return {
				...state,
				isLoading: true,
				hasError: false,
			};
		case GET_CATEGORIES_SUCCESS:
			return {
				...state,
				isLoading: false,
				hasError: false,
				categories: [...action.payload],
			};
		case GET_CATEGORIES_FAIL:
			return {
				...state,
				isLoading: false,
				hasError: true,
			};
		default:
			return state;
	}
};

export const categoriesSelector = (state) => state.categoriesReducer.categories;
export const categoriesIsLoadingSelector = (state) =>
	state.categoriesReducer.isLoading;
export const categoriesHasErrorSelector = (state) =>
	state.categoriesReducer.hasError;
