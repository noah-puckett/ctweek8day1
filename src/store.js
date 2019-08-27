import { createStore } from 'redux';
import combineReducer from './reducers/combineReducers';
// const store = createStore(reducer); // this was what we first had, dunno wtf honestly
const store = createStore(
    combineReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch({ type: 'ADD_POST',
    payload: { id: 123, title: 'my cool title', body: 'noah is not thrilled with redux' }
});

store.dispatch({ type: 'ADD_POST',
    payload: { id: 456, title: 'my other cool title', body: 'part TWO' }
});

store.dispatch({
    type: 'ADD_COMMENT',
    payload: { id: 456, comment: 'HAVE I SUCCESSED?' }
});

store.dispatch({
    type: 'ADD_COMMENT',
    payload: { id: 456, comment: 'do I work?' }
});

store.dispatch({
    type: 'ADD_COMMENT',
    payload: { id: 123, comment: 'a whole new id?' }
});

store.dispatch({
    type: 'DELETE_COMMENT',
    payload: { id: 456, commentIndex: 0 }
});

console.log(store.getState());
export default store;
