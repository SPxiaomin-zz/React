import { connect } from 'react-redux';
import Change from '../components/Change';
import { buttonClick } from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        buttonClick: () => {
            dispatch(buttonClick());
        }
    };
}

const ClickChange = connect(
    null,
    mapDispatchToProps
)(Change);

export default ClickChange;
