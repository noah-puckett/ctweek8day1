import { connect } from 'react-redux';
import TextInputBoxes from '../components/Controls';
import { getTopInput, getBottomInput } from '../selectors/controlsSelector';
import { updateTopInput, updateBottomInput } from '../actions/controlsActions';

//map state from STORE (magical cloud of stateful shenanigans) to props -- which is what we'll pass to TextInputBoxes
const mapStateToProps = state => ({
    topInput: getTopInput(state),
    bottomInput: getBottomInput(state)
});

//pass the result of calling the dispatch function... to component (TextInputBoxes) AS props. 
const mapDispatchToProps = dispatch => ({
    handleTopChange({ target }) {
        dispatch(updateTopInput(target.value));
    },
    handleBottomChange({ target }) {
        dispatch(updateBottomInput(target.value));
    }
});

export default
//container in SECOND parens is the one we're PASSING STATE TO. AS PROPS. in MAP STATE TO PROPS
connect(mapStateToProps, mapDispatchToProps)(TextInputBoxes);
