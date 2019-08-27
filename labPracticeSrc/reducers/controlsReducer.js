//import actions
import { UPDATE_TOP_INPUT, UPDATE_BOTTOM_INPUT } from '../actions/controlsActions';

const initialState = {
    topInput: '',
    bottomInput: ''
};

export default function controlsReducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_TOP_INPUT: 
            return { ...state, topInput: action.payload };
        case UPDATE_BOTTOM_INPUT: 
            return { ...state, bottomInput: action.payload };
        default: 
            return state;
    }
}
