import { useSelector } from 'react-redux';
import './App.css';
import Categories from './components/Categories';
import { selectedProduct } from './redux/products/reducer';
import Products from './components/Products';
import { useState } from 'react';

function App() {
	const selected = useSelector(selectedProduct);
	const [display, setDisplay] = useState(false);
	return (
		<div className='App'>
			<header>
				<button onClick={() => setDisplay(!display)} className='btn-display'>
					Get Data
				</button>
			</header>
			<div className='container' style={{ display: display ? 'flex' : 'none' }}>
				<Categories />
				{selected && <Products />}
			</div>
		</div>
	);
}

export default App;
