import { createStore, combineReducers, applyMiddleware } from 'redux';
import { promise, logger } from './middleware';
//
import { data } from '../_reducers/data';
const reducers = combineReducers({
	data
});

const store = createStore(reducers, applyMiddleware(promise, logger));

export default store;
