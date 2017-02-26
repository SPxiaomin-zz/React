import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './App';
import TV from './TV';
import Show from './Show';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="tv" component={TV}>
                <IndexRoute component={ShowIndex} />
                <Route path="show/:id" component={Show} />
            </Route>
        </Route>
    </Router>,
    document.getElementById('root')
);

// ReactDOM.render(
//     <Router>
//         <Route path="/" co
//     </Router>,
//     document.getElementById('root')
// );
