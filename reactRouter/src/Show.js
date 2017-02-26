import React, { Component } from 'react';

class Show extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Show {this.props.params.id}
            </div>
        );
    }
}

export default Show;
