export const ADD_COMMENT = 'ADD_COMMENT';
export const addComment = (postId, comment) => {
    return { type: ADD_COMMENT, payload: { id: postId, comment } };
};


// TODO: how do you fucking delete a COMMENT what the fuuuuuuuuuck
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = (postId, commentIndex) => {
    return { type: DELETE_COMMENT, payload: { id: postId, commentIndex } };
};
