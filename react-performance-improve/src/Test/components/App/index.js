import React, { Component } from 'react';

class SubApp extends Component {
  componentWillReceiveProps() {
    console.log('SubApp enter componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('SubApp enter shouldComponentUpdate');
  }

  render() {
    return (
      <div>SubApp</div>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    console.log('App enter render');

    return (
      <div>
        <SubApp />
        <button onClick={this.onClickHandler}></button>
      </div>
    );
  }
}
