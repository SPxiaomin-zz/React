import React, { Component } from 'react';

import getDisplayName from '../getDisplayName';

export default (WrappedComponent) => {
  return class HOC extends Component {
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`;

    render() {
      return (
        <div>
          <fieldset>
            <legend>默认的标题</legend>
            <WrappedComponent {...this.props} />
          </fieldset>
        </div>
      );
    }
  };
}
