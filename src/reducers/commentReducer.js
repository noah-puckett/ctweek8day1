import { ADD_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

const initialState = {
    comments: {},
};

// store comments for each post 
//(create an object where the key is a post's index/id and the value is an array of comments

export default function commentReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_COMMENT:

            console.log('step 1', state);
            console.log('step 2', state.comments);
            console.log('step 3', [action.payload.id]);
            console.log('step 4', (state.comments[action.payload.id] || []));
            console.log('step 5', action.payload.comment);

            //return an object, 
            //inside of which is the entirety of our state, then mutates the value of the 'comments' key to have a value of
            //a new object that contains the entirety of our state's 'comments' object, then
            //the VALUE of 'action.payload.id' (which in this case is a number) is the KEY, and that key's VALUE is
            //EITHER an empty array (because when everything is first evaluated it is empty), OR
            //our action's payload's comment itself. 

            return { ...state, comments: { ...state.comments, [action.payload.id]: [...(state.comments[action.payload.id] || []), action.payload.comment] } };
        case DELETE_COMMENT:
            return { 
                ...state, 
                comments: { 
                    ...state.comments, 
                    [action.payload.id]: state.comments[action.payload.id].filter((c, i) => i !== action.payload.commentIndex) 
                     
                } 
            };
        default: 
            return state;
    }

    // .filter(c => c !== action.payload.commentIndex)
}
