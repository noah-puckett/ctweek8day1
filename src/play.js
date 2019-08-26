import { createStore } from 'redux';
import { 
    ADD_CHIPS, 
    addChip,
    ADD_DRINKS,
    addDrink, 
    ADD_SANDWICHES,
    addSandwich, 
    REMOVE_CHIPS, 
    removeChip,
    REMOVE_DRINKS,
    removeDrink, 
    REMOVE_SANDWICHES, 
    removeSandwich,
} from './actions/lunchActions';

const initialState = {
    drinks: 0,
    chips: 0,
    sandwiches: 0
};

//SPREAD STATE OR YOU WILL REGRET YOUR LIFE. 'alter' state by dot notating into it and then incrementing from that value
//

function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_DRINKS:
            return { ...state, drinks: state.drinks + 1 };
        case REMOVE_DRINKS:
            return { ...state, drinks: state.drinks - 1 };
        case ADD_CHIPS:
            return { ...state, chips: state.chips + 1 };
        case REMOVE_CHIPS:
            return { ...state, chips: state.chips - 1 };
        case ADD_SANDWICHES:
            return { ...state, sandwiches: state.sandwiches + 1 };
        case REMOVE_SANDWICHES:
            return { ...state, sandwiches: state.sandwiches - 1 };
        default:
            return state;
    }
}

const store = createStore(reducer);

store.dispatch(addDrink(1));


console.log(store.getState());
