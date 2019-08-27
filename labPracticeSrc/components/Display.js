import React from 'react';
import PropTypes from 'prop-types';

function Display({ topInput, bottomInput }) {
    return (<>
        <h1>{topInput}</h1>
        <h3>{bottomInput}</h3>
        </>);
}

Display.propTypes = {
    topInput: PropTypes.string.isRequired,
    bottomInput: PropTypes.string.isRequired,
};

export default Display;
