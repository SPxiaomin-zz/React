import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import {
  Route,
  Link,
} from 'react-router-dom';

import Foo from './components/Foo';
import Bar from './components/Bar';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Route path='/foo' component={Foo} />
//         <Route path='/bar' component={Bar} />
//       </div>
//     );
//   }
// }

const App = function() {
  return (
      <div>
        <Link to='/foo'>Foo</Link>
        <br />
        <Link to='/bar'>Bar</Link>

        <hr />

        <Route path='/foo' component={Foo} />
        <Route path='/bar' component={Bar} />
      </div>
  );
};

export default App;
