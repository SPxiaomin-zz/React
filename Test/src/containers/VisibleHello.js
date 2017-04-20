import { connect } from 'react-redux';
import Hello from '../components/Hello';
import { VisibleHello } from '../actions';

function mapStateToProps(state) {
    return {
        text: state.text
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeText: () => {
            dispatch(VisibleHello());
        }
    };
}

const VisibleHello = connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello);

export default VisibleHello;
