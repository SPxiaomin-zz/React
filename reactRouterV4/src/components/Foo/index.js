import React from 'react';
import {
  Route,
  Link,
} from 'react-router-dom';

import FooChildFirst from '../FooChildFirst';
import FooChildSecond from '../FooChildSecond';

export default ({ match }) => {
  return (
    <div>
      Hello, Foo!
      <br />
      <Link to='/foo/child-first'>FooChildFirst</Link>
      <br />
      <Link to='/foo/child-second'>FooChildSecond</Link>
      <hr />
      <Route path={`${match.url}/child-first`} component={FooChildFirst} />
      <Route path={`${match.url}/child-second`} component={FooChildSecond} />
    </div>
  );
};
