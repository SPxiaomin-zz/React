import React, { Component } from 'react';

class AppChildOne extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>{this.props.value}</p>
        );
    }
}

export default AppChildOne;
