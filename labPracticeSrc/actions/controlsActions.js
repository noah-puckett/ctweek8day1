export const UPDATE_TOP_INPUT = 'UPDATE_TOP_INPUT';
export const updateTopInput = (topInput) => {
    return { type: UPDATE_TOP_INPUT,
        payload:  topInput };
};

export const UPDATE_BOTTOM_INPUT = 'UPDATE_BOTTOM_INPUT';
export const updateBottomInput = (bottomInput) => {
    return { type: UPDATE_BOTTOM_INPUT,
        payload:  bottomInput };
};
