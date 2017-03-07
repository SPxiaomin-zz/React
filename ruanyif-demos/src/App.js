import React, { Component } from 'react';

class App extends Component {
    render() {
        let arr = [
            <h1>Hello world!</h1>,
            <h2>React is awesome</h2>
        ];

        return (
            <div>{arr}</div>
        );
    }
}

export default App;
