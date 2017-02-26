import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router';
import App from './App';
import TV from './TV';
import Show from './Show';
import Home from './Home';
import ShowIndex from './ShowIndex';

function handleEnter() {
    console.log('进入');
}

function handleLeave() {
    console.log('离开');
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="tv" component={TV}>
                <IndexRoute component={ShowIndex} />
                <Route path="/show/:id" component={Show}
                onEnter={handleEnter}
                onLeave={handleLeave} />
                <Redirect from="show/:id" to="/show/:id" />
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
