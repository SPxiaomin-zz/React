import React, { Component } from 'react';

class AppChildOne extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.list.map((item) => {
                        return <li onClick={this.props.changeItem.bind(this, item)}>I am {item}, click me!</li>
                    })
                }
            </ul>
        );
    }
}

export default AppChildOne;
