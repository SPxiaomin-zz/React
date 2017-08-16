import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selection: props.values[0]
    };

    this.onKeyDown = this.onKeyDown.bind(this);
  }

  fireOnSelect() {
    if (typeof this.props.onSelect === 'function') {
      this.props.onSelect(this.state.selection);
    }
  }

  onSelect(value) {
    this.setState({
      selection: value
    });
    this.fireOnSelect();
  }

  onKeyDown(e) {
    const { values } = this.props;
    const idx = values.indexOf(this.state.selection);

    if (e.keyCode === 38 && idx > 0) {
      this.setState({
        selection: values[idx - 1]
      });
    } else if (e.keyCode === 40 && idx < values.length - 1) {
      this.setState({
        selection: values[idx - 1]
      });
    }

    this.fireOnSelect();
  }

  render() {
    return (
      <ul onKeyDown={this.onKeyDown} tabIndex={0}>
        {this.props.values.map(value => (
          <li
            className={value === this.state.selection ? 'selection' : ''}
            key={value}
            onClick={() => this.onSelect(value)}
          >
            {value}
          </li>
        ))}
      </ul>
    );
  }
}

export default App;
