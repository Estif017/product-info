export const GET_PRODUCTS_PENDING = 'GET_PRODUCTS_PENDING';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL';
export const SELECT_PRODUCT = 'SELECT_PRODUCT';

const initialState = {
	products: [],
	isLoading: false,
	hasError: false,
	selectedProduct: '',
};

export const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PRODUCTS_PENDING:
			return {
				...state,
				isLoading: true,
				hasError: false,
			};
		case GET_PRODUCTS_SUCCESS:
			return {
				...state,
				isLoading: false,
				hasError: false,
				products: { ...action.payload },
			};
		case GET_PRODUCTS_FAIL:
			return {
				...state,
				isLoading: false,
				hasError: true,
			};
		case SELECT_PRODUCT:
			return {
				...state,
				selectedProduct: action.payload,
			};
		default:
			return state;
	}
};

export const productsSelector = (state) => state.productsReducer.products;
export const productsIsLoadingSelector = (state) =>
	state.productsReducer.isLoading;
export const productsHasErrorSelector = (state) =>
	state.productsReducer.hasError;
export const selectedProduct = (state) => state.productsReducer.selectedProduct;
