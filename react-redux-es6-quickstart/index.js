import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';

let store = createStore(myApp);

class Change extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.actions.buttonClick();
    }

    render() {
        return (
            <button onClick={this.handleClick}>change</button>
        );
    }
}

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { actions, text } = this.props;

        return (
            <div>
                <Hello actions={actions} text={text} />
                <Change actions={actions} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        text: state.text
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            changeText: changeText,
            buttonClick: buttonClick
        }, dispatch)
    };
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// ReactDOM.render(
//     <Test />,
//     document.getElementById('root')
// );
