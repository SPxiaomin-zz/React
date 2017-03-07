import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <h1>{this.props.title}</h1>
        );
    }
}

App.propTypes = {
    title: React.PropTypes.string.isRequired
};

App.defaultProps = {
    title: 'Hello World'
};

export default App;
