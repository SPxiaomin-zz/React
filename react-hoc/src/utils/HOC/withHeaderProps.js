import React, { Component } from 'react';

import getDisplayName from '../getDisplayName';

export default (WrappedComponent, title = '默认标题') => {
  class HOC extends Component {
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`;

    render() {
      return (
        <fieldset>
          <legend>{title}</legend>
          <WrappedComponent {...this.props} />
        </fieldset>
      );
    }
  }

  return HOC;
};
