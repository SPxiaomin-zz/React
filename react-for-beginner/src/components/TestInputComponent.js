import React, { Component } from 'react';

class TestInputComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputContent: ''
        };
    }

    handleChange(event) {
        this.setState({
            inputContent: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text" onChange={event => this.handleChange(event)}/><span>{this.state.inputContent}</span>
            </div>
        );
    }
}

export default TestInputComponent;
