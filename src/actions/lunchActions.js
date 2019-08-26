
export const ADD_DRINKS = 'ADD_DRINKS';
export const addDrink = drink => {
    return { type: ADD_DRINKS, payload: drink };
};

export const REMOVE_DRINKS = 'REMOVE_DRINKS';
export const removeDrink = drink => {
    return { type: REMOVE_DRINKS, payload: drink };
};

export const ADD_CHIPS = 'ADD_CHIPS';
export const addChip = chip => {
    return { type: ADD_CHIPS, payload: chip };
};

export const REMOVE_CHIPS = 'REMOVE_CHIPS';
export const removeChip = chip => {
    return { type: REMOVE_CHIPS, payload: chip };
};

export const ADD_SANDWICHES = 'ADD_SANDWICHES';
export const addSandwich = sandwich => {
    return { type: ADD_SANDWICHES, payload: sandwich };
};

export const REMOVE_SANDWICHES = 'REMOVE_SANDWICHES';
export const removeSandwich = sandwich => {
    return { type: REMOVE_SANDWICHES, payload: sandwich };
};

