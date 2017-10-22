// const config = require('./config.json');
//
// module.exports = function() {
//   let greet = document.createElement('div');
//   greet.textContent= config.greetText;
//   return greet;
// };

import React, { Component } from 'react';

import config from './config.json';

export default class Greeter extends Component {
  render() {
    return (
      <div>
        {config.greetText}
      </div>
    );
  }
}
