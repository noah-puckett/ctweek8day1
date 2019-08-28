export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const updateSearchTerm = (searchTerm) => {
    return { 
        type: UPDATE_SEARCH_TERM,
        payload: searchTerm 
    };
};
