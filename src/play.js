import { createStore } from 'redux';

const initialState = {
    drinks: 0,
    chips: 0,
    sandwiches: 0
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_DRINKS':
            return { ...state, drinks: state.drinks + 1 };
        case 'REMOVE_DRINKS':
            return { ...state, drinks: state.drinks - 1 };
        case 'ADD_CHIPS':
            return { ...state, chips: state.chips + 1 };
        case 'REMOVE_CHIPS':
            return { ...state, chips: state.chips - 1 };
        case 'ADD_SANDWICHES':
            return { ...state, sandwiches: state.sandwiches + 1 };
        case 'REMOVE_SANDWICHES':
            return { ...state, sandwiches: state.sandwiches - 1 };
        default:
            return state;
    }
}

const store = createStore(reducer);

const ADD_DRINKS = {
    type: 'ADD_DRINKS'
};

const REMOVE_DRINKS = {
    type: 'REMOVE_DRINKS'
};

const ADD_CHIPS = {
    type: 'ADD_CHIPS'
};

const REMOVE_CHIPS = {
    type: 'REMOVE_CHIPS'
};

// const ADD_SANDWICHES = {
//     type: 'ADD_SANDWICHES'
// };

// const REMOVE_SANDWICHES = {
//     type: 'REMOVE_SANDWICHES'
// };

store.dispatch(ADD_DRINKS);
store.dispatch(ADD_DRINKS);
store.dispatch(ADD_DRINKS);
store.dispatch(REMOVE_DRINKS);

store.dispatch(ADD_CHIPS);
store.dispatch(ADD_CHIPS);
store.dispatch(ADD_CHIPS);
store.dispatch(REMOVE_CHIPS);






console.log(store.getState());
