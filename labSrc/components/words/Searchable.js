import React from 'react';
import PropTypes from 'prop-types';
import SearchWords from '../../containers/SearchWords';
import TopWords from '../../containers/TopWords';

function Searchable({ match }) {

    return (
        <>
        <SearchWords />
        <TopWords match={match} />
        </>
    );
}

Searchable.propTypes = {
    match: PropTypes.object.isRequired
};

export default Searchable;
