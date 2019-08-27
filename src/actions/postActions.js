
export const ADD_POST = 'ADD_POST';
export const addPost = post => {
    return { type: ADD_POST, payload: { id: post.id, title: post.title, body: post.body } };
};


//TODO: how do you fucking delete a post what the fuuuuuuuuuck
export const DELETE_POST = 'DELETE_POST';
export const deletePost = post => {
    return { type: DELETE_POST, payload: { id: post.id } };
};
