import React, { Component, PureComponent } from 'react';
// import logo from './logo.svg';
// import './App.css';

import Immutable from 'immutable';

import Perf from 'react-addons-perf';

let words = null;

class SubApp extends Component {
  render() {
    // console.log(this.props.words);
    console.log(this.props.words === words);
    return (
      <div>{this.props.words.join(',')}</div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      words: Immutable.List(['gujunmin']),
    };

    words = this.state.words;

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    // this.setState((prevState) => {
    //   prevState.words.push('boy');
    //
    //   return {
    //     words: prevState.words,
    //   };
    // });

    this.setState((prevState) => ({
      // words: prevState.words.concat('boy'),
      // words: [...prevState.words, 'boy'],
      words: prevState.words.push('boy'),
    }));
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.color !== this.props.color) {
  //     return true;
  //   }
  //
  //   return nextState.count !== this.state.count;
  // }

  render() {
    return (
      <div>
        <button color={this.props.color} onClick={this.clickHandler}>
          {/* Count: {this.state.count} */}
          hahaha
        </button>
        <SubApp words={this.state.words} />
      </div>
    );
  }
}

App.defaultProps = {
  color: 'blue',
};

export default App;
