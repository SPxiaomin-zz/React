import React, { Component } from 'react';
import TestClickComponent from './components/TestClickComponent';
import TestInputComponent from './components/TestInputComponent';

class App extends Component {
  render() {
    return (
      <div>
        <TestClickComponent />
        <TestInputComponent />
      </div>
    );
  }
}

export default App;
