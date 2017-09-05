import React, { Component } from 'react';

class C extends Component {
  constructor(props) {
    super(props);

    console.log('C is created.');
  }

  componentDidMount() {
    console.log('C componentDidMount.');
  }

  componentDidUpdate() {
    console.log('C componentDidUpdate.');
  }

  componentWillUnmount() {
    console.log('C componentWillUnmount.');
  }

  render() {
    console.log('C render.');

    return (
      <div>C</div>
    );
  }
}

export default C;
