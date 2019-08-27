import React from 'react';
import PropTypes from 'prop-types';

function TextInputBoxes({ topInput, bottomInput, handleTopChange, handleBottomChange }) {
    return (
        // should I have separate forms for each input? do I even NEED a form???
        <>
            <input onChange={handleTopChange} value={topInput} type="text" />
            <input onChange={handleBottomChange} value={bottomInput} type="text"/>
        </>
    );
}

TextInputBoxes.propTypes = {
    topInput: PropTypes.string.isRequired,
    bottomInput: PropTypes.string.isRequired,
    handleTopChange: PropTypes.func.isRequired,
    handleBottomChange: PropTypes.func.isRequired,
};

export default TextInputBoxes;
