import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App source="https://api.github.com/users/octocat/gists"/>,
  document.getElementById('root')
);
