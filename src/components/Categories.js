import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../redux/categories/action';
import {
	categoriesHasErrorSelector,
	categoriesIsLoadingSelector,
	categoriesSelector,
} from '../redux/categories/reducer';
import { selectProduct } from '../redux/products/action';

const Categories = () => {
	const dispatch = useDispatch();
	const categories = useSelector(categoriesSelector);
	const isLoading = useSelector(categoriesIsLoadingSelector);
	const hasError = useSelector(categoriesHasErrorSelector);

	useEffect(() => {
		dispatch(getCategories());
		// eslint-disable-next-line
	}, []);

	const handleClick = (category) => {
		dispatch(selectProduct(category));
	};

	return (
		<div>
			<h1>ProductInfo</h1>
			{isLoading && <h1>Loading....</h1>}
			{hasError && <h1>Error....</h1>}
			<div className='categories'>
				{categories &&
					categories.map((category, idx) => (
						<button onClick={() => handleClick(category)} key={idx}>
							{category}
						</button>
					))}
			</div>
		</div>
	);
};

export default Categories;
