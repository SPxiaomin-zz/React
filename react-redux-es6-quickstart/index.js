import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import myApp from './reducers';
import App from './components/App';

let store = createStore(myApp);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// ReactDOM.render(
//     <Test />,
//     document.getElementById('root')
// );
