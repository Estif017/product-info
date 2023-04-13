import axios from 'axios';
import {
	GET_CATEGORIES_PENDING,
	GET_CATEGORIES_SUCCESS,
	GET_CATEGORIES_FAIL,
} from './reducer';

export const getCategories = () => async (dispatch, getState) => {
	try {
		dispatch({ type: GET_CATEGORIES_PENDING });
		const { data } = await axios.get(
			'https://dummyjson.com/products/categories'
		);
		dispatch({ type: GET_CATEGORIES_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: GET_CATEGORIES_FAIL });
		console.log(error);
	}
};
