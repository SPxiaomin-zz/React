import React, { Component, createElement } from 'react';

import getDisplayName from '../getDisplayName';

export default (WrappedComponent) => {
  return class HOC extends Component {
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`;

    render() {
      const newProps = {
        id: '12345'
      };

      return <WrappedComponent {...this.props} {...newProps} />
      // return createElement(WrappedComponent, {
      //   ...this.props,
      //   ...newProps,
      // });
    }
  };
}
