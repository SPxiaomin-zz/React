import React, { Component } from 'react';

class AppChildOne extends Component {
    render() {
        return (
            <p>
                The curItem is: {this.context.curItem}
            </p>
        );
    }
}

AppChildOne.contextTypes = {
    curItem: React.PropTypes.any
};

export default AppChildOne;
