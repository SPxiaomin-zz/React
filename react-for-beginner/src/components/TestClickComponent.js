import React, { Component } from 'react';

class TestClickComponent extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(event) {
        let tipE = this.refs.tip;

        if (tipE.style.display == 'none') {
            tipE.style.display = 'inline';
        } else {
            tipE.style.display = 'none';
        }
    }

    render() {
        return (
            <div>
                <button onClick={event => this.handleClick(event)}>显示|隐藏</button><span ref="tip">测试点击</span>
            </div>
        );
    }
}

export default TestClickComponent;
