import { createStore } from 'redux';
import combineReducers from './reducers/combineReducers';

export default createStore(
    combineReducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
