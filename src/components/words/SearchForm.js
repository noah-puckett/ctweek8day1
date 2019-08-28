import React from 'react';
import PropTypes from 'prop-types';

function SearchForm({ searchTerm, onChange }) {
    return (<>
            <input value={searchTerm} onChange={onChange} type="text" />
        </>
    );
}

SearchForm.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default SearchForm;
