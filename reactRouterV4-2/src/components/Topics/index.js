import React from 'react';
import {
  Route,
  Link,
} from 'react-router-dom';

import Topic from '../Topic';

export default () => {
  return (
    <div>
      <ul>
        <li></li>
      </ul>

      <Route path={} component={Topic} />
      <Route path={} component={Topic} />
      <Route path={} render={() => {
        return ();
      }} />
    </div>
  );
};
