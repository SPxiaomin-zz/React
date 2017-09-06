import React, { Component } from 'react';

class B extends Component {
  constructor(props) {
    super(props);

    console.log('B is created');
  }

  componentDidMount() {
    console.log('B componentDidMount.');
  }

  componentDidUpdate() {
    console.log('B componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('B componentWillUnmount');
  }

  render() {
    console.log('B render');

    return (
      <div>
        B
        {this.props.children}
      </div>
    );
  }
}

export default B;
