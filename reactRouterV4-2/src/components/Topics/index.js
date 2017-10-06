import React from 'react';
import {
  Route,
  Link,
} from 'react-router-dom';

import Topic from '../Topic';

export default ({ match }) => {
  console.log(match);

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li><Link to={`${match.url}/topic-one`}>Topic one</Link></li>
        <li><Link to={`${match.url}/topic-two`}>Topic one</Link></li>
      </ul>

      <Route path={`${match.url}/:topicId`} component={Topic} />
      <Route exact path={match.url} render={() => (
          <h3>Please select a topic!</h3>
      )} />
    </div>
  );
};
