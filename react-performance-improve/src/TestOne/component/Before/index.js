import React, { Component } from 'react';

class Before extends Component {
  componentDidUpdate() {
    console.log('before componentDidUpdate.');
  }

  render() {
    return (
      <div className='before'></div>
    );
  }
}

export default Before;
