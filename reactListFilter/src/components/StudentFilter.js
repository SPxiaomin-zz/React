import React, { Component } from 'react';

class StudentFilter extends Component {
    handleChange(event) {
        this.props.updateSearch(event.target.value);
    }

    render() {
        return (
            <input type='text' placeholder='Find a student' onChange={event => this.handleChange(event)} />
        );
    }
}

export default StudentFilter;
