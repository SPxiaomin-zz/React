import React, { Component } from 'react';
import AppChildOneWrapper from './components/AppChildOneWrapper';
import AppChildTwoWrapper from './components/AppChildTwoWrapper';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            curItem: 'item1'
        };
    }

    getChildContext() {
        return {
            curItem: this.state.curItem,
            changeItem: this.changeItem.bind(this)
        };
    }

    changeItem(item) {
        this.setState({
            curItem: item
        });
    }

    render() {
        return (
            <div>
                <AppChildOneWrapper />
                <AppChildTwoWrapper />
            </div>
        );
    }
}

App.childContextTypes = {
    curItem: React.PropTypes.any,
    changeItem: React.PropTypes.any
};

export default App;
