import React, { Component } from 'react';

import getDisplayName from '../getDisplayName';

export default (WrappedComponent) => {
  return class HOC extends WrappedComponent {
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`;

    componentDidMount() {
      this.setState({
        innerText: '我被Inheritance修改了值'
      });
    }

    render() {
      // return (
      //   {
      //     super.render();
      //   }
      // );

      return super.render();
    }
  };
};
