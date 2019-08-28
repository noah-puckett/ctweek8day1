export function getWords(state) {
    return state.wordsReducer.dictionary;
}

export const getTopWords = (state, numOfWordsToGet = 1000) => {
    return getWords(state).slice(0, numOfWordsToGet);
};

export function getSearchTerm(state) {
    return state.wordsReducer.searchTerm;
}

export function getTopWordsByTerm(state, count) {

    const searchTerm = getSearchTerm(state);
    return getWords(state).filter(word => {
        return word.includes(searchTerm);
    }).slice(0, count);

}
