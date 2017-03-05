import React, { Component } from 'react';

class AppChildOne extends Component {
    render() {
        let selectedStyle = {
            color: '#fff',
            background: 'red'
        };

        return (
            <ul>
                {
                    this.props.list.map((item) => {
                        return (
                            <li style={item === this.props.curItem ? selectedStyle : {}}>I am {item}!</li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default AppChildOne;
