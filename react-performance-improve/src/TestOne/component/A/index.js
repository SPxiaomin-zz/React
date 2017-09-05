import React, { Component } from 'react';

class A extends Component {
  constructor(props) {
    super(props);

    console.log('A is created.');
  }

  componentDidMount() {
    console.log('A componentDidMount.');
  }

  componentDidUpdate() {
    console.log('A componentDidUpdate.');
  }

  componentWillUnmount() {
    console.log('A componentWillUnmount.');
  }

  render() {
    console.log('A render.');

    return (
      <div>
        A
        {this.props.children}
      </div>
    );
  }
}

export default A;
