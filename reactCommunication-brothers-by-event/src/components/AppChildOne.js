import React, { Component } from 'react';
import EventEmitter from  '../utils/EventEmitter';

class AppChildOne extends Component {
    constructor(props) {
        super(props);

        this.state = {
            curItem: 'item1'
        };
    }

    render() {
        return (
            <p>
                The curItem is: {this.state.curItem}
            </p>
        );
    }

    componentDidMount() {
        EventEmitter.subscribe('changeItem', (item) => {
            this.setState({
                curItem: item
            });
        });
    }

    componentWillUnmount() {
        EventEmitter.unSubscribe('changeItem');
    }
}

export default AppChildOne;
