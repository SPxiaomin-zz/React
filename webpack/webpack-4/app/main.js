// const greeter = require('./Greeter');
// document.querySelector('#root').appendChild(greeter());

import React from 'react';
import ReactDOM from 'react-dom';

import Greeter from './Greeter';

ReactDOM.render(
  <Greeter />,
  document.querySelector('#root')
);
