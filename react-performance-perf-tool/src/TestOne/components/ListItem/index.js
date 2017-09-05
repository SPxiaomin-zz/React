import React, { Component } from 'react';

class ListItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.text === this.props.text) {
      return false;
    }

    return true;
  }

  render() {
    return (
      <li>{this.props.text}</li>
    );
  }
}

export default ListItem;
