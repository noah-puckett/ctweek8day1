// TopWords should retrieve the first 1000 words
import { connect } from 'react-redux';
import Words from '../components/words/Words';
import { getTopWordsByTerm } from '../selectors/wordsSelectors';

//map state from STORE (magical cloud of stateful shenanigans) to props -- which is what we'll pass to Words
const mapStateToProps = (state, props) => ({
    words: getTopWordsByTerm(state, props.match.params.count),
    count: props.match.params.count || 1000
});


export default
//container in SECOND parens is the one we're PASSING STATE TO. AS PROPS. in MAP STATE TO PROPS
connect(mapStateToProps)(Words);
