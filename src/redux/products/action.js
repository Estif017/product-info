import axios from 'axios';
import {
	GET_PRODUCTS_PENDING,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_FAIL,
	SELECT_PRODUCT,
} from './reducer';

export const getProducts = () => async (dispatch, getState) => {
	const state = getState();
	try {
		dispatch({ type: GET_PRODUCTS_PENDING });
		const { data } = await axios.get(
			`https://dummyjson.com/products/category/${state.productsReducer.selectedProduct}`
		);
		dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: GET_PRODUCTS_FAIL });
		console.log(error);
	}
};

export const selectProduct = (value) => ({
	type: SELECT_PRODUCT,
	payload: value,
});
