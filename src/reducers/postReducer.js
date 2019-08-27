import { ADD_POST, DELETE_POST } from '../actions/postActions';

const initialState = {
    posts: [],
};

export default function postReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_POST:
            return { posts: [...state.posts, action.payload] };
            //TODO: figure out how to delete a post????????
        case DELETE_POST:
            return { posts: [...state.posts.filter(p => p.id !== action.payload.id)] };
        default: 
            return state;
    }
}
