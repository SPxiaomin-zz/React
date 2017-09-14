import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import Demo from './components/Demo';

import withHeader from './utils/HOC/withHeader';
import withHeaderProps from './utils/HOC/withHeaderProps';
import withHeaderPropsCurry from './utils/HOC/withHeaderPropsCurry';

import generateId from './utils/HOC/generateId';
import enhancer from './utils/HOC/enhancer';

class App extends Component {
  render() {
    // const WithHeaderDemo = withHeader(Demo);
    // const WithHeaderPropsDemo = withHeaderProps(Demo, '高阶组件添加标题');
    // const WithHeaderPropsCurryDemo = withHeaderPropsCurry('高阶组件添加标题')(Demo);
    // const GenerateIdDemo = generateId(Demo);
    const EnhancerDemo = enhancer(Demo);

    return (
      <div>
        {/* <WithHeaderDemo /> */}
        {/* <WithHeaderPropsDemo /> */}
        {/* <WithHeaderPropsCurryDemo /> */}
        {/* <GenerateIdDemo /> */}
        <EnhancerDemo />
      </div>
    );
  }
}

export default App;
