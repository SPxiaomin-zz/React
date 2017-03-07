import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery';

ReactDOM.render(
    <App
        promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')}
    />,
    document.getElementById('root')
);
