import React, { Component } from 'react';

import withHeader from '../../utils/HOC/withHeader';

class Demo extends Component {
  render() {
    return (
      <div>
        我是一个普通组件
      </div>
    );
  }
}

export default withHeader(Demo);
