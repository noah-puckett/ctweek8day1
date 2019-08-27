import { connect } from 'react-redux';
import Display from '../components/Display';
import { getTopInput, getBottomInput } from '../selectors/controlsSelector';

//map state from STORE (magical cloud of stateful shenanigans) to props -- which is what we'll pass to TextInputBoxes
const mapStateToProps = state => ({
    topInput: getTopInput(state),
    bottomInput: getBottomInput(state)
});


export default
//container in SECOND parens is the one we're PASSING STATE TO. AS PROPS. in MAP STATE TO PROPS
connect(mapStateToProps)(Display);
