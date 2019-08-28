// TopWords should retrieve the first 1000 words
import { connect } from 'react-redux';
import SearchForm from '../components/words/SearchForm';
import { getSearchTerm } from '../selectors/wordsSelectors';
import { updateSearchTerm } from '../actions/wordsActions';

//map state from STORE (magical cloud of stateful shenanigans) to props -- which is what we'll pass to Words
const mapStateToProps = (state) => ({
    searchTerm: getSearchTerm(state),
});

//this uhhhhh is where we create CALLBACK FUNCTIONS that we send to our SearchForm component, I think???
const mapDispatchToProps = dispatch => ({
    onChange({ target }) {
        dispatch(updateSearchTerm(target.value));
    }
});

export default
//container in SECOND parens is the one we're PASSING STATE TO. AS PROPS. in MAP STATE TO PROPS
connect(mapStateToProps, mapDispatchToProps)(SearchForm);
