import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	productsHasErrorSelector,
	productsIsLoadingSelector,
	productsSelector,
	selectedProduct,
} from '../redux/products/reducer';
import { getProducts } from '../redux/products/action';

const Products = () => {
	const products = useSelector(productsSelector);
	const isLoading = useSelector(productsIsLoadingSelector);
	const hasError = useSelector(productsHasErrorSelector);
	const selected = useSelector(selectedProduct);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
		// eslint-disable-next-line
	}, [selected]);

	return (
		<>
			{isLoading && <h1>Loading....</h1>}
			{hasError && <h1>Error....</h1>}
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Price</th>
						<th>Title</th>
					</tr>
				</thead>
				<tbody>
					{products.products &&
						products.products.map(({ id, price, title }) => (
							<tr key={id}>
								<td>{id}</td>
								<td>{price}</td>
								<td>{title}</td>
							</tr>
						))}
				</tbody>
			</table>
		</>
	);
};

export default Products;
