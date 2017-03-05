import React, { Component } from 'react';

class AppChildTwo extends Component {
    onClickItem(item) {
        this.props.changeItem(item);
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickItem.bind(this, 'item1')}>item1</button>
                <button onClick={this.onClickItem.bind(this, 'item2')}>item2</button>
            </div>
        );
    }
}

export default AppChildTwo;
