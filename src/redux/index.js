import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { categoriesReducer } from './categories/reducer';
import { productsReducer } from './products/reducer';

const reducers = combineReducers({ categoriesReducer, productsReducer });

export const store = createStore(reducers, applyMiddleware(thunk));
